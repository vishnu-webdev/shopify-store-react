import React from "react";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/FilterBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;