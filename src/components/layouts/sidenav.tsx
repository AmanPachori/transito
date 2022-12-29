import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
const Sidenav :React.FC  = () => {

    const logout = () =>{
        localStorage.removeItem('jwt');
        localStorage.removeItem('id');
    }

  return (
    <div className="sidenav m-2 p-2 col-3 col-sm-12 col-xl-2 mx-sm-5 bg-dark d-flex sticky-top">
            <div className="sidenavcomponent flex-grow-1 px-3 p-2 text-white">
                <a href="/" className="d-flex heading align-items-start py-sm-2 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5">Transaction</span>
                </a>
                <ul className="nav w-100 nav-pills " id="menu">
                    <li className="nav-item">
                        {/* <a href="/" className="nav-link px-sm-0 px-2 mx-2">
                            <i className="fs-5 p-1 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                        </a> */}
                        <a href="/all" className="nav-link px-sm-0 px-2 mx-2">
                            <i className="fs-5 p-1 px-2 bi-card-text"></i><span className="ms-1 d-none d-sm-inline">All Transactions</span>
                        </a>
                        <a href="/profile" className="nav-link px-sm-0 px-2 mx-2">
                            <i className="fs-5 p-1 bi-person-badge"></i><span className="ms-1 d-none d-sm-inline">Profile</span>
                        </a>
                    </li>
                   
                </ul>
                <div className="dropdown py-sm-2 mt-sm-auto ms-auto my-1 align-items-end ms-sm-0 flex-shrink-1">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">Joe</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" onClick={logout} href="/">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Sidenav