import React from 'react'
import styles from './Main.module.css'

import ProductItem from '../components/ProductItem'
import Banner from '../components/Banner'


const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Banner/>
            <section className={styles.mainContainer}>
                <div className={styles.contents}>
                    <h2>Shop</h2>
                    <ProductItem/>
                </div>
                <div className={styles.controller}>
                    <div>   
                        <h2>PRODUCT SEARCH</h2>
                        <input placeholder='Search Products..'></input>
                        <button>Search</button>
                    </div>
                    <div>
                        <h2>FILTER BY PRICE</h2>
                        <input type='range'></input>
                        <button>Filter</button>
                        <span>Price: $0 ~ $250</span>
                    </div>
                    <div>
                        <h2>CATEGORIES</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main