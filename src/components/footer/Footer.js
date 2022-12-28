import React from "react";
import styles from "../../../styles/footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CommonSocial from "../commonButton/CommonSocial";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.fcontainer2}>
        <Link href="https://web.facebook.com/login/?_rdc=1&_rdr">
          <CommonSocial
            hoverCursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            color={"whitesmoke"}
            margin={"0"}
            padding={"0"}
            hoverBorder={"1px solid black"}
            // className={"hoverEffects"}
            icon={
              <FaFacebookF
                color={"#463477"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
              />
            }
          />
        </Link>
        <Link href="https://www.linkedin.com/home">
          <CommonSocial
            hoverCursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            color={"whitesmoke"}
            margin={"0px 20px 0px 20px"}
            padding={"0"}
            hoverBorder={"1px solid black"}
            icon={
              <FaLinkedinIn
                color={"#463477"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
              />
            }
          />
        </Link>
        <Link href="https://twitter.com/login">
          <CommonSocial
            hoverCursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            color={"whitesmoke"}
            margin={"0px 20px 0px 0px"}
            padding={"0"}
            hoverBorder={"1px solid black"}
            // className={"hoverEffects"}
            icon={
              <FaTwitter
                color={"#463477"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
              />
            }
          />
        </Link>
        <Link href="https://www.instagram.com/accounts/login/">
          <CommonSocial
            hoverCursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={"50%"}
            color={"whitesmoke"}
            margin={"0"}
            padding={"0"}
            hoverBorder={"1px solid black"}
            // className={"hoverEffects"}
            icon={
              <FaInstagram
                color={"#463477"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
              />
            }
          />
        </Link>
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
          {/* <div>
            <Link href="/templates">CV Templates</Link>
          </div> */}
          {/* <div>
            <Link href="#/">Cover Letters</Link>
          </div> */}
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Learn</p>
          <div>
            <Link href="#/">Career Blog</Link>
          </div>
          <div>
            <Link href="/ResumeBuild">How to Write a Resume</Link>
          </div>
          {/* <div>
            <Link href="#/">How to Write a CV</Link>
          </div> */}
          {/* <div>
            <Link href="#/">How to Write a Cover Letters</Link>
          </div> */}
          <div>
            <Link href="/blog/resumeFormats">Resume Examples</Link>
          </div>
          {/* <div>
            <Link href="#/">Cover Letters Examples</Link>
          </div> */}
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Other</p>
          <div>
            <Link href="/page/Pricing">Pricing</Link>
          </div>
          <div>
            <Link href="/About">About Us</Link>
          </div>
          <div>
            <Link href="#/">E-Book:How to get a job in 2022</Link>
          </div>
          {/* <div>
            <Link href="#/">Media Kit</Link>
          </div> */}
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
            <Link href="#/">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/Cookie">Cookie Policy</Link>
          </div>
          {/* <div>
            <Link href="#/">Media Kit</Link>
          </div> */}
          <div>
            <Link href="mailto:Contact@bisresume.com">
              Contact@bisresume.com
            </Link>
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
