import React from 'react'
import styles from './Main.module.css'
import { Carousel } from 'react-bootstrap'


const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Carousel className={styles.banner}>
                <Carousel.Item>

                </Carousel.Item>
            </Carousel>
            <section className={styles.mainContainer}>
                <div className={styles.controller}>
                </div>
                <div className={styles.contents}>
                </div>
            </section>
        </div>
    )
}

export default Main