import { createContext, useContext } from "react";

export const BucketContext = createContext({
    items: [
        {
            name: "Orange",
            details: "lorem ipsm jyosm",
            price: 40,
            qnty: 1,
            id: 1
        },

        {
            name: "Mango",
            details: "lorem ipsm jyosm",
            price: 30,
            qnty: 1,
            id: 2
        },

        {
            name: "Banana",
            details: "lorem ipsm jyosm",
            price: 20,
            qnty: 1,
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

export const BucketProvider = BucketContext.Provider