import React, { useEffect,useState } from 'react'
import styles from './Main.module.css'
import ProductItem from '../components/ProductItem'
import Banner from '../components/Banner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllInfos } from '../store/shopSlice';
const Main = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.shops)
    const [itemRows, setItemRows ] = useState(Object.keys(products).length)
    useEffect(() => {
        try {
            axios.get(`/v1/search/shop.json`,
                {
                    params: {
                        query: "가구",
                        display: 100
                    },
                    headers: {
                        "X-Naver-Client-Id": 'GFIJm2wRn8RgcdUdZhAw',
                        "X-Naver-Client-Secret": "xi8QTHusGs"
                    }
                })
                .then((res) => {
                    dispatch(getAllInfos(res.data.items))
                    console.log(res.data.items)
                    setItemRows(Math.floor(100/3))

                    
                })
            }
            catch (err) {
                console.log(err)
            }
        }, [])
        useEffect(()=>{
            console.log(itemRows)
        },[itemRows])

        
        return (
        <div className={styles.mainWrapper}>
                <Banner />
            <section className={styles.mainContainer}>
                <div className={styles.contents}>
                    <div className={styles.itemBox}>
                        <h2>Shop</h2>
                        <div className={styles.RowsStyle}>
                            {
                                [...Array(parseInt(3))].map((item) => {

                                    return (
                                        <ProductItem />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.controller}>
                    <div className={styles.itemBox}>
                        <h2>PRODUCT SEARCH</h2>
                        <div className={styles.searchBar}>
                            <input placeholder='Search Products..' type='text'></input>
                            <button className={styles.submitBtn}>Search</button>
                        </div>
                    </div>
                    <div className={styles.itemBox}>
                        <h2>FILTER BY PRICE</h2>
                        <input type='range'></input>
                        <div className={styles.rangeBar}>
                            <button className={styles.submitBtn} >Filter</button>
                            <span>Price: $0 ~ $250</span>
                        </div>
                    </div>
                    <div className={styles.itemBox}>
                        <h2>CATEGORIES</h2>
                        <ul>
                            <li>BedRoom()</li>
                            <li>Hallway()</li>
                            <li>Kitchen()</li>
                        </ul>
                    </div>
                    <div className={styles.itemBox}>
                        <h2>TOP RATED PRODUCTS</h2>
                    </div>
                    <div className={styles.itemBox}>
                        <h2>AVERAGE RATING</h2>
                    </div>
                    <div className={styles.itemBox}>
                        <h2>PRODUCTS</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main