import './Header.css'
import { Link } from "react-router-dom";

function Header({ storeName, cartCount }) {
    return (
        <header>
            <h1>{storeName}</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <Link to="/cart">
                    🛒 {cartCount}
                </Link>
            </nav>
        </header>
    );
}

export default Header;