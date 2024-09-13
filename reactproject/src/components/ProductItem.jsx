import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../components/ProductItem.module.css'
const ProductItem = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{ backgroundColor: 'gray', width: '12em', height: '12em' }}>
                Sample Image
            </div>
            <section className={styles.info}>
                <h3>Product Name</h3>
                {/* <h6>ratings</h6> */}
                {/* <span className={styles.saleStyle}>Sale prices</span> */}
                <span>prices</span>
            </section>
                <button>Add to cart</button>
        </div>
    )
}

export default ProductItem