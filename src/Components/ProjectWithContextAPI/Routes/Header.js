import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { store } from '../Context'

const Header = () => {
    const {cart} =useContext(store);
    console.log(cart);
    return (
        <div>
            <span className='header'>React Context API</span>
            <ul className='nav'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
