import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Sidenav from '../layouts/sidenav'
import TransactionCard from '../layouts/transactionCard';
const Transaction: React.FC = () => {
  return (
    <div className='Transaction p-2'>
      <div className="container-fluid h-100 mw-100">
      <div className="row h-100">
        <Sidenav/>
        <div className="col-lg-9 h-100 col-sm-12 col-md-12 py-2">
            <div className="row h-100">
                <div className="col-12 p-2 justify-content-center">
                    <h3 className="">Transaction Details</h3>
                    <div className='Category m-2 p-5 d-flex justify-content-center'>
                      <div className=' p-1 d-flex justify-content-center'>
                        <button className="m-2 border-0 p-2 btn  btn-outline-dark">External</button>
                        <button className="m-2 border-0 p-2  btn  btn-outline-dark">Internal</button>
                        <button className="m-2 border-0 p-2 btn  btn-outline-dark">ERC20</button>
                        <button className="m-2 border-0 p-2 btn  btn-outline-dark">ERC1155</button>
                        <button className="m-2 border-0 p-2 btn  btn-outline-dark">ERC721</button>
                      </div>
                    </div>
                    <div className='row d-flex justify-content-center '>
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                        <TransactionCard blockNumber='0xb7389b' Hash='0xfde2a5157eda40b90514751f74e3c7314f452a41890b19a342ee147f5336dfd6' value='0.245' category='external'  />
                   
                    </div>
                </div>
            </div>
            
        </div>
    </div>
      </div>
    </div>
  )
}

export default Transaction