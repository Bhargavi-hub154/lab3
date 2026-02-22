import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import SkeletonCard from "./SkeletonCard";
import { fetchTracker } from "../utils/fetchTracker";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchInfo, setFetchInfo] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")
          .then(res => res.json());

        setProducts(response.products);
        setFetchInfo(fetchTracker());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Listing</h2>

      {fetchInfo && (
        <p className="fetch-info">
          Attempts: {fetchInfo.attempts} | Last Fetch: {fetchInfo.lastFetchTime}
        </p>
      )}

      {loading
        ? Array(6).fill().map((_, i) => <SkeletonCard key={i} />)
        : <ProductList products={products} />
      }
    </div>
  );
};

export default ProductContainer;
