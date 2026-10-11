function CartItem({ product, removeFromCart }) {
    return (
        <div className="cart-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;