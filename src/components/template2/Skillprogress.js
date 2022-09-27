import React from 'react'
import styles from "../../../styles/template2/skillprogress.module.css"
export default function Skillprogress() {
    return (
        <div>
            <div className={styles.progressDiv}>
                <div className={styles.progress0}>68%
                </div>
                <div className={styles.progress1}>68%</div>
            </div>
            <div className={styles.proHeadDiv}>
                <p className={styles.proHead1}>Graphic designnr</p>
                <p className={styles.proHead2}>Mobile developer</p>
            </div>
        </div>
    )
}
