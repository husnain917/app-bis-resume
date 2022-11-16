import React from 'react'
import { styles } from '../componentStyles/templateDesignnerStyle';
import BottomLine from './BottomLine';
import { useSelector } from "react-redux";
import { Text } from '../template1';


export default function Education() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);

    return (
        <div>


            <div className={styles.profileDiv3}>
                <h6 className={styles.headEduc}>Education</h6>
                <BottomLine />
                <p className={styles.EduPara}>
                    <p className={styles.AboutContent}> 
                     <Text
                        value={resumeData?.objective?.body}
                        placeholder="Education Summary"
                        className={styles.EduText}
                    />
                    </p>
                </p>

            </div>



        </div>
    )
}
