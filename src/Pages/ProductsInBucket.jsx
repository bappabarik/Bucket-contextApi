import React from 'react';
import { useBucket } from '../Contexts';
import Bucket from '../Components/Bucket';

const ProductsInBucket = () => {
    const { bucketItem, totalBill } = useBucket()
    return (
        <>
            <div className=" flex flex-col items-center justify-evenly py-24 px-8">
          <div className="grid md:grid-cols-5 gap-6 items-center justify-center ">
          {
            bucketItem && bucketItem.map((item) => (
              <div className="flex  w-full justify-start items-center" key={item.id}>
                <Bucket Item={item} />
              </div>
          ))           
          }  
          </div>
          { 
            totalBill ? (<div className=" w-full text-center font-bold my-5 bg-slate-700 text-white p-4 rounded-md">
              Total Bill - ${totalBill}
            </div> ) : <h1 className=' text-2xl font-bold'>Bucket is Empty</h1>           
          }
        </div>
        </>
    );
}

export default ProductsInBucket;
