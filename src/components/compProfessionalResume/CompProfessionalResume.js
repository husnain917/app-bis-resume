import React from 'react'
import styles from '../../../styles/compProResume.module.css'
import Image from 'next/image'

export default function CompProfessionalResume() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container1}>
                <p className={styles.headingComp}>The components of a professional resume</p>
                <div className={styles.resumeImgDiv}>
                  <Image
                   src='/lawyer-resume-example.svg'
                   width={612}
                   height={792}
                   alt='Lawyer Resume Example'
                  />
                </div>
            </div>
            <div className={styles.container2}>b</div>
        </div>
    )
}
