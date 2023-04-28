import React, { useState, useEffect, useContext } from 'react'
import SingleProduct from './SubPages/SingleProduct'
import { store } from '../Context';

const Cart = () => {

    const [total, setTotal] = useState();
    const { cart } = useContext(store)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])

    return (
        <div>
            <span style={{ fontSize: 30 }}>Add Cart</span>
            <br />
            <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
            <div className='productContainer'>
                {cart.map((prod) => (
                    <SingleProduct prod={prod} />
                ))
                }
            </div>
        </div>
    )
}

export default Cart
