import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../src/components/commonSection/Name';
import style from '../../styles/templates/template1.module.scss';
import styles from "../../styles/designerTemplate.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import Interest from '../../src/components/commonSection/Interest';
import Language from '../../src/components/commonSection/Language';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../src/components/commonSection/About';
import {
    EDUCATION,
    SKILL,
    WORK,
    INTEREST,
    LANGUAGES,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import {
    FaUserAlt,
    FaBookOpen,
    FaSignLanguage
} from "react-icons/fa";
import Underline from '../../src/components/digitalTemplate/Underline';
import { MdCastForEducation } from 'react-icons/md';
import { IoLanguageOutline } from 'react-icons/io5';

export default function Designer_Template() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        <>
            <TempLayout work={true} education={true} skills={true} interest={true} languages={true}>
                <Link href={'/templates'}>
                    <div style={{ position: 'fixed', top: '30px', right: '30px' }}>
                        <Tooltip title="Change Template" arrow distance={20}>
                            <div className={style.swap}>
                                <img src="/icons/swap.png" />
                            </div>
                        </Tooltip>
                    </div>
                </Link>
                <Flex
                    justifyContent={{ base: 'none', md: 'center' }}
                    overflow="auto"
                    flexDir={'column'}
                    alignItems={{ sm: 'none', md: 'center' }}
                    bg={{ md: 'none', lg: 'blackAlpha.100' }}
                    className={`${Classes.main}`}
                >
                    <Box
                        w="100%"
                        minW="850px"
                        maxW="850px"
                        mb={'20px'}
                        mx={'20px'}
                        mt="100px"
                    >
                        {/* profile container */}
                        <Box
                            backgroundColor={'#253439'}
                            padding={'30px'}
                            width={'100%'}
                        >
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                width={'100%'}
                            >
                                <Box
                                    width={'50%'}
                                >
                                    <Name
                                        FName={true}
                                        SName={true}
                                        direction="column"
                                        FNameStyle={styles.nameStyle}
                                        SNameStyle={styles.nameStyle}
                                    />
                                </Box>
                                <Underline
                                    height='0.1em'
                                    width='50%'
                                    bgColor='#fff'
                                />
                            </Box>
                            <Profession
                                professionStyle={styles.profileSubTitle}
                            />
                        </Box>

                        {/* avatar container */}
                        <Box
                            backgroundColor={'#423E3A'}
                            display={'flex'}
                            width={'100%'}
                            marginTop={'2px'}
                        >
                            <Box
                                width={'30%'}
                                padding={'10px 0px 10px 20px'}
                            >
                                <ImageSelector
                                    minWidth="220px"
                                    maxWidth="220px"
                                    maxHeight="220px"
                                    minHeight="220px"
                                />
                            </Box>
                            <Box
                                width={'70%'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Contact
                                    phone={true}
                                    email={true}
                                    linkedinURL={true}
                                    website={true}
                                    circleIcon={true}
                                    circleBg="#fff"
                                    circleSize="28px"
                                    iconColor="#423E3A"
                                    margin={'5px 0px 0px 0px'}
                                    style={styles.profileText}
                                />
                            </Box>
                        </Box>
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            marginTop={'10px'}
                        >
                            {/* left contaiiner */}
                            <Box
                                width={'40%'}
                                backgroundColor={'#CEB99E'}
                                padding={'20px 15px 0px 15px'}
                                borderRadius={'15px 15px'}
                            >
                                {/* _____________ About me _____________ */}
                                <Heading
                                    title={'ABOUT ME'}
                                    color="#253439"
                                    fontSize={'20px'}
                                    fontWeight={700}
                                    circleSize="48px"
                                    circleBg="#253439"
                                    circleIconHeading={true}
                                    icon={(props) => (
                                        <FaUserAlt
                                            {...props}
                                            size={22}
                                            color={'#fff'}
                                        />
                                    )}
                                />
                                <About
                                    minW="100%"
                                    maxW="100%"
                                    aboutStyle={Classes.aboutText}
                                    textColor="#000000"
                                    fontSize="15px"
                                    fontWeight={600}
                                    margin={'5px 10px 30px 10px'}
                                />
                                {/* _____________ Skill _____________ */}
                                {resumeData?.skills?.visible && (
                                    <>
                                        <Box
                                            mt={5}
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Heading
                                                title={'SKILLS'}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, skills: true })
                                                }
                                                color="#253439"
                                                fontSize={'20px'}
                                                fontWeight={700}
                                                circleSize="48px"
                                                circleBg="#253439"
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <FaSignLanguage
                                                        {...props}
                                                        size={22}
                                                        color={'#fff'}
                                                    />
                                                )}
                                            />
                                            {show.skills && (
                                                <SectionSideMenu
                                                    onHide={() => setShow({ ...show, skills: false })}
                                                    bg="#253439"
                                                    iconColor={'#fff'}
                                                    onDelete={SKILL}
                                                />
                                            )}
                                        </Box>
                                        <Skill
                                            skillStyle={styles.skillText}
                                            progressBar={true}
                                            strokeWidth="2"
                                            lineStyle={styles.line}
                                            strokeColor="#000000"
                                            trailColor="#fff"
                                            percentageStyle={styles.percent}
                                            parentContainerStyle={styles.rightContainerWork}
                                        />
                                    </>
                                )}
                                {/* _____________ Interst _____________ */}
                                {resumeData?.hobbies?.visible && (
                                    <>
                                        <Box
                                            mt={5}
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Heading
                                                title="INTEREST"
                                                color="#253439"
                                                fontSize={'20px'}
                                                fontWeight={700}
                                                circleSize="48px"
                                                circleBg="#253439"
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <FaBookOpen
                                                        {...props}
                                                        size={22}
                                                        color={'#fff'}
                                                    />
                                                )}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, interest: true })
                                                }
                                            />
                                            {show.interest && (
                                                <SectionSideMenu
                                                    bg="#253439"
                                                    iconColor={'#fff'}
                                                    onHide={() => setShow({ ...show, interest: false })}
                                                    onDelete={INTEREST}
                                                />
                                            )}
                                        </Box>
                                        {/* Interest Component  */}
                                        <Interest
                                            interestStyle={styles.skillText}
                                            parentContainerStyle={styles.rightContainerWork}
                                        />
                                    </>
                                )}
                                {/* _____________ Languages _____________ */}
                                {resumeData?.languages?.visible && (
                                    <>
                                        <Box
                                            mt={5}
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Heading
                                                title="LANGUAGES"
                                                color="#253439"
                                                fontSize={'20px'}
                                                fontWeight={700}
                                                circleSize="48px"
                                                circleBg="#253439"
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <IoLanguageOutline
                                                        {...props}
                                                        size={22}
                                                        color={'#fff'}
                                                    />
                                                )}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, languages: true })
                                                }
                                            />
                                            {show.languages && (
                                                <SectionSideMenu
                                                    bg="#253439"
                                                    iconColor={'#fff'}
                                                    onHide={() => setShow({ ...show, languages: false })}
                                                    onDelete={LANGUAGES}
                                                />
                                            )}
                                        </Box>
                                        {/* Language Component */}
                                        <Language
                                            langStyle={styles.skillText}
                                            langContainerStyle={styles.rightContainerWork}
                                        />
                                    </>
                                )}
                            </Box>
                            {/* right container */}
                            <Box
                                width={'55%'}
                                padding={'20px 15px 0px 15px'}
                            >
                                {/* _____________ Work _____________ */}
                                {resumeData?.work?.visible && (
                                    <>
                                        <Box
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Heading
                                                title="WORK EXPERIENCE"
                                                color="#253439"
                                                fontSize={'20px'}
                                                fontWeight={700}
                                                circleSize="48px"
                                                circleBg="#253439"
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <MdCastForEducation
                                                        {...props}
                                                        size={22}
                                                        color={'#fff'}
                                                    />
                                                )}
                                                onSideSectionShow={() => setShow({ ...show, work: true })}
                                            />
                                            {show.work && (
                                                <SectionSideMenu
                                                    onHide={() => setShow({ ...show, work: false })}
                                                    bg="#253439"
                                                    iconColor={'#fff'}
                                                    onDelete={WORK}
                                                />
                                            )}
                                        </Box>
                                        {/* _____________ Work Experience _____________ */}
                                        <WorkExperience
                                            company={true}
                                            position={true}
                                            date={true}
                                            summary={true}
                                            companyStyle={Classes.company}
                                            positionStyle={Classes.programText}
                                            dateStyle={Classes.date}
                                            summaryStyle={Classes.description}
                                            parentContainerStyle={styles.rightContainerWork}
                                            textColor="#000000"
                                        />
                                    </>
                                )}
                                {/* _____________ Education _____________ */}
                                {resumeData?.education?.visible && (
                                    <>
                                        <Box
                                            mt={5}
                                            display={'flex'}
                                            justifyContent={'space-between'}
                                        >
                                            <Heading
                                                title="EDUCATION"
                                                color="#253439"
                                                fontSize={'20px'}
                                                fontWeight={700}
                                                circleSize="48px"
                                                circleBg="#253439"
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <MdCastForEducation
                                                        {...props}
                                                        size={22}
                                                        color={'#fff'}
                                                    />
                                                )}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, education: true })
                                                }
                                            />
                                            {show.education && (
                                                <SectionSideMenu
                                                    onHide={() => setShow({ ...show, education: false })}
                                                    bg="#253439"
                                                    iconColor={'#fff'}
                                                    onDelete={EDUCATION}
                                                />
                                            )}
                                        </Box>
                                        <Education
                                            degree={true}
                                            institution={true}
                                            date={true}
                                            summary={true}
                                            parentContainerStyle={styles.rightContainerWork}
                                            institutionStyle={Classes.company}
                                            degreeStyle={Classes.programText}
                                            dateStyle={Classes.date}
                                            summaryStyle={Classes.description}
                                            degree_placeholder="Study Program"
                                            textColor="#000000"
                                        />
                                    </>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </TempLayout>
        </>
    )
}