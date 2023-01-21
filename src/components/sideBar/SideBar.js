import { useStatStyles, Box } from "@chakra-ui/react";
import { React, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import styles from "../../../styles/sideBar.module.css";
import { TiSocialPinterest } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiFileEditFill, RiFileUserLine } from "react-icons/ri";
import Link from "next/link";

export default function SideBar() {
  const [show, setShow] = useState(true);

  const hoddenSideBar = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const showSideBar = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <Box
      maxW={["0%", "0%", "0%", "10%"]}
      // padding={'70px 0px 0px 0px'}
      display={["none", "none", "block", "block", "block"]}
    >
      <Box width={"5rem"} position={"sticky"} top="15%" left="0%">
        <nav className={styles.nav}>
          {show ? (
            <ul className={styles.ul}>
              {" "}
              <li className={styles.li}>
                <Link href={"/templates"}>
                  <a className={styles.a}>
                    <i>
                      <RiFileUserLine />
                    </i>
                    <span className={styles.BtnOpen}>BUILD RESUME</span>
                  </a>
                </Link>
              </li>{" "}
              <li>
                <a className={styles.a}>
                  <i>
                    <RiFileEditFill />
                  </i>
                  <span className={styles.BtnOpen}>COVER LETTER Build</span>
                </a>
              </li>
              <li className={styles.li}>
                <a>
                  <i className={styles.pin}>
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li className={styles.li}>
                <a>
                  <i className={styles.pin}>
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
              <li className={styles.li}>
                <a>
                  <i className={styles.pin}>
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li className={styles.li}>
                <a>
                  <i className={styles.pin}>
                    <MdEmail />
                  </i>
                </a>
              </li>
              <li className={styles.li}>
                <a>
                  <i className={styles.pin}>
                    <TiSocialPinterest />
                  </i>
                </a>
              </li>
              <div onClick={(e) => hoddenSideBar(e)}>
                {" "}
                <li className={styles.btnAction}>
                  <a>
                    <i>
                      <FaArrowLeft />
                    </i>
                  </a>
                </li>
              </div>
            </ul>
          ) : (
            <ul>
              <div onClick={(e) => showSideBar(e)}>
                {" "}
                <li className={styles.btnAction}>
                  <a>
                    <i>
                      <FaArrowRight />
                    </i>
                  </a>
                </li>
              </div>
            </ul>
          )}
        </nav>
      </Box>
    </Box>
  );
}
