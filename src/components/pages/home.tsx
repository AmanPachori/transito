import React from 'react'
import "../../App.css";
const Home: React.FC = () => {
  return (
    <div className='p-5 home'>
      <div className='container-fluid'>
        <nav className='navbar d-flex justify-content-between'>
          <div>
            <h3 className='fs-3'>Transito</h3>
          </div>
          <div>
            <button onClick={()=>{window.location.href="http://localhost:3000/signin"}} className='fs-6 fw-bold btn btn-outline-light'>Signin</button>
          </div>

        </nav>
        <div className='home row'>
          <div className=" p-5 fade-in-up d-flex flex-column justify-content-center h-100">
            <h1 className=' fw-bolder'>Transito</h1>
            <p className='fw-bold fs-2'> Allow users to track their transaction history on Ethereum Blockchain. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home