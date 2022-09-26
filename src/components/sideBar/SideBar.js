import { useStatStyles } from '@chakra-ui/react';
import { React, useState } from 'react'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";
import styles from "../../../styles/sideBar.module.css"
import { TiSocialPinterest } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { RiFileEditFill, RiFileUserLine } from "react-icons/ri";

export default function SideBar() {
    const [show, setShow] = useState(true)
    return (
        <div> <nav className={styles.nav}>

            {
                show ?
                    <ul className={styles.ul}>
                        <li className={styles.li}><a href="#" className={styles.a}><i><RiFileUserLine /></i><span className={styles.BtnOpen}>BUILD RESUME</span></a></li>
                        <li><a href="#" className={styles.a}><i><RiFileEditFill /></i><span className={styles.BtnOpen}>COVER LETTER Build</span></a></li>
                        <li className={styles.li}><a href="#" ><i className={styles.pin}><FaFacebookF /></i></a></li>
                        <li className={styles.li}><a href="#" ><i className={styles.pin}><FaLinkedinIn /></i></a></li>


                        <li className={styles.li}><a href="#" ><i className={styles.pin}><FaTwitter /></i></a></li>
                        <li className={styles.li}><a href="#" ><i className={styles.pin}><MdEmail /></i></a></li>
                        <li className={styles.li}><a href="#" ><i className={styles.pin}><TiSocialPinterest /></i></a></li>
                        <li className={styles.btnAction}><a href="#" ><i ><FaArrowLeft onClick={() => setShow(false)} /></i></a></li>

                    </ul>

                    :
                    <ul >

                        <li className={styles.btnAction}><a href="#" ><i ><FaArrowRight onClick={() => setShow(true)}  /></i></a></li>


                    </ul>


            }

        </nav>




        </div>

    )
}
