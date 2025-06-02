import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import Loader from '../Loader/Loader.jsx';
import styles from './product.module.css'; // Assuming you have a CSS module for styling


function Products() {
    // ✅ Initialize products as an empty array
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        isLoading ? <Loader /> :
            <section className={styles.productsContainer}>
                {products.map((singleproduct) => (
                    <ProductCard data={singleproduct} key={singleproduct.id} />
                ))}
            </section>

    );
}

export default Products;
