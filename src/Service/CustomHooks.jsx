import { useState, useEffect } from "react";

const API_URL = 'https://api.escuelajs.co/api/v1';

export const UseApiCategories = () => {
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
