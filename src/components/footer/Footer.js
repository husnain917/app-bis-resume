import React from 'react'
import styles from '../../../styles/footer.module.css'
import Link from 'next/link';
import { FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
          <div className={styles.fcontainer2}>
          <a href='https://web.facebook.com/login/?_rdc=1&_rdr'><div className={styles.oiconDiv}><div className={styles.iconDiv}><FaFacebookF  className={styles.icon}/></div></div></a>
          <a href='https://www.linkedin.com/home'><div className={styles.oiconDiv}><div className={styles.iconDiv}><FaLinkedinIn  className={styles.icon}/></div></div></a>
          <a href='https://twitter.com/login'><div className={styles.oiconDiv}><div className={styles.iconDiv}><FaTwitter  className={styles.icon}/></div></div></a>
          <a href='https://www.instagram.com/accounts/login/'><div className={styles.oiconDiv}><div className={styles.iconDiv}><FaInstagram  className={styles.icon}/></div></div></a>
          </div>
            <div className={styles.fcontainer1}>
                <div className={styles.linkDiv} >
                    <p className={styles.footerP}>Bisresume</p>
                    <div><Link href="/test">Homepage</Link></div>
                    <div><Link href="/templates">Resume Templates</Link></div>
                    <div><Link href="/templates">CV Templates</Link></div>
                    <div><Link href="/templates">Cover Letters</Link></div>
                </div>
                <div className={styles.linkDiv}>
                    <p className={styles.footerP}>Learn</p>
                    <div><Link href="/test">Career Blog</Link></div>
                    <div><Link href="/templates">How to Write a Resume</Link></div>
                    <div><Link href="/templates">How to Write a CV</Link></div>
                    <div><Link href="/templates">How to Write a Cover Letters</Link></div>
                    <div><Link href="/templates">Resume Examples</Link></div>
                    <div><Link href="/templates">Cover Letters Examples</Link></div>
                </div>
                <div className={styles.linkDiv}>
                    <p className={styles.footerP}>Other</p>
                    <div><Link href="/test">Pricing</Link></div>
                    <div><Link href="/templates">About Us</Link></div>
                    <div><Link href="/templates">E-Book:How to get a job in 2022</Link></div>
                    <div><Link href="/templates">Media Kit</Link></div>
                    <div><Link href="/templates">Help Center</Link></div>
                </div>
                <div className={styles.linkDiv}>
                    <p className={styles.footerP}>Legal/Contact</p>
                    <div><Link href="/test">Terms of Use</Link></div>
                    <div><Link href="/templates">Privacy Policy</Link></div>
                    <div><Link href="/templates">Cookie Policy</Link></div>
                    <div><Link href="/templates">Media Kit</Link></div>
                    <div><Link href="/templates">Contact@bisresume.com</Link></div>
                </div>
            </div>
            <div className={styles.fcontainer}>
                <p>Our Vision is to</p>
                <h1 className={styles.h1}>Fight Galactic Unemployment</h1>
                <p>Ny Carlsberg Vej 80</p>
                <p>DK 1799 Copenhangen,Denmark</p>
                <p className={styles.copyright}>Copyright {year} Bisresume ApS. All Rights Reserved</p>
            </div>
        </>
    )
}
