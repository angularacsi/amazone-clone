import React from 'react';
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider.jsx';




function Header() {
  const [state, dispatch] = useContext(DataContext);
  return (
    <section className={classes.header__section}>
      <div className={classes.header__container}>
        <header className={classes.header}>
          <div className={classes.header__logo}>
            {/* link to the home page when we click the logo */}
            <Link to="/">
              <img src="https://static.dezeen.com/uploads/2025/05/amazon-rebrand-2025_dezeen_2364_col_1-1.jpg" alt="Amazon Logo" />
            </Link>
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

              <Link to='/signup'><p>Hello, Sign in</p>
                <span>Account & Lists</span>
              </Link>
            </div>

            <div className={classes.header__option}>
              <Link to="/order"  >
                <p>Retur tons</p>
                <span>& Orders</span>
              </Link>
            </div>


            <div className={classes.header__cart}>
              <Link to="/cart">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Cart Icon" />
                <span>Cart</span>
                <span className={classes.header__cartCount}>{state.cart.length}</span>
              </Link>
            </div>

          </div>

        </header>
        <LowerHeader />
      </div>
    </section>
  );
}

export default Header;
