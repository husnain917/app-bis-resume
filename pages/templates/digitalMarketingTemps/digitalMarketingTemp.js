import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../../src/components/commonSection/Name';
import styles from '../../../styles/digitalMarketingTemp.module.css';
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
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import { FaChevronRight } from 'react-icons/fa';

export default function Digital_Marketing_Temp() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    <>
      <div
        style={{ overflow: 'auto' }}
      >
        <TempLayout work={true} education={true} skills={true}>
          <ChangeTempBtn />
          <Flex
            justifyContent={{ base: 'none', md: 'center' }}
            flexDir={'column'}
            alignItems={{ sm: 'none', md: 'center' }}
            bg={'#fff'}
            pt="70px"
          >
            <Box
              display="flex"
              flexDir="row"
              w="100%"
              minW="850px"
              maxW="850px"
              mb={'20px'}
              mx={'20px'}
              mt="100px"
            >
              {/* =============== First Section ============== */}
              <Box
                w="40%"
                pb="10%"
                minW={'340px'}
                bgColor="#3A4D6C"
                borderLeftRadius={6}
                pr={3}
                pl={12}
                py={8}
              >
                {/* _____________ Profile _____________ */}
                <ImageSelector
                  minWidth="240px"
                  maxWidth="240px"
                  maxHeight="240px"
                  minHeight="240px"
                  marginTop="30px"
                />
                <Heading
                  title={'CONTACT PERSON'}
                  color="#fff"
                  margin={'20px 0px 0px 0px'}
                />
                <Contact
                  phone={true}
                  email={true}
                  linkedinURL={true}
                  website={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="25px"
                  iconColor="#3A4D6C"
                  margin={'10px 0px 0px 0px'}
                  style={Classes.profileText}
                />

                {/* _____________ About me _____________ */}
                <Heading
                  title={'ABOUT ME'}
                  color="#fff"
                  margin={'20px 0px 0px 0px'}
                />
                <About
                  minW="100%"
                  maxW="100%"
                  aboutStyle={Classes.aboutText}
                  textColor="#fff"
                />

                {/* _____________ Skill _____________ */}
                <Box
                  margin={'20px 0px 10px 0px'}
                >
                  {resumeData?.skills?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show?.skills && (
                          <SectionSideMenu
                            onDelete={SKILL}
                            onHide={() => setShow({ ...show, skills: false })}
                            bg="#F2DB7A"
                            iconColor={'#3A4D6C'}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          title={'SKILLS'}
                          fontSize="20px"
                          fontWeight={600}
                          color="#fff"
                          circleIconHeading={true}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                          icon={(props) => (
                            <FaChevronRight
                              color="#fff"
                              size={22}
                              {...props}
                            />
                          )}
                        />
                        <Skill
                          skillStyle={Classes.skillText}
                          progressBar={true}
                          strokeWidth="2"
                          lineStyle={styles.line}
                          strokeColor="#F2DB7A"
                          trailColor="#fff"
                          percentageStyle={styles.percent}
                          parentContainerStyle={Classes.ml}
                          margin="0px 0px 0px 30px"
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>
              {/* =============== Second Section ============== */}
              <Box
                w="60%"
                bg="#fff"
                h="auto"
                minW="510px"
                borderRightRadius={6}
              >
                <Box
                  width={'100%'}
                  backgroundColor={'#F2DB7A'}
                  padding={'20px 0px 20px 0px'}
                  marginTop={'15%'}
                  display={'flex'}
                  alignItems={'center'}
                  flexDir={'column'}
                >
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
                </Box>

                {/* work  */}
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
                            bg="#F2DB7A"
                            iconColor={'#3A4D6C'}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          color={'#3A4D6C'}
                          title="WORK EXPERIENCE"
                          fontSize={'22px'}
                          fontWeight={700}
                          circleIconHeading={true}
                          minW="300px"
                          onSideSectionShow={() =>
                            setShow({ ...show, work: true })
                          }
                          maxW={'fit-content'}
                          icon={(props) => (
                            <FaChevronRight
                              color="#3A4D6C"
                              size={22}
                              {...props}
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
                          textColor={'#3A4D6C'}
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
                            bg="#F2DB7A"
                            iconColor={'#3A4D6C'}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          title={'EDUCATION'}
                          color={'#3A4D6C'}
                          fontSize={'22px'}
                          fontWeight={700}
                          onSideSectionShow={() =>
                            setShow({ ...show, education: true })
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <FaChevronRight
                              color="#3A4D6C"
                              size={22}
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
                          textColor="#3A4D6C"
                        />
                      </div>
                    </div>
                  )}
                </Box>
                <Box
                  height={'50px'}
                  width={'100%'}
                  backgroundColor={'#F2DB7A'}
                  marginTop={'10px'}
                >
                  {/* footer container */}
                </Box>
              </Box>
            </Box>
          </Flex>
        </TempLayout>
      </div>
    </>
  )
}