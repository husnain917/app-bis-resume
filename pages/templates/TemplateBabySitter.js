import React from 'react'
import { Box } from '@chakra-ui/react'
import Profile from '../../src/components/TemplateBabySitter/Profile'
import { Text } from '../../src/components/template1'
import Classes from '../../styles/templates/templatebabysitter.module.css'
import style from "../../styles/templates/template1.module.scss";
import Skills from '../../src/components/TemplateBabySitter/Skills'
import { sampleData } from "../../constants/sampleData";
import Image from 'next/image'
import useStoreData from '../../src/components/templateMarket/useStoreData';
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
} from '../../src/components/tempSectionSide/SectionSideConstant';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import Education from '../../src/components/commonSection/Education';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Skill from "../../src/components/commonSection/Skill"
import Link from "next/link";
import { Tooltip } from "react-tippy";

export default function TemplateBabySitter() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();

    return (
        <div className={style.main}>
            <TempLayout work={true} education={true} skills={true}>

                <Link href={'/templates'}>
                    <div className={style.swapCont}>
                        <Tooltip title="Change Template" arrow distance={20}>
                            <div className={style.swap} >
                                <img src='/icons/swap.png' />
                            </div>
                        </Tooltip>
                    </div>
                </Link>
                <div className={Classes.mainDiv} >
                    <Box ml={["", , , "5%", "13%", "25%"]} >

                        <div className={Classes.innerMainDiv} >
                            <div className={Classes.innerMainDiv1}>
                                <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                                    <Box style={{ border: "7px solid white" }} borderRadius="100%" >
                                        <ImageSelector
                                            height={"200px"}
                                            width={"200px"}

                                        />
                                    </Box>
                                </Box>


                                < h2 className={Classes.ProfileCon}>INFO</h2>


                                <Box style={{ marginLeft: 15 }}>





                                    <div className={Classes.contactIconCotent}>
                                        <h2 className={Classes.infoCon}>Address</h2>
                                        <Contact
                                            location={true}
                                            locationPlaceholder={"Write a Address"}

                                            style={Classes.contactDiv}


                                        />
                                    </div>
                                    <h2 className={Classes.infoCon}>Contact</h2>

                                    <div className={Classes.contactIconCotent}>
                                        <h6 ><b>Phone:</b></h6>
                                        <Contact
                                            phone={true}
                                            phonePlaceholder={"Contact No"}

                                            style={Classes.contactDiv}
                                        />

                                    </div>
                                    <div className={Classes.contactIconCotent}>
                                        <h6 ><b>Email:</b></h6>

                                        <Contact
                                            email={true}
                                            emailPlaceholder={"Email Address"}

                                            style={Classes.contactDiv}
                                        />

                                    </div>


                                </Box>

                                {/* <div >
                                <Text
                                    value={resumeData?.education?.heading}
                                    placeholder="EDUCATION"
                                    path={"education.heading"}
                                    customclass={`${Classes.ProfileCon}`}

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
                            </div> */}
                                {/*Pro Skill Box and language*/}
                                <div >

                                    {resumeData?.education?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'} mt={'20px'}>
                                                <Box w="20px" ml={'-15px'}>
                                                    {show.education && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, education: false })}
                                                            bg="#2A78AB"
                                                            iconColor={'#E0EFFA'}
                                                            onDelete={EDUCATION}
                                                        />
                                                    )}
                                                </Box>

                                                <Heading



                                                    title="EDUCATION"
                                                    color={"black"}
                                                    fontWeight={900}
                                                    textMargin={"10px 10px"}

                                                    fontSize={"1.7em"}




                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, education: true })
                                                    }
                                                />


                                            </HStack>
                                            <Education
                                                institution={true}
                                                date={true}
                                                summary={true}
                                                summaryStyle={Classes.Educationdescription}
                                                dateStyle={Classes.date}
                                                institutionStyle={Classes.company}
                                                institution_placeholder={"College"}
                                                summary_placeholder={"Summary"}
                                            />
                                        </>
                                    )}
                                </div>

                                {/* <Box flexDirection={"row"} >

                                    <Skill
                                        progressBar={true}
                                        strokeWiidth={5}
                                        lineStyle={Classes.line}
                                        strokeColor={"red"}
                                        trailColor={"black"}
                                        skillStyle={Classes.skillText}
                                        direction="column"
                            
                                        percentageStyle={Classes.percent}
                                    


                                    />

                                </Box> */}
                                <Box mb="10%">
                                    {resumeData?.skills?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'} mt={5}>
                                                <Box w="20px" ml={'-15px'}>
                                                    {show.skills && (
                                                        <SectionSideMenu
                                                            onHide={() => setShow({ ...show, skills: false })}
                                                            bg="#E0EFFA"
                                                            iconColor={'#2A78AB'}
                                                            onDelete={SKILL}
                                                        />
                                                    )}
                                                </Box>

                                                <Heading
                                                    title={'SKILLS'}
                                                    color={"black"}
                                                    fontWeight={900}
                                                    textMargin={"10px 10px"}

                                                    fontSize={"1.7em"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                />

                                            </HStack>
                                             <Skill
                                                progressBar={true}
                                                strokeWiidth={5}
                                                lineStyle={Classes.line}
                                                strokeColor={"red"}
                                                trailColor={"black"}
                                                skillStyle={Classes.skillText}
                                                direction="column"

                                                percentageStyle={Classes.percent}



                                            /> 

                                        </>
                                    )}


                                </Box>

                            </div>


                            <div className={Classes.innerMainDiv2} >
                                <Profile cId='babysitter' />

                                {/* <div>
                                    <Text
                                        value={resumeData?.profile?.heading}
                                        placeholder="Profile"
                                        customclass={`${Classes.ProfileCon}`}
                                        path={"profile.heading"}
                                        editable={false}
                                    />
                                    <div>
                                        <Text
                                            value={resumeData?.objective?.body}
                                            placeholder="Profile Summary"

                                            customclass={`${style.managerFName} ${Classes.managerPadding} `}
                                            path={"objective.body"}
                                        />
                                    </div>
                                </div> */}



                                <Heading
                                    title={'PROFILE'}

                                    fontSize={23}

                                    fontWeight={900}
                                    font-size={"1.7em"}


                                />
                                <About

                                    aboutStyle={Classes.description}
                                    aboutPlaceholder={"Profile Summary"}

                                />

                                {/* <div >
                                <Text
                                    value={resumeData?.work?.heading}
                                    placeholder="Experience History"
                                    customclass={`${Classes.ProfileCon}`}

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
                            </div> */}


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

                                                <Heading
                                                    minW={'480px'}
                                                    maxW={'480px'}
                                                    font-size={"1.7em"}
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
                                            </HStack>
                                            {/* _____________ Work Experience _____________ */}
                                            <WorkExperience

                                                position={true}
                                                position_placeholder={"Position"}
                                                date={true}
                                                summary={true}
                                                startDate_placeholder={"Start Date"}
                                                endDate_placeholder={"End Date"}

                                                postionStyle={Classes.date}


                                                dateStyle={Classes.date}
                                                summaryStyle={Classes.description}
                                                summary_placeholder={"Summary"}


                                            />
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>
                    </Box>
                </div>
            </TempLayout>
        </div>

    )
}


