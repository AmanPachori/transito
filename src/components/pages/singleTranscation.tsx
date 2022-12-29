import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import Sidenav from '../layouts/sidenav';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const url = "http://localhost:8000/user";
const id = localStorage.getItem("id");
const token = localStorage.getItem("jwt");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

type Object = {
blockNum : string,
hash : string,
to:string,
from:string,
category:string,
erc721TokenId :string,
erc1155Metadata :string,
tokenId: string,
asset : string,
}

const SingleTranscation : React.FC = () => {
  const [trans,setTrans] = useState<any[]>([]);
  const [data,setData] = useState<Object>();
  const [loading,setLoad] = useState(false)
  const { id } = useParams();
  useEffect(() => {
   const load = () =>{
    axios.get(`${url}/detail/`, config).then((res) => {
      res.data.transaction.map((e:any)=>{
        if(e.blockNum===id)
        {
          setData(e);
          setLoad(true)
        }
      })
    });
   }

   load();

  }, []);
  if(loading&&token)
  {
    return (
      <div className="Transaction p-2 ">
        <div className="container-fluid h-100 mw-100">
          <div className="row h-100">
          <div className='col-lg-3 col-sm-11'>
            <Sidenav />
          </div>
            <div className="col-lg-9  h-100 col-sm-10 col-md-12 py-2">
              <div className="row h-100">
                <div className="col-12 p-2 justify-content-center">
                  <h3 className="mx-5">Transaction Details</h3>
                  <div className="d-flex justify-content-center">
                    <div className="details container w-100 p-5 m-2 ">
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>Block Number</h3></div>
                        <div className="Value w-50"><h3>{data?.blockNum}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>Hash</h3></div>
                        <div className="Value w-50"><h3>{data?.hash}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>From</h3></div>
                        <div className="Value w-50"><h3>{data?.from}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>To </h3></div>
                        <div className="Value w-50"><h3>{data?.to}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>erc721TokenId</h3></div>
                        <div className="Value w-50"><h3>{data?.erc721TokenId? data?.erc721TokenId:"Null"}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>erc1155Metadata</h3></div>
                        <div className="Value w-50"><h3>{data?.erc1155Metadata? data?.erc1155Metadata:"Null"}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>Token ID</h3></div>
                        <div className="Value w-50"><h3>{data?.tokenId? data?.tokenId:"Null"}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>Asset</h3></div>
                        <div className="Value w-50"><h3>{data?.asset}</h3></div>
                      </div>
                      <div className='fw-6 p-2 d-flex'>
                        <div className="Head w-50"><h3>Category</h3></div>
                        <div className="Value w-50"><h3>{data?.category}</h3></div>
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
  
}

export default SingleTranscation;