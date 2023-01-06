import React from 'react';
import {
  Box,
  Image,
  Flex,
  Tooltip,
  HStack,
  background,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import styles from '../../../styles/templates/Fashion.module.css';
import FdText from '../../../src/components/fashionDesigner/FdText';
import Languages from '../../../src/components/fashionDesigner/Languages';

import Link from 'next/link';

import { Icon } from '@chakra-ui/react';
import {
  FaArchive,
  FaInfo,
  FaHeading,
  FaBuffer,
  FaSketch,
  FaHive,
} from 'react-icons/fa';
import Name from '../../../src/components/commonSection/Name';
import Profession from '../../../src/components/commonSection/Profession';
import About from '../../../src/components/commonSection/About';
import Contact from '../../../src/components/commonSection/Contact';
import WorkExperience from '../../../src/components/commonSection/WorkExperience';
import useShow from '../../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
  INTEREST,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../../src/components/tempNav/TempLayout';
import useStoreData from '../../../src/components/useStoreData';
import Heading from '../../../src/components/commonSection/Heading';
import ImageSelector from '../../../src/components/imageSelector';
import Skill from '../../../src/components/commonSection/Skill';
import Language from '../../../src/components/commonSection/Language';
import Education from '../../../src/components/commonSection/Education';
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import Interest from '../../../src/components/commonSection/Interest';
import PDFGenerater from '../../../src/components/tempNav/PDFGenerater';

export default function FashionDesigner() {
  const { resumeData, theme, updater } = useStoreData();
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <TempLayout
          work={true}
          education={true}
          skills={true}
          interest={true}
          languages={true}
          downloadPDF={downloadPDFHandler}
        >
          <ChangeTempBtn />
          <Box overflow="auto">
            <Box mt="8%" ml="20%" mr={['12%', '12%', '10%', '10%', ,]} mb="5%">
              <Box
                display="flex"
                flexDir="row"
                w="100%"
                bgColor="#E6D5C2"
                minW="950px"
                maxW="950px"
                ref={pdfRef}
              >
                <Box
                  w="60%"
                  mt="7%"
                  ml="5%"
                  pb="10%"
                  minW={['350px', '400px', '400px', '450px', '500px']}
                  bgColor={'#E6D5C2'}
                >
                  <Row style={{ overflow: 'hidden' }}>
                    <Name
                      FName={true}
                      SName={true}
                      FNameStyle={styles.name}
                      SNameStyle={styles.name}
                      fontColor={backgroundColor ? backgroundColor : '#1B4245'}
                    />
                  </Row>
                  <Box
                    bgColor={backgroundColor ? backgroundColor : '#1B4245'}
                    w="43%"
                    h="5px"
                    mt="2%"
                    transition="0.5s background"
                  ></Box>

                  <Profession
                    professionStyle={styles.profileSubTitle}
                    fontColor={backgroundColor ? backgroundColor : '#1B4245'}
                  />
                  <Flex alignItems="center" mt="10%">
                    <Icon
                      as={FaInfo}
                      w={10}
                      h={10}
                      color={backgroundColor ? backgroundColor : '#1B4245'}
                    />
                    <p
                      className={styles.heading}
                      style={{
                        color: backgroundColor ? backgroundColor : '#1B4245',
                        transition: '0.5s background',
                      }}
                    >
                      About Me
                    </p>
                  </Flex>

                  <About
                    aboutStyle={styles.description}
                    aboutPlaceholder="  Let me introduce myself, I am a fashion designer
                who has 7 years of experience in this job. I am
                very experienced in various fashion styles for all
                seasons and I have made various models for
                men and women for a world famous brand.
                "
                  />
                  <Box>
                    <div>
                      {resumeData?.work?.visible && (
                        <>
                          <HStack alignItems={'flex-start'} mt={'20px'}>
                            <Box w="20px" ml={'-27px'}>
                              {show.work && (
                                <SectionSideMenu
                                  onHide={() =>
                                    setShow({ ...show, work: false })
                                  }
                                  bg={
                                    backgroundColor
                                      ? backgroundColor
                                      : '#2A78AB'
                                  }
                                  iconColor={'#E0EFFA'}
                                  onDelete={WORK}
                                />
                              )}
                            </Box>
                            <div className={styles.templateceoHeadingTitle}>
                              <Box ml="2%">
                                <Heading
                                  minW={'670'}
                                  maxW={'670px'}
                                  font-size={'2.4em'}
                                  font-weight={900}
                                  circleIconHeading={true}
                                  icon={(props) => (
                                    <FaArchive
                                      {...props}
                                      size={30}
                                      color={
                                        backgroundColor
                                          ? backgroundColor
                                          : '#1B4245'
                                      }
                                    />
                                  )}
                                  color={
                                    backgroundColor
                                      ? backgroundColor
                                      : '#1B4245'
                                  }
                                  title="Work Experience"
                                  height={50}
                                  fontSize={30}
                                  fontWeight={500}
                                  onSideSectionShow={() =>
                                    setShow({ ...show, work: true })
                                  }
                                />
                              </Box>
                            </div>
                          </HStack>
                          <Box mr="12%" mt="3%">
                            <WorkExperience
                              position={true}
                              company={true}
                              company_placeholder={'Company'}
                              position_placeholder={'Position'}
                              positionStyle={styles.positionSty}
                              summary={true}
                              companyStyle={styles.positionSty}
                              summaryStyle={styles.description}
                              summary_placeholder={'Summary'}
                              parentContainerStyle={styles.mt}
                            />
                          </Box>
                        </>
                      )}
                    </div>

                    {resumeData?.hobbies?.visible && (
                      <>
                        <div className={styles.sideMenu}>
                          <div className={styles.width}>
                            {/* Section Side Menu */}
                            {show.interest && (
                              <SectionSideMenu
                                bg={
                                  backgroundColor ? backgroundColor : '#2A78AB'
                                }
                                onHide={() =>
                                  setShow({ ...show, interest: false })
                                }
                                onDelete={INTEREST}
                              />
                            )}
                          </div>
                          <div>
                            <Box>
                              <Heading
                                title={'Interest'}
                                circleIconHeading={true}
                                icon={(props) => (
                                  <FaInfo
                                    {...props}
                                    size={32}
                                    color={
                                      backgroundColor
                                        ? backgroundColor
                                        : '#1B4245'
                                    }
                                  />
                                )}
                                fontSize={30}
                                color={
                                  backgroundColor ? backgroundColor : '#1B4245'
                                }
                                onSideSectionShow={() =>
                                  setShow({ ...show, interest: true })
                                }
                              />
                            </Box>
                            {/* Interest Component  */}
                            <Box ml="4%">
                              <Interest interestStyle={styles.skillText1} />
                            </Box>
                          </div>
                        </div>
                      </>
                    )}
                  </Box>
                </Box>
                {/* Right Section Code  */}

                <Box
                  w="50%"
                  bgColor="#1B4245"
                  h="auto"
                  ml="5%"
                  pb="10%"
                  minW="400px"
                >
                  <ImageSelector
                    minWidth={280}
                    maxWidth={280}
                    minHeight={280}
                    maxHeight={280}
                    marginLeft="40px"
                    marginTop={10}
                    borderColor={color ? color : ''}
                  />

                  <Box ml="10%">
                    <Flex alignItems="center" mt="10%">
                      <Icon
                        as={FaHive}
                        w={8}
                        h={8}
                        color={color ? color : 'white'}
                      />
                      <p
                        className={styles.rightHeading}
                        style={{ color: color ? color : '' }}
                      >
                        Contact
                      </p>
                    </Flex>

                    <Contact
                      phone={true}
                      email={true}
                      linkedinURL={true}
                      website={true}
                      circleIcon={true}
                      circleBg="#fff"
                      circleSize="35px"
                      iconColor={color ? color : '#1C2125'}
                      margin={'10px 0px 0px 0px'}
                      style={styles.profileText}
                    />
                  </Box>
                  <Box>
                    <Box mt="20%">
                      {resumeData?.education?.visible && (
                        <>
                          <HStack alignItems={'flex-start'} mt={'20px'}>
                            <Box w="30px">
                              {show.education && (
                                <SectionSideMenu
                                  onHide={() =>
                                    setShow({ ...show, education: false })
                                  }
                                  bg={color ? color : '#2A78AB'}
                                  iconColor={'#E0EFFA'}
                                  onDelete={EDUCATION}
                                />
                              )}
                            </Box>

                            <Heading
                              color={color ? color : 'white'}
                              circleIconHeading={true}
                              icon={(props) => (
                                <FaBuffer
                                  {...props}
                                  size={30}
                                  color={color ? color : 'white'}
                                />
                              )}
                              title="EDUCATION"
                              fontSize={30}
                              fontWeight={500}
                              lineBg={'white'}
                              onSideSectionShow={() =>
                                setShow({ ...show, education: true })
                              }
                            />
                          </HStack>
                          <Box mr={'10%'} ml={'13%'} mt="5%">
                            <Education
                              institution={true}
                              date={true}
                              summary={true}
                              summaryStyle={styles.Educationdescription}
                              dateStyle={styles.date}
                              institutionStyle={styles.company}
                              institution_placeholder={'College'}
                              parentContainerStyle={styles.mt}
                            />
                          </Box>
                        </>
                      )}
                    </Box>

                    <Box ml="8%">
                      {resumeData?.languages?.visible && (
                        <>
                          <HStack alignItems={'flex-start'} mt={5}>
                            <Box>
                              {show.languages && (
                                <SectionSideMenu
                                  onHide={() =>
                                    setShow({ ...show, languages: false })
                                  }
                                  bg={color ? color : '#2A78AB'}
                                  iconColor={'#E0EFFA'}
                                  onDelete={LANGUAGES}
                                />
                              )}
                            </Box>
                            <div className={styles.contactHeadingTitle}>
                              <Heading
                                title={'LANGUAGES'}
                                circleIconHeading={true}
                                icon={(props) => (
                                  <FaSketch
                                    {...props}
                                    size={30}
                                    color={color ? color : 'white'}
                                  />
                                )}
                                color={color ? color : '#fff'}
                                onSideSectionShow={() =>
                                  setShow({ ...show, languages: true })
                                }
                              />
                            </div>
                          </HStack>
                          <Box mt="2%" mb="3%" mr="15%" ml="7%">
                            <Language langStyle={styles.skillText} />
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </TempLayout>
      </div>
    </>
  );
}
