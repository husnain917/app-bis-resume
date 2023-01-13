import { Box, Flex, HStack } from '@chakra-ui/react';
import style from '../../styles/templates/template1.module.scss';
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
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function Simple_Temp_Design() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    <>
      <div
        style={{ overflow: 'auto' }}
      >
        <TempLayout
          education={true}
          skills={true}
          languages={true}
          work={true}
          organization={true}
          projects={true}
          certificate={true}
          interest={true}
          downloadPDF={downloadPDFHandler}
        >
          <div className={style.main}>
            <ChangeTempBtn />
            <Flex
              justifyContent={{ base: 'none', lg: 'center' }}
              bg={'#fff'}
              pt="70px"
              flexDir={'column'}
              alignItems={{ sm: 'none', md: 'center' }}
            >
              <Box
                mt="50px"
                mx={'20px'}
              >
                <Box
                  minW={910}
                  pb={2}
                  px={4}
                  bg={'white'}
                  borderRadius={6}
                  mb={'20px'}
                  borderWidth="1px"
                  borderColor={'#00000023'}
                  ref={pdfRef}
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
                        fontColor="#000000"
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
                        <Box>
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
                                  color="#313B47"
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
                                  degreeStyle={Classes.programText}
                                  dateStyle={Classes.date}
                                  locationStyle={Classes.date}
                                />
                              </div>
                            </div>
                          )}
                        </Box>
                        {/* Work Experience Section */}
                        <Box>
                          {resumeData?.work?.visible && (
                            <div className={Classes.sideMenu}>
                              <div className={Classes.sideMenuBox}>
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
                    </Box>
                    <Box minW={302} maxW={302} bg="#fff" p={4} borderRadius={6}>
                      {/* skill Section  */}
                      <Box>
                        {resumeData?.skills?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                                fontSize="23px"
                                fontWeight={'bold'}
                                color="#313B47"
                                minW={250}
                                maxW={250}
                                onSideSectionShow={() =>
                                  setShow({ ...show, skills: true })
                                }
                              />
                              <RowSkill skillStyle={Classes.skillText} />
                            </div>
                          </div>
                        )}
                      </Box>
                      {/* Project Section  */}
                      <Box>
                        {resumeData?.projects?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                      </Box>
                      {/* Organization Section */}
                      <Box>
                        {resumeData?.organization?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                      </Box>
                      {/* Certificate Section  */}
                      <Box>
                        {resumeData?.certifications?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                                fontSize="23px"
                                fontWeight={'bold'}
                                color="#313B47"
                                minW={250}
                                maxW={250}
                                onSideSectionShow={() =>
                                  setShow({ ...show, certificates: true })
                                }
                              />
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
                      </Box>
                      {/* Language Section */}
                      <Box>
                        {resumeData?.languages?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                              <Language
                                langStyle={Classes.projectTitleText}
                                margin={'0px 0px 0px 10px'}
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                      {/* Interest Section */}
                      <Box>
                        {resumeData?.hobbies?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
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
                              <Interest
                                dndDirection="horizontal"
                                interestStyle={Classes.skillText}
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
          </div>
        </TempLayout>
      </div>
    </>
  )
}
