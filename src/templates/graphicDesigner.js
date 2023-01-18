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
import styles from '../../styles/graphicDesignerAhsan.module.css';
import { FaChevronRight } from 'react-icons/fa';

export default function Graphic_Designer() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        <Flex
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', md: 'center' }}
            bg={'#fff'}
        >
            <Box
                display="flex"
                flexDir="row"
                w="100%"
                minW="830px"
                maxW="830px"
                mb={'20px'}
            >
                {/* =============== First Section ============== */}
                <Box
                    w="40%"
                    bgColor={backgroundColor ? backgroundColor : '#f8f9fa'}
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
                        color={color ? color : '#000000'}
                        margin={'20px 0px 0px 0px'}
                        line={true}
                        lineW="100%"
                        lineH="0.15em"
                        lineBg={color ? color : '#000000'}
                        fontWeight={700}
                    />
                    <Contact
                        phone={true}
                        email={true}
                        linkedinURL={true}
                        website={true}
                        circleIcon={true}
                        circleBg="#000000"
                        circleSize="25px"
                        iconColor={color ? color : '#f8f9fa'}
                        margin={'10px 0px 0px 0px'}
                        parentStyle={styles.contactFont}
                    />

                    {/* _____________ About me _____________ */}
                    <Heading
                        title={'ABOUT ME'}
                        color={color ? color : '#000000'}
                        margin={'20px 0px 0px 0px'}
                        line={true}
                        lineW="100%"
                        lineH="0.13em"
                        lineBg={color ? color : '#000000'}
                        fontWeight={700}
                    />
                    <About
                        minW="100%"
                        maxW="100%"
                        aboutStyle={Classes.aboutText}
                        fontColor="#000000"
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
                                        color={color ? color : '#000000'}
                                        line={true}
                                        lineW="100%"
                                        lineH="0.15em"
                                        lineBg={color ? color : '#000000'}
                                        circleIconHeading={true}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                        icon={(props) => (
                                            <FaChevronRight
                                                color={color ? color : '#000000'}
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
                    bg={color ? color : '#f8f9fa'}
                    h="auto"
                    borderRightRadius={6}
                    transition="0.5s background"
                >
                    <Name
                        FName={true}
                        SName={true}
                        direction="column"
                        FNameStyle={styles.nameStyle}
                        SNameStyle={styles.nameStyle}
                        margin={'15% 0% 0% 10%'}
                        fontColor={backgroundColor ? backgroundColor : '#000000'}
                    />
                    <Profession
                        professionStyle={styles.profileSubTitle}
                        margin={'2% 0% 10% 10%'}
                        fontColor={backgroundColor ? backgroundColor : '#000000'}
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
                                        color={backgroundColor ? backgroundColor : '#000000'}
                                        title="WORK EXPERIENCE"
                                        line={true}
                                        lineW="100%"
                                        lineH="0.15em"
                                        lineBg={backgroundColor ? backgroundColor : '#000000'}
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
                                                    backgroundColor ? backgroundColor : '#000000'
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
                                        textColor="#000000"
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
                                        color={backgroundColor ? backgroundColor : '#000000'}
                                        line={true}
                                        lineW="100%"
                                        lineH="0.15em"
                                        lineBg={backgroundColor ? backgroundColor : '#000000'}
                                        fontSize={'22px'}
                                        fontWeight={700}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, education: true })
                                        }
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <FaChevronRight
                                                color={
                                                    backgroundColor ? backgroundColor : '#000000'
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
                                        textColor="#000000"
                                    />
                                </div>
                            </div>
                        )}
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}
