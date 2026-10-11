import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("componentcorner-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  useEffect(() => {
    try {
      localStorage.setItem("componentcorner-cart", JSON.stringify(cart));
    } catch (error) {
      console.warn("Could not save cart to localStorage:", error);
    }
  }, [cart]);

  return (
    <BrowserRouter>
      <div>
        <Header
          storeName="ComponentCorner"
          cartCount={cart.length}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                products={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer
            storeName="ComponentCorner"
            email="support@componentcorner.com"
            phone="(555) 123-4567"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;