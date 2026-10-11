import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
    return (
        <div>
            <h1>Our Products</h1>

            <div>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;