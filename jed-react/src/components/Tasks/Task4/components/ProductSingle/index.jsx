import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { menFashion } from "../Home/men.json";
import "./index.css"

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const foundProduct = menFashion.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  return (
    <div>
      {product && (
        <div className="singleProduct">
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p>Price: {product.cost}</p>
          <p>Description: {product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Color: {product.color}</p>
          <p>Size: {"" + product.size}</p>
          <p>Rate: {product.rating}</p>
          {/* Add any additional product details here */}
        </div>
      )}
    </div>
  );
}

export default ProductSingle;