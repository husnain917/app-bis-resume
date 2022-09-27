import React from 'react'
import styles from "../../styles/template2/temsec.module.css"
import Image from 'next/image'
import imageProfile from "../../public/imageProfile.jpg"
import BottomLine from '../../src/components/template2/BottomLine.js'
import Skillprogress from '../../src/components/template2/Skillprogress.js'

export default function () {
    return (


        <div className={styles.mainContainer}>

            <div className={styles.TopContent}>
                <div className={styles.profileDiv}>
                    <div className={styles.profileSubDiv} >
                        <Image src={imageProfile} className={styles.ImageStyle} height="200" width="220" />
                    </div>
                    <h6 className={styles.headEduc}>Contact</h6>
                    <BottomLine />
                    <div className={styles.profileContact}>
                        <ul >
                            <li>+9200000000</li>
                            <li>hello@gmail.com</li>
                            <li>www.greatWeb.com</li>

                            <li>D-ground  People Colony no 1 Faisalabad.</li>
                        </ul>
                    </div>

                </div>
                <div className={styles.profileDiv2}>
                    <h2 className={styles.profileHead}>Hannah Morales</h2>
                    <p className={styles.p}>Graphic designner</p>
                    <BottomLine />
                    <div className={styles.AboutDiv}>
                        <p className={styles.AboutPar} >About Me</p>
                        <p className={styles.AboutContent}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    </div>
                    <div className={styles.profileDiv3}>
                        <h6 className={styles.headEduc}>Education</h6>
                        <BottomLine />
                        <p className={styles.EduPara}>All the Lorem Ipsum generators <br /> on the Internet.</p>

                    </div>
                </div>
            </div>
            <div className={styles.TopContent}>
                <div className={styles.skillDiv}>
                    <h6 className={styles.headEduc}>Skills</h6>
                    <BottomLine />
                    <Skillprogress />
                    <Skillprogress />
                    <Skillprogress />
                </div>

                <div className={styles.expDiv}>
                    <h6 className={styles.headEduc}>Experience Work </h6>
                    <BottomLine />
                    <p className={styles.experTitle1}>Mobile App & Web </p> <p className={styles.subTitle}>(2020-2021) - SMIT  </p>
                    <p className={styles.EduPara}>All the Lorem Ipsum generators on the Internet.</p>
                    <p className={styles.experTitle1}>Flutter</p><p className={styles.subTitle}>(2017-2019) - Karachi</p>
                    <p className={styles.EduPara}>All the Lorem Ipsum generators  on the Internet.</p>
                    <p className={styles.experTitle1}>Graphic Designner</p> <p className={styles.subTitle}>(2017-2019) - Karachi</p>
                    <p className={styles.EduPara}>All the Lorem Ipsum generators on the Internet.</p>

                </div>
            </div>



            <div>


            </div>

        </div>

    )
}

