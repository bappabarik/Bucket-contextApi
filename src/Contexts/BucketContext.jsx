import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

export const BucketContext = createContext({
    items: [
        {   
            image: "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Orange",
            details: "lorem ipsm jyosm",
            price: 9,
            quantity: 1,
            id: 1
        },

        {   
            image: "https://images.pexels.com/photos/2895712/pexels-photo-2895712.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Mango",
            details: "lorem ipsm jyosm",
            price: 10,
            quantity: 1,
            id: 2
        },

        {   
            image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Banana",
            details: "lorem ipsm jyosm",
            price: 3,
            quantity: 1,
            id: 3
        },

        {   
            image: "https://images.pexels.com/photos/4018828/pexels-photo-4018828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Strawberry",
            details: "lorem ipsm jyosm",
            price: 22,
            quantity: 1,
            id: 4
        },

        {   
            image: "https://images.pexels.com/photos/17856915/pexels-photo-17856915/free-photo-of-abundance-of-pomegranates.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Pomegranate",
            details: "lorem ipsm jyosm",
            price: 19,
            quantity: 1,
            id: 5
        },

        {   
            image: "https://images.pexels.com/photos/162709/apple-red-fruit-fruits-162709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Apple",
            details: "lorem ipsm jyosm",
            price: 10,
            quantity: 1,
            id: 6
        },

        {   
            image: "https://images.pexels.com/photos/15392176/pexels-photo-15392176/free-photo-of-pineapples-lying-on-ground-in-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "pineapple",
            details: "lorem ipsm jyosm",
            price: 10,
            quantity: 1,
            id: 7
        },

        {   
            image: "https://images.pexels.com/photos/6102655/pexels-photo-6102655.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Avocado",
            details: "lorem ipsm jyosm",
            price: 40,
            quantity: 1,
            id: 8
        },

        {   
            image: "https://images.pexels.com/photos/5945705/pexels-photo-5945705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Kiwi",
            details: "lorem ipsm jyosm",
            price: 15,
            quantity: 1,
            id: 9
        },

        {   
            image: "https://images.pexels.com/photos/5945763/pexels-photo-5945763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Dragon fruit ",
            details: "lorem ipsm jyosm",
            price: 30,
            quantity: 1,
            id: 10
        },

        {   
            image: "https://images.pexels.com/photos/5945734/pexels-photo-5945734.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Papaya",
            details: "lorem ipsm jyosm",
            price: 6,
            quantity: 1,
            id: 11
        },

        {   
            image: "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Grapes",
            details: "lorem ipsm jyosm",
            price: 10,
            quantity: 1,
            id: 12
        },

        {   
            image: "https://images.pexels.com/photos/9708957/pexels-photo-9708957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Guava",
            details: "lorem ipsm jyosm",
            price: 5,
            quantity: 1,
            id: 13
        },

        {   
            image: "https://images.pexels.com/photos/162689/cherry-pair-fruits-sweet-162689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Cherry",
            details: "lorem ipsm jyosm",
            price: 15,
            quantity: 1,
            id: 14
        },

        {   
            image: "https://images.pexels.com/photos/3609872/pexels-photo-3609872.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Watermelon",
            details: "lorem ipsm jyosm",
            price: 10,
            quantity: 1,
            id: 15
        },
    ]
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