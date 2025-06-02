import React, { use } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import styles from './Result.module.css'
import { useParams } from 'react-router-dom'
import { productURL } from '../../Api/EndPoints'
import Loader from '../../Components/Loader/Loader'
import ProductCard from '../../Components/Products/ProductCard'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Result() {
    const { CategoryName } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)



    // you stoped here dude 
    useEffect(() => {
        setLoading(true)
        axios.get(`${productURL}/products/category/${CategoryName}`)
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.error('Error fetching category products:', error)
            })
    }, [])

    return (
        <LayOut>
            {/* render int the productcard component for each product */}
            {
                isLoading ? (<Loader />) : (
                    <section className={styles.resultContainer}>

                        <h1>Category: {CategoryName}</h1>
                        <div className={styles.productsContainer}>
                            {products.map((product) => (
                                <ProductCard key={product.id} data={product} />



                            ))}
                        </div>

                    </section>)
            }


        </LayOut>
    )
}

export default Result
