import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const BucketContext = createContext({
    items: [
        {
            name: "Orange",
            details: "lorem ipsm jyosm",
            price: 40,
            quantity: 1,
            id: 1
        },

        {
            name: "Mango",
            details: "lorem ipsm jyosm",
            price: 30,
            quantity: 1,
            id: 2
        },

        {
            name: "Banana",
            details: "lorem ipsm jyosm",
            price: 20,
            quantity: 1,
            id: 3
        }
    ],

    addToBucket: (item) => {},
    removeItem: (id) => {},
    increaseQnty: (item) => {},
    decreaseQnty: (item) => {}
})

export const useBucket = () => {
    return useContext(BucketContext)
}

export const BucketProvider = ({children}) => {
    const {items} = useBucket()
    const [bucketItem, setBucketItem] = useState([])
    const [totalBill, setTotalBill] = useState(0);
    const [totalItems, setTotalItems] = useState(0)
  
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
      setTotalItems(bucketItem.length)
      setTotalBill(total);
    }, [bucketItem]);
  
  
    return (
        <BucketContext.Provider  value={{items, addToBucket, removeItem, bucketItem, setBucketItem, totalBill, totalItems} } >
            {children}
        </BucketContext.Provider>
    )
} 