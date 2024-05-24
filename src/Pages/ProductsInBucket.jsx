import React from 'react';
import { useBucket } from '../Contexts';
import Bucket from '../Components/Bucket';

const ProductsInBucket = () => {
    const { bucketItem, totalBill } = useBucket()
    return (
        <>
            <div className="  items-center justify-center p-4 border-l-2 border-black h-screen">
          <div className=" grid grid-cols-3">
          {
            bucketItem && bucketItem.map((item) => (
              <div className="m-2 flex w-full justify-start items-center" key={item.id}>
                <Bucket Item={item} />
              </div>
          ))           
          }  
          </div>
          <div className=" w-full text-center font-bold my-5">
            Total Bill - ${totalBill}
          </div>    
        </div>
        </>
    );
}

export default ProductsInBucket;
