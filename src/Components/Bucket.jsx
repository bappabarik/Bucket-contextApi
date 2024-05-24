import React from 'react';
import { useBucket } from '../Contexts';

const Bucket = ({ Item }) => {
    const { removeItem, bucketItem, setBucketItem } = useBucket()
    
      const increaseQnty = (productIdToIncrease) =>{
        const newProductInCart = bucketItem.map((product)=> {
            if(product.id === productIdToIncrease.id){
                return {...product, quantity: product.quantity+1}
            }
            return product
        });
        setBucketItem(newProductInCart);
    }
      const decreaseQnty = (productIdToDecrease) => {
        if(productIdToDecrease.quantity === 1){
          return
        }
        const newProductInCart = bucketItem.map((product)=> {
          if(product.id === productIdToDecrease.id){
              return {...product, quantity: product.quantity-1}
          }
          return product
      });
      setBucketItem(newProductInCart);
      }
    return (
        <div className=' flex flex-col bg-slate-400 p-4 text-white gap-2 rounded-md drop-shadow-lg '>
            <div className="">
              <img src={Item.image} alt="" width="250" height="250" />
            </div>
            <h2 className=' font-bold'>{Item.name}</h2>
            <span> {Item.details} </span>
            <span> ${Item.price} </span>
            <span> Qnty: <span className=' cursor-pointer p-[5px] pt-[1px] text-center bg-white text-black rounded-lg' onClick={() => decreaseQnty(Item)}>{"<"}</span> {Item.quantity} <span className=' cursor-pointer p-[5px] pt-[1px] text-center bg-white text-black rounded-lg' onClick={() => increaseQnty(Item)}>{">"}</span></span>
            <button className=' bg-green-700 p-1 rounded-md' onClick={() => removeItem(Item.id)}>remove</button>
        </div>
    );
}

export default Bucket;
