import React from "react";
import { Input, Image, Box, Tooltip, HStack } from "@chakra-ui/react";
import { sampleData } from "../../../constants/sampleData";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import HeadingText from "../../../src/components/softEngineer/HeadingText";
import { useSelector } from "react-redux";
import { Text } from "../../../src/components/template1";
import { useWindowSize } from "@react-hook/window-size";
import Languages from "../../../src/components/softEngineer/Languages";
import styles from "../../../styles/templates/SeTemplate.module.css";
import Link from "next/link";
import Name from '../../../src/components/commonSection/Name';
import Profession from '../../../src/components/commonSection/Profession';
import About from '../../../src/components/commonSection/About';
import Contact from '../../../src/components/commonSection/Contact';
import useShow from '../../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../../src/components/tempNav/TempLayout';
import useStoreData from "../../../src/components/useStoreData";
import Education from '../../../src/components/commonSection/Education';
import Heading from '../../../src/components/commonSection/Heading';
import Skill from "../../../src/components/commonSection/Skill";
import WorkExperience from '../../../src/components/commonSection/WorkExperience';
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import ImageSelector from '../../../src/components/imageSelector';
import PDFGenerater from "../../../src/components/tempNav/PDFGenerater";






export default function SoftEngineer() {
  const {
    resumeData,
    theme,
    updater
  } = useStoreData();
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <>
      <div style={{ overflow: 'auto' }}>

        <TempLayout work={true} education={true} skills={true} downloadPDF={downloadPDFHandler}>
          <ChangeTempBtn />





          <Box pt="8%">

            <Box
              w={[, , , , "71%"]}
              borderWidth="1px"
              borderColor={'#00000023'}
              ml="15%"
            >
              <Box
                w="97%"
                display="flex"
                flexDir="row"
                justifyContent="space-between"
                bgColor="#FFFFF"
                pr="7%"
                pl="7%"
                maxW="2150px"
                minW="900px"
                ref={pdfRef}


              >
                {/* Left Section  */}
                <Box w="50%" mt="10%">


                  <Name
                    FName={true}
                    SName={true}
                    direction="column"
                    FNameStyle={styles.name}
                    SNameStyle={styles.name}

                  />
                  <Box>
                    <Heading
                      line={true}
                      lineW="300px"
                      lineH={1}
                    />

                    <Profession
                      professionStyle={styles.profession}
                      professionPlaceholder="PROFESSION"
                    />
                    <Heading
                      line={true}
                      lineW="300px"
                      lineH={1}
                    />


                  </Box>



                  <About

                    aboutStyle={styles.description}
                    aboutPlaceholder={"Short and engaging pitch about yourself"}

                  />
                  <Heading
                    line={true}
                    lineW="300px"
                    lineH={1}
                  />


                  <Heading
                    line={true}
                    lineW="300px"
                    lineH={1}
                    font-size={22}
                    color="black"
                    title="CONTACT"
                    fontWeight={900}





                  />

                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "5%",
                    }}
                  >
                    <PhoneIcon
                      w={8}
                      h={8}
                      bgColor="#B29E84"

                      p="7px"
                      color="white"
                      borderRadius="5px"
                    />


                    <Contact
                      phone={true}
                      phonePlaceholder={"+920000000"}
                      margin={"0px 0px 0px 10px"}

                      style={styles.profileText}
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: '3%'
                    }}
                  >
                    <EmailIcon
                      w={8}
                      h={8}
                      bgColor="#B29E84"

                      p="7px"
                      color="white"
                      borderRadius="5px"
                    />


                    <Contact
                      email={true}
                      emailPlaceholder={"hello@gmail.com"}
                      margin={"0px 0px 0px 10px"}

                      style={styles.profileText}
                    />


                  </Box>

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
                              line={true}
                              lineW="300px"
                              lineH={1}


                            />
                            <Heading


                              font-size={30}
                              font-weight={900}


                              color="black"
                              title="EDUCATION"
                              line={true}
                              lineW="300px"
                              lineH={1}




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
                            summary={true}
                            summaryStyle={styles.Educationdescription}
                            dateStyle={styles.date}
                            institutionStyle={styles.company}
                            institution_placeholder={"College"}
                            summary_placeholder={"Summary"}
                            parentContainerStyle={styles.mt}

                          />
                        </Box>
                      </>
                    )}
                  </div>
                </Box>
                {/* Right Section  */}
                <Box w="50%">
                  <ImageSelector
                    minWidth={280}
                    maxWidth={280}
                    minHeight={280}
                    maxHeight={280}
                    marginTop={'40px'}
                    marginLeft={"40px"}
                  />
                  <Box>

                  </Box>
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
                          <div className={styles.templateceoHeadingTitle}>
                            <Heading
                              line={true}
                              lineW="300px"
                              lineH={1}
                            />


                            <Heading

                              title={'SKILLS'}
                              color="black"



                              fontSize={24}
                              minW={"350px"}
                              maxW={"350px"}
                              line={true}
                              lineW="300px"
                              fontWeight={900}
                              lineH={1}
                              onSideSectionShow={() =>
                                setShow({ ...show, skills: true })
                              }
                            />
                          </div>

                        </HStack>
                        <Box mr={"30%"} mt="2%">
                          <Skill skillStyle={styles.skillText}
                            parentContainerStyle={styles.mt}
                            minW={"220px"}
                            maxW={"220px"}
                            margin={"0px 20px 0px 0px"}


                          />
                        </Box>
                      </>
                    )}
                  </div>

                  <div>
                    {resumeData?.work?.visible && (
                      <>
                        <HStack alignItems={'flex-start'} mt={'20px'}>
                          <Box w="15px" ml={'-27px'}>
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
                            <Heading
                              line={true}
                              lineW="300px"
                              lineH={1}
                            />
                            <Heading
                              minW={"350px"}
                              maxW={"350px"}
                              font-size={"1.4em"}
                              font-weight={900}

                              color="black"

                              title="EXPERIENCE"


                              fontSize={22}
                              fontWeight={900}
                              onSideSectionShow={() => setShow({ ...show, work: true })}
                            />
                            <Heading
                              line={true}
                              lineW="300px"
                              lineH={1}
                            />
                          </div>
                        </HStack>
                        <Box mr={"22%"} mt="2%">

                          <WorkExperience

                            position={true}
                            position_placeholder={"Position"}
                            date={true}
                            summary={true}
                            startDate_placeholder={"Start Date"}
                            endDate_placeholder={"End Date"}

                            positionStyle={styles.positionSty}


                            dateStyle={styles.date}
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
              <Box>
                <Image src="/SeBottom.png" w="100%" />
              </Box>
            </Box>
          </Box>

        </TempLayout  >
      </div>

    </>
  );
}
