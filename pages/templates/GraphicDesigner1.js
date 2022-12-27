import React from "react";
import styles from "../../styles/templates/Graphic.module.css";
import { Box, Image, Tooltip, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Text from "../../src/components/graphicDesigner1/Text";
import { Row } from "antd";
import { sampleData } from "../../constants/sampleData";
import Name from "../../src/components/commonSection/Name";
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
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
import Heading from '../../src/components/commonSection/Heading';
import ImageSelector from '../../src/components/imageSelector';
import Skill from "../../src/components/commonSection/Skill";
import Language from "../../src/components/commonSection/Language";
import Interest from "../../src/components/commonSection/Interest";
import Education from '../../src/components/commonSection/Education';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';


export default function GraphicDesigner1() {
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




        <Box w="100%" ml={["", , , "5%", "13%", "25%"]} pt="10%">
          <Box
            w="100%"
            display="flex"
            maxW="950px"
            minW="950px"
            className={styles.bgContainer}
          >
            <Box w="35%" bgColor="#365B6D" m="15px" mt="30px" mb="60px">
              <Box mr="5%">
                <Contact
                  phone={true}
                  phonePlaceholder="123-456-7890"
                  email={true}
                  emailPlaceholder="abc@gmail.com"
                  websitePlaceholder="www.real.com"
                  locationPlaceholder="123,House,City"


                  website={true}
                  location={true}
                  circleIcon={true}
                  iconColor="black"
                  circleBg="white"
                  circleSize="35px"
                  iconSize="20px"
                  direction="row-reverse"
                  style={styles.DetailStyle}
                  margin={'8px 0px 0px 0px'}
                />
              </Box>

              <Box mt="20%">

                {resumeData?.education?.visible && (
                  <>
                    <HStack alignItems={'flex-start'} mt={'20px'}>
                      <Box w="30px" >
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
                          color={"white"}

                          title="EDUCATION"
                          line={true}

                          fontSize={30}
                          fontWeight={900}
                          lineBg={"white"}
                          onSideSectionShow={() => setShow({ ...show, education: true })}
                        />
                      </div>


                    </HStack>
                    <Box mr={"10%"} ml={"15%"} mt="5%">
                      <Education
                        institution={true}
                        date={true}
                        summary={true}

                        summaryStyle={styles.Educationdescription}
                        dateStyle={styles.date}
                        institutionStyle={styles.company}
                        institution_placeholder={"College"}

                        parentContainerStyle={styles.mt}

                      />
                    </Box>
                  </>
                )}
              </Box>



              <div>
                {resumeData?.skills?.visible && (
                  <>
                    <HStack alignItems={'flex-start'} mt={5}>
                      <Box w="30px">
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
                        <Heading

                          font-size={30}
                          font-weight={900}
                          color={"white"}

                          title="SKILLS"
                          line={true}
                          lineBg={"white"}
                          fontSize={30}
                          fontWeight={900}

                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                      </div>
                    </HStack>
                    <Box mr={"10%"} ml={"15%"} mt="5%">

                      <Skill skillStyle={styles.skillText}
                        parentContainerStyle={styles.mt}
                        minW={"220px"}
                        maxW={"220px"}


                      />
                    </Box>
                  </>
                )}
              </div>


            </Box>

            <Box w="65%" h="auto" m="30px" ml="10px" mr="25px">
              <Box
                bgColor="#F2F1EC"
                display="flex"
                flexDir="column"
                alignItems="center"
                p="25px"
                pb="65px"
              >
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

              <Heading text="ABOUT ME" textColor="#365B6D" marginTop="7%" />
              <Heading


                font-size={30}
                font-weight={900}
                color={"black"}

                title="ABOUT ME"
                line={true}
                fontSize={23}
                fontWeight={900}
              />
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
                    <Box mr="12%" mt="5%">
                      <WorkExperience

                        position={true}
                        company={true}
                        company_placeholder={"Company"}
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
              <Image src="/gdImage.png" w="100%" />
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div>
  );
}
