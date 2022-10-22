import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/TemplateBabySitter/Profile'
import { Text } from '../../src/components/template1'
import styles from '../../styles/templates/templateContentCreater.module.css'
import style from "../../styles/templates/template1.module.scss";
import { sampleData } from "../../constants/sampleData";
import EducationHistory from '../../src/components/templateContentCreater/EducationHistory'
import useStoreData from '../../src/components/templateMarket/useStoreData';
import WorkExperience from '../../src/components/templateContentCreater/WorkExperience'
import Link from "next/link";
import { Tooltip } from "react-tippy";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { Row } from "antd";
import { Image, } from "@chakra-ui/react";
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';




export default function TemplateContentCreater() {
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
                        <Box display="flex" flexDirection="row"  >


                            <Box w="50%" marginTop="30px" >
                                <Text
                                    value={resumeData?.profile?.firstName}
                                    placeholder="FIRST NAME"
                                    customclass={styles.fullName}
                                    path={"profile.firstName"}
                                    fontSize="2.2rem"
                                />
                                <Text
                                    value={resumeData?.profile?.lastName}
                                    placeholder="LAST NAME"
                                    customclass={styles.fullName}
                                    path={"profile.lastName"}
                                    fontSize="2.2rem"
                                />


                                <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%"></Box>
                                <Text
                                    value={resumeData?.objective?.title}
                                    placeholder="CONTENT CREATER"
                                    path={"profile.objective.heading"}
                                    fontSize="1.5rem"
                                    color="#1b4245"
                                    marginTop="2%"
                                    textAlign="left"
                                />

                            </Box>
                            <Box w="50%" height={300} display='flex' justifyContent='center' alignItems='center' >
                                <Box border="7px solid " width={250} height={250} borderRadius="100%" overflow='hidden'>
                                    <Image src='/imageProfile.jpg' height='250px' width='250px' />
                                </Box>
                            </Box>


                        </Box>
                        <div className={styles.ProfileIcons}>
                            <Box display="flex" flexDirection="row" justifyContent="space-around" padding="10px 0px">
                                <Box display="flex" mt="1">
                                    <MdLocationOn size="30" />
                                    <Text
                                        value={resumeData?.profile?.address?.city}
                                        placeholder="City"
                                        path={"profile.address.city"}
                                        customclass={"manager-f-name"}
                                        margin={"4px"}
                                        marginLeft={"8px"}
                                    />
                                </Box>

                                <Box display="flex" mt="1">
                                    <MdEmail size="30" color='' />

                                    <Text
                                        value={resumeData?.profile?.email}
                                        placeholder="Email"
                                        customclass={"manager-f-name"}
                                        path={"profile.email"}
                                        margin={"4px"}
                                        marginLeft={"8px"}
                                        color={"black"}
                                    />
                                </Box>
                                <Box display="flex" mt="1">
                                    <HiPhone size="30" />
                                    <Text
                                        value={resumeData?.profile?.phone}
                                        placeholder="Phone"
                                        customclass={"manager-f-name"}
                                        path={"profile.phone"}
                                        margin={"4px"}
                                        marginLeft={"8px"}
                                    />
                                </Box>


                            </Box>

                        </div>

                        <div className={styles.profileDiv}>
                            <Text
                                value={resumeData?.objective?.body}
                                placeholder="Profile Summary"
                                path={"objective.body"}

                            />

                            <div className={styles.workExp}>
                                <div className={styles.bgImage}>
                                    <Text
                                        value={resumeData?.work?.heading}
                                        placeholder="Experience History"
                                        customclass={`${styles.ProfileCon}`}
                                        path={"experience.heading"}
                                        editable={false}
                                    />
                                </div>
                            </div>
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



                            <div className={styles.workExp}>
                                <div className={styles.bgImage}>
                                    <Text
                                        value={resumeData?.education?.heading}
                                        placeholder="EDUCATION"
                                        path={"education.heading"}
                                        customclass={`${styles.ProfileCon}`}

                                        editable={false}
                                    />
                                </div>

                            </div>
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
                        <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" mb="5%"></Box>





                    </div>





                </div>


            </div>
        </div>







    )
}
