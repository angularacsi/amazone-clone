import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat.jsx';
import styles from './product.module.css'; // Assuming you have a CSS module for styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { DataProvider, DataContext } from '../DataProvider/DataProvider.jsx';
import { types } from '../../Utility/action.type.js';

function ProductCard({ data, flex }) {
    // destructure the data
    const { title, price, id, rating, image } = data;

    const [state, dispatch] = useContext(DataContext);
    console.log(state);

    const addToCart = () => {
        dispatch({
            type: types.ADD_TO_CART,
            item: {
                id,
                title,
                price,
                image,
                rating
            }

        })
    }

    return (
        <div className={`${styles.productCard} ${flex ? styles.productCardFlex : ''}`}>
            <Link to={`/products/${id}`} className={styles.link}>
                <img src={image} alt="" />
            </Link>
            <div >
                {/* title */}
                <h3>{title}</h3>
                <div className={styles.ratingContainer}>
                    {/* Rating */}
                    <Rating value={rating} precision={0.1}
                    />
                    {/* rate count */}
                    <small>{rating?.count}</small>


                </div>
                <div>
                    {/* price */}
                    <CurrencyFormat amount={price} />
                </div>
            </div>
            <button className={styles.button} onClick={addToCart} >Add to Cart</button>
            {/* description */}

        </div>
    )
}

export default ProductCard
