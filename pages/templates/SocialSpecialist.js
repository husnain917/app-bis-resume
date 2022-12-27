import React from "react";
import { Box, Tooltip, Image, HStack } from "@chakra-ui/react";
import styles from "../../styles/templates/Social.module.css";
import Link from "next/link";
import Text from "../../src/components/SocialSpecialist/Text";
import Skills from "../../src/components/SocialSpecialist/Skills";
import ImageSelector from '../../src/components/imageSelector';
import Name from '../../src/components/commonSection/Name';
import About from '../../src/components/commonSection/About';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import useShow from '../../src/components/tempSectionSide/useShow';
import { useSelector } from 'react-redux';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useStoreData from "../../src/components/useStoreData";
import Education from '../../src/components/commonSection/Education';
import Heading from '../../src/components/commonSection/Heading';
import Skill from "../../src/components/commonSection/Skill";
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';




export default function SocialSpecialist() {
  const {
    resumeData,
    theme,
    updater
  } = useStoreData();
  const [show, setShow] = useShow();
  console.log(resumeData);
  return (
    <div style={{ overflow: 'auto' }}>

      <TempLayout work={true} education={true} skills={true}  >
        <ChangeTempBtn />


        <Box pt="5%">
          <Box
            w={["100%", "100%", "100%", "90%", "70%"]}

            bgColor="#F4F3F2"


            ml={["", , , "5%", "15%"]}
            mr="0%"
          >
            <Box
              display="flex"
              flexDir="row"
              w="100%"
              borderWidth="1px"
              borderColor={'#00000023'}

              maxW="2150px"
              minW="900px"
            >
              <Box w="50%" ml="5%" mt="5%">
                <Box bgColor="black" w="80%" h="2px"></Box>




                <Name
                  FName={true}
                  SName={true}
                  direction="column"
                  FNameStyle={styles.name}
                  SNameStyle={styles.name}

                />


                <Box bgColor="black" w="80%" h="3px" mt="8%"></Box>

                <Profession
                  margin={'0px 0px 0px 0px'}
                  professionStyle={styles.profession}
                  professionPlaceholder="PROFESSION"
                />
                <Box bgColor="black" w="80%" h="2px" mt="2%"></Box>
                <Box w="90%">

                  <About

                    aboutStyle={styles.description}
                    aboutPlaceholder={"Short and engaging pitch about yourself"}

                  />

                  <Box bgColor="black" w="80%" h="4px" mt="8%"></Box>

                  <Heading title="CONTACT"
                    fontSize={30}
                    fontWeight={"bold"}
                    color="#E07559 "
                  />

                  <Box bgColor="black" w="80%" h="4px" mt="2%"></Box>

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
                      bgColor="black"
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
                      bgColor="black"
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
                              lineW="400px"
                              lineH={1}
                            />
                            <Heading


                              font-size={30}
                              font-weight={900}


                              color="#E07559 "
                              title="EDUCATION"
                              line={true}
                              lineW="400px"
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
              </Box>

              <Box w="50%">
                <ImageSelector
                  minWidth={280}
                  maxWidth={280}
                  minHeight={280}
                  maxHeight={280}
                  marginTop={'40px'}
                  marginLeft={"40px"}
                />            <Box mt="7%" position="relative" right="40px">

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
                              lineW="400px"
                              lineH={1}
                            />


                            <Heading

                              title={'SKILLS'}
                              color="#E07559 "



                              fontSize={24}
                              minW={"350px"}
                              maxW={"350px"}
                              line={true}
                              lineW="400px"
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
                  <Box mt="5%">
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
                                lineW="400px"
                                lineH={1}
                              />
                              <Heading
                                minW={"350px"}
                                maxW={"350px"}
                                font-size={"1.4em"}
                                font-weight={900}

                                color="#E07559 "

                                title="EXPERIENCE"


                                fontSize={22}
                                fontWeight={900}
                                onSideSectionShow={() => setShow({ ...show, work: true })}
                              />
                              <Heading
                                line={true}
                                lineW="400px"
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
              </Box>
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div>

  );
}
