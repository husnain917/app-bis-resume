import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/template1/Profile'
import { Text } from '../../src/components/template1'
import { useSelector } from 'react-redux'
import styles from '../../styles/templates/templateceo.module.css'
import style from "../../styles/templates/template1.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import Skills from '../../src/components/templateCEO/Skills'
import Languages from '../../src/components/templateCEO/Languages'
import { sampleData } from "../../constants/sampleData";
import Link from "next/link";
import { Tooltip } from "react-tippy";

export default function templateceo() {
    const resumeData = useSelector(store => store.editorReducer.resumeData);
    const theme = useSelector(store => store.editorReducer.theme);
    const updater = useSelector(store => store.editorReducer.updater);
    console.log(resumeData)

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
                            <Box border="7px solid #ffffff" width={250} height={250} borderRadius="100%">
                            </Box>
                        </Box>
                        {/* Contact Box */}
                        <Box>
                            <Text
                                value={resumeData?.contact?.heading}
                                placeholder="Contact"
                                customclass={`${styles.contactHeadingTitle}`}
                                path={"contact.heading"}
                                editable={false}
                            />
                            <Box my={5}>
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
                                            <TbWorld size='40px' color='white' />
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
                                        <div className={styles.iconDiv} style={{ backgroundColor: 'white' }}>
                                            <IoHome size='20px' color='#1c2125' />
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
                        {/* Skill Box */}
                        <div>
                            <Text
                                value={resumeData?.skill?.heading}
                                placeholder="Skill"
                                customclass={`${styles.contactHeadingTitle}`}
                                path={"skill.heading"}
                                editable={false}
                            />
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
                        {/* language Box */}
                        <div className={`${styles.languageMainDiv}`}>
                            <Text
                                value={resumeData?.language?.heading}
                                placeholder="Language"
                                customclass={`${styles.contactHeadingTitle}`}
                                path={"language.heading"}
                                editable={false}
                            />
                            <Languages
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
                        <Profile cId='ceo' />
                        <div>
                            <Text
                                value={resumeData?.professional?.heading}
                                placeholder="Professional Profile"
                                customclass={`${styles.templateceoHeadingTitle}`}
                                path={"professional.heading"}
                                editable={false}
                            />

                            <Text
                                value={resumeData?.objective?.body}
                                placeholder="Professional Summary"
                                customclass={`${style.managerFName} ${styles.managerPadding}`}
                                path={"objective.body"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

