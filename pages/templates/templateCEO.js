import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/template1/Profile'
import { Text } from '../../src/components/template1'
import styles from '../../styles/templates/templateceo.module.css'
import style from "../../styles/templates/template1.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import Skills from '../../src/components/templateCEO/Skills'
import Link from "next/link";
import { Tooltip } from "react-tippy";

import useStoreData from '../../src/components/useStoreData'
import { sampleData } from "../../constants/sampleData";
import Image from 'next/image'
import ImageSelector from '../../src/components/imageSelector'
import Profession from '../../src/components/commonSection/Profession';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import { Flex, HStack } from '@chakra-ui/react';
import useShow from '../../src/components/tempSectionSide/useShow';
import Heading from '../../src/components/commonSection/Heading';
import TempLayout from '../../src/components/tempNav/TempLayout';
import {
    CERTIFICATE,
    EDUCATION,
    SKILL,
    WORK,
    LANGUAGES
} from '../../src/components/tempSectionSide/SectionSideConstant';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import Education from '../../src/components/commonSection/Education';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Skill from "../../src/components/commonSection/Skill";
import Language from "../../src/components/commonSection/Language"


export default function TemplateCEO() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();

    return (
        <TempLayout work={true} education={true} skills={true} languages={true} >

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
                    <Box ml={["", , , "3%", "10%", "20%"]} >

                        <div className={styles.innerMainDiv} >
                            <div className={styles.innerMainDiv1}>
                                <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                                    <Box style={{ border: "7px solid white" }} borderRadius="100%" >
                                        <ImageSelector
                                            height={"200px"}
                                            width={"200px"}

                                        />
                                    </Box>
                                </Box>
                                {/* Contact Box */}
                                <Box mb="10%">
                                    <HStack alignItems={'flex-start'} mt={5} >

                                        <div className={styles.contactHeadingTitle}>
                                            <Heading
                                                title={'CONTACT'}
                                                color="#fff"

                                            />
                                        </div>
                                    </HStack>



                                    <Contact
                                        phone={true}
                                        email={true}
                                        linkedinURL={true}
                                        website={true}
                                        circleIcon={true}
                                        circleBg="#fff"
                                        circleSize="35px"
                                        iconColor="#1C2125"
                                        margin={'10px 0px 0px 0px'}
                                        style={styles.profileText}
                                    />
                                </Box>

                                {/* Skill Box */}
                                <div>
                                    {resumeData?.skills?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'} mt={5}>
                                                <Box ml={'-15px'}>
                                                    {show.skills && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, skills: false })}
                                                            bg="#2A78AB"
                                                            iconColor={'#E0EFFA'}
                                                            onDelete={SKILL}
                                                        />
                                                    )}
                                                </Box>
                                                <div className={styles.contactHeadingTitle}>
                                                    <Heading
                                                        title={'SKILLS'}
                                                        color="#fff"
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, skills: true })
                                                        }
                                                    />
                                                </div>
                                            </HStack>
                                            <Skill skillStyle={styles.skillText}
                                                parentContainerStyle={styles.mt}
                                                minW={"220px"}
                                                maxW={"220px"}


                                            />
                                        </>
                                    )}
                                </div>
                                {/* language Box */}

                                <div>
                                    {resumeData?.languages?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'} mt={5}>
                                                <Box ml={'-15px'}>
                                                    {show.languages && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, languages: false })}
                                                            bg="#2A78AB"
                                                            iconColor={'#E0EFFA'}
                                                            onDelete={LANGUAGES}
                                                        />
                                                    )}
                                                </Box>
                                                <div className={styles.contactHeadingTitle}>
                                                    <Heading
                                                        title={'LANGUAGES'}
                                                        color="#fff"
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, languages: true })
                                                        }
                                                    />
                                                </div>
                                            </HStack>
                                            <Box mt="2%" mb="3%">
                                                <Language
                                                    langStyle={styles.skillText}
                                                />
                                            </Box>
                                        </>
                                    )}
                                </div>





                            </div>
                            {/* summary right side */}
                            <div className={styles.innerMainDiv2} >
                                <Profile cId='ceo' />
                                {/* professional summary box*/}

                                <div>
                                    <div className={styles.templateceoHeadingTitle}>
                                        <Heading
                                            title={'Professional Profile'}


                                            fontSize={23}

                                            fontWeight={900}
                                            font-size={"1.4em"}
                                            minW={"670"}
                                            maxW={'670px'}



                                        />
                                    </div>
                                    <About

                                        aboutStyle={styles.description}
                                        aboutPlaceholder={"Profile Summary"}

                                    />
                                </div>

                                {/* professional summary box*/}
                                <div >
                                    <div>
                                        {resumeData?.work?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'} mt={'20px'}>
                                                    <Box w="20px" ml={'-27px'}>
                                                        {show.work && (
                                                            <SectionSideMenu
                                                                onHide={() => setShow({ ...show, work: false })}
                                                                bg="#2A78AB"
                                                                iconColor={'#E0EFFA'}
                                                                onDelete={WORK}
                                                            />
                                                        )}
                                                    </Box>
                                                    <div className={styles.templateceoHeadingTitle}>
                                                        <Heading
                                                            minW={"670"}
                                                            maxW={'670px'}
                                                            font-size={"1.4em"}
                                                            font-weight={900}
                                                            // text-transform: uppercase;
                                                            // border-radius: 0% !important;
                                                            // margin-bottom: 10px !important;
                                                            // padding-left: 5px;
                                                            // color: black;

                                                            color={"black"}
                                                            title="WORK EXPERIENCE"

                                                            height={50}
                                                            fontSize={22}
                                                            fontWeight={900}
                                                            onSideSectionShow={() => setShow({ ...show, work: true })}
                                                        />
                                                    </div>
                                                </HStack>
                                                {/* _____________ Work Experience _____________ */}
                                                <WorkExperience

                                                    position={true}
                                                    position_placeholder={"Position"}
                                                    date={true}
                                                    summary={true}
                                                    startDate_placeholder={"Start Date"}
                                                    endDate_placeholder={"End Date"}

                                                    postionStyle={styles.date}


                                                    dateStyle={styles.date}
                                                    summaryStyle={styles.description}
                                                    summary_placeholder={"Summary"}
                                                    parentContainerStyle={styles.mt}



                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* <WorkExperience
                                    data={
                                        resumeData?.work?.items.length
                                            ? [...resumeData?.work?.items]
                                            : [...sampleData?.data?.work?.items]
                                    }
                                    color={theme.color}
                                    updater={updater}
                                /> */}
                                </div>
                                {/* Education box*/}
                                <div >

                                    {resumeData?.education?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'} mt={'20px'}>
                                                <Box w="20px" ml={'-20px'}>
                                                    {show.education && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, education: false })}
                                                            bg="#2A78AB"
                                                            iconColor={'#E0EFFA'}
                                                            onDelete={EDUCATION}
                                                        />
                                                    )}
                                                </Box>
                                                <div className={styles.templateceoHeadingTitle}>

                                                    <Heading
                                                        minW={"670"}
                                                        maxW={'670px'}
                                                        font-size={"1.4em"}
                                                        font-weight={900}
                                                        // text-transform: uppercase;
                                                        // border-radius: 0% !important;
                                                        // margin-bottom: 10px !important;
                                                        // padding-left: 5px;
                                                        // color: black;

                                                        color={"black"}
                                                        title="EDUCATION"


                                                        fontSize={23}
                                                        fontWeight={900}
                                                        onSideSectionShow={() => setShow({ ...show, education: true })}
                                                    />
                                                </div>


                                            </HStack>
                                            <Education
                                                institution={true}
                                                date={true}
                                                summary={true}
                                                summaryStyle={styles.Educationdescription}
                                                dateStyle={styles.date}
                                                institutionStyle={styles.company}
                                                institution_placeholder={"College"}
                                                summary_placeholder={"Summary"}
                                                parentContainerStyle={styles.mt}

                                            />
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </TempLayout>
    )
}
