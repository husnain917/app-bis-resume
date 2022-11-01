import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/TemplateBabySitter/Profile'
import { Text } from '../../src/components/template1'
import styles from '../../styles/templates/templatebabysitter.module.css'
import style from "../../styles/templates/template1.module.scss";
import Skills from '../../src/components/TemplateBabySitter/Skills'
import { sampleData } from "../../constants/sampleData";
import WorkExperience from '../../src/components/TemplateBabySitter/WorkExperience'
import EducationHistory from '../../src/components/TemplateBabySitter/EducationHistory'
import Image from 'next/image'
import useStoreData from '../../src/components/templateMarket/useStoreData';

import Link from "next/link";
import { Tooltip } from "react-tippy";

export default function TemplateBabySitter() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    return (
        <div className={style.main}>
            <Link href={'/templates'}>
                <div className={style.swapCont}>
                    <Tooltip title="Change Template" arrow distance={20}>
                        <div className={style.swap} >
                            <img src='/icons/swap.png' />
                        </div>
                    </Tooltip>
                </div>
            </Link>
            <div className={styles.mainDiv} >
                <div className={styles.innerMainDiv} >
                    <div className={styles.innerMainDiv1}>
                        <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                            <Box border="7px solid white" width={200} height={200} borderRadius="100%" overflow='hidden'>
                                <Image src='/imageProfile.jpg' height='250px' width='250px' />
                            </Box>
                        </Box>

                        < h2 className={styles.ProfileCon}>INFO</h2>


                        <Box style={{ marginLeft: 15 }}>


                            <div className={styles.contactIconCotent}>
                                <h2 className={styles.infoCon}>Address</h2>
                                <Text
                                    value={resumeData?.contact?.address}
                                    placeholder="Write a Address"
                                    customclass={`${styles.contactBody}`}
                                    path={"contact.address"}
                                />
                            </div>
                            <h2 className={styles.infoCon}>Contact</h2>

                            <div className={styles.contactIconCotent}>
                                <h6 ><b>Phone:</b></h6>
                                <Text
                                    value={resumeData?.contact?.contactNo}
                                    placeholder="Contact No"
                                    customclass={`${styles.contactBody}`}
                                    path={"contact.contactNo"}
                                />

                            </div>
                            <div className={styles.contactIconCotent}>
                                <h6 ><b>Email:</b></h6>

                                <Text
                                    value={resumeData?.contact?.emailAddress}
                                    placeholder="Email Address"
                                    customclass={`${styles.contactBody}`}
                                    path={"contact.emailAddress"}
                                />

                            </div>


                        </Box>

                        <div >
                            <Text
                                value={resumeData?.education?.heading}
                                placeholder="EDUCATION"
                                path={"education.heading"}
                                customclass={`${styles.ProfileCon}`}

                                editable={false}
                            />
                            <div>
                                <div>
                                    <EducationHistory
                                        data={
                                            resumeData?.education?.items.length
                                                ? [...resumeData?.education?.items]
                                                : [...sampleData?.data?.education?.items]
                                        }
                                        color={theme.color}
                                        updater={updater}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*Pro Skill Box and language*/}

                        <div>

                            <Skills
                                data={
                                    resumeData?.skills?.items.length
                                        ? [...resumeData?.skills?.items]
                                        : [...sampleData?.data?.skills?.items]
                                }
                                color={theme.color}
                                updater={updater}
                            />

                        </div>




                    </div>


                    <div className={styles.innerMainDiv2} >
                        <Profile cId='babysitter' />
                        <div>
                            <Text
                                value={resumeData?.profile?.heading}
                                placeholder="Profile"
                                customclass={`${styles.ProfileCon}`}
                                path={"profile.heading"}
                                editable={false}
                            />
                            <div>
                                <Text
                                    value={resumeData?.objective?.body}
                                    placeholder="Profile Summary"

                                    customclass={`${style.managerFName} ${styles.managerPadding} `}
                                    path={"objective.body"}
                                />
                            </div>
                        </div>
                        <div >
                            <Text
                                value={resumeData?.work?.heading}
                                placeholder="Experience History"
                                customclass={`${styles.ProfileCon}`}

                                path={"experience.heading"}
                                editable={false}
                            />
                            <div>
                                <WorkExperience
                                    data={
                                        resumeData?.work?.items.length
                                            ? [...resumeData?.work?.items]
                                            : [...sampleData?.data?.work?.items]
                                    }
                                    color={theme.color}
                                    updater={updater}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}


