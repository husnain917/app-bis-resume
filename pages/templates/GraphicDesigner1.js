import React from "react";
import styles from "../../styles/templates/Graphic.module.css";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import { Box } from "@chakra-ui/react";
import Name from "../../src/components/commonSection/Name";
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Contact from '../../src/components/commonSection/Contact';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useStoreData from "../../src/components/useStoreData";
import Heading from '../../src/components/commonSection/Heading';
import Skill from "../../src/components/commonSection/Skill";
import Education from '../../src/components/commonSection/Education';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function GraphicDesigner1() {
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
          display={'flex'}
          justifyContent={'center'}
          width={'100%'}
        >
          <Box pt="10%">
            <Box
              display="flex"
              maxW="950px"
              minW="950px"
              className={styles.bgContainer}
              ref={pdfRef}
            >
              <Box w="35%" bgColor="#365B6D" m="15px" mt="30px" pb="100px" pr={'30px'}>
                <Box mr="5%" mt={'30px'}>
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
                <Box
                  margin={'20px 0px 0px 40px'}
                >
                  {resumeData?.education?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show.education && (
                          <SectionSideMenu
                            onHide={() => setShow({ ...show, education: false })}
                            bg="#006772"
                            iconColor={"#fff"}
                            onDelete={EDUCATION}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          color={"white"}
                          title="EDUCATION"
                          line={true}
                          fontSize={30}
                          fontWeight={900}
                          lineBg={"white"}
                          margin={"10px 0px 0px 0px"}
                          onSideSectionShow={() => setShow({ ...show, education: true })}
                        />
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
                      </div>
                    </div>
                  )}
                </Box>
                {/* skill */}
                <Box margin={'20px 0px 0px 40px'}>
                  {resumeData?.skills?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show.skills && (
                          <SectionSideMenu
                            onHide={() => setShow({ ...show, skills: false })}
                            bg="#006772"
                            iconColor={"#fff"}
                            onDelete={SKILL}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          font-size={30}
                          font-weight={900}
                          color={"white"}
                          title="SKILLS"
                          line={true}
                          lineBg={"white"}
                          fontSize={30}
                          fontWeight={900}
                          margin={"10px 0px 0px 0px"}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        <Skill skillStyle={styles.skillText}
                          parentContainerStyle={styles.mt}
                          minW={"220px"}
                          maxW={"220px"}
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>

              <Box w="65%" h="auto" m="30px" ml="10px" mr="25px" pl={'10px'} pb={'80px'}>
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

                <Box
                  margin={'20px 0px 0px 0px'}
                >
                  <Heading
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
                </Box>
                {/* work */}
                <Box
                  margin={'20px 0px 0px 0px'}
                >
                  {resumeData?.work?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show.work && (
                          <SectionSideMenu
                            onHide={() => setShow({ ...show, work: false })}
                            bg="#006772"
                            iconColor={"#fff"}
                            onDelete={WORK}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          line={true}
                          color={"black"}
                          title="EXPERIENCE"
                          fontSize={22}
                          fontWeight={900}
                          onSideSectionShow={() => setShow({ ...show, work: true })}
                        />
                        <WorkExperience
                          date={true}
                          position={true}
                          company={true}
                          dateStyle={Classes.date}
                          positionStyle={Classes.programText}
                          companyStyle={Classes.institute}
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div>
  );
}
