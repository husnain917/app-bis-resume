import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
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
import ImageSelector from '../components/imageSelector';
import styles from "../../styles/templates/awaisFashion.module.css";
import {
    EDUCATION,
    LANGUAGES,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import Language from "../components/commonSection/Language";
import {
    FaArchive,
    FaPhoneAlt,
    FaBuffer,
    FaHive,
    FaUser,
    FaSketch,
} from "react-icons/fa";

export default function FashionDesigner() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );
    // custom Hook For Template
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
                        w="55%"
                        bgColor={backgroundColor ? backgroundColor : '#E6D5C2'}
                        borderLeftRadius={6}
                        pr={3}
                        pl={12}
                        py={8}
                        transition="0.5s background"
                    >
                        {/* _____________ Profile _____________ */}
                        <Name
                            FName={true}
                            SName={true}
                            maxWidth={"360px"}
                            minWidth={"360px"}
                            maxChr={38}
                            direction="column"
                            FNameStyle={styles.nameStyle}
                            SNameStyle={styles.nameStyle}
                            margin={'6% 0% 0% 0%'}
                            fontColor={color ? color : '#1B4245'}
                        />
                        <Box bgColor={color ? color : '#1B4245'} w="43%" h="5px" mt="2%"></Box>
                        <Profession
                            professionStyle={styles.profileSubTitle}
                            margin={'2% 0% 5% 0%'}
                            maxWidth={"360px"}
                            fontColor={color ? color : '#1B4245'}
                        />

                        {/* _____________ About me _____________ */}
                        <Heading
                            title={'ABOUT ME'}
                            color={color ? color : '#1B4245'}
                            margin={'20px 0px 0px 0px'}
                            fontWeight={700}
                            circleIconHeading={true}
                            icon={(props) => (
                                <FaUser
                                    color={color ? color : '#1B4245'}
                                    size={25}
                                    {...props}
                                />
                            )}
                        />
                        <About
                            minW="90%"
                            maxW="90%"
                            aboutStyle={Classes.aboutText}
                            fontColor="#1B4245"
                            fontWeight={'600'}
                            fontSize={'16px'}
                        />
                        {/* _____________ Work _____________ */}
                        <Box
                            margin={'20px 0px 10px 7px'}
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
                                            color={color ? color : '#1B4245'}
                                            title="WORK EXPERIENCE"
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            minW="300px"
                                            onSideSectionShow={() =>
                                                setShow({ ...show, work: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaArchive
                                                    color={color ? color : '#1B4245'}
                                                    size={25}
                                                    {...props}
                                                />
                                            )}
                                            maxW={'fit-content'}
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
                                            textColor="#1B4245"
                                            datewidthmax={"160px"}
                                            maxChr={20}
                                            maxWidth={"350px"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        {/* _____________ Education _____________ */}
                        <Box
                            margin={'20px 0px 10px 7px'}
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
                                            color={color ? color : '#1B4245'}
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaBuffer
                                                    color={color ? color : '#1B4245'}
                                                    size={25}
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
                                            textColor="#1B4245"
                                            datewidthmax={"160px"}
                                            maxChr={20}
                                            maxWidth={"350px"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    {/* =============== Second Section ============== */}
                    <Box
                        w="45%"
                        bg={color ? color : '#1B4245'}
                        h="auto"
                        borderRightRadius={6}
                        paddingBottom={'40px'}
                        transition="0.5s background"
                    >
                        {/* Image */}
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <ImageSelector
                                minWidth="240px"
                                maxWidth="240px"
                                maxHeight="240px"
                                minHeight="240px"
                                marginTop="50px"
                                borderColor={backgroundColor ? backgroundColor : '#1B4245'}
                            />
                        </Box>
                        {/* contact */}
                        <Box
                            margin={'40px 0px 10px 30px'}
                        >
                            <Heading
                                title={'CONTACT PERSON'}
                                color={backgroundColor ? backgroundColor : '#fff'}
                                margin={'20px 0px 0px 0px'}
                                fontWeight={700}
                                circleIconHeading={true}
                                icon={(props) => (
                                    <FaPhoneAlt
                                        color={backgroundColor ? backgroundColor : '#fff'}
                                        size={25}
                                        {...props}
                                    />
                                )}
                            />
                            <Contact
                                phone={true}
                                email={true}
                                linkedinURL={true}
                                website={true}
                                circleIcon={true}
                                circleBg={backgroundColor ? backgroundColor : '#fff'}
                                circleSize="30px"
                                iconColor={color ? color : '#1B4245'}
                                margin={'10px 0px 0px 0px'}
                                parentStyle={styles.contactFont}
                                maxWidth={"245px"}
                            />
                        </Box>
                        {/* _____________ Skill _____________ */}
                        <Box margin={'20px 0px 10px 40px'}>
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
                                            color={backgroundColor ? backgroundColor : '#fff'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaHive
                                                    color={backgroundColor ? backgroundColor : '#fff'}
                                                    size={25}
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
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        {/* _____________ Language _____________ */}
                        <Box margin={'20px 0px 10px 40px'}>
                            {resumeData?.languages?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox}>
                                        {show?.languages && (
                                            <SectionSideMenu
                                                bg="#006772"
                                                iconColor={"#fff"}
                                                onHide={() => setShow({ ...show, languages: false })}
                                                onDelete={LANGUAGES}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Heading
                                            title={'LANGUAGES'}
                                            fontSize="20px"
                                            fontWeight={700}
                                            color={backgroundColor ? backgroundColor : '#fff'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, languages: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaSketch
                                                    color={backgroundColor ? backgroundColor : '#fff'}
                                                    size={25}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <Language
                                            langStyle={styles.contactFont}
                                            maxWidth={"270px"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
