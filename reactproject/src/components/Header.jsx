import React,{ useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { modalStore } from '../App'

const Header = () => {
    const {showModal, setShowModal} = useContext(modalStore);
    return (
        <div className={styles.headerWrapper}>
            <Link to='/' className={styles.navLink}><h1 className={styles.logo}>Papaya's Shop</h1></Link>
            <nav className={styles.navContainer}>
                {/* 로그인 했을 때 */}
                <ul className={styles.userNav}>
                    <Link to="#" className={styles.navLink}><img src="./search.png" alt="search" width={20} /></Link>
                    <Link to="#" className={styles.navLink}><img src="./cart.png" alt="cart" width={20} /></Link>
                    <Link to="/myinfo" className={styles.navLink}><img src="./user.png" alt="mypage" width={20} /></Link>
                </ul>
                
                <ul className={styles.categoryNav}>
                    <Link to="#" className={styles.navLink}>옷</Link>
                    <Link to="#" className={styles.navLink}>카테고리2</Link>
                    <Link to="#" className={styles.navLink}>카테고리3</Link>
                    <Link to="#" className={styles.navLink}>카테고리4</Link>
                </ul>
                <div className={styles.infoNav}>
                    <Link to='/join' className={styles.navLink}>회원가입</Link>
                    <Link className={styles.navLink} onClick={()=>setShowModal(true)}>로그인</Link>
                    {/* <Link to="#" className={styles.navLink}>로그아웃</Link> */}
                </div>
            </nav>
        </div>
    )
}

export default Header