import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../../src/components/commonSection/Name';
import Classes from '../../../styles/templates/flightAttendant.module.css';
import Profession from '../../../src/components/commonSection/Profession';
import Contact from '../../../src/components/commonSection/Contact';
import Heading from '../../../src/components/commonSection/Heading';
import Skill from '../../../src/components/commonSection/Skill';
import WorkExperience from '../../../src/components/commonSection/WorkExperience';
import Education from '../../../src/components/commonSection/Education';
import TempLayout from '../../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../../src/components/commonSection/About';
import ImageSelector from '../../../src/components/imageSelector';
import styles from "../../../styles/templates/awaisFashion.module.css";
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from '../../../src/components/tempNav/PDFGenerater';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import Language from "../../../src/components/commonSection/Language";
import {
  FaArchive,
  FaPhoneAlt,
  FaBuffer,
  FaHive,
  FaUser,
  FaSketch,
} from "react-icons/fa";

export default function FashionDesigner() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <TempLayout
          work={true}
          education={true}
          skills={true}
          languages={true}
          downloadPDF={downloadPDFHandler}
        >
          <ChangeTempBtn />
          <Flex
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', md: 'center' }}
            bg={'#fff'}
            pt="70px"
          >
            <Box mx={'20px'} mt="50px">
              <Box
                display="flex"
                flexDir="row"
                w="100%"
                minW="850px"
                maxW="850px"
                mb={'20px'}
                ref={pdfRef}
              >
                {/* =============== First Section ============== */}
                <Box
                  w="40%"
                  pb="10%"
                  minW={'510px'}
                  bgColor={backgroundColor ? backgroundColor : '#E6D5C2'}
                  borderLeftRadius={6}
                  pr={3}
                  pl={12}
                  py={8}
                  transition="0.5s background"
                >
                  {/* _____________ Profile _____________ */}
                  <Name
                    FName={true}
                    SName={true}
                    direction="column"
                    FNameStyle={styles.nameStyle}
                    SNameStyle={styles.nameStyle}
                    margin={'6% 0% 0% 0%'}
                    fontColor={color ? color : '#1B4245'}
                  />
                  <Box bgColor={color ? color : '#1B4245'} w="43%" h="5px" mt="2%"></Box>
                  <Profession
                    professionStyle={styles.profileSubTitle}
                    margin={'2% 0% 5% 0%'}
                    fontColor={color ? color : '#1B4245'}
                  />

                  {/* _____________ About me _____________ */}
                  <Heading
                    title={'ABOUT ME'}
                    color={color ? color : '#1B4245'}
                    margin={'20px 0px 0px 0px'}
                    fontWeight={700}
                    circleIconHeading={true}
                    icon={(props) => (
                      <FaUser
                        color={color ? color : '#1B4245'}
                        size={25}
                        {...props}
                      />
                    )}
                  />
                  <About
                    minW="100%"
                    maxW="100%"
                    aboutStyle={Classes.aboutText}
                    fontColor="#1B4245"
                    fontWeight={'600'}
                    fontSize={'16px'}
                  />
                  {/* _____________ Work _____________ */}
                  <Box
                    margin={'20px 0px 10px 7px'}
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
                            color={color ? color : '#1B4245'}
                            title="WORK EXPERIENCE"
                            fontSize={'22px'}
                            fontWeight={700}
                            minW="300px"
                            onSideSectionShow={() =>
                              setShow({ ...show, work: true })
                            }
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaArchive
                                color={color ? color : '#1B4245'}
                                size={25}
                                {...props}
                              />
                            )}
                            maxW={'fit-content'}
                          />
                          <WorkExperience
                            company={true}
                            position={true}
                            date={true}
                            summary={true}
                            companyStyle={Classes.company}
                            positionStyle={Classes.programText}
                            dateStyle={Classes.date}
                            summaryStyle={Classes.description}
                            parentContainerStyle={styles.rightContainerWork}
                            textColor="#1B4245"
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* _____________ Education _____________ */}
                  <Box
                    margin={'20px 0px 10px 7px'}
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
                            color={color ? color : '#1B4245'}
                            fontSize={'22px'}
                            fontWeight={700}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaBuffer
                                color={color ? color : '#1B4245'}
                                size={25}
                                {...props}
                              />
                            )}
                          />
                          <Education
                            degree={true}
                            institution={true}
                            date={true}
                            summary={true}
                            parentContainerStyle={styles.rightContainerWork}
                            institutionStyle={Classes.company}
                            degreeStyle={Classes.programText}
                            dateStyle={Classes.date}
                            summaryStyle={Classes.description}
                            degree_placeholder="Study Program"
                            textColor="#1B4245"
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
                {/* =============== Second Section ============== */}
                <Box
                  w="60%"
                  bg={color ? color : '#1B4245'}
                  h="auto"
                  minW="340px"
                  borderRightRadius={6}
                  paddingBottom={'40px'}
                  transition="0.5s background"
                >
                  {/* Image */}
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                  >
                    <ImageSelector
                      minWidth="240px"
                      maxWidth="240px"
                      maxHeight="240px"
                      minHeight="240px"
                      marginTop="50px"
                      borderColor={backgroundColor ? backgroundColor : '#1B4245'}
                    />
                  </Box>
                  {/* contact */}
                  <Box
                    margin={'40px 0px 10px 30px'}
                  >
                    <Heading
                      title={'CONTACT PERSON'}
                      color={backgroundColor ? backgroundColor : '#fff'}
                      margin={'20px 0px 0px 0px'}
                      fontWeight={700}
                      circleIconHeading={true}
                      icon={(props) => (
                        <FaPhoneAlt
                          color={backgroundColor ? backgroundColor : '#fff'}
                          size={25}
                          {...props}
                        />
                      )}
                    />
                    <Contact
                      phone={true}
                      email={true}
                      linkedinURL={true}
                      website={true}
                      circleIcon={true}
                      circleBg={backgroundColor ? backgroundColor : '#fff'}
                      circleSize="30px"
                      iconColor={color ? color : '#1B4245'}
                      margin={'10px 0px 0px 0px'}
                      parentStyle={styles.contactFont}
                    />
                  </Box>
                  {/* _____________ Skill _____________ */}
                  <Box margin={'20px 0px 10px 40px'}>
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
                            fontSize="20px"
                            fontWeight={700}
                            color={backgroundColor ? backgroundColor : '#fff'}
                            onSideSectionShow={() =>
                              setShow({ ...show, skills: true })
                            }
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaHive
                                color={backgroundColor ? backgroundColor : '#fff'}
                                size={25}
                                {...props}
                              />
                            )}
                          />
                          <Skill
                            skillStyle={styles.contactFont}
                            progressBar={true}
                            strokeWidth="2"
                            lineStyle={styles.line}
                            strokeColor={color ? color : '#2A78AB'}
                            trailColor="#fff"
                            percentageStyle={styles.percent}
                            parentContainerStyle={Classes.ml}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* _____________ Language _____________ */}
                  <Box margin={'20px 0px 10px 40px'}>
                    {resumeData?.languages?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox}>
                          {show?.languages && (
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
                            title={'LANGUAGES'}
                            fontSize="20px"
                            fontWeight={700}
                            color={backgroundColor ? backgroundColor : '#fff'}
                            onSideSectionShow={() =>
                              setShow({ ...show, languages: true })
                            }
                            circleIconHeading={true}
                            icon={(props) => (
                              <FaSketch
                                color={backgroundColor ? backgroundColor : '#fff'}
                                size={25}
                                {...props}
                              />
                            )}
                          />
                          <Language
                            langStyle={styles.contactFont}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </TempLayout>
      </div>
    </>
  );
}
