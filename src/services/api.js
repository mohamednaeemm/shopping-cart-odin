import { useState, useEffect } from 'react';

export function useProducts() {
  const [productArr, setProductArr] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductArr(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productArr, error, loading };
}
