import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Classes from '../../styles/templates/student.module.scss';
import ImageSelector from '../components/imageSelector';
import Heading from '../components/commonSection/Heading';
import Profession from '../components/commonSection/Profession';
import About from '../components/commonSection/About';
import Contact from '../components/commonSection/Contact';
import Name from '../components/commonSection/Name';
import Skill from '../components/commonSection/Skill';
import { FaChevronRight } from 'react-icons/fa';
import Education from '../components/commonSection/Education';
import Language from '../components/commonSection/Language';
import WorkExperience from '../components/commonSection/WorkExperience';
import useShow from '../components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import {
    EDUCATION,
    LANGUAGES,
    SKILL,
    WORK,
} from '../components/tempSectionSide/SectionSideConstant';

const StudentTemplate = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
        //  ~~~~~~~~~~~~~~ Student Resume Template ~~~~~~~~~~~~~~  //
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

                borderRadius={6}
                pt={'50px'}
                bg="white"
                borderWidth="1px"
                borderColor={'#00000023'}
            >
                <Box>
                    <Box bg={'#EBC9BB'} h={'230px'}>
                        <Box ml={'320px'} pt={'60px'}>
                            {/* =============== Name Section =============== */}
                            <Name
                                FName={true}
                                SName={true}
                                FNameStyle={Classes.name}
                                SNameStyle={Classes.name}
                            />
                            {/* =============== Profession Section =============== */}
                            <Profession professionStyle={Classes.Profession} 
                            />
                        </Box>
                    </Box>
                    <Box display={'flex'} alignItems="stretch">
                        {/* __________________  First Section  __________________ */}
                        <Box
                            minW="250px"
                            maxW={'250px'}
                            bg={'#6B9999'}
                            mt="-280px"
                            pb={12}
                            px="24px"
                            ml={'30px'}
                        >
                            {/* =============== Profile Section =============== */}
                            <ImageSelector
                                minWidth={200}
                                maxWidth={200}
                                minHeight={200}
                                maxHeight={200}
                                marginTop={'40px'}
                            />
                            <Heading
                                title={'PROFILE'}
                                color="#fff"
                                fontSize={'17px'}
                                letterSpacing="1px"
                                fontWeight="700"
                                margin="40px 0px 0px 0px"
                            />
                            <About aboutStyle={Classes.about} minW="full" maxW="full" />
                            <Heading
                                title={'CONTACT ME'}
                                color="#fff"
                                fontSize={'17px'}
                                letterSpacing="1px"
                                fontWeight="700"
                                margin="20px 0px 0px 0px"
                            />
                            <Contact
                                phone={true}
                                email={true}
                                location={true}
                                iconColor="#fff"
                                iconSize="24px"
                                style={Classes.profileText}
                                margin={'5px 0px'}
                                circleIcon={true}
                            maxWidth={'180px'}

                            />
                        </Box>
                        {/* __________________  Second Section  __________________ */}
                        <Box
                            mt="20px"
                            mr={'30px'}
                            minW="450px"
                            maxW={'450px'}
                            mb="30px"
                        >
                            {/* =============== Education Section =============== */}
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
                                            fontSize="20px"
                                            margin="20px 0px 10px 0px"
                                            fontWeight={600}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, education: true })
                                            }
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#6B9999"
                                                    size={22}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <Education
                                            institution={true}
                                            date={true}
                                            summary={true}
                                            institutionStyle={Classes.institute}
                                            summaryStyle={Classes.summary}
                                            dateStyle={Classes.summary}
                                            margin="0px 0px 0px 25px"
                                            maxWidth={'470px'}
                    datewidthmax={'140px'}

                                        />
                                    </div>
                                </div>
                            )}

                            {/* =============== Languages Section =============== */}
                            {resumeData?.languages?.visible && (
                                <div className={Classes.sideMenu}>
                                    <div className={Classes.sideMenuBox}>
                                        {show?.languages && (
                                            <SectionSideMenu
                                                onHide={() =>
                                                    setShow({ ...show, languages: false })
                                                }
                                                onDelete={LANGUAGES}
                                                bg="#006772"
                                                iconColor={"#fff"}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <Heading
                                            title={'LANGUAGES'}
                                            fontSize="20px"
                                            fontWeight={600}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, languages: true })
                                            }
                                            margin="20px 0px 10px 0px"
                                            circleIconHeading={true}
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#6B9999"
                                                    size={22}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <Language
                                            langStyle={Classes.summary}
                                            margin={'0px 0px 0px 25px'}
                                            maxWidth={'470px'}
                                            datewidthmax={'140px'}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* =============== Skill Section =============== */}
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
                                            title={'COMPUTER SKILLS'}
                                            fontSize="20px"
                                            fontWeight={600}
                                            margin="20px 0px 10px 0px"
                                            circleIconHeading={true}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#6B9999"
                                                    size={22}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <Skill
                                            skillStyle={Classes.summary}
                                            margin={'0px 0px 0px 25px'}
                                            maxWidth={'470px'}
                                            datewidthmax={'140px'}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* =============== Work Experience Section =============== */}
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
                                            title={'VOLUNTEER EXPERIENCE'}
                                            fontSize="20px"
                                            fontWeight={600}
                                            margin="20px 0px 10px 0px"
                                            circleIconHeading={true}
                                            minW="300px"
                                            onSideSectionShow={() =>
                                                setShow({ ...show, work: true })
                                            }
                                            maxW={'fit-content'}
                                            icon={(props) => (
                                                <FaChevronRight
                                                    color="#6B9999"
                                                    size={22}
                                                    {...props}
                                                />
                                            )}
                                        />
                                        <WorkExperience
                                            company={true}
                                            date={true}
                                            summary={true}
                                            companyStyle={Classes.institute}
                                            dateStyle={Classes.summary}
                                            summaryStyle={Classes.summary}
                                            margin="0px 0px 0px 25px"
                                            maxWidth={'470px'}
                                            datewidthmax={'140px'}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};
export default StudentTemplate;
