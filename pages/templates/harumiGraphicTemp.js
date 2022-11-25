import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../src/components/commonSection/Name';
import style from '../../styles/templates/template1.module.scss';
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
import styles from "../../styles/harumiGraphicTemp.module.css";

export default function Harumi_Graphic_Temp() {
    // redux Data
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        <>
            <TempLayout work={true} education={true} skills={true}>
                <Link href={'/templates'}>
                    <div style={{ position: 'fixed', top: '30px', right: '30px' }}>
                        <Tooltip title="Change Template" arrow distance={20}>
                            <div className={style.swap}>
                                <img src="/icons/swap.png" />
                            </div>
                        </Tooltip>
                    </div>
                </Link>

                <Flex
                    justifyContent={{ base: 'none', md: 'center' }}
                    overflow="auto"
                    flexDir={'column'}
                    alignItems={{ sm: 'none', md: 'center' }}
                    bg={{ md: 'none', lg: 'blackAlpha.100' }}
                    className={`${Classes.main}`}
                >
                    <Box
                        display="flex"
                        flexDir="row"
                        w="100%"
                        minW="850px"
                        maxW="850px"
                        mb={'20px'}
                        mx={'20px'}
                        mt="100px"
                    >
                        {/* =============== First Section ============== */}
                        <Box
                            w="40%"
                            pb="10%"
                            minW={'340px'}
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
                                style={Classes.profileText}
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
                                textColor="#fff"
                            />

                            {/* _____________ Skill _____________ */}
                            {resumeData?.skills?.visible && (
                                <>
                                    <Box
                                        mt={5}
                                        display={'flex'}
                                    >
                                        <Heading
                                            title={'RELEVANT SKILLS'}
                                            color="#fff"
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                        />
                                        {show.skills && (
                                            <SectionSideMenu
                                                onHide={() => setShow({ ...show, skills: false })}
                                                bg="#E0EFFA"
                                                iconColor={'#2A78AB'}
                                                onDelete={SKILL}
                                            />
                                        )}
                                    </Box>
                                    <Skill
                                        skillStyle={Classes.skillText}
                                        progressBar={true}
                                        strokeWidth="2"
                                        lineStyle={styles.line}
                                        strokeColor="#1890ff"
                                        trailColor="#fff"
                                        percentageStyle={styles.percent}
                                        parentContainerStyle={Classes.ml}
                                    />
                                </>
                            )}
                        </Box>
                        {/* =============== Second Section ============== */}
                        <Box
                            w="60%"
                            bg="#0C1E37"
                            h="auto"
                            minW="510px"
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
                            {resumeData?.work?.visible && (
                                <>
                                    <Box
                                        mt={'20px'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        padding={'0px 30px 0px 50px'}
                                    >
                                        <Heading
                                            color={'#fff'}
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                            title="WORK EXPERIENCE"
                                            fontSize={'22px'}
                                            onSideSectionShow={() => setShow({ ...show, work: true })}
                                        />
                                        {show.work && (
                                            <SectionSideMenu
                                                onHide={() => setShow({ ...show, work: false })}
                                                bg="#E0EFFA"
                                                iconColor={'#2A78AB'}
                                                onDelete={WORK}
                                            />
                                        )}
                                    </Box>
                                    {/* _____________ Work Experience _____________ */}
                                    <WorkExperience
                                        company={true}
                                        position={true}
                                        date={true}
                                        summary={true}
                                        companyStyle={Classes.company}
                                        positionStyle={Classes.programText}
                                        dateStyle={styles.date}
                                        summaryStyle={Classes.description}
                                        parentContainerStyle={styles.rightContainerWork}
                                        textColor="#fff"
                                    />
                                </>
                            )}
                            {/* _____________ Education _____________ */}
                            {resumeData?.education?.visible && (
                                <>
                                    <Box
                                        mt={'20px'}
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        padding={'0px 30px 0px 50px'}
                                    >
                                        <Heading
                                            color={'#fff'}
                                            line={true}
                                            lineW="100%"
                                            lineH="0.15em"
                                            lineBg="#fff"
                                            title="EDUCATION"
                                            fontSize={'22px'}
                                            fontWeight={700}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                        />
                                        {show.education && (
                                            <SectionSideMenu
                                                onHide={() => setShow({ ...show, education: false })}
                                                bg="#E0EFFA"
                                                iconColor={'#2A78AB'}
                                                onDelete={EDUCATION}
                                            />
                                        )}

                                    </Box>
                                    <Education
                                        degree={true}
                                        institution={true}
                                        date={true}
                                        summary={true}
                                        parentContainerStyle={styles.rightContainerWork}
                                        institutionStyle={Classes.company}
                                        degreeStyle={Classes.programText}
                                        dateStyle={styles.date}
                                        summaryStyle={Classes.description}
                                        degree_placeholder="Study Program"
                                        textColor="#fff"
                                    />
                                </>
                            )}
                        </Box>
                    </Box>
                </Flex>
            </TempLayout>
        </>
    )
}