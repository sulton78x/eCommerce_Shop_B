import Link from 'next/link'
import { useSelector } from 'react-redux'
import { ShoppingCart } from 'react-feather'

const Navbar = () => {

    // Selecting cart from global state.
    const cart = useSelector((state) => state.cart)

    // Getting the count of items
    const getItemsCount = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }

    return (
        <nav className='border-b-2 border-black py-4'>
            {/* Logo */}
            {/* Search Bar */}
            {/* Links */}
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/shop'><a>Shop</a></Link>
                </li>
                <li>
                    <Link href='/cart'><a>Cart</a></Link>
                </li>
            </ul>
            
            {/* Cart with items Count */}
            <div>
                <ShoppingCart />
                <span>{getItemsCount()}</span>
            </div>
            {/* Sign Up / Login Button */}
        </nav>
    )
}

export default Navbar
