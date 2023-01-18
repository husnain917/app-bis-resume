import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
import styles from '../../styles/digitalMarketingTemp.module.css';
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
import { FaChevronRight } from 'react-icons/fa';

export default function Digital_Marketing_Temp() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );

    return (
        <>
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
                        pb="10%"
                        minW={'340px'}
                        bgColor={backgroundColor ? backgroundColor : '#3A4D6C'}
                        borderLeftRadius={6}
                        pr={3}
                        pl={12}
                        py={8}
                        transition={'0.5s'}
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
                            style={styles.skillText}
                        />

                        {/* _____________ About me _____________ */}
                        <Heading
                            title={'ABOUT ME'}
                            color="#fff"
                            margin={'20px 0px 0px 0px'}
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
                                            skillStyle={styles.skillText}
                                            progressBar={true}
                                            strokeWidth="2"
                                            lineStyle={styles.line}
                                            strokeColor="#F2DB7A"
                                            trailColor="#fff"
                                            percentageStyle={styles.percent}
                                            parentContainerStyle={Classes.ml}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    {/* =============== Second Section ============== */}
                    <Box
                        w="60%"
                        bg="#fff"
                        h="auto"
                        minW="490px"
                        borderRightRadius={6}
                    >
                        <Box
                            width={'100%'}
                            backgroundColor={color ? color : '#F2DB7A'}
                            padding={'20px 0px 20px 0px'}
                            marginTop={'15%'}
                            display={'flex'}
                            alignItems={'center'}
                            flexDir={'column'}
                        >
                            <Name
                                FName={true}
                                SName={true}
                                direction="column"
                                FNameStyle={styles.nameStyle}
                                SNameStyle={styles.nameStyle}
                            />
                            <Profession
                                professionStyle={styles.profileSubTitle}
                            />
                        </Box>
                        <Box
                            width={'95%'}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                        >
                            {/* work  */}
                            <Box
                                margin={'20px 0px 10px 0px'}
                                width={'83%'}
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
                                                color={color ? color : '#3A4D6C'}
                                                title="WORK EXPERIENCE"
                                                fontSize={'22px'}
                                                fontWeight={700}
                                                circleIconHeading={true}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, work: true })
                                                }
                                                icon={(props) => (
                                                    <FaChevronRight
                                                        color={color ? color : '#3A4D6C'}
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
                                                textColor={'#3A4D6C'}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                            {/* _____________ Education _____________ */}
                            <Box
                                margin={'20px 0px 10px 0px'}
                                width={'83%'}
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
                                                color={color ? color : '#3A4D6C'}
                                                fontSize={'22px'}
                                                fontWeight={700}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, education: true })
                                                }
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <FaChevronRight
                                                        color={color ? color : '#3A4D6C'}
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
                                                textColor="#3A4D6C"
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                        </Box>
                        <Box
                            height={'50px'}
                            width={'100%'}
                            backgroundColor={color ? color : '#F2DB7A'}
                            marginTop={'10px'}
                        >
                            {/* footer container */}
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}