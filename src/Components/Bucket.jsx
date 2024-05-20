import React from 'react';
import { useState, useEffect } from 'react';
import { useBucket } from '../Contexts';

const Bucket = ({ Item }) => {
    const { removeItem, bucketItem, setTotalBill, setBucketItem } = useBucket()
  const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        const total = bucketItem.reduce((a,b) => a += b.price*b.qnty, 0)
        setTotalBill(total)
      }, [bucketItem, setBucketItem, quantity, removeItem]);
    
      const increaseQnty = (item) => {
        setQuantity(quantity + 1)
        item.qnty = quantity + 1
      }
      const decreaseQnty = (item) => {
        setQuantity(quantity > 1 ? quantity - 1 : quantity)
        item.qnty = quantity - 1
      }
    return (
        <div className=' grid bg-orange-400 p-4 text-white gap-2'>
            <h2 className=' font-bold'>{Item.name}</h2>
            <span> {Item.details} </span>
            <span> ${Item.price} </span>
            <span> Qnty: <span className=' cursor-pointer p-[5px] pt-[1px] text-center bg-white text-black rounded-lg' onClick={() => decreaseQnty(Item)}>{"<"}</span> {quantity} <span className=' cursor-pointer p-[5px] pt-[1px] text-center bg-white text-black rounded-lg' onClick={() => increaseQnty(Item)}>{">"}</span></span>
            <button className=' bg-green-700 p-1 rounded-md' onClick={() => removeItem(Item.id)}>remove</button>
        </div>
    );
}

export default Bucket;
