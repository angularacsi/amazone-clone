import React from 'react';
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { FaSearch } from "react-icons/fa";




function Header() {
  return (
    <div className={classes.header__container}>
      <header className={classes.header}>
        <div className={classes.header__logo}>
          <img src="https://static.dezeen.com/uploads/2025/05/amazon-rebrand-2025_dezeen_2364_col_1-1.jpg" alt="Amazon Logo" />
        </div>
        <div className={classes.header__location}>
          <p>Delivered To Ethiopians</p>
          <span>Ethiopia</span>
        </div>
        <div className={classes.header__search}>
          <select>
            <option value="">All</option>
            {/* Add more options as needed */}
          </select>
          <input type="text" placeholder="Search Amazon" />
          <div className={classes.header__searchIcon}>

            {/* Add search icon here */}
            <FaSearch size={25} />
          </div>
        </div>
        <div className={classes.header__nav}>
          <div className={classes.header__option}>

            <a><p>Hello, Sign in</p>
              <span>Account & Lists</span>
            </a>

          </div>
          <div className={classes.header__option}>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
          <div className={classes.header__cart}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Cart Icon" />
            <span>Cart</span>
            <span className={classes.header__cartCount}>0</span>
          </div>
        </div>

      </header>
      <LowerHeader />
    </div>
  );
}

export default Header;
