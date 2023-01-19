import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Heading from '../components/commonSection/Heading';
import ImageSelector from '../components/imageSelector';
import Classes from '../../styles/templates/graph8.module.css';
import About from '../components/commonSection/About';
import Education from '../components/commonSection/Education';
import Contact from '../components/commonSection/Contact';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import Name from '../components/commonSection/Name';
import WorkExperience from '../components/commonSection/WorkExperience';
import Skill from '../components/commonSection/Skill';
import Profession from '../components/commonSection/Profession';

const GraphicDesigner8 = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        // Graphic Designer Template 8 //
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
            bg={'#fff'}
        >
            <Box
                minW={830}
                maxW={830}
                borderRadius={6}
                bg={'#fff'}
                p={'50px 30px 30px 0px'}
                display="flex"
                alignItems={'stretch'}
                borderWidth="1px"
                borderColor={'#00000033'}
                mb={'20px'}
            >
                {/* _______________ First Section _______________  */}
                <Box
                    w="40%"
                    pb="10%"
                    minW={'340px'}
                    maxW={'340px'}
                    bgColor="#2A78AB"
                    borderBottomRadius={6}
                    borderTopRadius={'180px'}
                    ml={'40px'}
                    py={8}
                    pr={6}
                >
                    {/* =============== Profile Section ============== */}
                    <ImageSelector
                        minWidth={240}
                        maxWidth={240}
                        minHeight={240}
                        maxHeight={240}
                        marginTop="20px"
                        marginLeft={12}
                    />
                    <Heading
                        title={'ABOUT ME'}
                        color="#fff"
                        line={true}
                        lineH="2px"
                        lineBg={'#fff'}
                        lineW="17pc"
                        margin={'25px 0px 15px 30px'}
                        textMargin="0px 0px 8px 0px"
                    />
                    <About aboutStyle={Classes.aboutText} minW="full" maxW="full" />
                    {/* =============== Education Section ============== */}
                    {resumeData?.education?.visible && (
                        <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                                {show.education && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, education: false })}
                                        onDelete={EDUCATION}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </div>
                            <div>
                                <Heading
                                    title={'EDUCATION'}
                                    color="#fff"
                                    line={true}
                                    lineH="2px"
                                    lineBg={'#fff'}
                                    lineW="17pc"
                                    margin="15px 0px"
                                    textMargin="0px 0px 8px 0px"
                                    onSideSectionShow={() =>
                                        setShow({ ...show, education: true })
                                    }
                                />
                                <Education
                                    institution={true}
                                    degree={true}
                                    institutionStyle={Classes.institute}
                                    degreeStyle={Classes.program}
                                    degree_placeholder="Study Program"
                                />
                            </div>
                        </div>
                    )}
                    {/* =============== Contact Section ============== */}
                    <Heading
                        title={'CONTACT'}
                        color="#fff"
                        line={true}
                        lineH="2px"
                        lineBg={'#fff'}
                        lineW="17pc"
                        margin={'20px 0px 15px 30px'}
                        textMargin="0px 0px 8px 0px"
                    />
                    <Contact
                        email={true}
                        phone={true}
                        website={true}
                        circleIcon={true}
                        circleSize="25px"
                        circleBg="#fff"
                        iconColor="#2A78AB"
                        style={Classes.contact}
                        margin="10px 0px 0px 30px"
                    />
                </Box>
                {/* _______________ Second Section _______________  */}
                <Box
                    w="60%"
                    bg="white"
                    minW="440px"
                    maxW={'440px'}
                    pt={'100px'}
                    pr="30px"
                >
                    {/* =============== Name Section ============== */}
                    <Name
                        FNameStyle={Classes.name}
                        SNameStyle={Classes.name}
                        FName={true}
                        SName={true}
                        margin="0px 0px 0px 30px"
                    />
                    <Profession
                        professionStyle={Classes.profession}
                        margin="0px 0px 0px 30px"
                    />
                    {/* =============== Work Experience Section ============== */}
                    {resumeData?.work?.visible && (
                        <div className={Classes.sideMenu} style={{ marginTop: '28px' }}>
                            <div className={Classes.sideMenuBox}>
                                {show.work && (
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
                                    title={'WORK EXPERIENCE'}
                                    color="#2A78AB"
                                    line={true}
                                    lineH="2px"
                                    lineBg={'gray'}
                                    lineW="24pc"
                                    fontWeight={700}
                                    textMargin="0px 0px 8px 0px"
                                    margin={'15px 0px'}
                                    onSideSectionShow={() => setShow({ ...show, work: true })}
                                />
                                <WorkExperience
                                    position={true}
                                    date={true}
                                    summary={true}
                                    positionStyle={Classes.workText}
                                    dateStyle={Classes.date}
                                    summaryStyle={Classes.date}
                                />
                            </div>
                        </div>
                    )}

                    {/* =============== Skill Section ============== */}
                    {resumeData?.skills?.visible && (
                        <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                                {show.skills && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, skills: false })}
                                        onDelete={SKILL}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </div>
                            <div>
                                <Heading
                                    title={'SKILLS'}
                                    color="#2A78AB"
                                    line={true}
                                    lineH="2px"
                                    lineBg={'gray'}
                                    lineW="24pc"
                                    fontWeight={700}
                                    textMargin="0px 0px 8px 0px"
                                    margin={'15px 0px'}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, skills: true })
                                    }
                                />
                                <Skill
                                    skillStyle={Classes.skillText}
                                    progressBar={true}
                                    lineStyle={Classes.line}
                                    strokeColor="#2A78AB"
                                    strokeWidth="2"
                                    trailColor="#80808073"
                                    percentStyle={Classes.mt}
                                    minWText="210px"
                                    maxWText="210px"
                                />
                            </div>
                        </div>
                    )}
                </Box>
            </Box>
        </Flex>
    );
};
export default GraphicDesigner8;
