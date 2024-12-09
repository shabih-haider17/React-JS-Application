import React, { useEffect, useState } from "react";

const ProductLists = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products");
    setProducts(["Clothing", "Household"]);
  }, []); // Empty array ensures this runs only once

  return <div>ProductLists</div>;
};

export default ProductLists;
