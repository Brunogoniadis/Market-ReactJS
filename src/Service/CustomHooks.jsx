import { useState, useEffect } from "react";

const API_URL = "https://dummyjson.com/products";

export const UseHookApiCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { categories, loading, error };
};
export const UseHookBestItem = (category) => {
  const [bestItem, setBestItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `${API_URL}/category/${category}/?limit=100`
        );
        const data = await response.json();

        const sortedItems = data.products.sort((a, b) => a.price - b.price);

        setBestItem(sortedItems[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [category]);

  return { bestItem, loading, error };
};
export const UseHookProduct = (product) => {
  const [productState, setProductState] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${product}`);
        const data = await response.json();

        setProductState(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [product]);

  return { productState, loading, error };
};

export const UseHookItemsByCategory = (category, sort, order, paramFilter) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemsByCategory = async () => {
      try {
        const response = await fetch(`${API_URL}/category/${category}`);
        const data = await response.json();

        if (sort) {
          const sortedItems = data.products.slice().sort((a, b) => {
            // Verificar se o parâmetro de filtro é 'price' ou 'rating'
            if (paramFilter === "price") {
              if (order === "desc") {
                return b.price - a.price;
              } else if (order === "asc") {
                return a.price - b.price;
              }
            } else if (paramFilter === "rating") {
              if (order === "desc") {
                return b.rating - a.rating;
              } else if (order === "asc") {
                return a.rating - b.rating;
              }
            }

            return 0;
          });
          setItems(sortedItems);
        } else {
          setItems(data.products);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItemsByCategory();
  }, [category, sort, order, paramFilter]);

  return { items, loading, error };
};
