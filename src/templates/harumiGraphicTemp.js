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
import styles from "../../styles/harumiGraphicTemp.module.css";
import { FaChevronRight } from 'react-icons/fa';

export default function Harumi_Graphic_Temp() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        <>
            <Flex
                justifyContent={{ base: 'none', lg: 'center' }}
                flexDir={'column'}
                alignItems={{ sm: 'none', lg: 'center' }}
                bg={'#fff'}
            >
                <Box
                    display="flex"
                    flexDir="row"
                    w="100%"
                    minW="837px" minHeight={1183}
                    maxW="830px"
                   
                >
                    {/* =============== First Section ============== */}
                    <Box
                        w="40%"
                        pb="10%"
                        bgColor="#0C1E37"
                        borderLeftRadius={6}
                        pr={3}
                        pl={12}
                        py={8}
                    >
                        {/* _____________ Profile _____________ */}
                        <ImageSelector
                            minWidth="240px"
                            maxWidth="240px"
                            maxHeight="240px"
                            minHeight="240px"
                            marginTop="30px"
                        />
                        <Heading
                            title={'CONTACT PERSON'}
                            color="#fff"
                            margin={'20px 0px 0px 0px'}
                            line={true}
                            lineW="100%"
                            lineH="0.15em"
                            lineBg="#fff"
                        />
                        <Contact
                            phone={true}
                            email={true}
                            linkedinURL={true}
                            website={true}
                            circleIcon={true}
                            circleBg="#fff"
                            circleSize="25px"
                            iconColor="#3A4D6C"
                            margin={'10px 0px 0px 0px'}
                            style={styles.profileText}
                        />

                        {/* _____________ About me _____________ */}
                        <Heading
                            title={'ABOUT ME'}
                            color="#fff"
                            margin={'20px 0px 0px 0px'}
                            line={true}
                            lineW="100%"
                            lineH="0.13em"
                            lineBg="#fff"
                        />
                        <About
                            minW="100%"
                            maxW="100%"
                            aboutStyle={Classes.aboutText}
                            fontColor="#fff"
                        />

                        {/* _____________ Skill _____________ */}
                        <Box
                            margin={'20px 0px 10px 0px'}
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
                                            fontSize="20px"
                                            fontWeight={600}
                                            color="#fff"
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                            circleIconHeading={true}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#fff"
                                                    size={22}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <Skill
                                            skillStyle={styles.profileText}
                                            progressBar={true}
                                            strokeWidth="2"
                                            lineStyle={styles.line}
                                            strokeColor="#2A78AB"
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
                        bg="#0C1E37"
                        h="auto"
                        borderRightRadius={6}
                        paddingBottom={'40px'}
                    >
                        <Name
                            FName={true}
                            SName={true}
                            direction="column"
                            FNameStyle={styles.nameStyle}
                            SNameStyle={styles.nameStyle}
                            margin={'15% 0% 0% 10%'}
                        />
                        <Profession
                            professionStyle={styles.profileSubTitle}
                            margin={'2% 0% 10% 10%'}
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
                                                bg="#006772"
                                                iconColor={"#fff"}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Heading
                                            color={'#fff'}
                                            title="WORK EXPERIENCE"
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
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
                                                    color="#fff"
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
                                                bg="#006772"
                                                iconColor={"#fff"}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Heading
                                            title={'EDUCATION'}
                                            color={'#fff'}
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#fff"
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
            </Flex>
        </>
    )
}