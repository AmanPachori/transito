import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import SingleTranscation from '../pages/singleTranscation';
import { Link } from 'react-router-dom';

interface prop {
  blockNumber : string;
  Hash : string;
  value : string;
  category: string;
}


const TransactionCard: React.FC<prop> = ({blockNumber,Hash,value,category}) => {
    return (
    <div className="card m-1" >
  <div className="card-body">
    <h5 className="card-title fw-6">Block Number : <span className=''>{blockNumber}</span></h5>
    <h5 className="card-title fw-6">Hash : <span className='fs-6 '>{Hash}</span></h5>
    <h5 className="card-title fw-6">Value : <span className='fs-6 '>{value}</span></h5>
    <h5 className="card-title fw-6">Category: <span className='fs-6'>{category}</span></h5>
    <Link className="p-2 Link" to={{
            pathname : `detail/${blockNumber}`
          }}>...Full details</Link>
  </div>
</div>
  )
}

export default TransactionCard