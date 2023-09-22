import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <h1 className={styles.logo}>Papaya's Shop</h1>

            <nav className={styles.navContainer}>
                {/* 로그인 했을 때 */}
                <ul className={styles.userNav}>
                    <Link to="#" className={styles.navLink}><img src="./search.png" alt="search" width={25} /></Link>
                    <Link to="#" className={styles.navLink}><img src="./cart.png" alt="cart" width={25} /></Link>
                    <Link to="#" className={styles.navLink}><img src="./user.png" alt="mypage" width={25} /></Link>
                </ul>
                
                <ul className={styles.categoryNav}>
                    <Link to="#" className={styles.navLink}>옷</Link>
                    <Link to="#" className={styles.navLink}>카테고리2</Link>
                    <Link to="#" className={styles.navLink}>카테고리3</Link>
                    <Link to="#" className={styles.navLink}>카테고리4</Link>
                </ul>
                <div className={styles.infoNav}>
                    <Link to="#" className={styles.navLink}>로그인</Link>
                    <Link to="#" className={styles.navLink}>로그아웃</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header