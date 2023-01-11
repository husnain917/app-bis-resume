import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../../src/components/commonSection/Name';
import styles from '../../../styles/fashionTemp.module.css';
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
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../../src/components/imageSelector';
import { MdCastForEducation } from 'react-icons/md';
import { FaSignLanguage, FaRegUser } from "react-icons/fa";
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../../src/components/tempNav/PDFGenerater";

export default function Fashion_Temp() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    <>
      <div
        style={{ overflow: 'auto' }}
      >
        <TempLayout work={true} education={true} skills={true} downloadPDF={downloadPDFHandler}>
          <ChangeTempBtn />
          <Flex
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', md: 'center' }}
            bg={'#fff'}
            pt="70px"
          >
            <Box
              m="50px 20px 30px 20px"
            >
              <Box
                display={'flex'}
                ref={pdfRef}
              >
                <Box
                  w="40%"
                  pb="10%"
                  minW={'340px'}
                  bgColor="#FDC726"
                  borderLeftRadius={6}
                  pr={3}
                  pl={12}
                  py={8}
                >
                  {/* _____________ Profile _____________ */}
                  <Name
                    FName={true}
                    SName={true}
                    direction="column"
                    FNameStyle={styles.nameStyle}
                    SNameStyle={styles.nameStyle}
                  />
                  <Profession
                    professionStyle={styles.profileSubTitle}
                  />

                  {/* _____________ Image _____________ */}
                  <ImageSelector
                    minWidth="240px"
                    maxWidth="240px"
                    maxHeight="240px"
                    minHeight="240px"
                    marginTop="30px"
                    marginBottom="30px"
                    marginLeft={'10px'}
                  />

                  {/* _____________ About me _____________ */}
                  <Heading
                    title={'ABOUT ME'}
                    color="#000000"
                    circleSize="38px"
                    circleBg="#000000"
                    fontSize="20px"
                    fontWeight={700}
                    circleIconHeading={true}
                    icon={(props) => (
                      <FaRegUser
                        {...props}
                        size={18}
                        color={'#FDC726'}
                      />
                    )}
                  />
                  <About
                    minW="100%"
                    maxW="100%"
                    aboutStyle={Classes.aboutText}
                    fontColor="#000000"
                    fontSize="14px"
                    fontWeight={600}
                  />
                  {/* _____________ Skill _____________ */}
                  <Box
                    margin={'20px 0px 10px 7px'}
                  >
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
                            color="#000000"
                            circleIconHeading={true}
                            onSideSectionShow={() =>
                              setShow({ ...show, skills: true })
                            }
                            circleSize="38px"
                            circleBg="#000000"
                            icon={(props) => (
                              <FaSignLanguage
                                {...props}
                                size={18}
                                color={'#FDC726'}
                              />
                            )}
                          />
                          <Skill
                            skillStyle={styles.skillText}
                            progressBar={true}
                            strokeWidth="2"
                            lineStyle={styles.line}
                            strokeColor="#F2DB7A"
                            trailColor="#fff"
                            percentageStyle={styles.percent}
                            parentContainerStyle={Classes.ml}
                            margin="0px 0px 0px 45px"
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
                {/* =============== Second Section ============== */}
                <Box
                  w="60%"
                  bg="#0F0F0F"
                  h="auto"
                  minW="510px"
                  borderRightRadius={6}
                >
                  {/* _____________ Contact Us _____________ */}
                  <Heading
                    title={'CONTACTS'}
                    color="#fff"
                    padding={'70px 0px 20px 33px'}
                    circleSize="38px"
                    circleBg="#FDC726"
                    circleIconHeading={true}
                    icon={(props) => (
                      <FaRegUser
                        {...props}
                        size={18}
                        color={'#000000'}
                      />
                    )}
                  />
                  <Contact
                    phone={true}
                    email={true}
                    linkedinURL={true}
                    website={true}
                    circleIcon={true}
                    circleBg="#FDC726"
                    circleSize="25px"
                    iconColor="#000000"
                    margin={'5px 0px 0px 0px'}
                    parentStyle={styles.rightContainerWork}
                    style={styles.profileText}
                  />
                  {/* _____________ Work _____________ */}
                  <Box
                    padding={'0px 0px 0px 40px'}
                    margin={'20px 0px 10px 0px'}
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
                            color={'#fff'}
                            title="WORK EXPERIENCE"
                            fontSize={'22px'}
                            fontWeight={700}
                            circleIconHeading={true}
                            onSideSectionShow={() =>
                              setShow({ ...show, work: true })
                            }
                            maxW={'fit-content'}
                            circleSize="38px"
                            circleBg="#FDC726"
                            icon={(props) => (
                              <MdCastForEducation
                                {...props}
                                size={18}
                                color={'#000000'}
                              />
                            )}
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
                            textColor={'#fff'}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* _____________ Education _____________ */}
                  <Box
                    padding={'0px 0px 0px 40px'}
                    margin={'20px 0px 10px 0px'}
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
                            color={'#fff'}
                            fontSize={'22px'}
                            fontWeight={700}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
                            circleIconHeading={true}
                            circleSize="38px"
                            circleBg="#FDC726"
                            icon={(props) => (
                              <MdCastForEducation
                                {...props}
                                size={18}
                                color={'#000000'}
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
                            textColor="#fff"
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
  )
}