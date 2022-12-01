import React from "react";
import styles from "../../../styles/footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.fcontainer2}>
        <a href="https://web.facebook.com/login/?_rdc=1&_rdr">
          <div className={styles.oiconDiv}>
            <div className={styles.iconDiv1}>
              <FaFacebookF className={styles.icon} />
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/home">
          <div className={styles.oiconDiv}>
            <div className={styles.iconDiv2}>
              <FaLinkedinIn className={styles.icon} />
            </div>
          </div>
        </a>
        <a href="https://twitter.com/login">
          <div className={styles.oiconDiv}>
            <div className={styles.iconDiv3}>
              <FaTwitter className={styles.icon} />
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/accounts/login/">
          <div className={styles.oiconDiv}>
            <div className={styles.iconDiv4}>
              <FaInstagram className={styles.icon} />
            </div>
          </div>
        </a>
      </div>
      <div className={styles.fcontainer1}>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Bisresume</p>
          <div>
            <Link href="/">Homepage</Link>
          </div>
          <div>
            <Link href="/templates">Resume Templates</Link>
          </div>
          <div>
            <Link href="/templates">CV Templates</Link>
          </div>
          <div>
            <Link href="/test">Cover Letters</Link>
          </div>
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Learn</p>
          <div>
            <Link href="/test">Career Blog</Link>
          </div>
          <div>
            <Link href="/ResumeBuild">How to Write a Resume</Link>
          </div>
          <div>
            <Link href="/test">How to Write a CV</Link>
          </div>
          <div>
            <Link href="/test">How to Write a Cover Letters</Link>
          </div>
          <div>
            <Link href="/blog/resumeFormats">Resume Examples</Link>
          </div>
          <div>
            <Link href="/test">Cover Letters Examples</Link>
          </div>
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Other</p>
          <div>
            <Link href="/page/Pricing">Pricing</Link>
          </div>
          <div>
            <Link href="/test">About Us</Link>
          </div>
          <div>
            <Link href="/test">E-Book:How to get a job in 2022</Link>
          </div>
          <div>
            <Link href="/test">Media Kit</Link>
          </div>
          <div>
            <Link href="/ContactUs">Help Center</Link>
          </div>
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Legal/Contact</p>
          <div>
            <Link href="/legal/termsAndConditions">Terms of Use</Link>
          </div>
          <div>
            <Link href="/test">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/Cookie">Cookie Policy</Link>
          </div>
          <div>
            <Link href="/test">Media Kit</Link>
          </div>
          <div>
            <Link href="mailto:Contact@bisresume.com">Contact@bisresume.com</Link>
          </div>
        </div>
      </div>
      <div className={styles.fcontainer}>
        <p>Our Vision is to</p>
        <h1 className={styles.h1}>Fight Galactic Unemployment</h1>
        <p>Ny Carlsberg Vej 80</p>
        <p>DK 1799 Copenhangen,Denmark</p>
        <p className={styles.copyright}>
          Copyright {year} Bisresume ApS. All Rights Reserved
        </p>
      </div>
    </>
  );
}
