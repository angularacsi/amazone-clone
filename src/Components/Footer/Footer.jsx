import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.amazonFooter}>
            <div className={styles.footerTop}>
                <a href="#" className={styles.backToTop}>Back to top</a>
            </div>

            <div className={styles.footerLinks}>
                <div className={styles.footerColumn}>
                    <h3>Get to Know Us</h3>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">About Amazon</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Amazon Devices</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Make Money with Us</h3>
                    <a href="#">Sell on Amazon</a>
                    <a href="#">Sell under Amazon Accelerator</a>
                    <a href="#">Amazon Global Selling</a>
                    <a href="#">Become an Affiliate</a>
                    <a href="#">Self-Publish with Us</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Amazon Payment Products</h3>
                    <a href="#">Amazon Business Card</a>
                    <a href="#">Shop with Points</a>
                    <a href="#">Reload Your Balance</a>
                    <a href="#">Amazon Currency Converter</a>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Let Us Help You</h3>
                    <a href="#">Your Account</a>
                    <a href="#">Your Orders</a>
                    <a href="#">Shipping Rates & Policies</a>
                    <a href="#">Returns & Replacements</a>
                    <a href="#">Help</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
