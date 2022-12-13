
import React from 'react'
import styles from '../../styles/templates/templatebs.module.css'
import style from "../../styles/templates/template1.module.scss";
import Link from "next/link";
import { Tooltip } from "react-tippy";
import useStoreData from '../../src/components/useStoreData'
import { Box, HStack } from '@chakra-ui/react'
import Profile from '../../src/components/template1/Profile'
import Image from 'next/image'
import { Text } from '../../src/components/template1'
import ImageSelector from '../../src/components/imageSelector';
import Education from '../../src/components/commonSection/Education';
import {
    CERTIFICATE,
    EDUCATION,
    SKILL,
    WORK,
    REFERENCE
} from '../../src/components/tempSectionSide/SectionSideConstant';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import TempLayout from '../../src/components/tempNav/TempLayout';
import Heading from '../../src/components/commonSection/Heading';
import useShow from '../../src/components/tempSectionSide/useShow';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from "../../src/components/commonSection/Reference"
import Contact from '../../src/components/commonSection/Contact';
import Skill from '../../src/components/commonSection/Skill';

import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';


export default function Templatebrand() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();

    return (
        <div style={{ overflow: 'auto' }}>
            <TempLayout work={true} education={true} skills={true} references={true} >
            <ChangeTempBtn />


              
                <div className={styles.mainDiv} >
                    <Box ml={["", , , "5%", "13%", "25%"]} >

                        <div className={`${styles.outerDiv}`}>
                            <div className={styles.innerMainDiv} >
                                <div className={styles.innerMainDiv1}>

                                    <Box height={300} display='flex' pl={35} justifyContent='left' alignItems='center' >
                                        <Box style={{ border: "7px solid white" }} borderRadius="100%" >
                                            <ImageSelector
                                                height={"200px"}
                                                width={"200px"}

                                            />
                                        </Box>
                                    </Box>
                                    <div className={styles.innerDivEducation}>

                                        <div >
                                           
                                       
                                            <div>

                                                {resumeData?.education?.visible && (
                                                    <>
                                                        <HStack alignItems={'flex-start'} mt={'20px'}>
                                                            <Box ml={'-15px'}>
                                                                {show.education && (
                                                                    <SectionSideMenu
                                                                        onHide={() => setShow({ ...show, education: false })}
                                                                        bg="#005063"
                                                                        iconColor={'#E0EFFA'}
                                                                        onDelete={EDUCATION}
                                                                    />
                                                                )}
                                                            </Box>

                                                            <Heading



                                                                title="EDUCATION"
                                                                color={"black"}
                                                                textMargin={"10px 0px"}

                                                                fontSize={"2.5em"}




                                                                onSideSectionShow={() =>
                                                                    setShow({ ...show, education: true })
                                                                }
                                                            />


                                                        </HStack>

                                                        <Education
                                                            date={true}
                                                            summary={true}
                                                            institution={true}
                                                            summaryStyle={styles.Educationdescription}

                                                            dateStyle={styles.date}
                                                            institutionStyle={styles.company}
                                                            summary_placeholder={"Summary"}
                                                            startDate_placeholder={"Start Year (YYYY)"}
                                                            endDate_placeholder={"End Year (YYYY)"}
                                                            institution_placeholder={"College Name"}
                                                            parentContainerStyle={styles.mt}



                                                        />
                                                    </>
                                                )}
                                            </div>

                                        </div>
                                       
                                        <div>
                                            {resumeData?.skills?.visible && (
                                                <>
                                                    <HStack alignItems={'flex-start'} mt={5}>
                                                        <Box ml={'-15px'}>
                                                            {show.skills && (
                                                                <SectionSideMenu
                                                                    onHide={() => setShow({ ...show, skills: false })}
                                                                    bg="#005063"
                                                                    iconColor={'white'}
                                                                    onDelete={SKILL}
                                                                />
                                                            )}
                                                        </Box>

                                                        <Heading
                                                            title={'EXPERTISE'}
                                                            color="black"
                                                            margin={'20px 0px 0px 0px'}
                                                            onSideSectionShow={() =>
                                                                setShow({ ...show, skills: true })
                                                            }

                                                            textMargin={"10px 0px"}

                                                            fontSize={"2.5em"}
                                                        />
                                                    </HStack>
                                                    <Skill
                                                        cId='bs'

                                                        skillStyle={styles.skillText}
                                                        skillPlaceholder="EXPERTISE"
                                                        progressBar={true}
                                                        strokeWidth="2"
                                                        lineStyle={styles.lineText}
                                                        strokeColor="black"
                                                        trailColor="#fff"
                                                        percentageStyle={styles.percentExp}
                                                        parentContainerStyle={styles.mt}

                                                    />
                                                </>
                                            )}
                                        </div>

                                        {resumeData?.references?.visible && (
                                            <>
                                                <div className={styles.sideMenu}>
                                                    <div>
                                                        <HStack alignItems={'flex-start'} mt={5}>
                                                            <Box ml={'-15px'}>
                                                                {show.references && (
                                                                    <SectionSideMenu
                                                                        onHide={() => setShow({ ...show, references: false })}
                                                                        bg="#005063"
                                                                        iconColor={'white'}
                                                                        onDelete={REFERENCE}
                                                                    />
                                                                )}
                                                            </Box>

                                                            <Box mt="10%">
                                                                <Heading
                                                                    title="REFERENCE"
                                                                    color={"black"}
                                                                    textMargin={"10px 0px"}

                                                                    fontSize={"2.5em"}



                                                                    onSideSectionShow={() =>
                                                                        setShow({ ...show, references: true })
                                                                    }
                                                                />
                                                            </Box>
                                                        </HStack>
                                                        <Reference
                                                            name={true}

                                                            phone={true}
                                                            namePlaceholder={"Reference Name"}
                                                            phonePlaceholder={"Contact Number"}
                                                            phoneStyle={styles.profileText}
                                                            emailStyle={styles.profileText}
                                                            nameStyle={styles.profileText}
                                                            parentContainerStyle={styles.mt}

                                                        />
                                                    </div>

                                                </div>
                                            </>
                                        )}


                                    </div>
                                </div>

                                <div className={styles.innerMainDiv2} >
                                    <Profile cId='bs' />
                                    <div className={styles.innerDivExperiance}>
                                        <div>
                                            {resumeData?.work?.visible && (
                                                <>
                                                    <HStack alignItems={'flex-start'} >
                                                        <Box ml={'-27px'}>
                                                            {show.work && (
                                                                <SectionSideMenu
                                                                    onHide={() => setShow({ ...show, work: false })}
                                                                    bg="#005063"
                                                                    iconColor={'white'}
                                                                    onDelete={WORK}
                                                                />
                                                            )}
                                                        </Box>

                                                        <Heading
                                                            maxW={"450"}
                                                            minW={'450'}
                                                            fontSize={"2.5em"}

                                                        
                                                            textMargin={"30px 0px 10px 20px"}

                                                            color={"black"}
                                                            title="WORK EXPERIENCE"




                                                            onSideSectionShow={() => setShow({ ...show, work: true })}
                                                        />
                                                    </HStack>
                                                    <WorkExperience

                                                        position={true}
                                                        position_placeholder={"Position"}
                                                        date={true}
                                                        summary={true}
                                                        company={true}
                                                        company_placeholder={"Company Name"}
                                                        companyStyle={styles.company1}
                                                        startDate_placeholder={"Start Date"}
                                                        endDate_placeholder={"End Date"}




                                                        dateStyle={styles.date}
                                                        summaryStyle={styles.description}
                                                        summary_placeholder={"Summary"}


                                                        parentContainerStyle={styles.mt}



                                                    />
                                                </>
                                            )}



                                        </div>
                                        <div >
                                            <Text
                                                value={resumeData?.contact?.heading}
                                                placeholder="Contact"
                                                customclass={`${styles.templateceoHeadingTitle}`}
                                                path={"contact.heading"}
                                                editable={false}
                                            />
                                            <div className={`${styles.emailDiv}`}>
                                                <Text
                                                    placeholder="Email:"
                                                    customclass={`${styles.headingtextN}`}
                                                    editable={false}
                                                />
                                                <Contact
                                                    email={true}
                                                    emailPlaceholder={"abc@gmail.com"}
                                                    style={styles.proContcat}

                                                />
                                            </div>
                                            <div className={`${styles.emailDiv}`}>
                                                <Text
                                                    placeholder="Mobile No:"
                                                    customclass={`${styles.headingtextN}`}
                                                    editable={false}
                                                />

                                                <Contact
                                                    phone={true}
                                                    phonePlaceholder={"+9230000000"}
                                                    style={styles.proContcat}

                                                />
                                            </div>
                                            <div className={`${styles.addressDiv}`}>


                                                <Contact
                                                    location={true}
                                                    style={styles.contactAddress}
                                                    locationPlaceholder={"Address"}

                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.dotsImgDiv}`}>
                                        <Image src='/dotsImage.jpg' height='268px' width='429px' />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Box>
                </div>
            </TempLayout>
        </div>
        

    )
}