import React from "react";
import styles from "../../styles/templates/Graphic3.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Box, Tooltip, Image, HStack } from "@chakra-ui/react";
import Text from "../../src/components/graphicDesigner3/Text";
import Title from "../../src/components/graphicDesigner3/Title";
import { Icon } from "@chakra-ui/react";
import {
  FaUserCircle,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaGlobe,
  FaCloudscale,
  FaAddressBook,
} from "react-icons/fa";
import Skills from "../../src/components/graphicDesigner3/Skills";
import Name from "../../src/components/commonSection/Name";
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Education from '../../src/components/commonSection/Education';

import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
  INTEREST,
  REFERENCE
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useStoreData from "../../src/components/useStoreData";
import Heading from '../../src/components/commonSection/Heading';
import ImageSelector from '../../src/components/imageSelector';
import Skill from "../../src/components/commonSection/Skill";
import Language from "../../src/components/commonSection/Language";
import Interest from "../../src/components/commonSection/Interest";
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import About from "../../src/components/commonSection/About";
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from "../../src/components/commonSection/Reference";







export default function GraphicDesigner3() {
  const {
    resumeData,
    theme,
    updater
  } = useStoreData();
  const [show, setShow] = useShow();
  console.log(resumeData);

  console.log(resumeData);
  return (
    <div style={{ overflow: 'auto' }}>

    <div className={styles.main}>
    <TempLayout work={true} education={true} skills={true}  >
        <ChangeTempBtn />
     
      <Box
        w="100%"
        mt="5%"
        mb="3%"
        overflow="auto"
        h="auto"
        ml={["", , , "8%", "15%", "23%"]}
      >
        <Box w="100%" display="flex" flexDir="row" maxW="930px" minW="930px">
          <Box w="30%" h="auto" display="flex" flexDir="column">
            <Box bgColor="#56C8EA" pb="30px">
            <ImageSelector
                        maxH={"14em"}
                        maxW={"14em"}
                        borderRadius="50%"
                        marginTop={"6"}
                        marginLeft={"6"}
                      />    



              <Name
                FName={true}
                SName={true}
                direction="column"
                FNameStyle={styles.name}
                SNameStyle={styles.name}

              />

          
          
              <Profession
                margin={'0px 0px 0px 0px'}
                professionStyle={styles.profession}
                professionPlaceholder="PROFESSION"
              />
            </Box>
            <Box bgColor="#3C4240" h="100%" pb="100px">
              <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                <Box display="flex">
                  <Icon as={FaUser} w={6} h={6} color="#56C8EA" />
                  <Title
                    text="CONTACT"
                    color="white"
                    marginLeft="20px"
                    icon="FaUser"
                    letterSpacing="2px"
                  />
                </Box>
                <Box bgColor="white" h="3px" w="80%"></Box>
              </div>
              <Box ml="8%">
                <Contact
                  phone={true}
                  email={true}
                  linkedinURL={true}
                  website={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="35px"
                  iconColor="#1C2125"
                  margin={'10px 0px 0px 0px'}
                  style={styles.profileText}
                />
              </Box>
              <div style={{ marginLeft: "30px", marginTop: "20px" }}>


                <Box >

                  {resumeData?.education?.visible && (
                    <>
                      <HStack alignItems={'flex-start'} mt={'20px'}>
                        <Box >
                          {show.education && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, education: false })}
                              bg="#2A78AB"
                              iconColor={'#E0EFFA'}
                              onDelete={EDUCATION}
                            />
                          )}
                        </Box>


                        <Heading
                          color={"white"}

                          title="EDUCATION"





                          circleIconHeading={true}
                          icon={(props) => (
                            <FaBookOpen
                              {...props}
                              size={22}
                              color="#56C8EA"
                            />
                          )}






                          fontSize={22}
                          fontWeight={500}
                          lineBg={"white"}
                          onSideSectionShow={() => setShow({ ...show, education: true })}
                        />



                      </HStack>
                      <Box bgColor="white" h="3px" w="80%"></Box>

                      <Box mr={"10%"} mt="5%">
                        <Education
                          institution={true}
                          date={true}
                          dateStyle={styles.date}
                          institutionStyle={styles.company}
                          institution_placeholder={"Degree"}

                          parentContainerStyle={styles.mt}

                        />
                      </Box>
                    </>
                  )}
                </Box>
              </div>
        
              <Box ml="8%">
                {resumeData?.languages?.visible && (
                  <>
                    <HStack alignItems={'flex-start'} mt={5}>
                      <Box >
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
                        <Heading
                          title={'LANGUAGES'}
                          circleIconHeading={true}
                          icon={(props) => (
                            <FaGlobe
                              {...props}
                              size={22}
                              color="#56C8EA"
                            />
                          )}


                          color="#fff"
                          onSideSectionShow={() =>
                            setShow({ ...show, languages: true })
                          }
                        />
                      </div>
                    </HStack>
                    <Box bgColor="white" h="3px" w="80%"></Box>


                    <Box mt="2%" mb="3%" mr="15%" ml="5%">
                      <Language
                        langStyle={styles.skillText1}
                      />
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>

          <Box w="70%" pl="50px" pr="50px" pb="50px">
            <div style={{ marginTop: "30px" }}>
              <Box display="flex" alignItems="center" mb="5px">
                <Icon as={FaUserCircle} w={8} h={8} color="#56C8EA" />
                <Title
                  text="PROFILE INFO"
                  color="#3C4240"
                  marginLeft="20px"
                  letterSpacing="2px"
                />
              </Box>
              <Box bgColor="#3C4240" h="3px" w="100%"></Box>
            </div>

        
            <About
              aboutStyle={styles.description}
              aboutPlaceholder={"Short and engaging pitch about yourself"}
            />

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

                          font-size={"1.4em"}
                          font-weight={900}

                          circleIconHeading={true}
                          icon={(props) => (
                            <FaBriefcase
                              {...props}
                              size={30}
                              color="#56C8EA"
                            />
                          )}

                          color={"black"}
                          title="WORK EXPERIENCE"

                          height={50}
                          fontSize={22}
                          fontWeight={500}
                          onSideSectionShow={() => setShow({ ...show, work: true })}
                        />
                        <Box bgColor="black" h="3px" w="560px"></Box>

                      </Box>
                    </div>
                  </HStack>
                  <Box mr="12%" mt="5%" ml="4%">
                    <WorkExperience

                      position={true}
                      company={true}
                      company_placeholder={"Company Name"}
                      position_placeholder={"Position"}
                      positionStyle={styles.positionSty}

                      summary={true}
                      companyStyle={styles.positionSty}



                      summaryStyle={styles.description}
                      summary_placeholder={"Summary"}
                      parentContainerStyle={styles.mt}
                    />
                  </Box>
                </>
              )}
            </div>
         
            <div>
              {resumeData?.skills?.visible && (
                <>
                  <HStack alignItems={'flex-start'} mt={5}>
                    <Box >
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          bg="#005063"
                          iconColor={'white'}
                          onDelete={SKILL}
                        />
                      )}
                    </Box>
                    <div className={styles.templateceoHeadingTitle}>

                    <Heading
                      title="MY EXPERTISE"
                      color={"black"}
                      textMargin={"10px 0px"}
                     
                      fontSize={22}
                      circleIconHeading={true}
                      icon={(props) => (
                        <FaCloudscale
                          {...props}
                          size={25}
                          color="#56C8EA"
                        />
                      )}

                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }




                    />
                                        <Box bgColor="black" h="3px" w="550px"></Box>

                    </div>


                  </HStack>
                  <Box ml="10%">
                  <Skill
              

                    skillStyle={styles.skillText}
                    skillPlaceholder="EXPERTISE"
                    progressBar={true}
                    strokeWidth="2"
                    lineStyle={styles.lineText}
                    strokeColor="black"
                    trailColor="#fff"
                    percentageStyle={styles.percentExp}
                    parentContainerStyle={styles.mt}

                  />
                  </Box>
                </>
              )}
            </div>


            <Box mt="12%" w="100%" display="flex" flexDir="column" ml="40px">
              {resumeData?.references?.visible && (
                <>
                  <div className={styles.sideMenu}>
                    <div>
                      <HStack alignItems={'flex-start'} mt={5}>
                        <Box ml={'-15px'}>
                          {show.references && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, references: false })}
                              bg="#005063"
                              iconColor={'white'}
                              onDelete={REFERENCE}
                            />
                          )}
                        </Box>
                        <div className={styles.templateceoHeadingTitle}>

                          <Box mt="10%" ml="-20px">
                            <Heading
                              title="MY REFERENCE"
                              color={"black"}
                              textMargin={"10px 0px"}

                              fontSize={24}
                              circleIconHeading={true}
                              icon={(props) => (
                                <FaAddressBook
                                  {...props}
                                  size={30}
                                  color="#56C8EA"
                                />
                              )}



                              onSideSectionShow={() =>
                                setShow({ ...show, references: true })
                              }
                            />
                            <Box bgColor="black" h="3px" w="550px"></Box>

                          </Box>
                        </div>

                      </HStack>

                      <Reference
                        name={true}

                        phone={true}
                        namePlaceholder={"Reference Name"}
                        phonePlaceholder={"Contact Number"}
                        phoneStyle={styles.subText1}
                        emailStyle={styles.subText1}
                        nameStyle={styles.profileText1}
                        parentContainerStyle={styles.mt}

                      />
                    </div>

                  </div>
                </>
              )}

            </Box>
          </Box>
        </Box>
      </Box>
      </TempLayout>
    </div>
    </div>
  );
}
