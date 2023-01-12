import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
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
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function Aaron_Graphic_Temp() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();
    const { downloadPDFHandler, pdfRef } = PDFGenerater();
    return (
        <>
            <div
                style={{ overflow: 'auto' }}
            >
                <TempLayout work={true} education={true} skills={true} interest={true} organization={true} downloadPDF={downloadPDFHandler}>
                    <ChangeTempBtn />
                    <Flex
                        justifyContent={{ base: 'none', md: 'center' }}
                        flexDir={'column'}
                        alignItems={{ sm: 'none', md: 'center' }}
                        bg={'#fff'}
                        pt="70px"
                    >
                        <Box
                            mt="50px"
                            mx={'20px'}
                        >
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
                                            />
                                            <Contact
                                                email={true}
                                                circleIcon={true}
                                                circleBg="#fff"
                                                circleSize="25px"
                                                iconColor="#000000"
                                                parentStyle={styles.contactFont}
                                            />
                                            <Contact
                                                linkedinURL={true}
                                                circleIcon={true}
                                                circleBg="#fff"
                                                circleSize="25px"
                                                iconColor="#000000"
                                                parentStyle={styles.contactFont}
                                            />
                                            <Contact
                                                website={true}
                                                circleIcon={true}
                                                circleBg="#fff"
                                                circleSize="25px"
                                                iconColor="#000000"
                                                parentStyle={styles.contactFont}
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
                                        padding={'0px 20px'}
                                    >
                                        {/* left container */}
                                        <Box
                                            width={'55%'}
                                            paddingRight={'30px'}
                                            borderRight={'1px solid #fff'}
                                        >
                                            {/* _____________ Education _____________ */}
                                            <Box
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
                                                                    bg="#006772"
                                                                    iconColor={"#fff"}
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
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
                                                        </div>
                                                    </div>
                                                )}
                                            </Box>
                                            <Underline
                                                height='0.1em'
                                                width='100%'
                                                bgColor='#fff'
                                            />
                                            {/* _____________ Work _____________ */}
                                            <Box
                                                margin={'20px 0px 10px 0px'}
                                            >
                                                {resumeData?.work?.visible && (
                                                    <div className={Classes.sideMenu}>
                                                        <div className={Classes.sideMenuBox}>
                                                            {show?.work && (
                                                                <SectionSideMenu
                                                                    onHide={() => setShow({ ...show, work: false })}
                                                                    onDelete={WORK}
                                                                    bg="#006772"
                                                                    iconColor={"#fff"}
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
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
                                                        </div>
                                                    </div>
                                                )}
                                            </Box>
                                        </Box>
                                        {/* right container */}
                                        <Box
                                            width={'43%'}
                                            paddingLeft={'40px'}
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
                                                    fontColor="#fff"
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
                                            <Box
                                                margin={'20px 0px 10px 7px'}
                                            >
                                                {resumeData?.skills?.visible && (
                                                    <div className={Classes.sideMenu}>
                                                        <div className={Classes.sideMenuBox}>
                                                            {show?.skills && (
                                                                <SectionSideMenu
                                                                    onDelete={SKILL}
                                                                    onHide={() => setShow({ ...show, skills: false })}
                                                                    bg="#006772"
                                                                    iconColor={"#fff"}
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
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
                                                        </div>
                                                    </div>
                                                )}
                                            </Box>
                                            <Underline
                                                height='0.1em'
                                                width='100%'
                                                bgColor='#fff'
                                            />
                                            {/* _____________ Interst _____________ */}
                                            <Box
                                                margin={'20px 0px 10px 7px'}
                                            >
                                                {resumeData?.hobbies?.visible && (
                                                    <div className={Classes.sideMenu}>
                                                        <div className={Classes.sideMenuBox}>
                                                            {show.interest && (
                                                                <SectionSideMenu
                                                                    bg="#006772"
                                                                    iconColor={"#fff"}
                                                                    onHide={() => setShow({ ...show, interest: false })}
                                                                    onDelete={INTEREST}
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
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
                                                            <Interest
                                                                parentContainerStyle={`${styles.parentDiv} ${styles.contactFont}`}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </Box>
                                            <Underline
                                                height='0.1em'
                                                width='100%'
                                                bgColor='#fff'
                                            />
                                            {/* _____________ organization _____________ */}
                                            <Box
                                                margin={'20px 0px 10px 7px'}
                                            >
                                                {resumeData?.organization?.visible && (
                                                    <div className={Classes.sideMenu}>
                                                        <div className={Classes.sideMenuBox}>
                                                            {show.organization && (
                                                                <SectionSideMenu
                                                                    bg="#006772"
                                                                    iconColor={"#fff"}
                                                                    onHide={() =>
                                                                        setShow({ ...show, organization: false })
                                                                    }
                                                                    onDelete={ORGANIZATION}
                                                                />
                                                            )}
                                                        </div>
                                                        <div>
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
                                                            <Organization
                                                                organization={true}
                                                                role={true}
                                                                rolePlaceholder="Role"
                                                                parentContainerStyle={`${styles.parentDiv} ${styles.contactFont}`}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                </TempLayout>
            </div>
        </>
    )
}