import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Sidenav from "../layouts/sidenav";
import axios from 'axios'

const Profile: React.FC = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState<string>();
  const [file, setfile] = useState<string>();
  const [username, setUsername] = useState<string >() ;
  const [address, setAddress] = useState<string>();
  const [image, setImage] = useState<string>();
  const url = 'http://localhost:8000/user'
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('jwt');
  const config = {
    headers:{
      "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`,
    }
  };
  useEffect(() => {
     axios.get(`${url}/view/${id}`,config)
     .then((res)=>{
      setImage(res.data.data.image);
      setAddress(res.data.data.address);
      setUsername(res.data.data.username);
      setEmail(res.data.data.email)
     })
     .catch((error) => {console.log(error)})
  },[])


  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  function encodeImageFileAsURL(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (!target.files?.length) {
      return;
    }
    const file = target?.files[0];
    var reader: any = new FileReader();
    reader.onloadend = function () {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    return reader.result;
  }

  const submit = (e:any) => {
    e.preventDefault();
    if (address == 'Please Update your address') alert("Please enter the address");
    else {
      axios.put(`${url}/update/${id}`, {
        username,
        address,
        image
      },config)
      .then((res)=>{
        console.log(res);
        if(res.data.success == true)
        {
          handleClose();
          alert('User Profile updated');
          window.location.reload();
          
        }
        else
        {
          alert('Error in updating user profile Try agian later');
        }
      })
    }
  };

  return (
    <div className="p-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="w-100">
          <form>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={username}
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="form-control"
                id="Name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="text"
                value={address}
                name="address"
                onChange={(e) =>{
                  setAddress(e.target.value);
                }}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                value={file}
                id="formFile"
                onChange={(e) => {
                  encodeImageFileAsURL(e);
                }}
                className="form-control"
              />
            </div>
            <button
              type="submit"
              onClick={submit}
              className="btn btn-primary my-2"
            >
              Update
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <div className="container-fluid h-100 mw-100">
        <div className="row h-100">
          <Sidenav />
          <div className="profile col-lg-9 h-100 p-5 container col-sm-12 col-md-12 py-2">
            <h3 className="">Profile</h3>

            <div className="row details profileCard h-100 mx-2 my-5">
              <div className="btns" onClick={handleShow}>
                <h3>
                  <i className="bi bi-pencil-square"></i>
                </h3>
              </div>
              <div className="col-12 p-5 profileimage d-flex align-items-center justify-content-center">
                <img
                  src={image}
                  className=" img-fluid rounded-circle mx-auto"
                  alt="hugenerd"
                />
              </div>
              <div className="col-12 p-2 justify-content-center">
                {" "}
                <div className="d-flex justify-content-center">
                  <div className=" w-100 p-1 m-2">
                    <h3 className="fw-6 p-2">
                      Name:<span className="px-2">{username}</span>
                    </h3>
                    <h4 className="fw-6 p-2">
                      Email : <span className="px-2">{email}</span>
                    </h4>
                    <h4 className="fw-6 p-2">
                      Address : <span className="px-2">{address}</span>
                    </h4>
                    {/* <h4 className="fw-6 p-2">
                      Number of Transactions : <span className="px-2">80</span>
                    </h4> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
