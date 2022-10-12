import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/templateMarket/Profile'
import { Text } from '../../src/components/template1'
import styles from '../../styles/templates/templateMarket.module.css'
import style from "../../styles/templates/template1.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import Skills from '../../src/components/templateMarket/Skills'
import MarketLanguages from '../../src/components/templateMarket/MarketLanguages'
import { sampleData } from "../../constants/sampleData";
import WorkExperience from '../../src/components/templateMarket/WorkExperience'
import EducationHistory from '../../src/components/templateMarket/EducationHistory'
import Image from 'next/image'
import useStoreData from '../../src/components/templateMarket/useStoreData';
import WorkCertificate from '../../src/components/templateMarket/WorkCertificate'



export default function TemplateMarket() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    return (
        <div className={style.main}>
            <div className={styles.mainDiv} >
                <div className={styles.innerMainDiv} >
                    <div className={styles.innerMainDiv1}>
                        <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                            <Box border="7px solid " width={250} height={250} borderRadius="100%" overflow='hidden'>
                                <Image src='/imageProfile.jpg' height='250px' width='250px' />
                            </Box>
                        </Box>
                        <Profile cId='market' />
                        <Box className={styles.ContactDiv}>
                            < h2 className={styles.SkillHead}> Contact</h2>
                            <Box style={{ marginLeft: 15 }}>
                                <div className={styles.contactIconMain} >
                                    <div className={styles.contactIcon} >
                                        <div className={styles.iconDiv}>
                                            <BsFillTelephoneFill size='20px' color='white' />
                                        </div>
                                    </div>
                                    <div className={styles.contactIconCotent}>
                                        <Text
                                            value={resumeData?.contact?.contactNo}
                                            placeholder="Contact No"
                                            customclass={`${styles.contactBody}`}
                                            path={"contact.contactNo"}
                                        />
                                    </div>
                                </div>
                                <div className={styles.contactIconMain} >
                                    <div className={styles.contactIcon} >
                                        <div className={styles.iconDiv} style={{ backgroundColor: 'white' }}>
                                            <GrMail size='20px' color='#1c2125' />
                                        </div>
                                    </div>
                                    <div className={styles.contactIconCotent}>
                                        <Text
                                            value={resumeData?.contact?.emailAddress}
                                            placeholder="Email Address"
                                            customclass={`${styles.contactBody}`}
                                            path={"contact.emailAddress"}
                                        />
                                    </div>
                                </div>

                                <div className={styles.contactIconMain}>
                                    <div className={styles.contactIcon} style={{ width: '43px', justifyContent: 'right', padding: '0px', margin: '0px' }}>
                                        <div className={styles.iconDiv} style={{ border: 'none', padding: '0px', margin: '0px' }}>
                                            <TbWorld size='43px' color='white' />
                                        </div>
                                    </div>
                                    <div className={styles.contactIconCotent}>
                                        <Text
                                            value={resumeData?.contact?.websiteurl}
                                            placeholder="Website Url"
                                            customclass={`${styles.contactBody}`}
                                            path={"contact.websiteurl"}
                                        />
                                    </div>
                                </div>
                                <div className={styles.contactIconMain}>
                                    <div className={styles.contactIcon}>
                                        <div className={styles.iconDiv}>
                                            <IoHome size='20px' color='white' />
                                        </div>
                                    </div>
                                    <div className={styles.contactIconCotent}>
                                        <Text
                                            value={resumeData?.contact?.address}
                                            placeholder="Address"
                                            customclass={`${styles.contactBody}`}
                                            path={"contact.address"}
                                        />
                                    </div>
                                </div>
                            </Box>
                        </Box>







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


                            <MarketLanguages
                                data={
                                    resumeData?.languages?.items.length
                                        ? [...resumeData?.languages?.items]
                                        : [...sampleData?.data?.languages?.items]
                                }
                                color={theme.color}
                                updater={updater}
                                dId='languages'
                            />
                        </div>
                    </div>
                    <div className={styles.innerMainDiv2} >
                        <div>
                            <Text
                                value={resumeData?.profile?.heading}
                                placeholder="Profile"
                                customclass={`${styles.ProfileCon}`}
                                path={"profile.heading"}
                                editable={false}
                            />
                            <div
                                className={styles.templateceoHeadingTitle}>
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
                                placeholder="Experience"
                                customclass={`${styles.ProfileCon}`}

                                path={"experience.heading"}
                                editable={false}
                            />
                            <div
                                className={styles.templateceoHeadingTitle}>
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

                        {/* Education */}
                        <div >
                            <Text
                                value={resumeData?.education?.heading}
                                placeholder="EDUCATION"
                                path={"education.heading"}
                                customclass={`${styles.ProfileCon}`}

                                editable={false}
                            />
                            <div
                                className={styles.templateceoHeadingTitle}>
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
                        <div >
                            <Text
                                value={resumeData?.certifications?.heading}
                                placeholder=""
                                path={"certifications.heading"}
                                customclass={`${styles.ProfileCon}`}
                                editable={false}
                            />
                            <div
                                className={styles.templateceoHeadingTitle}>
                                <div>
                                    <WorkCertificate
                                        data={
                                            resumeData?.certifications?.items.length
                                                ? [...resumeData?.certifications?.items]
                                                : [...sampleData?.data?.certifications?.items]
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
        </div>

    )
}


