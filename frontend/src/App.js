import { useState, useEffect } from "react";
function App() {
const [product, setProduct] = useState([]);
const [viewer1, setViewer1] = useState(false);
return (
  <div>
  <h1>Catalog of Products</h1>
  {/* <button onClick={() => getAllProducts()}>Show All products</button>
  <h1>Show all available Products.</h1>
  <hr></hr>
  {viewer1 && <div>Products {showAllItems}</div>}
  <hr></hr> */}
  </div>
  );
  } // App end
  export default App;