import React from 'react'
import styles from '../../../styles/footer.module.css'
import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className={styles.fcontainer1}>
               <div className={styles.linkDiv} ><p className={styles.footerP}>Novaresume</p>
               <Link href="/test">Homepage</Link>
               <Link href="/templates">Resume Templates</Link>
               <Link href="/templates">CV Templates</Link>
               <Link href="/templates">Cover Letters</Link>
               </div>
               <div className={styles.linkDiv}><p className={styles.footerP}>Learn</p></div>
               <div className={styles.linkDiv}><p className={styles.footerP}>Other</p></div>
               <div className={styles.linkDiv}><p className={styles.footerP}>Legal/Contact</p></div>
            </div>
            <div className={styles.fcontainer}>
                <p>Our Vision is to</p>
                <h1 className={styles.h1}>Fight Galactic Unemployment</h1>
                <hr />
                <p>Ny Carlsberg Vej 80</p>
                <p>DK 1799 Copenhangen,Denmark</p>
                <p>Copyright {year} Novoresume ApS. All Rights Reserved</p>
            </div>
        </>
    )
}
