import React from 'react'
import { Box } from '@chakra-ui/react'
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import styles from '../../styles/templates/templateMarket.module.css'
import Classes from '../../styles/templates/flightAttendant.module.css';
import style from "../../styles/templates/template1.module.scss";
import useStoreData from '../../src/components/templateMarket/useStoreData';
import ImageSelector from '../../src/components/imageSelector'
import useShow from '../../src/components/tempSectionSide/useShow';
import Heading from '../../src/components/commonSection/Heading';
import TempLayout from '../../src/components/tempNav/TempLayout';
import {
    CERTIFICATE,
    EDUCATION,
    SKILL,
    WORK,
    LANGUAGES
} from '../../src/components/tempSectionSide/SectionSideConstant';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import Education from '../../src/components/commonSection/Education';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Certificate from '../../src/components/commonSection/Certificate';
import Skill from '../../src/components/commonSection/Skill'
import Language from '../../src/components/commonSection/Language'
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function TemplateMarket() {
    const {
        resumeData,
        theme,
        updater
    } = useStoreData();
    const [show, setShow] = useShow();
    // PDF Download Hook
    const { downloadPDFHandler, pdfRef } = PDFGenerater();
    return (
        <div style={{ overflow: 'auto' }}>
            <div className={style.main}>
                <TempLayout work={true} education={true} skills={true} certificate={true} languages={true} downloadPDF={downloadPDFHandler}>
                    <ChangeTempBtn />
                    <Box className={styles.mainDiv}>
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            ref={pdfRef}
                        >
                            <div className={styles.innerMainDiv} >
                                <div className={styles.innerMainDiv1}>
                                    <Box height={300} display='flex' justifyContent='center' alignItems='center' >
                                        <Box borderRadius="100%" >
                                            <ImageSelector
                                                height={"200px"}
                                                width={"200px"}

                                            />
                                        </Box>
                                    </Box>
                                    {/* profile */}
                                    <Name
                                        FName={true}
                                        FNameStyle={styles.nameStyle}
                                        FNamePlaceholder={'Your Name'}
                                        fontColor={'#000000'}
                                    />
                                    <Profession
                                        professionStyle={styles.profileSubTitle}
                                        fontColor={'#000000'}
                                    />
                                    <Heading
                                        title={'CONTACT PERSON'}
                                        color={'#000000'}
                                        margin={'20px 0px 0px 0px'}
                                        fontSize={'22px'}
                                        fontWeight={900}
                                    />
                                    {/* contact */}
                                    <Contact
                                        phone={true}
                                        email={true}
                                        linkedinURL={true}
                                        website={true}
                                        circleIcon={true}
                                        circleBg="#000000"
                                        circleSize="25px"
                                        iconColor={'#fff'}
                                        margin={'10px 0px 0px 0px'}
                                        parentStyle={styles.ContactText}
                                    />
                                    {/* skill */}
                                    <Box margin={'20px 0px 0px 5px'}>
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
                                                        fontSize={'22px'}
                                                        fontWeight={900}
                                                        color={'#000000'}
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, skills: true })
                                                        }
                                                    />
                                                    <Skill
                                                        cId='market'
                                                        progressBar={true}
                                                        lineStyle={styles.line}
                                                        trailColor="#fff"
                                                        trailWidth="6"
                                                        DndDirection="horizontal"
                                                        skillStyle={styles.skillTxt}
                                                        percentageStyle={styles.percentageStyle}
                                                        minWText="220px"
                                                        maxWText="220px"
                                                        percentStyle={styles.percent}
                                                        strokeColor={'#2A78AB'}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                    {/* language */}
                                    <Box
                                        margin={'20px 0px 30px 5px'}
                                    >
                                        {resumeData?.languages?.visible && (
                                            <div className={Classes.sideMenu}>
                                                <div className={Classes.sideMenuBox}>
                                                    {show?.languages && (
                                                        <SectionSideMenu
                                                            onDelete={LANGUAGES}
                                                            onHide={() => setShow({ ...show, languages: false })}
                                                            bg="#006772"
                                                            iconColor={"#fff"}
                                                        />
                                                    )}
                                                </div>
                                                <div>
                                                    <Heading
                                                        title={'LANGUAGES'}
                                                        fontSize={'22px'}
                                                        fontWeight={900}
                                                        color={'#000000'}
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, languages: true })
                                                        }
                                                    />
                                                    <Language
                                                        cId='market'
                                                        langStyle={styles.skillTxt}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                </div>
                                <div className={styles.innerMainDiv2}>
                                    <Box>
                                        <Heading
                                            title={'ABOUT ME'}
                                            color={'#000000'}
                                            margin={'20% 0% 0% 0%'}
                                            fontWeight={900}
                                        />
                                        <About
                                            minW="100%"
                                            maxW="100%"
                                            aboutStyle={Classes.aboutText}
                                            fontColor="#000000"
                                            fontWeight={'600'}
                                            fontSize={'16px'}
                                        />
                                    </Box>
                                    <Box>
                                        <Box
                                            margin={'30px 0px 10px 0px'}
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
                                                            color={'#000000'}
                                                            title="WORK EXPERIENCE"
                                                            fontSize={'22px'}
                                                            fontWeight={900}
                                                            minW="300px"
                                                            onSideSectionShow={() =>
                                                                setShow({ ...show, work: true })
                                                            }
                                                            maxW={'fit-content'}
                                                        />
                                                        <div className={styles.templateceoHeadingTitle}>
                                                            <WorkExperience
                                                                company={true}
                                                                position={true}
                                                                date={true}
                                                                summary={true}
                                                                companyStyle={Classes.company}
                                                                positionStyle={Classes.programText}
                                                                dateStyle={Classes.date}
                                                                summaryStyle={Classes.description}
                                                                textColor="#000000"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Box>
                                        <Box
                                            margin={'30px 0px 10px 0px'}
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
                                                            color={'#000000'}
                                                            fontSize={'22px'}
                                                            fontWeight={900}
                                                            onSideSectionShow={() =>
                                                                setShow({ ...show, education: true })
                                                            }
                                                        />
                                                        <div className={styles.templateceoHeadingTitle}>
                                                            <Education
                                                                degree={true}
                                                                institution={true}
                                                                date={true}
                                                                summary={true}
                                                                institutionStyle={Classes.company}
                                                                degreeStyle={Classes.programText}
                                                                dateStyle={Classes.date}
                                                                summaryStyle={Classes.description}
                                                                degree_placeholder="Study Program"
                                                                textColor="#000000"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Box>
                                        <Box
                                            margin={'30px 0px 10px 0px'}
                                        >
                                            {resumeData?.certifications?.visible && (
                                                <div className={Classes.sideMenu}>
                                                    <div className={Classes.sideMenuBox}>
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
                                                            title="CERTIFICATIONS"
                                                            color={'#000000'}
                                                            fontSize={'22px'}
                                                            fontWeight={900}
                                                            onSideSectionShow={() =>
                                                                setShow({ ...show, certificates: true })
                                                            }
                                                        />
                                                        <div className={styles.templateceoHeadingTitle}>
                                                            <Certificate
                                                                certificate={true}
                                                                issueDate={true}
                                                                parentContainerStyle={styles.mt}
                                                                certificateStyle={styles.date}
                                                                issueDateStyle={styles.date}
                                                                instituteStyle={styles.company}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Box>
                                    </Box>
                                </div>
                            </div>
                        </Box>
                    </Box>
                </TempLayout>
            </div >
        </div>

    )
}