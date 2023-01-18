import { Box, Flex, HStack } from '@chakra-ui/react';
import Classes from '../../styles/templates/hybridTemplate.module.css';
import ImageSelector from '../components/imageSelector';
import Name from '../components/commonSection/Name';
import Profession from '../components/commonSection/Profession';
import About from '../components/commonSection/About';
import Contact from '../components/commonSection/Contact';
import Interest from '../components/commonSection/Interest';
import Heading from '../components/commonSection/Heading';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import Language from '../components/commonSection/Language';
import Certificate from '../components/commonSection/Certificate';
import Organization from '../components/commonSection/Organization';
import Project from '../components/commonSection/Project';
import RowSkill from '../components/commonSection/RowSkill';
import WorkExperience from '../components/commonSection/WorkExperience';
import Education from '../components/commonSection/Education';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import {
    CERTIFICATE,
    EDUCATION,
    INTEREST,
    LANGUAGES,
    ORGANIZATION,
    PROJECT,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';

const CollegeTemp = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
        >
            <Box
                minW={830}
                pt={6}
                pb={2}
                px={2}
                bg={'white'}
                borderRadius={6}
                borderWidth="1px"
                borderColor={'#00000023'}
                mb={'20px'}
            >
                {/* =============== Profile Section =============== */}
                <HStack alignItems="flex-start">
                    <HStack py={3} minW="650px" maxW={'650px'}>
                        <Box ml={6}>
                            <Name
                                FName={true}
                                SName={true}
                                direction="row"
                                FNameStyle={Classes.techName}
                                SNameStyle={Classes.techName}
                            />
                            <Box pb={10} justifyContent={'center'} ml={1}>
                                <Profession professionStyle={Classes.ProfessionHybrid} />
                                <About
                                    minW="full"
                                    maxW="full"
                                    aboutStyle={Classes.techAbout}
                                />
                            </Box>
                        </Box>
                        <ImageSelector
                            minWidth={150}
                            maxWidth={150}
                            minHeight={150}
                            maxHeight={150}
                            marginLeft="40px"
                        />
                    </HStack>
                    <Box
                        minW={'150'}
                        maxW={'150'}
                        pt={8}
                        pr={8}
                    >
                        <Contact
                            email={true}
                            phone={true}
                            circleIcon={true}
                            iconColor="#313c4e"
                            circleSize="30px"
                            circleBorderW="1px"
                            margin="10px 0px 0px 0px"
                            circleBorderColor="#313c4e"
                            direction="row-reverse"
                        />
                    </Box>
                </HStack>
                <HStack mt={5} alignItems="stretch">
                    <Box minW={490} maxW={490} h="full">
                        <Box pl={8} pt={'22px'}>
                            {/* Education Section  */}
                            {resumeData?.education?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div
                                        className={Classes.sideMenuBox}
                                        style={{ marginTop: '0px' }}
                                    >
                                        {/* Section Side Menu */}
                                        {show.education && (
                                            <SectionSideMenu
                                                bg="#006772"
                                                iconColor={"#fff"}
                                                onHide={() =>
                                                    setShow({ ...show, education: false })
                                                }
                                                onDelete={EDUCATION}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        {/* Heading For Education Section  */}
                                        <Heading
                                            title="EDUCATION"
                                            borderTop="2px solid #313c4e"
                                            borderBottom={'2px solid #313c4e'}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            minW="fit-content"
                                            maxW={'fit-content'}
                                            color="#313B47"
                                            margin={'0px 0px 10px 0px'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                        />
                                        {/* Education Components */}
                                        <Education
                                            institution={true}
                                            degree={true}
                                            degree_placeholder="Study Program"
                                            date={true}
                                            location={true}
                                            institutionStyle={Classes.institute}
                                            degreeStyle={Classes.programText}
                                            dateStyle={Classes.date}
                                            locationStyle={Classes.date}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* Work Experience Section */}
                            {resumeData?.work?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox}>
                                        {/* Section Side Menu */}
                                        {show.work && (
                                            <SectionSideMenu
                                                bg="#006772"
                                                iconColor={"#fff"}
                                                onHide={() => setShow({ ...show, work: false })}
                                                onDelete={WORK}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        {/* Work Experience Heading  */}
                                        <Heading
                                            title="WORK EXPERIENCE"
                                            borderTop="2px solid #313c4e"
                                            borderBottom={'2px solid #313c4e'}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            color="#313B47"
                                            minW="fit-content"
                                            maxW={'fit-content'}
                                            margin={'10px 0px'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, work: true })
                                            }
                                        />
                                        {/* Work Experience Components */}
                                        <WorkExperience
                                            date={true}
                                            position={true}
                                            company={true}
                                            location={true}
                                            summary={true}
                                            summary_placeholder="Company Description (optional,fill when the company is not well known"
                                            location_placeholder="Country,City"
                                            dateStyle={Classes.date}
                                            positionStyle={Classes.programText}
                                            companyStyle={Classes.institute}
                                            locationStyle={Classes.date}
                                            summaryStyle={Classes.date}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    <Box
                        minW={312}
                        maxW={312}
                        bg="#D6D6D6"
                        py={4}
                        pl={2}
                        borderRadius={6}
                    >
                        {/* skill Section  */}
                        {resumeData?.skills?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.width}>
                                    {show.skills && (
                                        <SectionSideMenu
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onHide={() => setShow({ ...show, skills: false })}
                                            onDelete={SKILL}
                                        />
                                    )}
                                </div>
                                <div>
                                    {/* skill Heading */}
                                    <Heading
                                        title="SKILLS"
                                        borderTop="2px solid #313c4e"
                                        borderBottom={'2px solid #313c4e'}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={'full'}
                                        maxW={'full'}
                                        margin={'10px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    {/* Skill Row Components */}
                                    <RowSkill skillStyle={Classes.skillText} />
                                </div>
                            </div>
                        )}
                        {/* Project Section  */}
                        {resumeData?.projects?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.width}>
                                    {/* Section Side Menu */}
                                    {show.project && (
                                        <SectionSideMenu
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onHide={() => setShow({ ...show, project: false })}
                                            onDelete={PROJECT}
                                        />
                                    )}
                                </div>
                                <div>
                                    {/* project Section Heading */}
                                    <Heading
                                        title="PERSONAL PROJECTS"
                                        borderTop="2px solid #313c4e"
                                        borderBottom={'2px solid #313c4e'}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={'full'}
                                        maxW={'full'}
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, project: true })
                                        }
                                    />
                                    {/* project Component */}
                                    <Project
                                        project={true}
                                        duration={true}
                                        summary={true}
                                        projectStyle={Classes.projectTitleText}
                                        summaryStyle={Classes.description}
                                        durationStyle={Classes.description}
                                        projectPlaceholder={'Project Name'}
                                        durationPlaceholder="Project Duration"
                                        summaryPlaceholder="Project Summary"
                                    />
                                </div>
                            </div>
                        )}
                        {/* Organization Section */}
                        {resumeData?.organization?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.width}>
                                    {/* Section Side Menu */}
                                    {show.organization && (
                                        <SectionSideMenu
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onHide={() =>
                                                setShow({ ...show, organization: false })
                                            }
                                            onDelete={ORGANIZATION}
                                        />
                                    )}
                                </div>
                                <div>
                                    {/* Organization Heading */}
                                    <Heading
                                        title="ORGANIZATION"
                                        borderTop="2px solid #313c4e"
                                        borderBottom={'2px solid #313c4e'}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={'full'}
                                        maxW={'full'}
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, organization: true })
                                        }
                                    />
                                    {/* Organization Component */}
                                    <Organization
                                        organization={true}
                                        date={true}
                                        role={true}
                                        organizationStyle={Classes.projectTitleText}
                                        dateStyle={Classes.description}
                                        roleStyle={Classes.description}
                                        rolePlaceholder="Role"
                                    />
                                </div>
                            </div>
                        )}
                        {/* Certificate Section  */}
                        {resumeData?.certifications?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.width}>
                                    {/* Section Side Menu */}
                                    {show.certificates && (
                                        <SectionSideMenu
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onHide={() =>
                                                setShow({ ...show, certificates: false })
                                            }
                                            onDelete={CERTIFICATE}
                                        />
                                    )}
                                </div>
                                <div>
                                    {/* Certificate Heading */}
                                    <Heading
                                        title="CERTIFICATES"
                                        borderTop="2px solid #313c4e"
                                        borderBottom={'2px solid #313c4e'}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={'full'}
                                        maxW={'full'}
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, certificates: true })
                                        }
                                    />
                                    {/* Certificate Component */}
                                    <Certificate
                                        issueDate={true}
                                        certificate={true}
                                        institute={true}
                                        certificateStyle={Classes.projectTitleText}
                                        issueDateStyle={Classes.description}
                                        instituteStyle={Classes.description}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Language Section */}
                        {resumeData?.languages?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.width}>
                                    {/* Section Side Menu */}
                                    {show.languages && (
                                        <SectionSideMenu
                                            bg="#006772"
                                            iconColor={"#fff"}
                                            onHide={() => setShow({ ...show, languages: false })}
                                            onDelete={LANGUAGES}
                                        />
                                    )}
                                </div>
                                <div>
                                    {/* languages Heading */}
                                    <Heading
                                        title="LANGUAGES"
                                        borderTop="2px solid #313c4e"
                                        borderBottom={'2px solid #313c4e'}
                                        minW="full"
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, languages: true })
                                        }
                                    />
                                    {/* Language Component */}
                                    <Language langStyle={Classes.projectTitleText} />
                                </div>
                            </div>
                        )}
                        {/* Interest Section */}
                        {resumeData?.hobbies?.visible && (
                            <>
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.width}>
                                        {/* Section Side Menu */}
                                        {show.interest && (
                                            <SectionSideMenu
                                                bg="#006772"
                                                iconColor={"#fff"}
                                                onHide={() => setShow({ ...show, interest: false })}
                                                onDelete={INTEREST}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        {/* Interest Heading */}
                                        <Heading
                                            title="INTEREST"
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            borderTop="2px solid #313c4e"
                                            borderBottom={'2px solid #313c4e'}
                                            color="#313B47"
                                            minW={'full'}
                                            margin={'15px 0px'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, interest: true })
                                            }
                                        />
                                        {/* Interest Component  */}
                                        <Interest
                                            dndDirection="horizontal"
                                            interestStyle={Classes.skillText}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </Box>
                </HStack>
            </Box>
        </Flex>
    );
};
export default CollegeTemp;
