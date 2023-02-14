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
import { Box } from "@chakra-ui/react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className={styles.fcontainer1}>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Bisresume</p>
          <div>
            <Link href="/">Homepage</Link>
          </div>
          <div>
            <Link href="/templates">Resume Templates</Link>
          </div>
          <Box display={"flex"}>
            <Link
              target="_blank"
              href={"#"}
              passhref
              as={"https://web.facebook.com/login/?_rdc=1&_rdr"}
            >
              <a target="_blank">
                <CommonSocial
                  width={"1.6rem"}
                  minWidth="1.6rem"
                  height={"1.6rem"}
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
                      color={"#006772"}
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    />
                  }
                />
              </a>
            </Link>
            <Link
              // href={"#"}
              target="_blank"
              passhref
              href={"https://www.linkedin.com/home"}
              as={"https://www.linkedin.com/home"}
            >
              <a target={"_blank"}>
                <CommonSocial
                  width={"1.6rem"}
                  minWidth="1.6rem"
                  height={"1.6rem"}
                  hoverCursor={"pointer"}
                  backgroundColor={"white"}
                  borderRadius={"50%"}
                  color={"whitesmoke"}
                  margin={"0px 10px 0px 10px"}
                  padding={"0"}
                  hoverBorder={"1px solid black"}
                  icon={
                    <FaLinkedinIn
                      color={"#006772"}
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    />
                  }
                />
              </a>
            </Link>
            <Link
              href={"https://twitter.com/login"}
              target="_blank"
              passhref
              as="https://twitter.com/login"
            >
              <a target={"_blank"}>
                <Box>
                  <CommonSocial
                    width={"1.6rem"}
                    height={"1.6rem"}
                    minWidth="1.6rem"
                    hoverCursor={"pointer"}
                    backgroundColor={"white"}
                    borderRadius={"50%"}
                    color={"whitesmoke"}
                    margin={"0px 10px 0px 0px"}
                    padding={"0"}
                    hoverBorder={"1px solid black"}
                    // className={"hoverEffects"}

                    icon={
                      <FaTwitter
                        color={"#006772"}
                        fontWeight={"bold"}
                        fontSize={"0.8rem"}
                      />
                    }
                  />
                </Box>
              </a>
            </Link>
            <Link
              href={"https://www.instagram.com/accounts/login/"}
              target="_blank"
              passhref
              as="https://www.instagram.com/accounts/login/"
            >
              <a target="_blank">
                <CommonSocial
                  width={"1.6rem"}
                  minWidth="1.6rem"
                  height={"1.6rem"}
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
                      color={"#006772"}
                      fontWeight={"bold"}
                      fontSize={"0.8rem"}
                    />
                  }
                />
              </a>
            </Link>
          </Box>
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
            <Link href="/blog">Career Blog</Link>
          </div>
          <div>
            <Link href="/write-resume">How to Write a Resume</Link>
          </div>
          {/* <div>
            <Link href="#/">How to Write a CV</Link>
          </div> */}
          {/* <div>
            <Link href="#/">How to Write a Cover Letters</Link>
          </div> */}
          <div>
            <Link href="/resume-examples">Resume Examples</Link>
          </div>
          {/* <div>
            <Link href="#/">Cover Letters Examples</Link>
          </div> */}
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Other</p>
          <div>
            <Link href="/page/pricing-resume">Pricing</Link>
          </div>
          <div>
            <Link href="/about-us">About Us</Link>
          </div>
          <div>
            <Link href="/Jobs">E-Book:How to get a job in 2023</Link>
          </div>
          {/* <div>
            <Link href="#/">Media Kit</Link>
          </div> */}
          <div>
            <Link href="/contact-us">Help Center</Link>
          </div>
        </div>
        <div className={styles.linkDiv}>
          <p className={styles.footerP}>Legal/Contact</p>
          <div>
            <Link href="/legal/terms-and-conditions">Terms of Use</Link>
          </div>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          {/* <div>
            <Link href="#/">Media Kit</Link>
          </div> */}
          <div>
            <Link href={"https://gmail.com/"}>Contact@bisresume.com</Link>
          </div>
        </div>
      </div>
      <div className={styles.fcontainer}>
        {/* <p>Our Vision is to</p>
        <h1 className={styles.h1}>Fight Galactic Unemployment</h1>
        <p>Ny Carlsberg Vej 80</p>
        <p>DK 1799 Copenhangen,Denmark</p> */}
        <p className={styles.copyright}>
          Copyright {year} Bisresume. All Rights Reserved
        </p>
      </div>
    </>
  );
}
