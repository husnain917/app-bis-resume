import React from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';
import { MdCastForEducation } from 'react-icons/md';
import { BsFillLayersFill } from 'react-icons/bs';
import { GiSkills, GiOrganigram } from 'react-icons/gi';
import { IoLanguageOutline } from 'react-icons/io5';
import { GoProject } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { FaHorseHead } from 'react-icons/fa';
import Classes from '../../styles/templates/hybridTemplate.module.css';
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
import ImageSelector from '../../src/components/imageSelector';

const SkillBaseTemp = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
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

                bg={'white'}
              
                borderRadius={6}
                borderWidth="1px"
                borderColor={'#00000023'}
            >
                <HStack alignItems="stretch">
                    <Box
                        minW={320}
                        maxW={320}
                        bg="#313c4e"
                        py={4}
                        pl={2}
                        borderLeftRadius={6}
                    >
                        {/* Image Section  */}
                        <Box display={'flex'} justifyContent="center">
                            <ImageSelector
                                minWidth={150}
                                maxWidth={150}
                                minHeight={150}
                                maxHeight={150}
                                marginTop="30px"
                            />
                        </Box>
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
                                        circleBg="#fff"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <GiSkills {...props} size={18} color={'#313B47'} />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#fff"
                                        minW={250}
                                        maxW={250}
                                        margin={'10px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, skills: true })
                                        }
                                    />
                                    {/* Skill Row Components */}
                                    <RowSkill
                                        skillStyle={Classes.baseText}
                                        bg="gray"
                                        maxwidth={"220px"}
                                        maxchr={24}
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
                                        circleBg="#fff"
                                        circleIconHeading={true}
                                        icon={(props) => (
                                            <IoLanguageOutline
                                                {...props}
                                                size={18}
                                                color={'#313B47'}
                                            />
                                        )}
                                        fontSize="23px"
                                        fontWeight={'bold'}
                                        color="#fff"
                                        minW={250}
                                        maxW={250}
                                        margin={'15px 0px'}
                                        onSideSectionShow={() =>
                                            setShow({ ...show, languages: true })
                                        }
                                    />
                                    {/* Language Component */}
                                    <Language
                                        langStyle={Classes.baseText}
                                        maxWidth={"220px"}
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
                                            circleBg="#fff"
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaHorseHead
                                                    {...props}
                                                    size={18}
                                                    color={'#313B47'}
                                                />
                                            )}
                                            fontSize="23px"
                                            fontWeight={'bold'}
                                            color="#fff"
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
                                            interestStyle={Classes.baseText}
                                            borderColor="#fff"
                                            maxwidth={"220px"}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </Box>
                    <Box minW={500} maxW={500} p={'20px 45px 0px 30px'} h="full">
                        <Name
                            FName={true}
                            SName={true}
                            maxChr={38}
                            maxWidth={"220px"}
                            minWidth={"220px"}
                            direction="row"
                            FNameStyle={Classes.hybridName}
                            SNameStyle={Classes.hybridName}
                        />
                        {/* Profession Section  */}
                        <Profession
                            professionStyle={Classes.baseTempProfession}
                            maxWidth={"460px"}
                        />
                        {/* About Section */}
                        <About
                            minW="full"
                            aboutStyle={Classes.description}
                            maxwidth={"460px"}
                        />

                        <Box
                            bg={'#313B47'}
                            borderRadius={8}
                            w={'full'}
                            my={3}
                            padding="2"
                            display="flex"
                            justifyContent="center"
                        >
                            {/* Contact Section  */}
                            <Contact
                                parentDirection="row"
                                phone={true}
                                email={true}
                                circleIcon={true}
                                iconColor="#fff"
                                iconSize={'20px'}
                                style={Classes.profileText}
                                margin={'0px 4px 0px 4px'}
                                maxWidth={"120px"}
                            />
                        </Box>
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
                                            onHide={() => setShow({ ...show, education: false })}
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
                                        datewidthmax={"180px"}
                                        maxChr={20}
                                        maxWidth={"420px"}
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
                                        location_placeholder="Country,City"
                                        dateStyle={Classes.date}
                                        positionStyle={Classes.programText}
                                        companyStyle={Classes.institute}
                                        locationStyle={Classes.date}
                                        datewidthmax={"180px"}
                                        maxChr={20}
                                        maxWidth={"420px"}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Project Section  */}
                        {resumeData?.projects?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.sideMenuBox}>
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
                                        maxWidth={"420px"}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Organization Section */}
                        {resumeData?.organization?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.sideMenuBox}>
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
                                        maxwidth={"420px"}
                                        datewidthmax={"200px"}
                                    />
                                </div>
                            </div>
                        )}
                        {/* Certificate Section  */}
                        {resumeData?.certifications?.visible && (
                            <div className={Classes.sideMenu}>
                                <div className={Classes.sideMenuBox}>
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
                                        maxwidth={"420px"}
                                    />
                                </div>
                            </div>
                        )}
                    </Box>
                </HStack>
            </Box>
        </Flex>
    );
};

export default SkillBaseTemp;
