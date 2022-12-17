import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Sidenav from '../layouts/sidenav';

const Profile: React.FC = () => {
  const [show, setShow] = useState(false);
    const [email,setEmail] = useState<string>();
    const [file,setfile] = useState<string>();
  const [username,setUsername] = useState<string>();
  const [address,setAddress] = useState<string>();
  const [image,setImage] = useState<string>();
   const handleClose = () =>{
    setShow(false);
   }
   const handleShow = () => setShow(true);
  
   function encodeImageFileAsURL(e:React.ChangeEvent<HTMLInputElement> ) {
    const target= e.target as HTMLInputElement;
    if (!target.files?.length) {
      return;
      }
    const file = target?.files[0];
    var reader :any = new FileReader();
    reader.onloadend = function () {
       setImage(reader.result);
    };
    reader.readAsDataURL(file);
    return reader.result;
  } 

  const submit = () =>{
    if(!address)
    alert("Please enter the address");
    else{
      console.log(image + ": " + address+ ": " + username + ": " + email)
    }
  }


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
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="exampleInputEmail1"
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
                onChange={(e) => {
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
                type="file" value={file} id="formFile" onChange={(e)=>{encodeImageFileAsURL(e)}}
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
              <div className="col-12 p-5 d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  className=" img-fluid rounded-circle mx-auto"
                  alt="hugenerd"
                />
              </div>
              <div className="col-12 p-2 justify-content-center">
                {" "}
                <div className="d-flex justify-content-center">
                  <div className=" w-100 p-1 m-2">
                    <h3 className="fw-6 p-2">
                      Name:<span className=""> kjhujk</span>
                    </h3>
                    <h4 className="fw-6 p-2">
                      Email : <span className="">kjhujk</span>
                    </h4>
                    <h4 className="fw-6 p-2">
                      Address : <span className="">kjhujk</span>
                    </h4>
                    <h4 className="fw-6 p-2">
                      Number of Transactions : <span className="">80</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile