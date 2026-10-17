import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="cardContainer">
      <div className="productImgContainer">
        <img
          src={product.image}
          alt={product.name}
          className="productImg" 
        />
      </div>
      <div className="productInfo">
        <p className="productName">{product.name}</p>
        <p className="productCategory">Category: {product.category}</p>
        <div className="productPriceDiv">
          <p className="productRating">★ {product.rating}</p>
          <p className="productPrice">₹{product.price}</p>
        </div>
        <button 
          className="addToCartBtn" 
          onClick={() => onAddToCart(product.name)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;