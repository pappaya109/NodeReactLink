import React from 'react'
import styles from './Main.module.css'
import { Carousel } from 'react-bootstrap'


const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <Carousel className={styles.banner}>
                <Carousel.Item>
                    <div
                    className={styles.banner_item}
                    style={{
                        backgroundColor: 'rgb(230,90,80)',
                    }}
                    >
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                    className={styles.banner_item}
                    style={{
                        backgroundColor: 'orange',
                    }}
                    >
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                    className={styles.banner_item}
                    style={{
                        backgroundColor: 'skyblue',
                    }}
                    >
                    </div>
                </Carousel.Item>
            </Carousel>
            <section className={styles.mainContainer}>
                <div className={styles.controller}>
                    <h2>Products1</h2>
                </div>
                <div className={styles.contents}>
                </div>
            </section>
        </div>
    )
}

export default Main