import React from 'react'
import styles from './Banner.module.css'
import { Carousel } from 'react-bootstrap'
const Banner = () => {
    return (
        <div>
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
        </div>
    )
}

export default Banner