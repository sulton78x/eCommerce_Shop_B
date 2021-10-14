import Link from 'next/link'

const Navbar = () => {
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
            {/* Sign Up / Login Button */}
        </nav>
    )
}

export default Navbar
