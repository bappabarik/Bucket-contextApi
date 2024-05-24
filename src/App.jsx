import { useState, useEffect } from "react"
import { BucketProvider, useBucket } from "./Contexts/index"
import BucketItems from "./Components/BucketItems";

function App() {
  const { items } = useBucket()
 
  

  return (
    
      <div className=" flex justify-evenly h-screen">
        <div className="">
        {
          items.map((item) => (
            <div className=" m-2 flex w-full justify-start items-center" key={item.id}>
              <BucketItems item={item} />
            </div>
          )
          )
        }
        </div>
      </div>
    
  )
}

export default App
