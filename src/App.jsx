import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const unusedVariable = 123; // ❌ هيكسر lint

  useEffect(() => {
    fetch("http://localhost:5168/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;