import { React, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
// import styles from "../styles/sideBar.module.css";

import { TiSocialPinterest } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiFileEditFill, RiFileUserLine } from "react-icons/ri";
import { Box } from "@chakra-ui/react";
import styles from "../../../../styles/sideBar.module.css";

const SideBar = () => {
  console.log("STYLES>>>", styles.ul);
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
      borderRadius={["60px"]}
      width={["60px"]}
      position={["fixed"]}
      zIndex={"1049"}
      transform={["scale(1)"]}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {show ? (
        <ul className={styles.ul}>
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
    </Box>
  );
};

export default SideBar;
