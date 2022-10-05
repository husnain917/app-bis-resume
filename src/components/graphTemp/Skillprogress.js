import React, { useState } from 'react'
import styles from "../../../styles/templates/graphTemp/skillprogress.module.css"

import { Line, Circle } from 'rc-progress';

export default function Skillprogress() {
    const [progrees, setProgrees] = useState(0)
    const [progrees2, setProgress2] = useState(0)
    const [courseHead, setCourseHead] = useState("")
    const [courseHead2, setCourseHead2] = useState("")

    const youProgress = (e) => {
        setProgrees()

    }
    const youProgress2 = (e) => {
        setProgress2()
    }


    return (
        <div>
            <div className={styles.progressDiv}>
                <div>
                    <div className={styles.inputControl}>
                        <input type="number" value={progrees} onChange={(e) => setProgrees(e.target.value)} className={styles.input} />
                    </div>
                    <div>
                        <Circle percent={progrees} strokeWidth={4} strokeColor="red" className={styles.progessDemo} onClick={() => youProgress} />
                    </div>
                </div>

                <div>
                    <div className={styles.inputControl}>
                        <input type="number" value={progrees2} onChange={(e) => setProgress2(e.target.value)} className={styles.input} />
                    </div>
                    <div>
                        <Circle percent={progrees2} strokeWidth={5} strokeColor="cornflowerblue" className={styles.progessDemo} onClick={() => youProgress2()} />
                    </div>
                </div>
            </div>
            <div className={styles.proHeadDiv}>
                <p className={styles.proHead1}><input placeholder='enter a course' value={courseHead} type="text" className={styles.inputCourse} onChange={(e) => setCourseHead(e.target.value)} /></p>
                <p className={styles.proHead2}><input placeholder='enter a course' type="text" value={courseHead2} className={styles.inputCourse} onChange={(e) => setCourseHead2(e.target.value)} /></p>
            </div>
        </div>
    )
}
