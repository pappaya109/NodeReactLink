import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../components/ProductItem.module.css'
const ProductItem = () => {
    return (
        <div className={styles.ProductItemWrapper}> 
            <div style={{backgroundColor: 'gray', width: '12em', height: '12em'}}>
                Sample Image
            </div>
            <h3>Product Name</h3>
        </div>
    )
}

export default ProductItem