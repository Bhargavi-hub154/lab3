import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.slice(0, 8).map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
