import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../../Components/Products/ProductCard'
import Loader from '../../Components/Loader/Loader'
import axios from 'axios'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isloading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);

                console.error("Error fetching product details:", error);
            });
    }, [])

    return (
        <LayOut>
            {isloading && <Loader />}
            {!isloading && (
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <ProductCard data={product}
                        flex={true} // Assuming you want to display the product in a flex layout
                    />
                </div>
            )}
        </LayOut>

    )
}

export default ProductDetail
