import './ProductCard.css';

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;