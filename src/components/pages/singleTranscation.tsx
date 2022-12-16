import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Sidenav from '../layouts/sidenav';

const SingleTranscation : React.FC = () => {
  return (
    <div className="Transaction p-2 ">
      <div className="container-fluid h-100 mw-100">
        <div className="row h-100">
        <div className='col-lg-3 col-sm-11'>
          <Sidenav />
        </div>
          <div className="col-lg-9 h-100 col-sm-10 col-md-10 py-2">
            <div className="row h-100">
              <div className="col-12 p-2 justify-content-center">
                <h3 className="">Transaction Details</h3>
                <div className="d-flex justify-content-center">
                  <div className="details container w-100 p-5 m-2 ">
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>Block Number</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>Hash</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>From</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>To </h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>erc721TokenId</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>erc1155Metadata</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>Token ID</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>Asset</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>
                    <div className='fw-6 p-2 d-flex'>
                      <div className="Head w-25"><h3>Category</h3></div>
                      <div className="Value w-75"><h3>kjhujk</h3></div>
                    </div>                    
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

export default SingleTranscation;