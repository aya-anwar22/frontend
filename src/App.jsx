import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5168/products")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
        }, 1000); // fake delay عشان نشوف ال flow
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;