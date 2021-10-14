import ProductCard from "../components/ProductCard";
import { getProducts } from './api/products/index'

const ShopPage = ({ products }) => {
    return (
        <div>
            <h2>All Results</h2>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ShopPage

export async function getStaticProps() {
    const products = await getProducts()
    return {
        props: {
            products
        }
    }
}
