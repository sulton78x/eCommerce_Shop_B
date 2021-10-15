import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cart.slice'
import Checkout from './Checkout'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <Image src={product.image} alt='' height={300} width={220} />
            <h4>{product.product}</h4>
            <h5>{product.category}</h5>
            <p>{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <div>
                <Checkout />
            </div>
        </div>
    )
}

export default ProductCard
