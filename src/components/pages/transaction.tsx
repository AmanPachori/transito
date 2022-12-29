import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Sidenav from "../layouts/sidenav";
import TransactionCard from "../layouts/transactionCard";
import axios from "axios";


const url = "http://localhost:8000/user";
const id = localStorage.getItem("id");
const token = localStorage.getItem("jwt");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const Transaction: React.FC = () => {
  const [trans,setTrans] = useState<any[]>([]);
  const [loading,setLoad] = useState(false)

  useEffect(() => {
    axios.get(`${url}/detail/`, config).then((res) => {
      setTrans(res.data.transaction);
      setLoad(true)
    });
  }, []);

  if(loading&&token)
  {
    return (
      <div className="Transaction p-2">
        <div className="container-fluid h-100 mw-100">
          <div className="row h-100">
            <div className="col-lg-3 col-sm-11">
              <Sidenav />
            </div>
            <div className="col-lg-9 h-100 col-sm-12 col-md-12 py-2">
              <div className="row h-100">
                <div className="col-11 p-2 px-5 container justify-content-center">
                  <h3 className="">Transaction Details</h3>
                  <div className="Category mx-2 p-5 d-flex justify-content-center">
                    <div className=" mx-1 p-1 d-flex justify-content-center">
                      <button className="m-1 border-0 p-1 btn  btn-outline-dark">
                        External
                      </button>
                      <button className="m-1 border-0 p-1  btn  btn-outline-dark">
                        Internal
                      </button>
                      <button className="m-1 border-0 p-1 btn  btn-outline-dark">
                        ERC20
                      </button>
                      <button className="m-1 border-0 p-1 btn  btn-outline-dark">
                        ERC1155
                      </button>
                      <button className="m-1 border-0 p-1 btn  btn-outline-dark">
                        ERC721
                      </button>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                    {
                      trans.map((e)=>{
                        return(
                          <TransactionCard
                      blockNumber={e.blockNum}
                      Hash={e.hash}
                      value={e.value}
                      category={e.category}
                    />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="loader d-flex align-items-center justify-content-center">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
};

export default Transaction;
