import { useState, useEffect } from "react"
import { BucketProvider, useBucket } from "./Contexts/index"
import BucketItems from "./Components/BucketItems";

function App() {
  const { items } = useBucket()
 
  

  return (
    
      <>
        <div className=" grid md:grid-cols-5 gap-6 items-center justify-center py-24 px-8">
        {
          items.map((item) => (
            <div className=" flex  justify-center items-center" key={item.id}>
              <BucketItems item={item} />
            </div>
          )
          )
        }
        </div>
      </>
    
  )
}

export default App
