import { Box, Flex, HStack } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import ImageSelector from '../components/imageSelector';
import Name from '../components/commonSection/Name';
import Profession from '../components/commonSection/Profession';
import Classes from '../../styles/templates/hybridTemplate.module.css';
import Contact from '../components/commonSection/Contact';
import About from '../components/commonSection/About';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import Heading from '../components/commonSection/Heading';
import Education from '../components/commonSection/Education';
import WorkExperience from '../components/commonSection/WorkExperience';
import RowSkill from '../components/commonSection/RowSkill';
import Project from '../components/commonSection/Project';
import Organization from '../components/commonSection/Organization';
import Certificate from '../components/commonSection/Certificate';
import Language from '../components/commonSection/Language';
import Interest from '../components/commonSection/Interest';
import useShow from '../components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
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

const ExecutiveTemp = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
        <Flex
            justifyContent={{ base: 'none', lg: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', lg: 'center' }}
            bg={'#fff'}
        >
            <Box
                minW={837}
                maxW={837}
          minHeight={1183}

                pt={8}
                pb={2}
                px={2}
                bg={'white'}
                borderRadius={6}
                borderWidth="1px"
                borderColor={'#00000023'}
             
            >
                {/* =============== Profile Section =============== */}
                <HStack>
                    <ImageSelector
                        minWidth={150}
                        maxWidth={150}
                        minHeight={150}
                        maxHeight={150}
                        marginLeft="40px"
                        marginTop={'5px'}
                    />
                    <Box>
                        <Name
                            FName={true}
                            SName={true}
                            direction="row"
                            FNameStyle={Classes.hybridName}
                            SNameStyle={Classes.hybridName}
                        minWidth={'280px'}

                        />
                        {/* Profession Section  */}
                        <Profession professionStyle={Classes.ProfessionHybrid}
                        maxWidth={'300px'}
                        />
                    </Box>
                </HStack>
                <HStack
                    minH={'80px'}
                    alignItems="flex-start"
                    justifyContent={'center'}
                    mt={-10}
                >
                    {/* About Section */}
                    <About
                        maxW={'400px'}
                        minW={'400px'}
                        aboutStyle={Classes.profile}
                        
                    />
                </HStack>
                <Box
                    w={'full'}
                    display="flex"
                    justifyContent="center"
                    borderRadius={6}
                    bg="blackAlpha.200"
                    py={2}
                >
                    {/* Contact Section  */}
                    <Contact
                        parentDirection="row"
                        phone={true}
                        email={true}
                        location={true}
                        circleIcon={true}
                        iconColor="#313c4e"
                        iconSize={'20px'}
                        style={Classes.profile}
                        margin={'0px 4px 0px 4px'}
                        maxWidth={'200px'}ç

                    />
                </Box>
                <HStack mt={5} alignItems="stretch" py={'20px'}>
                    <Box minW={490} maxW={490} h="full">
                        <Box pl={6}>
                            {/* Education Section  */}
                            {resumeData?.education?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox}>
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
                                            circleSize="38px"
                                            circleBg="#313B47"
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <MdCastForEducation
                                                    {...props}
                                                    size={18}
                                                    color={'white'}
                                                />
                                            )}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            color="#313B47"
                                            margin={'10px 0px'}
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
                                            maxWidth={'420px'}
                    datewidthmax={'120px'}
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
                                            circleSize="38px"
                                            circleBg="#313B47"
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <BsFillLayersFill
                                                    {...props}
                                                    size={18}
                                                    color={'white'}
                                                />
                                            )}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            color="#313B47"
                                            minW={'full'}
                                            maxW="full"
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
                                            summaryStyle={Classes.date}maxWidth={'420px'}
                                            datewidthmax={'120px'}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    <Box minW={302} maxW={302} borderRadius={6}>
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
                                        circleSize="38px"
                                        circleBg="#313B47"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <GiSkills {...props} size={18} color={'white'} />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={250}
                                        maxW={250}
                                        margin={'10px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    {/* Skill Row Components */}
                                    <RowSkill skillStyle={Classes.skillText} 
                                    maxWidth={'220px'}
                                    datewidthmax={'120px'}
                                    />
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
                                        circleSize="38px"
                                        circleBg="#313B47"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <GoProject {...props} size={18} color={'white'} />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={250}
                                        maxW={250}
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
                                        maxwidth={'270px'}
                    datewidthmax={'120px'}
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
                                        circleSize="38px"
                                        circleBg="#313B47"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <GiOrganigram {...props} size={18} color={'white'} />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={250}
                                        maxW={250}
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
                                        maxwidth={'270px'}
                                        datewidthmax={'120px'}
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
                                        circleSize="38px"
                                        circleBg="#313B47"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <TbCertificate {...props} size={18} color={'white'} />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={250}
                                        maxW={250}
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
                                        maxwidth={'270px'}
                                        datewidthmax={'120px'}
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
                                        circleSize="38px"
                                        circleBg="#313B47"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <IoLanguageOutline
                                                {...props}
                                                size={18}
                                                color={'white'}
                                            />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#313B47"
                                        minW={250}
                                        maxW={250}
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, languages: true })
                                        }
                                    />
                                    {/* Language Component */}
                                    <Language langStyle={Classes.projectTitleText}
                                      maxWidth={'270px'}
                                    />
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
                                            circleSize="38px"
                                            circleBg="#313B47"
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaHorseHead {...props} size={18} color={'white'} />
                                            )}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            color="#313B47"
                                            minW={250}
                                            maxW={250}
                                            margin={'15px 0px'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, interest: true })
                                            }
                                        />
                                        {/* Interest Component  */}
                                        <Interest
                                            dndDirection="horizontal"
                                            interestStyle={Classes.skillText}
                                      maxwidth={'270px'}

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
export default ExecutiveTemp;
