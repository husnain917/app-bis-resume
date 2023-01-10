import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../src/components/commonSection/About';
import {
    EDUCATION,
    SKILL,
    WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import styles from '../../styles/templates/graphTemp/graphTemp.module.css';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import { FaChevronRight } from 'react-icons/fa';
import PDFGenerater from '../../src/components/tempNav/PDFGenerater';

export default function Graph_Template() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );
    // custom Hook For Template
    const [show, setShow] = useShow();
    const { downloadPDFHandler, pdfRef } = PDFGenerater();
    return (
        <div style={{ overflow: 'auto' }}>
            <TempLayout
                work={true}
                education={true}
                skills={true}
                downloadPDF={downloadPDFHandler}
            >
                <ChangeTempBtn />
                <Flex
                    justifyContent={{ base: 'none', md: 'center' }}
                    flexDir={'column'}
                    alignItems={{ sm: 'none', md: 'center' }}
                    bg={'#fff'}
                    pt="70px"
                >
                    <Box mx={'20px'} mt="50px">
                        <Box
                            display="flex"
                            flexDir="row"
                            w="100%"
                            minW="850px"
                            maxW="850px"
                            mb={'20px'}
                            ref={pdfRef}
                        >
                            {/* =============== First Section ============== */}
                            <Box
                                w="40%"
                                pb="10%"
                                minW={'340px'}
                                bgColor={backgroundColor ? backgroundColor : '#000000'}
                                borderLeftRadius={6}
                                pr={3}
                                pl={12}
                                py={8}
                                transition="0.5s background"
                            >
                                {/* _____________ Profile _____________ */}
                                <ImageSelector
                                    minWidth="240px"
                                    maxWidth="240px"
                                    maxHeight="240px"
                                    minHeight="240px"
                                    marginTop="30px"
                                    borderColor={color ? color : ''}
                                />
                                <Heading
                                    title={'CONTACT PERSON'}
                                    color={color ? color : '#fff'}
                                    margin={'20px 0px 0px 0px'}
                                    line={true}
                                    lineW="100%"
                                    lineH="0.15em"
                                    lineBg={color ? color : '#fff'}
                                    fontWeight={700}
                                />
                                <Contact
                                    phone={true}
                                    email={true}
                                    linkedinURL={true}
                                    website={true}
                                    circleIcon={true}
                                    circleBg="#fff"
                                    circleSize="25px"
                                    iconColor={color ? color : '#000000'}
                                    margin={'10px 0px 0px 0px'}
                                    parentStyle={styles.contactFont}
                                />

                                {/* _____________ About me _____________ */}
                                <Heading
                                    title={'ABOUT ME'}
                                    color={color ? color : '#fff'}
                                    margin={'20px 0px 0px 0px'}
                                    line={true}
                                    lineW="100%"
                                    lineH="0.13em"
                                    lineBg={color ? color : '#fff'}
                                    fontWeight={700}
                                />
                                <About
                                    minW="100%"
                                    maxW="100%"
                                    aboutStyle={Classes.aboutText}
                                    fontColor="#fff"
                                    fontWeight={'600'}
                                />

                                {/* _____________ Skill _____________ */}
                                <Box margin={'20px 0px 10px 0px'}>
                                    {resumeData?.skills?.visible && (
                                        <div className={Classes.sideMenu}>
                                            <div className={Classes.sideMenuBox}>
                                                {show?.skills && (
                                                    <SectionSideMenu
                                                        onDelete={SKILL}
                                                        onHide={() => setShow({ ...show, skills: false })}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <Heading
                                                    title={'SKILLS'}
                                                    fontSize="20px"
                                                    fontWeight={700}
                                                    color={color ? color : '#fff'}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg={color ? color : '#fff'}
                                                    circleIconHeading={true}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                    icon={(props) => (
                                                        <FaChevronRight
                                                            color={color ? color : '#fff'}
                                                            size={22}
                                                            {...props}
                                                        />
                                                    )}
                                                />
                                                <Skill
                                                    skillStyle={styles.contactFont}
                                                    progressBar={true}
                                                    strokeWidth="2"
                                                    lineStyle={styles.line}
                                                    strokeColor={color ? color : '#2A78AB'}
                                                    trailColor="#fff"
                                                    percentageStyle={styles.percent}
                                                    parentContainerStyle={Classes.ml}
                                                    margin="0px 0px 0px 30px"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                            </Box>
                            {/* =============== Second Section ============== */}
                            <Box
                                w="60%"
                                bg={color ? color : '#000000'}
                                h="auto"
                                minW="510px"
                                borderRightRadius={6}
                                paddingBottom={'40px'}
                                transition="0.5s background"
                            >
                                <Name
                                    FName={true}
                                    SName={true}
                                    direction="column"
                                    FNameStyle={styles.nameStyle}
                                    SNameStyle={styles.nameStyle}
                                    margin={'15% 0% 0% 10%'}
                                    fontColor={backgroundColor ? backgroundColor : '#fff'}
                                />
                                <Profession
                                    professionStyle={styles.profileSubTitle}
                                    margin={'2% 0% 10% 10%'}
                                    fontColor={backgroundColor ? backgroundColor : '#fff'}
                                />
                                {/* Work */}
                                <Box
                                    padding={'0px 0px 0px 53px'}
                                    margin={'20px 0px 10px 0px'}
                                >
                                    {resumeData?.work?.visible && (
                                        <div className={Classes.sideMenu}>
                                            <div className={Classes.sideMenuBox}>
                                                {show?.work && (
                                                    <SectionSideMenu
                                                        onHide={() => setShow({ ...show, work: false })}
                                                        onDelete={WORK}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <Heading
                                                    color={backgroundColor ? backgroundColor : '#fff'}
                                                    title="WORK EXPERIENCE"
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg={backgroundColor ? backgroundColor : '#fff'}
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    circleIconHeading={true}
                                                    minW="300px"
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, work: true })
                                                    }
                                                    maxW={'fit-content'}
                                                    icon={(props) => (
                                                        <FaChevronRight
                                                            color={
                                                                backgroundColor ? backgroundColor : '#fff'
                                                            }
                                                            size={22}
                                                            {...props}
                                                        />
                                                    )}
                                                />
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
                                                    textColor="#fff"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                                {/* _____________ Education _____________ */}
                                <Box
                                    padding={'0px 0px 0px 53px'}
                                    margin={'20px 0px 10px 0px'}
                                >
                                    {resumeData?.education?.visible && (
                                        <div className={Classes.sideMenu}>
                                            <div className={Classes.sideMenuBox}>
                                                {show?.education && (
                                                    <SectionSideMenu
                                                        onHide={() =>
                                                            setShow({ ...show, education: false })
                                                        }
                                                        onDelete={EDUCATION}
                                                        bg="#fff"
                                                        iconColor={'#000000'}
                                                    />
                                                )}
                                            </div>
                                            <div>
                                                <Heading
                                                    title={'EDUCATION'}
                                                    color={backgroundColor ? backgroundColor : '#fff'}
                                                    line={true}
                                                    lineW="100%"
                                                    lineH="0.15em"
                                                    lineBg={backgroundColor ? backgroundColor : '#fff'}
                                                    fontSize={'22px'}
                                                    fontWeight={700}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, education: true })
                                                    }
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <FaChevronRight
                                                            color={
                                                                backgroundColor ? backgroundColor : '#fff'
                                                            }
                                                            size={22}
                                                            {...props}
                                                        />
                                                    )}
                                                />
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
                                                    textColor="#fff"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </TempLayout>
        </div>
    )
}
