import { useState, useEffect } from "react";

const API_URL = 'https://dummyjson.com/products';

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
                const response = await fetch(`${API_URL}/category/${category}/?limit=100`);
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
                const response = await fetch(`${API_URL}/${product}`)
                const data = await response.json()

                setProductState(data)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, [product])

    return { productState, loading, error };
}