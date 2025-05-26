import React from 'react'
import { IoMdMenu } from "react-icons/io";
import classes from './lowerheader.module.css';





function LowerHeader() {
    return (
        <div className={classes.lowerheader__container}>
            <ul>
                <li>
                    <IoMdMenu size={25} />
                    All</li>
                <li>Today's Deals</li>
                <li>Customer service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <li>Sells</li>

            </ul>

        </div>
    )
}
export default LowerHeader