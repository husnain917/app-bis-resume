import React from 'react'
import { Box } from '@chakra-ui/react'
import Name from '../components/commonSection/Name';
import Profession from '../components/commonSection/Profession';
import styles from '../../styles/templates/templateMarket.module.css'
import Classes from '../../styles/templates/flightAttendant.module.css';
import { useSelector } from 'react-redux'
import ImageSelector from '../components/imageSelector'
import useShow from '../components/tempSectionSide/useShow';
import Heading from '../components/commonSection/Heading';
import {
    CERTIFICATE,
    EDUCATION,
    SKILL,
    WORK,
    LANGUAGES
} from '../components/tempSectionSide/SectionSideConstant';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import Education from '../components/commonSection/Education';
import About from '../components/commonSection/About';
import Contact from '../components/commonSection/Contact';
import WorkExperience from '../components/commonSection/WorkExperience';
import Certificate from '../components/commonSection/Certificate';
import Skill from '../components/commonSection/Skill'
import Language from '../components/commonSection/Language'

export default function TemplateMarket() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const [show, setShow] = useShow();

    return (
        <Box className={styles.mainDiv}>
            <Box
                display={'flex'}
                justifyContent={'center'}
            >
                <div className={styles.innerMainDiv}>
                    <div className={styles.innerMainDiv1}>
                        <Box display='flex' justifyContent='center'>
                            <ImageSelector
                                height={"200px"}
                                width={"200px"}
                            />
                        </Box>
                        <Box
                            pl={'40px'}
                        >
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
                                                percentStyle={styles.percent}
                                                strokeColor={'#2A78AB'}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                            {/* language */}
                            <Box
                                margin={'20px 0px 30px 6px'}
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
                        </Box>
                    </div>
                    <div className={styles.innerMainDiv2}>
                        <Box>
                            <Heading
                                title={'ABOUT ME'}
                                color={'#000000'}
                                margin={'12% 0% 0% 0%'}
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

    )
}