import { Box, Flex, HStack } from '@chakra-ui/react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/teacherTemp.module.css';
import Contact from '../../src/components/commonSection/Contact';
import About from '../../src/components/commonSection/About';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Skill from '../../src/components/commonSection/Skill';
import Certificate from '../../src/components/commonSection/Certificate';
import useShow from '../../src/components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
import {
  CERTIFICATE,
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
const TeacherTemp = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  const { backgroundColor } = useSelector(
    (store) => store.themeReducer.theme
  );
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout
        education={true}
        skills={true}
        work={true}
        certificate={true}
        downloadPDF={downloadPDFHandler}
      >
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', lg: 'center' }}
          flexDir={'column'}
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box
            margin={'100px 20px 30px 20px'}
          >
            <Box
              minW={910}
              pt={12}
              pb={2}
              px={2}
              bg={'white'}
              borderRadius={6}
              borderWidth="1px"
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              <Box display="flex" flexDirection={"row"} justifyContent="center">
                <Name
                  FName={true}
                  SName={true}
                  direction="row"
                  FNameStyle={Classes.Name}
                  SNameStyle={Classes.Name}
                />
              </Box>
              <Box display="flex" flexDirection={"row"} justifyContent="center"  >
                <Contact
                  parentDirection="column-reverse"
                  phone={true}
                  email={true}
                  location={true}
                  style={Classes.profile}
                  margin={'0px 4px 0px 4px'}
                />
              </Box>
              <Box
                w={'full'}
                display="flex"
                justifyContent="center"
                borderRadius={6}
                bg={backgroundColor ? backgroundColor : "#17A9E4"}
                py={2}
                color="white"
              >
                <About
                  maxW={'700px'}
                  minW={'700px'}
                  aboutStyle={Classes.profile}
                />
              </Box>
              <HStack alignItems="stretch" py={'20px'}>
                <Box minW={380} maxW={380} h="full">
                  <Box >  
                    <Box pl={8}>
                    {resumeData?.education?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox}>

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
                          <Heading
                            title="EDUCATION"
                            fontSize="23px"
                            fontWeight={'bold'}
                            color="#17A9E4"
                            margin={' 10px 0px'}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
                          />
                          <Education
                            institution={true}
                            degree={true}
                            degree_placeholder="Study Program"
                            date={true}
                            location={true}
                            institutionStyle={Classes.institute}
                            degreeStyle={Classes.institute}
                            dateStyle={Classes.date}
                            locationStyle={Classes.location}
                          />
                        </div>
                      </div>
                    )}
                  </Box>

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

                          <Heading
                            title="SKILLS"
                            color="#17A9E4"
                            fontSize="23px"
                            fontWeight={'bold'}

                            onSideSectionShow={() =>
                              setShow({ ...show, skills: true })
                            }
                          />
                          <Skill skillStyle={Classes.skillText} />
                        </div>
                      </div>
                    )}
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
                          <Heading
                            title="CERTIFICATES"
                            color="#17A9E4"
                            fontSize="23px"
                            fontWeight={'bold'}
                            minW={250}
                            maxW={250}
                            margin={'15px 0px'}
                            onSideSectionShow={() =>
                              setShow({ ...show, certificates: true })
                            }
                          />
                          <Certificate
                            issueDate={true}
                            certificate={true}
                            certificateStyle={Classes.projectTitleText}
                            issueDateStyle={Classes.projectTitleText}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
                <Box minW={580} maxW={580} pr={2} borderRadius={6}>
                  {/* skill Section  */}

                  <Box
                    padding={'0px 0px 0px 53px'}
                    margin={'10px 0px 10px 0px'}
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
                            title="Professional Experience"
                            fontSize={'23px'}
                            color="#17A9E4"
                            fontWeight={'bold'}
                            minW="500px"
                            onSideSectionShow={() =>
                              setShow({ ...show, work: true })
                            }

                          />
                          <WorkExperience
                            company={true}
                            position={true}
                            date={true}
                            summary={true}
                            companyStyle={Classes.company}
                            positionStyle={Classes.programText}
                            dateStyle={Classes.date}
                            summaryStyle={Classes.company}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default TeacherTemp;
