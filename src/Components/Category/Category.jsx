import React from 'react'
import { CategoryfullInfos } from './CategoryfullInfo.js'
import CategoryCard from './CategoryCard.jsx'
import classes from './category.module.css'



function Category() {
    return (
        <section className={classes.categoryContainer}>
            {
                CategoryfullInfos.map((infos) => (
                    <CategoryCard data={infos}
                    />
                ))

            }



        </section>
    )
    console.log(CategoryfullInfos)
}

export default Category
