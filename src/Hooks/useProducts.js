import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://homies-manufacturer-website-server-main-tan.vercel.app/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useProducts;
