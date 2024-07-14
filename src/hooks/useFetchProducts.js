import React, { useEffect, useState } from 'react';

export function useFetchProducts(url) {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return { isLoading, error, products };
}
