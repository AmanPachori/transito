import React from 'react'
import "../../App.css";
const Home: React.FC = () => {
  return (
    <div className='p-5 home'>
      <div className='container-fluid'>
        <div className='row border'>
          <div className="col-6 p-5 d-flex flex-column justify-content-center align-items-center">
           <img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/633859dd413e411e97f02180_ethereum-eth-logo-full-horizontal%201.svg" loading="lazy" alt="" className=" m-1 chain-badge_logo"/>
            <h1>Transito</h1>
          </div>
          <div className="col-6 p-5 svg">
          <img src="https://img.icons8.com/color/48/000000/ethereum.png" className='rotate-90 img-fluid first'/>  
          <img src="https://img.icons8.com/color/360/000000/ethereum.png" className='rotate-90 img-fluid second'/>  
          <img src="https://img.icons8.com/color/48/000000/ethereum.png" className='rotate-90 third'/>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home