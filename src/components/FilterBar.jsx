import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Handle Add to Cart action logging name to console
  const handleAddToCart = (productName) => {
    console.log(productName);
  };

  // Extract unique categories for filter dropdown
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products by search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort filtered products based on user selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="product-page">
      {/* Search Bar & Filter/Sort Controls */}
      <div className="controls-wrapper">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search products by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-sort-container">
          <select 
            className="filter-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="productCardContainer">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          ))
        ) : (
          <p className="no-products">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;