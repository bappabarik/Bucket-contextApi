import React from 'react';
import { useBucket } from '../Contexts';

const BucketItems = ({item}) => {
    const { addToBucket } = useBucket()
    return (
        <div className=' flex flex-col bg-orange-400 p-4 text-white gap-2'>
            <h2 className=' font-bold'>{item.name}</h2>
            <span> {item.details} </span>
            <span> ${item.price} </span>
            <button className=' bg-green-700 p-1 rounded-md' onClick={() => addToBucket(item)}>Add to bucket</button>
        </div>
    );
}

export default BucketItems;
