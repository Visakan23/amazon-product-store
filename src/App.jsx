import React, { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Amazon Product Store</h1>
    </header>
  );
}

function ProductCard({ name, price, quantity, color, city }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Selected Color: {color}</p>
      <p>Delivery City: {city}</p>
      <p>Quantity: {quantity}</p>
      <h3>Total: ₹{quantity * price}</h3>

      {quantity === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <p className="success">Product added to cart</p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Amazon Product Store</p>
    </footer>
  );
}

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main>
        <h2>Product Details</h2>

        <label>Select Color: </label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>

        <br /><br />

        <label>Delivery City: </label>
        <input
          type="text"
          value={deliveryCity}
          onChange={(e) => setDeliveryCity(e.target.value)}
        />

        <br /><br />

        <button onClick={() => setQuantity(quantity + 1)}>
          Add to Cart
        </button>

        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={() => setQuantity(0)}>
          Reset Cart
        </button>

        <br /><br />

        <button onClick={() => setShowProduct(!showProduct)}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            name={productName}
            price={price}
            quantity={quantity}
            color={selectedColor}
            city={deliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;