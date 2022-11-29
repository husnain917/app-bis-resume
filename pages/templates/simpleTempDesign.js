import { Box, Flex, HStack, Link } from '@chakra-ui/react';
import style from '../../styles/templates/template1.module.scss';
import Classes from '../../styles/templates/hybridTemplate.module.css';
import { Tooltip } from 'react-tippy';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import RowSkill from '../../src/components/commonSection/RowSkill';
import Project from '../../src/components/commonSection/Project';
import Organization from '../../src/components/commonSection/Organization';
import Certificate from '../../src/components/commonSection/Certificate';
import Language from '../../src/components/commonSection/Language';
import Interest from '../../src/components/commonSection/Interest';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
    CERTIFICATE,
    EDUCATION,
    INTEREST,
    LANGUAGES,
    ORGANIZATION,
    PROJECT,
    SKILL,
    WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import styles from "../../styles/simpleTempDesign.module.css";
import ImageSelector from '../../src/components/imageSelector';


export default function Simple_Temp_Design() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        <>
            <TempLayout
                education={true}
                skills={true}
                languages={true}
                work={true}
                organization={true}
                projects={true}
                certificate={true}
                interest={true}
            >
                <div className={style.main}>
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
                        justifyContent={{ base: 'none', lg: 'center' }}
                        bg={'blackAlpha.100'}
                        overflow="auto"
                        flexDir={'column'}
                        alignItems={{ sm: 'none', md: 'center' }}
                    >
                        <Box
                            minW={910}
                            pb={2}
                            px={4}
                            bg={'white'}
                            mt="100px"
                            borderRadius={6}
                            mx={'20px'}
                            mb={'20px'}
                        >
                            {/* header section */}
                            <Box
                                display={'flex'}
                                width={'100%'}
                                padding={'30px 20px'}
                            >
                                <Box
                                    width={'18%'}
                                >
                                    <ImageSelector
                                        minWidth="150px"
                                        maxWidth="150px"
                                        maxHeight="150px"
                                        minHeight="150px"
                                    />
                                </Box>
                                <Box
                                    width={'82%'}
                                    padding={'0px 20px 20px 40px'}
                                >
                                    <Name
                                        FName={true}
                                        SName={true}
                                        direction="row"
                                        FNameStyle={styles.hybridName}
                                        SNameStyle={styles.hybridName}
                                    />
                                    <Profession professionStyle={styles.ProfessionHybrid} />
                                    <About
                                        minW="100%"
                                        maxW="100%"
                                        textColor="#000000"
                                        fontSize="16px"
                                        fontWeight={600}
                                    />
                                </Box>
                            </Box>
                            {/* header section end */}
                            {/* links section */}
                            <Box
                                bg={'blackAlpha.200'}
                                borderRadius={6}
                                w={'100%'}
                                display={'flex'}
                                justifyContent={'center'}
                                padding={'5px 0px'}
                                marginBottom={'10px'}
                            >
                                <Contact
                                    parentDirection="row"
                                    phone={true}
                                    email={true}
                                    location={true}
                                    circleIcon={true}
                                    iconColor="#000000"
                                    iconSize={'20px'}
                                    style={styles.profileText}
                                    margin={'0px 4px 0px 4px'}
                                />
                            </Box>
                            <HStack mt={5} alignItems="stretch">
                                <Box minW={580} maxW={580} h="full">
                                    <Box pl={8}>
                                        {/* Education Section  */}
                                        {resumeData?.education?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'}>
                                                    {/* Section Side Menu */}
                                                    {show.education && (
                                                        <SectionSideMenu
                                                            bg={'#313B47'}
                                                            onHide={() =>
                                                                setShow({ ...show, education: false })
                                                            }
                                                            onDelete={EDUCATION}
                                                        />
                                                    )}
                                                    {/* Heading For Education Section  */}
                                                    <Heading
                                                        title="EDUCATION"
                                                        fontSize="23px"
                                                        fontWeight={'bold'}
                                                        color="#313B47"
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, education: true })
                                                        }
                                                    />
                                                </HStack>
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
                                            </>
                                        )}
                                        {/* Work Experience Section */}
                                        {resumeData?.work?.visible && (
                                            <>
                                                <HStack alignItems={'flex-start'}>
                                                    {/* Section Side Menu */}
                                                    {show.work && (
                                                        <SectionSideMenu
                                                            bg={'#313B47'}
                                                            onHide={() => setShow({ ...show, work: false })}
                                                            onDelete={WORK}
                                                        />
                                                    )}
                                                    {/* Work Experience Heading  */}
                                                    <Heading
                                                        title="WORK EXPERIENCE"
                                                        fontSize="23px"
                                                        fontWeight={'bold'}
                                                        color="#313B47"
                                                        minW={'full'}
                                                        maxW="full"
                                                        onSideSectionShow={() =>
                                                            setShow({ ...show, work: true })
                                                        }
                                                    />
                                                </HStack>
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
                                            </>
                                        )}
                                    </Box>
                                </Box>
                                <Box minW={302} maxW={302} bg="#fff" p={4} borderRadius={6}>
                                    {/* skill Section  */}
                                    {resumeData?.skills?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.skills && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() => setShow({ ...show, skills: false })}
                                                        onDelete={SKILL}
                                                    />
                                                )}
                                                {/* skill Heading */}
                                                <Heading
                                                    title="SKILLS"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                />
                                            </HStack>
                                            {/* Skill Row Components */}
                                            <RowSkill skillStyle={Classes.skillText} />
                                        </>
                                    )}
                                    {/* Project Section  */}
                                    {resumeData?.projects?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.project && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() => setShow({ ...show, project: false })}
                                                        onDelete={PROJECT}
                                                    />
                                                )}
                                                {/* project Section Heading */}
                                                <Heading
                                                    title="PROJECTS"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, project: true })
                                                    }
                                                />
                                            </HStack>
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
                                        </>
                                    )}
                                    {/* Organization Section */}
                                    {resumeData?.organization?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.organization && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() =>
                                                            setShow({ ...show, organization: false })
                                                        }
                                                        onDelete={ORGANIZATION}
                                                    />
                                                )}
                                                {/* Organization Heading */}
                                                <Heading
                                                    title="ORGANIZATION"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, organization: true })
                                                    }
                                                />
                                            </HStack>
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
                                        </>
                                    )}
                                    {/* Certificate Section  */}
                                    {resumeData?.certifications?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.certificates && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() =>
                                                            setShow({ ...show, certificates: false })
                                                        }
                                                        onDelete={CERTIFICATE}
                                                    />
                                                )}
                                                {/* Certificate Heading */}
                                                <Heading
                                                    title="CERTIFICATES"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, certificates: true })
                                                    }
                                                />
                                            </HStack>
                                            {/* Certificate Component */}
                                            <Certificate
                                                issueDate={true}
                                                certificate={true}
                                                institute={true}
                                                certificateStyle={Classes.projectTitleText}
                                                issueDateStyle={Classes.description}
                                                instituteStyle={Classes.description}
                                            />
                                        </>
                                    )}
                                    {/* Language Section */}
                                    {resumeData?.languages?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.languages && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() => setShow({ ...show, languages: false })}
                                                        onDelete={LANGUAGES}
                                                    />
                                                )}
                                                {/* languages Heading */}
                                                <Heading
                                                    title="LANGUAGES"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, languages: true })
                                                    }
                                                />
                                            </HStack>
                                            {/* Language Component */}
                                            <Language langStyle={Classes.projectTitleText} />
                                        </>
                                    )}
                                    {/* Interest Section */}
                                    {resumeData?.hobbies?.visible && (
                                        <>
                                            <HStack alignItems={'flex-start'}>
                                                {/* Section Side Menu */}
                                                {show.interest && (
                                                    <SectionSideMenu
                                                        bg={'#313B47'}
                                                        onHide={() => setShow({ ...show, interest: false })}
                                                        onDelete={INTEREST}
                                                    />
                                                )}
                                                {/* Interest Heading */}
                                                <Heading
                                                    title="INTEREST"
                                                    fontSize="23px"
                                                    fontWeight={'bold'}
                                                    color="#313B47"
                                                    minW={250}
                                                    maxW={250}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, interest: true })
                                                    }
                                                />
                                            </HStack>
                                            {/* Interest Component  */}
                                            <Interest
                                                dndDirection="horizontal"
                                                interestStyle={Classes.skillText}
                                            />
                                        </>
                                    )}
                                </Box>
                            </HStack>
                        </Box>
                    </Flex>
                </div>
            </TempLayout>
        </>
    )
}