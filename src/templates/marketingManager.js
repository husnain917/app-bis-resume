import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Contact from '../components/commonSection/Contact';
import Heading from '../components/commonSection/Heading';
import ImageSelector from '../components/imageSelector';
import Classes from '../../styles/templates/marketingManager.module.css';
import Education from '../components/commonSection/Education';
import Skill from '../components/commonSection/Skill';
import Language from '../components/commonSection/Language';
import Reference from '../components/commonSection/Reference';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    LANGUAGES,
    REFERENCE,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import Name from '../components/commonSection/Name';
import Profession from '../components/commonSection/Profession';
import About from '../components/commonSection/About';
import WorkExperience from '../components/commonSection/WorkExperience';

const MarketingManager = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        // ___________ Marketing Manager Template ____________
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
            bg={'#fff'}
        >
            <HStack
                minW={830}
                maxW={830}
                alignItems="stretch"
                borderRadius={6}
                bg={'white'}
                borderColor={'#00000023'}
                mb={'20px'}
            >
                {/* ============== First Section ============== */}
                <Box
                    minW={280}
                    maxW={280}
                    bg={'#2E4053'}
                    borderLeftRadius={6}
                    py={5}
                >
                    <Box display={'flex'} justifyContent="center">
                        <ImageSelector
                            minWidth={'160px'}
                            maxWidth="160px"
                            minHeight={'160px'}
                            maxHeight="160px"
                        />
                    </Box>
                    <Heading
                        title={'Contact'}
                        fontWeight="700"
                        color={'#fff'}
                        fontSize="22px"
                        line={true}
                        lineH="4px"
                        lineBg={'#fff'}
                        lineW="230px"
                        margin={'30px 0 15px 32px '}
                    />
                    <Contact
                        heading={true}
                        direction="column"
                        phone={true}
                        email={true}
                        location={true}
                        style={Classes.profileText}
                        headingStyle={Classes.head}
                        margin="5px 0px 0px 32px"
                    />

                    {/* ============== Education Section ============== */}
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
                                    title={'Education'}
                                    fontWeight="700"
                                    color={'#fff'}
                                    fontSize="22px"
                                    line={true}
                                    lineH="4px"
                                    lineBg={'#fff'}
                                    lineW="230px"
                                    margin={'15px 0px '}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, education: true })
                                    }
                                />
                                <Education
                                    degree={true}
                                    institution={true}
                                    date={true}
                                    degree_placeholder="Study Program"
                                    degreeStyle={Classes.programText}
                                    dateStyle={Classes.date}
                                    institutionStyle={Classes.date}
                                    margin="0px 20px 0px 0px"
                                />
                            </div>
                        </div>
                    )}
                    {/* ============== Expertise or Skill Section ============== */}
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
                                    title={'Expertise'}
                                    fontWeight="700"
                                    color={'#fff'}
                                    fontSize="22px"
                                    line={true}
                                    lineH="4px"
                                    lineBg={'#fff'}
                                    lineW="230px"
                                    margin={'15px 0px'}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, skills: true })
                                    }
                                />
                                <Skill
                                    skillStyle={Classes.skillText}
                                    margin="0px 20px 0px 0px"
                                />
                            </div>
                        </div>
                    )}
                    {/* ============== Languages Section ============== */}
                    {resumeData?.languages?.visible && (
                        <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                                {show.languages && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, languages: false })}
                                        onDelete={LANGUAGES}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </div>
                            <div>
                                <Heading
                                    title={'Languages'}
                                    fontWeight="700"
                                    color={'#fff'}
                                    fontSize="22px"
                                    line={true}
                                    lineH="4px"
                                    lineBg={'#fff'}
                                    lineW="230px"
                                    margin={'15px 0px '}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, languages: true })
                                    }
                                />
                                <Language
                                    langStyle={Classes.skillText}
                                    margin="0px 20px 0px 0px"
                                />
                            </div>
                        </div>
                    )}
                </Box>

                {/* ============== Second Section ============== */}
                <Box minW={500} maxW={500}>
                    {/* ============== Name Section ============== */}
                    <Name
                        FName={true}
                        SName={true}
                        FNameStyle={Classes.name}
                        SNameStyle={Classes.lastName}
                        direction="row"
                        margin="60px 0px 0px 30px"
                    />
                    <Profession
                        professionStyle={Classes.ProfessionFashion}
                        margin="15px 30px"
                    />
                    <About
                        aboutStyle={Classes.aboutText}
                        minW="full"
                        maxW="full"
                        margin="0px 30px"
                    />
                    {/* ============== Work Experience Section ============== */}
                    {resumeData?.work?.visible && (
                        <div className={Classes.sideMenu}>
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
                                    title={'Experience'}
                                    fontWeight="700"
                                    color={'#2e4053'}
                                    fontSize="24px"
                                    line={true}
                                    lineH="4px"
                                    lineBg={'#2e4053'}
                                    lineW="470px"
                                    margin={'15px 0px '}
                                    onSideSectionShow={() => setShow({ ...show, work: true })}
                                />
                                <WorkExperience
                                    position={true}
                                    company={true}
                                    summary={true}
                                    date={true}
                                    sideLine={true}
                                    margin={'0px 20px '}
                                    lineColor="#2e4053"
                                    positionStyle={Classes.workText}
                                    companyStyle={Classes.workText}
                                    dateStyle={Classes.workDate}
                                    summaryStyle={Classes.workDate}
                                />
                            </div>
                        </div>
                    )}
                    {/* ============== Reference Section ============== */}
                    {resumeData?.references?.visible && (
                        <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                                {show.reference && (
                                    <SectionSideMenu
                                        onHide={() => setShow({ ...show, reference: false })}
                                        onDelete={REFERENCE}
                                        bg="#006772"
                                        iconColor={"#fff"}
                                    />
                                )}
                            </div>
                            <div>
                                <Heading
                                    title={'Reference'}
                                    fontWeight="700"
                                    color={'#2e4053'}
                                    fontSize="24px"
                                    line={true}
                                    lineH="4px"
                                    lineBg={'#2e4053'}
                                    lineW="470px"
                                    margin={'15px 0px '}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, reference: true })
                                    }
                                />
                                <Reference
                                    name={true}
                                    profession={true}
                                    email={true}
                                    phone={true}
                                    DndDirection={'horizontal'}
                                    minW={230}
                                    maxW={230}
                                    nameStyle={Classes.referenceText}
                                    professionStyle={Classes.workDate}
                                    phoneStyle={Classes.workDate}
                                    emailStyle={Classes.workDate}
                                />
                            </div>
                        </div>
                    )}
                </Box>
            </HStack>
        </Flex>
    );
};
export default MarketingManager;
