import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/api/products/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch product");
        } 
        const data = await res.json();
        setProduct(data[0]); 
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return <>Loading...</>;

  return (
    <div>
      <h1>{product.product_name}</h1>
      <p>{product.product_description}</p>
      <p>€ {product.product_price}</p>
      <img src={`${import.meta.env.VITE_API_SERVER_URL}/api/uploads/${product.product_img_path}`} />
    </div>
  );
}

export default ProductDetail;
