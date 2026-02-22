const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <p className="category">{product.category}</p>
    </div>
  );
};

export default ProductCard;
