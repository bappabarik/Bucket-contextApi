import { useState, useEffect } from "react"
import { BucketProvider, useBucket } from "./Contexts/index"
import BucketItems from "./Components/BucketItems";
import Bucket from "./Components/Bucket";

function App() {
  const { items } = useBucket()
  const [bucketItem, setBucketItem] = useState([])
  const [totalBill, setTotalBill] = useState(0);



  const addToBucket = (item) => {
    const itemExist = bucketItem.find((Itm) => Itm.id === item.id)
    if (itemExist) {
      return alert("Already added")
    }
    setBucketItem((prev) => [item, ...prev])
  }

  const removeItem = (id) => {
    if(bucketItem){
    setBucketItem((prev) => prev.filter((prevItem) => prevItem.id !== id))
    }
  }

  useEffect(() => {
    const total = bucketItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalBill(total);
  }, [bucketItem]);


  

  return (
    <BucketProvider value={{items, addToBucket, removeItem, bucketItem, setBucketItem} } > 
      <div className=" flex justify-evenly">
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
        <div className="  items-center justify-center p-4 border-l-2 border-black">
          <h1 className="text-2xl font-bold">My Bucket</h1>
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

      </div>
    </BucketProvider>
  )
}

export default App
