import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
import styles from '../../styles/fashionTemp.module.css';
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../components/commonSection/Profession';
import Contact from '../components/commonSection/Contact';
import Heading from '../components/commonSection/Heading';
import Skill from '../components/commonSection/Skill';
import WorkExperience from '../components/commonSection/WorkExperience';
import Education from '../components/commonSection/Education';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import About from '../components/commonSection/About';
import {
    EDUCATION,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../components/imageSelector';
import { MdCastForEducation } from 'react-icons/md';
import { FaSignLanguage, FaRegUser } from "react-icons/fa";

export default function Fashion_Temp() {
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
                    display={'flex'}
                    w="100%"
                    minW="837px" minHeight={1183}
                    maxW="830px"
                    
                >
                    <Box
                        w="45%"
                        pb="10%"
                        bgColor="#FDC726"
                        borderLeftRadius={6}
                        pr={3}
                        pl={12}
                        py={8}
                    >
                        {/* _____________ Profile _____________ */}
                        <Name
                            FName={true}
                            SName={true}
                            maxWidth={"280px"}
                            minWidth={"280px"}
                            maxChr={38}
                            direction="column"
                            FNameStyle={styles.nameStyle}
                            SNameStyle={styles.nameStyle}
                        />
                        <Profession
                            professionStyle={styles.profileSubTitle}
                            maxWidth={"280px"}
                        />

                        {/* _____________ Image _____________ */}
                        <ImageSelector
                            minWidth="240px"
                            maxWidth="240px"
                            maxHeight="240px"
                            minHeight="240px"
                            marginTop="30px"
                            marginBottom="30px"
                            marginLeft={'20px'}
                        />

                        {/* _____________ About me _____________ */}
                        <Heading
                            title={'ABOUT ME'}
                            color="#000000"
                            circleSize="38px"
                            circleBg="#000000"
                            fontSize="20px"
                            fontWeight={700}
                            circleIconHeading={true}
                            icon={(props) => (
                                <FaRegUser
                                    {...props}
                                    size={18}
                                    color={'#FDC726'}
                                />
                            )}
                        />
                        <About
                            minW="90%"
                            maxW="90%"
                            aboutStyle={Classes.aboutText}
                            fontColor="#000000"
                            fontSize="14px"
                            fontWeight={600}
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
                                            fontSize="20px"
                                            fontWeight={700}
                                            color="#000000"
                                            circleIconHeading={true}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                            circleSize="38px"
                                            circleBg="#000000"
                                            icon={(props) => (
                                                <FaSignLanguage
                                                    {...props}
                                                    size={18}
                                                    color={'#FDC726'}
                                                />
                                            )}
                                        />
                                        <Skill
                                            skillStyle={styles.skillText}
                                            progressBar={true}
                                            strokeWidth="2"
                                            lineStyle={styles.line}
                                            strokeColor="#000000"
                                            trailColor="#fff"
                                            percentageStyle={styles.percent}
                                            parentContainerStyle={Classes.ml}
                                            margin="0px 0px 0px 45px"
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    {/* =============== Second Section ============== */}
                    <Box
                        w="55%"
                        bg="#0F0F0F"
                        h="auto"
                        borderRightRadius={6}
                    >
                        {/* _____________ Contact Us _____________ */}
                        <Heading
                            title={'CONTACTS'}
                            color="#fff"
                            padding={'70px 0px 20px 33px'}
                            circleSize="38px"
                            circleBg="#FDC726"
                            circleIconHeading={true}
                            icon={(props) => (
                                <FaRegUser
                                    {...props}
                                    size={18}
                                    color={'#000000'}
                                />
                            )}
                        />
                        <Contact
                            phone={true}
                            email={true}
                            linkedinURL={true}
                            website={true}
                            circleIcon={true}
                            circleBg="#FDC726"
                            circleSize="25px"
                            iconColor="#000000"
                            margin={'5px 0px 0px 0px'}
                            parentStyle={styles.rightContainerWork}
                            style={styles.profileText}
                            maxWidth={"245px"}
                        />
                        {/* _____________ Work _____________ */}
                        <Box
                            padding={'0px 0px 0px 40px'}
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
                                            circleIconHeading={true}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, work: true })
                                            }
                                            maxW={'fit-content'}
                                            circleSize="38px"
                                            circleBg="#FDC726"
                                            icon={(props) => (
                                                <MdCastForEducation
                                                    {...props}
                                                    size={18}
                                                    color={'#000000'}
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
                                            textColor={'#fff'}
                                            datewidthmax={"150px"}
                                            maxChr={20}
                                            maxWidth={"320px"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        {/* _____________ Education _____________ */}
                        <Box
                            padding={'0px 0px 0px 40px'}
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
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                            circleIconHeading={true}
                                            circleSize="38px"
                                            circleBg="#FDC726"
                                            icon={(props) => (
                                                <MdCastForEducation
                                                    {...props}
                                                    size={18}
                                                    color={'#000000'}
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
                                            datewidthmax={"150px"}
                                            maxChr={20}
                                            maxWidth={"320px"}
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