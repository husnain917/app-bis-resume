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
import MarketLanguages from '../../src/components/templateMarket/MarketLanguages'
import { sampleData } from "../../constants/sampleData";
import EducationHistory from '../../src/components/templateMarket/EducationHistory'
import Image from 'next/image'
import useStoreData from '../../src/components/templateMarket/useStoreData';
import ImageSelector from '../../src/components/imageSelector'
import Profession from '../../src/components/commonSection/Profession';
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
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Certificate from '../../src/components/commonSection/Certificate';
import Skill from '../../src/components/commonSection/Skill'
import Language from '../../src/components/commonSection/Language'





import Link from "next/link";
import { Tooltip } from "react-tippy";

export default function TemplateMarket() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();

    return (
        <div className={style.main}>
            <TempLayout work={true} education={true} skills={true} certificate={true} languages={true}>

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
                    <Box ml={["", , , "5%", "13%", "25%"]} >

                        <div className={styles.innerMainDiv} >
                            <div className={styles.innerMainDiv1}>
                            <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                                    <Box borderRadius="100%" >
                                        <ImageSelector
                                            height={"200px"}
                                            width={"200px"}

                                        />
                                    </Box>
                                </Box>


                                <Profile cId='market' />
                                <Box className={styles.ContactDiv}>
                                    < h2 className={styles.SkillHead}> Contact</h2>
                                    <Box  >
                                        <div className={styles.contactIconMain} >






                                            <Contact
                                                phone={true}
                                                email={true}
                                                linkedinURL={true}
                                                website={true}
                                                circleIcon={true}
                                                circleBg="#fff"
                                                circleSize="30px"
                                                iconColor="#1C2125"
                                                style={styles.ContactText}
                                                margin="5px 0px"
                                            />

                                        </div>
                                    </Box>
                                </Box>







                                {/*Pro Skill Box and language*/}

                                <div>




















                                    {resumeData?.skills?.visible && (
                                        <>
                                            <div className={styles.sideMenu}>
                                                <div>
                                                    {/* skill Heading */}
                                                    <Heading
                                                        title={'Skill'}
                                                        headBg={'black'}


                                                        color={'white'}
                                                        fontSize={20}
                                                        fontWeight="600"
                                                        textPadding={'0px 0px 1px 0px'}
                                                        padding={'0px 0px 0px 5px'}
                                                        margin={"30px 0px 0px 0px"}

                                                        letterSpacing={3}
                                                        minW={350}
                                                        maxW={350}
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, skill: true })

                                                        }
                                                    />

                                                    {/* Skill  Components */}
                                                    <div className={styles.skillMain}>

                                                        <Skill
                                                            minW={320}

                                                            cId='market'
                                                            progressBar={true}
                                                            lineStyle={styles.line}
                                                            trailColor="#fff"
                                                            trailWidth="6"
                                                            DndDirection="horizontal"
                                                            skillStyle={styles.skillTxt}
                                                            percentageStyle={styles.percentageStyle}
                                                            minWText="220px"
                                                            maxWText="220px"
                                                            percentStyle={styles.percent}
                                                            strokeColor={'red'}
                                                        />
                                                    </div>
                                                </div>
                                                {/* Section Side Menu */}
                                                <div className={styles.sideMenuBox}>
                                                    {show.skill && (
                                                        <>
                                                            <SectionSideMenu
                                                                onHide={() => setShow({ ...show, skill: false })}
                                                                onDelete={SKILL}
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}



                                    {resumeData?.languages?.visible && (
                                        <>
                                            <div className={styles.sideMenu}>
                                                <div>
                                                    {/* skill Heading */}

                                                    <Heading
                                                        title={'Language'}
                                                        headBg={'black'}

                                                        color={'white'}
                                                        fontSize={20}
                                                        fontWeight="600"

                                                        textPadding={'0px 0px 1px 0px'}
                                                        padding={'0px 0px 0px 5px'}
                                                        margin={"30px 0px 0px 0px"}
                                                    
                                                        letterSpacing={3}
                                                        minW={350}
                                                        maxW={350}
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, languages: true })

                                                        }
                                                    />


                                                    {/* Skill  Components */}
                                                    <div className={styles.skillMain}>
                                                        <Language
                                                            cId='market'
                                                            progressBar={true}
                                                            lineStyle={styles.line}
                                                            trailColor="#fff"
                                                            trailWidth="6"
                                                            langStyle={styles.skillTxt}
                                                            percentageStyle={styles.percentageStyle}
                                                            minWText="220px"
                                                            maxWText="220px"
                                                            percentStyle={styles.percent}
                                                            strokeColor={'#005063'}
                                                        


                                                        />

                                                    </div>
                                                </div>
                                                {/* Section Side Menu */}
                                                <div className={styles.sideMenuBox}>
                                                    {show.languages && (
                                                        <>
                                                            <SectionSideMenu
                                                                onHide={() => setShow({ ...show, languages: false })}
                                                                onDelete={LANGUAGES}
                                                            />
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}






                                </div>
                            </div>
                            <div className={styles.innerMainDiv2} >

                                <div>
                                    <Heading
                                        title={'PROFILE'}

                                        fontSize={23}

                                        fontWeight={900}
                                        font-size={"1.7em"}
                                        margin={'15% 0% 5% 0%'}
                                    />
                                    <div className={styles.templateceoHeadingTitle}>
                                        <About
                                            aboutStyle={styles.description}
                                            aboutPlaceholder={"Profile Summary"}


                                        />
                                    </div>
                                </div>
                                <div >

                                    <div
                                    >                                                                    <div>
                                            {resumeData?.work?.visible && (
                                                <>
                                                    <HStack alignItems={'flex-start'} mt={'20px'}>
                                                        <Box ml={'-15px'}>
                                                            {show.work && (
                                                                <SectionSideMenu
                                                                    onHide={() => setShow({ ...show, work: false })}
                                                                    bg="#2A78AB"
                                                                    iconColor={'#E0EFFA'}
                                                                    onDelete={WORK}
                                                                />
                                                            )}
                                                        </Box>

                                                        <Heading



                                                            font-size={"1.7em"}
                                                            font-weight={900}
                                                            textMargin={2}

                                                            color={"black"}
                                                            title="WORK EXPERIENCE"

                                                            height={50}
                                                            fontSize={22}
                                                            fontWeight={900}
                                                            onSideSectionShow={() => setShow({ ...show, work: true })}
                                                        />
                                                    </HStack>
                                                    <div className={styles.templateceoHeadingTitle}>



                                                        {/* _____________ Work Experience _____________ */}
                                                        <WorkExperience


                                                            date={true}
                                                            position={true}
                                                            summary={true}

                                                            startDate_placeholder={"Start Date"}
                                                            endDate_placeholder={"End Date"}
                                                            position_placeholder={"Position"}



                                                            dateStyle={styles.date}
                                                            summaryStyle={styles.description}
                                                            summary_placeholder={"Summary"}


                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Education */}
                                <div
                                >                                                                    <div>
                                        {resumeData?.education?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'} mt={'20px'}>
                                                    <Box ml={'-15px'}>
                                                        {show.education && (
                                                            <SectionSideMenu
                                                                onHide={() => setShow({ ...show, education: false })}
                                                                bg="#2A78AB"
                                                                iconColor={'#E0EFFA'}
                                                                onDelete={EDUCATION}
                                                            />
                                                        )}
                                                    </Box>
                                                    {/* Heading For Education Section  */}
                                                    <Heading
                                                        title="EDUCATION"
                                                        fontSize="22px"
                                                        fontWeight={900}
                                                        margin={'30px 0px 0px 0px'}
                                                        textMargin={2}

                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, education: true })
                                                        }
                                                    />

                                                </HStack>
                                                <div className={styles.templateceoHeadingTitle}>

                                                    {/* _____________ Work Experience _____________ */}
                                                    <Education
                                                        institution={true}
                                                        date={true}
                                                        summary={true}
                                                        summaryStyle={styles.description}
                                                        dateStyle={styles.date}
                                                        institutionStyle={styles.company}
                                                        institution_placeholder={"College"}
                                                        summary_placeholder={"Summary"}
                                                        startDate_placeholder={"Start Date"}
                                                        endDate_placeholder={"End Date"}


                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div>
                                        {/* <div>
                                        <WorkCertificate
                                            data={
                                                resumeData?.certifications?.items.length
                                                    ? [...resumeData?.certifications?.items]
                                                    : [...sampleData?.data?.certifications?.items]
                                            }
                                            color={theme.color}
                                            updater={updater}
                                        />
                                    </div> */}
                                        {resumeData?.certifications?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'} mt={'20px'}>
                                                    <Box ml={'-15px'}>
                                                        {show.certificates && (
                                                            <SectionSideMenu
                                                                onHide={() =>
                                                                    setShow({ ...show, certificates: false })
                                                                }
                                                                bg="#2A78AB"
                                                                iconColor={'#E0EFFA'}
                                                                onDelete={CERTIFICATE}
                                                            />
                                                        )}
                                                    </Box>
                                                    <Heading


                                                        title="CERTIFICATIONS"
                                                        textMargin={2}



                                                        fontSize={22}
                                                        fontWeight={900}


                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, certificates: true })
                                                        }
                                                    />
                                                </HStack>

                                                <div className={styles.templateceoHeadingTitle}>

                                                    <Certificate
                                                        certificate={true}
                                                        issueDate={true}

                                                        parentContainerStyle={styles.mt}
                                                        certificateStyle={styles.date}

                                                        issueDateStyle={styles.date}
                                                        instituteStyle={styles.company}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </TempLayout >
        </div >

    )
}