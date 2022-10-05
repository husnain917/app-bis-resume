import React from 'react';
import Image from 'next/image'
import imageProfile from "../../../public/icons/imageProfile.jpg"
import { useSelector } from "react-redux";
import styles from "../../../styles/templates/graphTemp/profile_temp.module.css"
import BottomLine from './BottomLine';
import Text from "../template1/Text";

export default function ProfileTemp() {

    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    return (


        <div className={styles.profileDiv}>
            <div className={styles.profileSubDiv} >
                <Image src={imageProfile} className={styles.ImageStyle} height="260" width="260" />
            </div>
    
                <h1 className={styles.headEduc}>Contact</h1>
              <div className={styles.ContactDiv} > <BottomLine   /></div>
        
            <div className={styles.profileContact}>
                <ul >
                    <li value={resumeData?.objective?.heading} >
                        <Text
                            value={resumeData?.profile?.phone}
                            placeholder="Phone Number"
                            customclass={`${styles.profileSec}`}
                        />
                    </li>
                    <li >

                        <Text
                            value={resumeData?.profile?.email}
                            placeholder="Email"

                            path={"profile.email"}
                            customclass={`${styles.profileSec}`}

                        />
                    </li>
                    <li >
                        <Text
                            value={resumeData?.profile?.linkedinURL}
                            placeholder="LinkedIn"
                            path={"profile.linkedinURL"}
                            customclass={`${styles.profileSec}`}
                        />

                    </li>

                    <li >
                        <Text
                            value={resumeData?.profile?.address?.city}
                            placeholder="City"
                            customclass={`${styles.profileSec}`}
                        />
                    </li>
                </ul>
            </div>

        </div>
    )
}
