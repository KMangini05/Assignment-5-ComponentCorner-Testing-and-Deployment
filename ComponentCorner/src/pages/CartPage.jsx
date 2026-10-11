import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
    return (
        <div>
            <h1>Shopping Cart</h1>

            {products.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                products.map((product) => (
                    <CartItem
                        key={product.id}
                        product={product}
                        removeFromCart={removeFromCart}
                    />
                ))
            )}
        </div>
    );
}

export default CartPage;