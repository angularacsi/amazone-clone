import React from 'react'


import Layout from '../../Components/LayOut/LayOut'
import ImageCarousel from '../../Components/Carousel/ImageCarousel'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Products'


function Landing() {
    return (
        <Layout>
            <ImageCarousel />
            <Category />
            <Products />

        </Layout>
    )
}

export default Landing
