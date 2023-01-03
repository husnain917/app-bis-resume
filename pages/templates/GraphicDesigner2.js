import React from "react";
import { Box, Tooltip, Image, HStack } from "@chakra-ui/react";
import styles from "../../styles/templates/Graphic2.module.css";
import { Row } from "antd";
import Link from "next/link";
import Text from "../../src/components/GraphicDesigner2/Text";

import Skills from "../../src/components/GraphicDesigner2/Skills";
import { sampleData } from "../../constants/sampleData";
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Education from '../../src/components/commonSection/Education';
import useShow from '../../src/components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
  INTEREST
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useStoreData from "../../src/components/useStoreData";
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Heading from '../../src/components/commonSection/Heading';
import ImageSelector from '../../src/components/imageSelector';
import Contact from '../../src/components/commonSection/Contact';
import Skill from "../../src/components/commonSection/Skill";
import Language from "../../src/components/commonSection/Language";
import Interest from "../../src/components/commonSection/Interest";
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";


export default function GraphicDesigner2() {
  const {
    resumeData,
    theme,
    updater
  } = useStoreData();
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout work={true} education={true} skills={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />


        <Box
          pt="10%"
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            ref={pdfRef}
          >
            <Box
              w="100%"
              h="auto"
              display="flex"
              flexDir="row"
              maxW="950px"
              minW="950px"

            >
              <Box w="30%" h="auto" bgColor="#161619" pb="150px">

                <ImageSelector
                  minWidth={200}
                  maxWidth={200}
                  minHeight={200}
                  maxHeight={200}
                  marginTop={'40px'}
                  marginLeft={"40px"}
                />
                <Box ml="30px" mt="30%">
                  <Heading
                    title="CONTACT"
                    color="white"
                    barColor="white"
                    barWidth="25%"
                  />
                  <Contact
                    phone={true}
                    email={true}
                    phonePlaceholder="+920000000"
                    emailPlaceholder="abc@gmail.com"

                    margin={'5px 0px 0px 0px'}
                    style={styles.profileText}
                  />

                  <div>
                    {resumeData?.skills?.visible && (
                      <>
                        <HStack alignItems={'flex-start'} mt={5}>
                          <Box ml={'-15px'}>
                            {show.skills && (
                              <SectionSideMenu
                                onHide={() => setShow({ ...show, skills: false })}
                                bg="#2A78AB"
                                iconColor={'#E0EFFA'}
                                onDelete={SKILL}
                              />
                            )}
                          </Box>
                          <div className={styles.contactHeadingTitle}>
                            <Box ml="2%">
                              <Heading
                                title={'SKILLS'}
                                color="#fff"
                                onSideSectionShow={() =>
                                  setShow({ ...show, skills: true })
                                }
                              />
                            </Box>
                          </div>
                        </HStack>
                        <Skill skillStyle={styles.skillText}
                          parentContainerStyle={styles.mt}
                          minW={"220px"}
                          maxW={"220px"}


                        />
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
                              bg={'#313B47'}
                              onHide={() => setShow({ ...show, interest: false })}
                              onDelete={INTEREST}
                            />
                          )}
                        </div>
                        <div>


                          <Heading
                            title={'INTEREST'}


                            color="#fff"
                            onSideSectionShow={() =>
                              setShow({ ...show, interest: true })
                            }
                          />
                          {/* Interest Component  */}
                          <Interest

                            interestStyle={styles.skillText}
                          />

                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    {resumeData?.languages?.visible && (
                      <>
                        <HStack alignItems={'flex-start'} mt={5}>
                          <Box ml={'-15px'}>
                            {show.languages && (
                              <SectionSideMenu
                                onHide={() => setShow({ ...show, languages: false })}
                                bg="#2A78AB"
                                iconColor={'#E0EFFA'}
                                onDelete={LANGUAGES}
                              />
                            )}
                          </Box>
                          <div className={styles.contactHeadingTitle}>
                            <Box ml="2%">

                              <Heading
                                title={'LANGUAGES'}


                                color="#fff"
                                onSideSectionShow={() =>
                                  setShow({ ...show, languages: true })
                                }
                              />
                            </Box>
                          </div>
                        </HStack>
                        <Box mt="2%" mb="3%">
                          <Language
                            langStyle={styles.skillText}
                          />
                        </Box>
                      </>
                    )}
                  </div>


                </Box>
              </Box>
              <Box w="70%">
                <Box bgColor="#E4E4E4" h="auto" pt="5%" pl="10%" pb="100px">
                  <Row>


                    <Name
                      FName={true}
                      SName={true}
                      direction="column"
                      FNameStyle={styles.name}
                      SNameStyle={styles.name}

                    />
                  </Row>

                  <Profession
                    margin={'0px 0px 0px 0px'}
                    professionStyle={styles.profession}
                    professionPlaceholder="PROFESSION"
                  />
                  <Box bgColor="#161619" w="21%" h="4px" mt="2%"></Box>


                  <About

                    aboutStyle={styles.description}
                    aboutPlaceholder={"Short and engaging pitch about yourself"}

                  />
                </Box>
                <Box ml="10%" mr="8%">
                  <div >

                    {resumeData?.education?.visible && (
                      <>
                        <HStack alignItems={'flex-start'} mt={'20px'}>
                          <Box w="12px" ml={'-20px'}>
                            {show.education && (
                              <SectionSideMenu
                                onHide={() => setShow({ ...show, education: false })}
                                bg="#2A78AB"
                                iconColor={'#E0EFFA'}
                                onDelete={EDUCATION}
                              />
                            )}
                          </Box>
                          <div className={styles.templateceoHeadingTitle}>


                            <Heading


                              font-size={30}
                              font-weight={900}
                              lineW="480px"
                              lineH={1}


                              color={"black"}

                              title="EDUCATION"
                              line={true}




                              fontSize={23}
                              fontWeight={900}
                              onSideSectionShow={() => setShow({ ...show, education: true })}
                            />
                          </div>


                        </HStack>
                        <Box mr={"15%"}>
                          <Education
                            institution={true}
                            date={true}

                            summaryStyle={styles.Educationdescription}
                            dateStyle={styles.date}
                            institutionStyle={styles.company}
                            institution_placeholder={"College"}

                            parentContainerStyle={styles.mt}

                          />
                        </Box>
                      </>
                    )}
                  </div>


                  <div>
                    {resumeData?.work?.visible && (
                      <>
                        <HStack alignItems={'flex-start'} mt={'20px'}>
                          <Box w="20px" ml={'-27px'}>
                            {show.work && (
                              <SectionSideMenu
                                onHide={() => setShow({ ...show, work: false })}
                                bg="#2A78AB"
                                iconColor={'#E0EFFA'}
                                onDelete={WORK}
                              />
                            )}
                          </Box>
                          <div className={styles.templateceoHeadingTitle}>
                            <Box ml="2%">
                              <Heading
                                minW={"670"}
                                maxW={'670px'}
                                font-size={"1.4em"}
                                font-weight={900}
                                lineW="480px"
                                lineH={1}
                                line={true}

                                color={"black"}
                                title="EXPERIENCE"

                                height={50}
                                fontSize={22}
                                fontWeight={900}
                                onSideSectionShow={() => setShow({ ...show, work: true })}
                              />
                            </Box>
                          </div>
                        </HStack>
                        <Box mr="12%">
                          <WorkExperience

                            position={true}
                            position_placeholder={"Position"}
                            positionStyle={styles.positionSty}

                            summary={true}

                            summaryStyle={styles.description}
                            summary_placeholder={"Summary"}
                            parentContainerStyle={styles.mt}
                          />
                        </Box>
                      </>
                    )}
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div >

  );
}
