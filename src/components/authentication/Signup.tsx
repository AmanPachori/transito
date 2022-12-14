import React ,{useState} from 'react'
import {Container,Card,Button,Row,Col, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../../App.css'



const url = 'http://localhost:8000/user/register';

const Signup : React.FC = () => {
  const [email,setEmail] = useState<string>();
  const [username,setUsername] = useState<string>();
  const [password,setPassword] = useState<string>();
  
  const submit = (e:any) =>{
    e.preventDefault();
    if(!email&&!password&&!username)
    {
      alert('Please fill all the fields below');
    }
    else{
      axios.post(url,{
        username,
        email,
        password
      })
      .then((res) => {
        localStorage.setItem("jwt",res.data.token);
        localStorage.setItem("id",res.data._id);
        if(!res.data.token){
          alert("Please Login again");

        }
        else{
          window.location.href = 'http://localhost:3000/profile';
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
  
  return (
    <div className='auth d-flex p-5 justify-content-center align-item-center' >
       <Container className='Signup shadow-lg p-5  rounded'>
         <Row>
          <h3 className='text-center'>TRANSITO</h3>
          <Col className='Image d-flex flex-column align-items-center justify-content-center'>
           <img src='https://cdn.dribbble.com/users/1579322/screenshots/6587273/blue_boy_typing_nothought.gif' className=''></img>
          </Col>
          <Col className='p-2 my-2'>
          <div className='p-2 Card text-start'>
          <h2>Sign Up</h2>
          <form >
             <div className="mb-3">
                 <label htmlFor="Name"  className="form-label">Name</label>
                 <input type="text" value={username} name="username" onChange={(e)=>{setUsername(e.target.value)}} className="form-control" id="Name" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                 <input type="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
             </div>
             <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
              </div>
             <button type="submit" onClick={submit} className="btn btn-primary my-2">Sign Up</button>
             <br/>
             <Link className="p-2 Link" to='/signin'>Already have an account ? Sign In</Link>
</form>
         </div>          
          </Col>
         </Row>
       </Container>
    </div>
  )
}

export default Signup