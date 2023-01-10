import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
import styles from "../../styles/graphicDesignerTemp.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import Interest from '../../src/components/commonSection/Interest';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../src/components/commonSection/About';
import {
  EDUCATION,
  SKILL,
  WORK,
  INTEREST
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import Underline from "../../src/components/graphicDesignerTemp/Underline";
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function Graphic_Design_Temp() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <>
      <div
        style={{ overflow: 'auto' }}
      >
        <TempLayout work={true} education={true} skills={true} interest={true} downloadPDF={downloadPDFHandler}>
          <ChangeTempBtn />
          <Flex
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', md: 'center' }}
            bg={'#fff'}
            pt="70px"
          >
            <Box
              mt="50px"
            >
              <Box
                display="flex"
                flexDir="row"
                w="100%"
                minW="850px"
                maxW="850px"
                mb={'20px'}
                ml={'120px'}
                ref={pdfRef}
              >
                {/* =============== First Section ============== */}
                <Box
                  w="100%"
                  bgColor="#F4F5F7"
                  borderLeftRadius={6}
                  py={2}
                  px={12}
                  position={'relative'}
                >
                  {/* _____________ Profile _____________ */}
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Name
                      FName={true}
                      SName={true}
                      direction="row"
                      FNameStyle={styles.nameStyle}
                      SNameStyle={styles.nameStyle}
                    />
                    <Profession
                      professionStyle={styles.profileSubTitle}
                    />
                  </Box>
                  {/* _____________ Image _____________ */}
                  <Box
                    border={'3px solid #3D3D3D'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    width={'100%'}
                    margin={'50px 0px 30px 0px'}
                  >
                    {/* left container */}
                    <Box
                      display={'flex'}
                      justifyContent={'flex-end'}
                      margin={'25px 0px'}
                      width={'34%'}
                    >
                      <Contact
                        phone={true}
                        email={true}
                        circleIcon={true}
                        circleBg="#947F57"
                        circleSize="35px"
                        iconColor="#fff"
                        margin={'12px 0px 0px 0px'}
                        parentStyle={styles.contactFont}
                      />
                    </Box>
                    {/* center container */}
                    <Box
                      width={'26%'}
                    >
                      {/* avatar */}
                      <Box
                        position={'absolute'}
                        top={'19%'}
                      >
                        <ImageSelector
                          minWidth="200px"
                          maxWidth="200px"
                          maxHeight="200px"
                          minHeight="200px"
                        />
                      </Box>
                    </Box>
                    {/* right container */}
                    <Box
                      display={'flex'}
                      justifyContent={'flex-start'}
                      margin={'25px 0px'}
                      width={'34%'}
                    >
                      <Contact
                        linkedinURL={true}
                        website={true}
                        circleIcon={true}
                        circleBg="#947F57"
                        circleSize="35px"
                        iconColor="#fff"
                        margin={'12px 0px 0px 0px'}
                        parentStyle={styles.contactFont}
                      />
                    </Box>
                  </Box>
                  {/* _____________ About me _____________ */}
                  <Box
                    paddingTop={'20px'}
                  >
                    <Underline
                      width='100%'
                      bgColor='#947F57'
                    />
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Heading
                        title={'PROFILE'}
                        color="#947F57"
                        padding={'0px 0px 0px 86px'}
                      />
                    </Box>
                    <Underline
                      width='100%'
                      bgColor='#947F57'
                    />
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <About
                        minW="40%"
                        maxW="40%"
                        aboutStyle={Classes.aboutText}
                        fontColor="#947F57"
                        fontSize="16px"
                        fontWeight={600}
                      />
                    </Box>
                  </Box>
                  {/* _____________ main container _____________ */}
                  <Box
                    marginTop={'30px'}
                    width={'100%'}
                    display={'flex'}
                  >
                    {/* left container */}
                    <Box
                      width={'40%'}
                      borderRight={'2px solid #947F57'}
                      padding={'0px 40px 0px 5px'}
                    >
                      {/* expertise section */}
                      <Box
                        margin={'5px 0px 0px 0px'}
                      >
                        {resumeData?.hobbies?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                              {show.interest && (
                                <SectionSideMenu
                                  bg="#947F57"
                                  iconColor={'#fff'}
                                  onHide={() => setShow({ ...show, interest: false })}
                                  onDelete={INTEREST}
                                />
                              )}
                            </div>
                            <div>
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Heading
                                title="INTEREST"
                                color="#947F57"
                                fontSize={'20px'}
                                fontWeight={600}
                                onSideSectionShow={() =>
                                  setShow({ ...show, interest: true })
                                }
                              />
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Interest
                                interestStyle={styles.contactFont}
                                parentContainerStyle={styles.parentDiv}
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                      {/* skill */}
                      <Box
                        margin={'5px 0px 0px 0px'}
                      >
                        {resumeData?.skills?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                              {show?.skills && (
                                <SectionSideMenu
                                  onDelete={SKILL}
                                  onHide={() => setShow({ ...show, skills: false })}
                                  bg="#947F57"
                                  iconColor={'#fff'}
                                />
                              )}
                            </div>
                            <div>
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Heading
                                title={'SKILLS'}
                                color="#947F57"
                                fontSize={'20px'}
                                fontWeight={600}
                                onSideSectionShow={() =>
                                  setShow({ ...show, skills: true })
                                }
                              />
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Skill
                                skillStyle={styles.contactFont}
                                parentContainerStyle={styles.parentDiv}
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                    </Box>

                    {/* right container */}
                    <Box
                      width={'60%'}
                      padding={'0px 0px 0px 55px'}
                    >
                      {/* work experience */}
                      <Box
                        margin={'5px 0px 0px 0px'}
                      >
                        {resumeData?.work?.visible && (
                          <div className={Classes.sideMenu}>
                            <div className={Classes.sideMenuBox}>
                              {show?.work && (
                                <SectionSideMenu
                                  onHide={() => setShow({ ...show, work: false })}
                                  onDelete={WORK}
                                  bg="#947F57"
                                  iconColor={'#fff'}
                                />
                              )}
                            </div>
                            <div>
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Heading
                                color={'#947F57'}
                                title="WORK EXPERIENCE"
                                fontSize={'20px'}
                                fontWeight={600}
                                maxW={'fit-content'}
                                onSideSectionShow={() => setShow({ ...show, work: true })}
                              />
                              <Underline
                                width='100%'
                                bgColor='#947F57'
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
                                parentContainerStyle={styles.parentDiv}
                                textColor="#947F57"
                                direction='row'
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                      {/* education */}
                      <Box
                        margin={'5px 0px 0px 0px'}
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
                                  bg="#947F57"
                                  iconColor={'#fff'}
                                />
                              )}
                            </div>
                            <div>
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Heading
                                color={'#947F57'}
                                title="EDUCATION"
                                fontSize={'20px'}
                                fontWeight={600}
                                onSideSectionShow={() =>
                                  setShow({ ...show, education: true })
                                }
                              />
                              <Underline
                                width='100%'
                                bgColor='#947F57'
                              />
                              <Education
                                degree={true}
                                institution={true}
                                date={true}
                                summary={true}
                                parentContainerStyle={styles.parentDiv}
                                institutionStyle={Classes.company}
                                degreeStyle={Classes.programText}
                                dateStyle={Classes.date}
                                summaryStyle={Classes.description}
                                degree_placeholder="Study Program"
                                textColor="#947F57"
                                direction='row'
                              />
                            </div>
                          </div>
                        )}
                      </Box>
                    </Box>
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