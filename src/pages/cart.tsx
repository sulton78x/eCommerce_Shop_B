import Image from 'next/image'
// Importing hooks from react-redux
import { useSelector, useDispatch } from 'react-redux'
// Importing actions from cart.slice.js
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cart.slice'

const CartPage = () => {

    // Extracting cart state from redux store
    const cart = useSelector((state) => state.cart)

    // Reference to the dispatch function from redux store.
    const dispatch = useDispatch()

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price, 0
        )
    }

    return (
        <div>
            {cart.length === 0 ? (
                <h2>Your Cart is Empty!</h2>
            ) : (
                <>
                <div>
                    <div>Image</div>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Actions</div>
                    <div>Total Price</div>
                </div>

                {cart.map((item) => (
                    <div>
                        <div>
                            <Image src={item.image} alt='' />
                        </div>
                        <p>{item.product}</p>
                        <p># {item.price}</p>
                        <p>{item.quantity}</p>
                        <div>
                            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>x</button>

                            <p># {item.quantity * item.price}</p>
                        </div>
                    </div>
                ))}

                <h3>Total Price: # {getTotalPrice()}</h3>
                </>
            )}
        </div>
    )
}

export default CartPage
