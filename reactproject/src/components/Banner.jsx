import React, { useEffect } from 'react'
import styles from './Banner.module.css'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const Banner = () => {
    const { products } = useSelector(state => state.shops)
    let banner_arr = [...Array(parseInt(10))]


    return (
        <div>
            <Carousel className={styles.banner}>
                {
                    products && products.length > 0 ? (
                        banner_arr.map((items, i) => (
                            <Carousel.Item>
                                <div className={styles.transparent}></div>
                                <h3 className={styles.titles}>
                                    {products[i].brand + products[i].category1 + products[i].category2 + products[i].category3}
                                </h3>
                                <div
                                    className={styles.banner_item}
                                    style={{
                                        backgroundImage: `url(${products[i].image})`,
                                    }}>
                                </div>
                            </Carousel.Item>
                        ))
                    )
                    : (
                            <div></div>
                    )};
            </Carousel>
        </div>
    );
};

export default Banner