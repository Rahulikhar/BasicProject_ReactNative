import React, { createContext, useEffect, useState } from 'react'

export const StoreData = createContext()

export default function ManageData(props) {

    const [first, setfirst] = useState("Rahul")

    const data = {
        first: first,
        setfirst: prev => setfirst(prev)
    }
    return (
        <StoreData.Provider value={data}>{props.children}</StoreData.Provider>
    )
}




