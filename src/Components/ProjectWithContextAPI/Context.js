import React, { createContext, useState } from 'react'

const store = createContext();
const Context = (props) => {


    const[cart, setCart] = useState([]);
    return (
        <div>
            <store.Provider value={{cart, setCart}}>
                {props.children}
            </store.Provider>

        </div>
    )
}

export default Context
export {store}
