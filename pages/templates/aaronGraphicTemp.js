import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../src/components/commonSection/Name';
import style from '../../styles/templates/template1.module.scss';
import styles from "../../styles/graphicTemplate.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import Organization from '../../src/components/commonSection/Organization';
import Interest from '../../src/components/commonSection/Interest';
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
    ORGANIZATION,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import Underline from "../../src/components/aaronGraphicTemp/Underline";

export default function Aaron_Graphic_Temp() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        <>
            <TempLayout work={true} education={true} skills={true} interest={true} organization={true}>
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
                        display="flex"
                        flexDir="row"
                        w="100%"
                        minW="850px"
                        maxW="850px"
                        mb={'20px'}
                        mx={'20px'}
                        mt="100px"
                    >
                        {/* =============== First Section ============== */}
                        <Box
                            w="100%"
                            bgColor="#000000"
                            py={2}
                            px={8}
                        >
                            {/* _____________ Profile _____________ */}
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                                margin={'10px 0px 20px 0px'}
                            >
                                <Name
                                    FName={true}
                                    SName={true}
                                    direction="row"
                                    FNameStyle={styles.nameStyle}
                                    SNameStyle={styles.nameStyle}
                                />
                                <Profession
                                    professionStyle={styles.profileSubTitle}
                                />
                            </Box>
                            {/* _____________ Contact Us _____________ */}
                            <Box>
                                <Underline
                                    height='0.1em'
                                    width='100%'
                                    bgColor='#fff'
                                />
                                <Box
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                    padding={'10px 0px'}
                                >
                                    <Contact
                                        phone={true}
                                        circleIcon={true}
                                        circleBg="#fff"
                                        circleSize="25px"
                                        iconColor="#000000"
                                        parentStyle={styles.contactFont}
                                        style={Classes.profileText}
                                    />
                                    <Contact
                                        email={true}
                                        circleIcon={true}
                                        circleBg="#fff"
                                        circleSize="25px"
                                        iconColor="#000000"
                                        parentStyle={styles.contactFont}
                                        style={Classes.profileText}
                                    />
                                    <Contact
                                        linkedinURL={true}
                                        circleIcon={true}
                                        circleBg="#fff"
                                        circleSize="25px"
                                        iconColor="#000000"
                                        parentStyle={styles.contactFont}
                                        style={Classes.profileText}
                                    />
                                    <Contact
                                        website={true}
                                        circleIcon={true}
                                        circleBg="#fff"
                                        circleSize="25px"
                                        iconColor="#000000"
                                        parentStyle={styles.contactFont}
                                        style={Classes.profileText}
                                    />
                                </Box>
                                <Underline
                                    height='0.1em'
                                    width='100%'
                                    bgColor='#fff'
                                />
                            </Box>
                            {/* =============== Second Section ============== */}
                            <Box
                                width={'100%'}
                                display={'flex'}
                                justifyContent={'space-between'}
                                margin={'30px 0px 10px 0px'}
                            >
                                {/* left container */}
                                <Box
                                    width={'55%'}
                                    paddingRight={'30px'}
                                    borderRight={'1px solid #fff'}
                                >
                                    {/* _____________ Education _____________ */}
                                    {resumeData?.education?.visible && (
                                        <>
                                            <Box
                                                display={'flex'}
                                                justifyContent={'space-between'}
                                            >
                                                <Heading
                                                    color={'#fff'}
                                                    title="EDUCATION"
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg="#fff"
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, education: true })
                                                    }
                                                />
                                                {show.education && (
                                                    <SectionSideMenu
                                                        onHide={() => setShow({ ...show, education: false })}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
                                                        onDelete={EDUCATION}
                                                    />
                                                )}
                                            </Box>
                                            <Education
                                                degree={true}
                                                institution={true}
                                                date={true}
                                                summary={true}
                                                parentContainerStyle={styles.parentDiv}
                                                institutionStyle={Classes.company}
                                                degreeStyle={Classes.programText}
                                                dateStyle={Classes.date}
                                                summaryStyle={Classes.description}
                                                degree_placeholder="Study Program"
                                                textColor="#fff"
                                            />
                                        </>
                                    )}
                                    <Underline
                                        height='0.1em'
                                        width='100%'
                                        bgColor='#fff'
                                    />
                                    {/* _____________ Work _____________ */}
                                    {resumeData?.work?.visible && (
                                        <>
                                            <Box
                                                display={'flex'}
                                                justifyContent={'space-between'}
                                                mt={'15px'}
                                            >
                                                <Heading
                                                    color={'#fff'}
                                                    title="WORK EXPERIENCE"
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg="#fff"
                                                    onSideSectionShow={() => setShow({ ...show, work: true })}
                                                />
                                                {show.work && (
                                                    <SectionSideMenu
                                                        onHide={() => setShow({ ...show, work: false })}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
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
                                                parentContainerStyle={styles.parentDiv}
                                                textColor="#fff"
                                            />
                                        </>
                                    )}
                                </Box>
                                {/* right container */}
                                <Box
                                    width={'43%'}
                                    paddingLeft={'25px'}
                                    borderLeft={'1px solid #fff'}
                                >
                                    {/* profile section */}
                                    <Box
                                        mb={'15px'}
                                    >
                                        <Heading
                                            title={'PROFILE'}
                                            color="#fff"
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                        />
                                        <About
                                            minW="100%"
                                            maxW="100%"
                                            aboutStyle={Classes.aboutText}
                                            textColor="#fff"
                                            fontSize="16px"
                                            fontWeight={600}
                                        />
                                    </Box>
                                    <Underline
                                        height='0.1em'
                                        width='100%'
                                        bgColor='#fff'
                                    />
                                    {/* _____________ Skill _____________ */}
                                    {resumeData?.skills?.visible && (
                                        <>
                                            <Box
                                                display={'flex'}
                                                justifyContent={'space-between'}
                                                mt={'15px'}
                                            >
                                                <Heading
                                                    title={'SKILLS'}
                                                    color="#fff"
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg="#fff"
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                />
                                                {show.skills && (
                                                    <SectionSideMenu
                                                        onHide={() => setShow({ ...show, skills: false })}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
                                                        onDelete={SKILL}
                                                    />
                                                )}
                                            </Box>
                                            <Skill
                                                skillStyle={styles.contactFont}
                                                progressBar={true}
                                                strokeWidth="2"
                                                lineStyle={styles.line}
                                                strokeColor="#03a9f4"
                                                trailColor="#fff"
                                                percentageStyle={styles.percent}
                                                parentContainerStyle={styles.parentDiv}
                                            />
                                        </>
                                    )}
                                    <Underline
                                        height='0.1em'
                                        width='100%'
                                        bgColor='#fff'
                                    />
                                    {/* _____________ Interst _____________ */}
                                    {resumeData?.hobbies?.visible && (
                                        <>
                                            <Box
                                                display={'flex'}
                                                justifyContent={'space-between'}
                                                mt={'15px'}
                                            >
                                                <Heading
                                                    title="INTEREST"
                                                    color="#fff"
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg="#fff"
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, interest: true })
                                                    }
                                                />
                                                {show.interest && (
                                                    <SectionSideMenu
                                                        bg={'#fff'}
                                                        iconColor={'#000000'}
                                                        onHide={() => setShow({ ...show, interest: false })}
                                                        onDelete={INTEREST}
                                                    />
                                                )}
                                            </Box>
                                            {/* Interest Component  */}
                                            <Interest
                                                interestStyle={Classes.skillText}
                                                parentContainerStyle={styles.parentDiv}
                                            />
                                        </>
                                    )}
                                    <Underline
                                        height='0.1em'
                                        width='100%'
                                        bgColor='#fff'
                                    />
                                    {/* _____________ organization _____________ */}
                                    {resumeData?.organization?.visible && (
                                        <>
                                            <Box
                                                display={'flex'}
                                                justifyContent={'space-between'}
                                                mt={'15px'}
                                            >
                                                <Heading
                                                    title="ORGANIZATION"
                                                    color="#fff"
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg="#fff"
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, organization: true })
                                                    }
                                                />

                                                {show.organization && (
                                                    <SectionSideMenu
                                                        bg={'#fff'}
                                                        iconColor={'#000000'}
                                                        onHide={() =>
                                                            setShow({ ...show, organization: false })
                                                        }
                                                        onDelete={ORGANIZATION}
                                                    />
                                                )}
                                            </Box>
                                            {/* Organization Component */}
                                            <Organization
                                                organization={true}
                                                role={true}
                                                organizationStyle={Classes.skillText}
                                                roleStyle={Classes.skillText}
                                                rolePlaceholder="Role"
                                                parentContainerStyle={styles.parentDiv}
                                            />
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </TempLayout>
        </>
    )
}