import { useStatStyles } from "@chakra-ui/react";
import { React, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import styles from "../../../../styles/sideBarSection.module.css";
import { TiSocialPinterest } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiFileEditFill, RiFileUserLine } from "react-icons/ri";

export default function SideBarSection() {
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
    <div>
      {" "}
      <nav className={styles.nav}>
        {show ? (
          <ul
            className={styles.ul}
            style={{
              listStyle: "none",
            }}
          >
            <li className={styles.li}>
              <a className={styles.a}>
                <i>
                  <RiFileUserLine />
                </i>
                <span className={styles.BtnOpen}>BUILD RESUME</span>
              </a>
            </li>
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
          <ul
            style={{
              listStyle: "none",
            }}
          >
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
    </div>
  );
}
