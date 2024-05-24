import React from 'react';
import { useBucket } from '../Contexts';

const BucketItems = ({item}) => {
    const { addToBucket } = useBucket()
    return (
        <div className=' flex flex-col bg-gray-500 p-3 text-white gap-2 rounded-md drop-shadow-2xl '>
            <div className=""> <img src={item.image} alt="" width="250" height="250" /> </div>
            <h2 className=' font-bold'>{item.name}</h2>
            <span> {item.details} </span>
            <span> ${item.price} </span>
            <button className=' bg-slate-100 text-black p-1 rounded-md' onClick={() => addToBucket(item)}>Add to bucket</button>
        </div>
    );
}

export default BucketItems;
