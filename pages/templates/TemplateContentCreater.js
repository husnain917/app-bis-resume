import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text } from '../../src/components/template1'
import Classes from '../../styles/templates/templateContentCreater.module.css'
import style from "../../styles/templates/template1.module.scss";
import { sampleData } from "../../constants/sampleData";
import EducationHistory from '../../src/components/templateContentCreater/EducationHistory'
import useStoreData from '../../src/components/templateMarket/useStoreData';
import Link from "next/link";
import { Tooltip } from "react-tippy";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { Row } from "antd";
import { Image, } from "@chakra-ui/react";
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

import ImageSection from '../../src/components/commonSection/ImageSection';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import RowSkill from '../../src/components/commonSection/RowSkill';
import Project from '../../src/components/commonSection/Project';
import Organization from '../../src/components/commonSection/Organization';
import Certificate from '../../src/components/commonSection/Certificate';
import Language from '../../src/components/commonSection/Language';
import Interest from '../../src/components/commonSection/Interest';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import { HStack } from '@chakra-ui/react'
import { Flex, } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import WorkExperience from '../../src/components/commonSection/WorkExperience';


import {
    CERTIFICATE,
    EDUCATION,
    INTEREST,
    LANGUAGES,
    ORGANIZATION,
    PROJECT,
    SKILL,
    WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';



export default function TemplateContentCreater() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();

    return (
        <TempLayout
            education={true}
            work={true}

        >

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
                <div className={Classes.mainDiv} >
                    <Box ml={["", , , "5%", "13%", "25%"]} >
                        <div className={Classes.innerMainDiv} >

                            <div className={Classes.innerMainDiv1}>
                                <Box display="flex" flexDirection="row"  >


                                    <Box w="50%" marginTop="30px" >


                                        <Box style={{ overflow: 'hidden' }} >
                                            <Name
                                                FName={true}
                                                SName={true}
                                                direction="column"
                                                FNameStyle={Classes.name}
                                                SNameStyle={Classes.name}


                                            />

                                        </Box>

                                        <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%"></Box>

                                        <Profession

                                            professionStyle={Classes.profession}

                                        />

                                    </Box>
                                    <Box w="50%" height={300} display='flex' justifyContent='center' alignItems='center' >
                                        <Box borderRadius="100%" >
                                            <ImageSelector
                                                height={"200px"}
                                                width={"200px"}

                                            />
                                        </Box>
                                    </Box>



                                </Box>
                                <div className={Classes.ProfileIcons}>
                                    <Box display="flex" flexDirection="row" justifyContent="space-around" padding="10px 0px">
                                        <Box display="flex" mt="1">

                                            <Contact
                                                location={true}
                                                locationPlaceholder={"City"}
                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />
                                        </Box>

                                        <Box display="flex" mt="1">

                                            <Contact
                                                email={true}

                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />


                                        </Box>
                                        <Box display="flex" mt="1">

                                            <Contact
                                                phone={true}

                                                iconSize={'30px'}
                                                iconColor="black"
                                                circleIcon={true}
                                                style={Classes.contact}
                                            />

                                        </Box>


                                    </Box>

                                </div>

                                <div className={Classes.profileDiv}>
                                    <About

                                        aboutStyle={Classes.description}
                                        aboutPlaceholder={"Profile Summary"}

                                    />



                                    {resumeData?.work?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.work && (
                                                    <SectionSideMenu
                                                        bg={'black'}
                                                        onHide={() => setShow({ ...show, work: false })}
                                                        onDelete={WORK}
                                                    />
                                                )}
                                                {/* Work Experience Heading  */}
                                                <div className={Classes.workExp}>
                                                    <div className={Classes.bgImage}>
                                                        <Box marginLeft="35%">

                                                            <Heading
                                                                title="WORK EXPERIENCE"
                                                                fontSize="23px"
                                                                fontWeight={900}
                                                                minW="700px"
                                                                maxW="700px"
                                                                onSideSectionShow={() =>
                                                                    setShow({ ...show, work: true })
                                                                }
                                                            />
                                                        </Box>

                                                    </div>
                                                </div>
                                            </HStack>
                                            {/* Work Experience Components */}
                                            <WorkExperience

                                                position={true}
                                                position_placeholder={"Position"}
                                                date={true}
                                                summary={true}
                                                startDate_placeholder={"Start Date"}
                                                endDate_placeholder={"End Date"}

                                                postionStyle={Classes.pos}


                                                dateStyle={Classes.date}
                                                summaryStyle={Classes.description}
                                                summary_placeholder={"Summary"}

                                            />
                                        </>
                                    )}




                                    <div>
                                        {resumeData?.education?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'}>
                                                    {/* Section Side Menu */}
                                                    {show.education && (
                                                        <SectionSideMenu
                                                            bg={'black'}
                                                            onHide={() =>
                                                                setShow({ ...show, education: false })
                                                            }
                                                            onDelete={EDUCATION}
                                                        />
                                                    )}
                                                    {/* Heading For Education Section  */}
                                                    <div className={Classes.workExp}>
                                                        <div className={Classes.bgImage}>
                                                            <Box marginLeft="40%">
                                                                <Heading
                                                                    title="EDUCATION"
                                                                    fontSize="23px"
                                                                    fontWeight={900}



                                                                    margin={'0px 0px 10px 0px'}
                                                                    minW="700px"
                                                                    maxW="700px"
                                                                    onSideSectionShow={() =>
                                                                        setShow({ ...show, education: true })
                                                                    }
                                                                />
                                                            </Box>

                                                        </div>

                                                    </div>

                                                </HStack>
                                                {/* Education Components */}
                                                <Education
                                                    institution={true}
                                                    date={true}
                                                    summary={true}
                                                    summaryStyle={Classes.description}
                                                    dateStyle={Classes.date}
                                                    institutionStyle={Classes.company}
                                                    institution_placeholder={"College"}
                                                    summary_placeholder={"Summary"}
                                                    startDate_placeholder={"Start Date"}
                                                    endDate_placeholder={"End Date"}


                                                />
                                            </>
                                        )}
                                    </div>

                                </div>

                                <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" mb="5%"></Box>





                            </div>





                        </div>
                    </Box>
                </div>
            </div >



        </TempLayout >







    )
}
