import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Sidenav from '../layouts/sidenav';

const Profile: React.FC = () => {
  return (
    <div className="profile p-2">
      <div className="container-fluid h-100 mw-100">
        <div className="row h-100">
          <Sidenav />
          <div className="col-lg-9 h-100 col-sm-12 col-md-12 py-2">
            <div className="row h-100">
              <div className="col-12 p-2 justify-content-center">
                <h3 className="">Profile</h3>
                <div className="d-flex justify-content-center">
                  <div className="details border w-100 p-5 m-2 rounded ">
                    <h3 className="fw-6 p-2">
                    <span className=""> Name: kjhujk</span>
                    </h3>
                    <h4 className="fw-6 p-2">
                      Email : <span className="">kjhujk</span>
                    </h4>
                    <h4 className="fw-6 p-2">
                      Address : <span className="">kjhujk</span>
                    </h4>
                    <h4 className="fw-6 p-2">
                      Number of Transactions : <span className="">kjhujk</span>
                    </h4>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile