import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../components/commonSection/Profession';
import Contact from '../components/commonSection/Contact';
import Heading from '../components/commonSection/Heading';
import Skill from '../components/commonSection/Skill';
import WorkExperience from '../components/commonSection/WorkExperience';
import { IoMdJet } from 'react-icons/io';
import Education from '../components/commonSection/Education';
import { BsFillLayersFill } from 'react-icons/bs';
import Certificate from '../components/commonSection/Certificate';
import { FaAward } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    CERTIFICATE,
    EDUCATION,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../components/imageSelector';

const FlightAttendant1 = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();
    const { backgroundColor, color } = useSelector(
        (store) => store.themeReducer.theme
    );

    return (
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
            bg={'#fff'}
            className={`${Classes.main}`}
        >
            <Box
                display="flex"
                flexDir="row"
                w="100%"
                minW="830px"
                maxW="850px"
                mb={'20px'}
                borderWidth="1px"
                borderColor={'#00000023'}
            >
                {/* =============== First Section ============== */}
                <Box
                    w="40%"
                    pb="10%"
                    minW={'340px'}
                    bgColor={backgroundColor ? backgroundColor : '#00b4d8'}
                    // borderLeftRadius={6}
                    pr={3}
                    pl={12}
                    py={8}
                >
                    {/* _____________ Profile _____________ */}
                    <ImageSelector
                        minWidth={'240px'}
                        maxWidth={'240px'}
                        minHeight={'240px'}
                        maxHeight={'240px'}
                    />
                    <Name
                        FName={true}
                        SName={true}
                        direction="row"
                        FNameStyle={Classes.name}
                        SNameStyle={Classes.name}
                        margin={'20px 0px 0px 0px'}
                    />
                    <Profession
                        margin={'10px 0px 0px 0px'}
                        professionStyle={Classes.profession}
                    />
                    <Contact
                        phone={true}
                        email={true}
                        linkedinURL={true}
                        website={true}
                        circleIcon={true}
                        circleBg={color ? color : '#000000'}
                        circleSize="25px"
                        iconColor={backgroundColor ? backgroundColor : '#fff'}
                        margin={'10px 0px 0px 0px'}
                        style={Classes.profileText}
                    />
                    &nbsp;
                    {/* _____________ Skill _____________ */}
                    {resumeData?.skills?.visible && (
                        <>
                            <div className={Classes.sideMenu}>
                                <div
                                    className={Classes.sideMenuBox}
                                    style={{ marginTop: '5px' }}
                                >
                                    {show.skills && (
                                        <SectionSideMenu
                                            onHide={() => setShow({ ...show, skills: false })}
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={SKILL}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        title={'RELEVANT SKILLS'}
                                        color={color ? color : '#000000'}
                                        margin={'0px 0px 0px 0px'}
                                        fontSize={17}
                                        fontWeight={700}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    <Skill skillStyle={Classes.skillText} />
                                </div>
                            </div>
                        </>
                    )}
                </Box>
                {/* =============== Second Section ============== */}
                <Box
                    w="60%"
                    bg="white"
                    h="auto"
                    minW="490px"
                    py="20px"
                    display={'flex'}
                    flexDir={'column'}
                    alignItems={'center'}
                >
                    {resumeData?.work?.visible && (
                        <>
                            <div className={Classes.sideMenu}>
                                <div
                                    className={Classes.sideMenuBox}
                                    style={{ marginTop: '15px' }}
                                >
                                    {show.work && (
                                        <SectionSideMenu
                                            onHide={() => setShow({ ...show, work: false })}
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={WORK}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        minW={'420px'}
                                        maxW={'420px'}
                                        headBg={'#E0EFFA'}
                                        title="WORK EXPERIENCE"
                                        margin={'20px 0px 0px 0px'}
                                        padding={'0px 0px 0px 20px'}
                                        height={50}
                                        fontSize={17}
                                        fontWeight={700}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, work: true })
                                        }
                                    />
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
                                        iconShow={true}
                                        icon={(props) => (
                                            <IoMdJet
                                                {...props}
                                                color={backgroundColor}
                                                size={32}
                                                className={Classes.mr}
                                            />
                                        )}
                                        parentContainerStyle={Classes.mt}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {/* _____________ Education _____________ */}
                    {resumeData?.education?.visible && (
                        <>
                            <div className={Classes.sideMenu}>
                                <div
                                    className={Classes.sideMenuBox}
                                    style={{ marginTop: '15px' }}
                                >
                                    {show.education && (
                                        <SectionSideMenu
                                            onHide={() => setShow({ ...show, education: false })}
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={EDUCATION}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        minW={'420px'}
                                        maxW={'420px'}
                                        headBg={'#E0EFFA'}
                                        title="EDUCATION HISTORY"
                                        margin={'20px 0px 0px 0px'}
                                        padding={'0px 0px 0px 20px'}
                                        height={50}
                                        fontSize={17}
                                        fontWeight={700}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, education: true })
                                        }
                                    />
                                    <Education
                                        degree={true}
                                        institution={true}
                                        date={true}
                                        summary={true}
                                        iconShow={true}
                                        icon={(props) => (
                                            <BsFillLayersFill
                                                {...props}
                                                color={backgroundColor}
                                                size={32}
                                                className={Classes.mr}
                                            />
                                        )}
                                        parentContainerStyle={Classes.mt}
                                        institutionStyle={Classes.company}
                                        degreeStyle={Classes.programText}
                                        dateStyle={Classes.date}
                                        summaryStyle={Classes.description}
                                        degree_placeholder="Study Program"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {/* _____________ Certification _____________ */}
                    {resumeData?.certifications?.visible && (
                        <>
                            <div className={Classes.sideMenu}>
                                <div
                                    className={Classes.sideMenuBox}
                                    style={{ marginTop: '15px' }}
                                >
                                    {show.certificates && (
                                        <SectionSideMenu
                                            onHide={() =>
                                                setShow({ ...show, certificates: false })
                                            }
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onDelete={CERTIFICATE}
                                        />
                                    )}
                                </div>
                                <div>
                                    <Heading
                                        minW={'420px'}
                                        maxW={'420px'}
                                        headBg={'#E0EFFA'}
                                        title="CERTIFICATIONS"
                                        padding={'0px 0px 0px 20px'}
                                        margin={'20px 0px 0px 0px'}
                                        height={50}
                                        fontSize={17}
                                        fontWeight={700}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, certificates: true })
                                        }
                                    />
                                    <Certificate
                                        certificate={true}
                                        issueDate={true}
                                        institute={true}
                                        iconShow={true}
                                        icon={(props) => (
                                            <FaAward
                                                {...props}
                                                color={backgroundColor}
                                                size={32}
                                                className={Classes.mr}
                                            />
                                        )}
                                        parentContainerStyle={Classes.mt}
                                        certificateStyle={Classes.programText}
                                        issueDateStyle={Classes.date}
                                        instituteStyle={Classes.company}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </Box>
            </Box>
        </Flex>
    );
};
export default FlightAttendant1;
