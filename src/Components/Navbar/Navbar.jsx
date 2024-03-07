

import './Navbar.css'
import logo from '../Assets/logo.png'   
import cartItem from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const {getTotalCartItems}=useContext(ShopContext)


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"/>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-ul'>
                <li><Link to={"/"} style={{ textDecoration: 'none' }} >Shop</Link></li>
                <li><Link to={"/men"} style={{ textDecoration: 'none' }}>Men</Link></li>
                <li><Link to={"/woman"} style={{ textDecoration: 'none' }}>Woman</Link></li>
                <li ><Link to={"/kids"} style={{ textDecoration: 'none' }}>Kids</Link></li>
            </ul>
            <div className="nav-login">
                <Link to={'/login'}><button className='btn btn-outline-dark'>Login</button></Link>
                <Link to={'/cart'}><img src={cartItem} alt="cart"/></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar
