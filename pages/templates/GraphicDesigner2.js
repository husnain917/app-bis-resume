import React from "react";
import { Box } from "@chakra-ui/react";
import styles from "../../styles/templates/Graphic2.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import { Row } from "antd";
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
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
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
              maxW="850px"
              minW="850px"
            >
              <Box
                w="38%"
                h="auto"
                bgColor={backgroundColor || `#161619`}
                pl={'47px'}
                pb="50px"
                mb="30px"
              >
                <ImageSelector
                  minWidth={200}
                  maxWidth={200}
                  minHeight={200}
                  maxHeight={200}
                  marginTop={'40px'}
                  marginLeft={'14px'}
                />
                <Box mt="15%">
                  <Heading
                    title={'CONTACT PERSON'}
                    color={color ? color : '#fff'}
                    margin={'20px 0px 0px 0px'}
                    line={true}
                    lineW="100%"
                    lineH="0.15em"
                    lineBg={color ? color : '#fff'}
                    fontWeight={700}
                  />
                  <Contact
                    phone={true}
                    email={true}
                    linkedinURL={true}
                    website={true}
                    circleIcon={true}
                    circleBg="#fff"
                    circleSize="25px"
                    iconColor={color ? color : '#000000'}
                    margin={'10px 0px 0px 0px'}
                    parentStyle={styles.contactFont}
                  />
                  {/* skill */}
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
                            color={color ? color : '#fff'}
                            line={true}
                            lineW="100%"
                            lineH="0.15em"
                            lineBg={color ? color : '#fff'}
                            onSideSectionShow={() =>
                              setShow({ ...show, skills: true })
                            }
                          />
                          <Skill
                            skillStyle={styles.contactFont}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* interst */}
                  <Box
                    margin={'20px 0px 10px 6px'}
                  >
                    {resumeData?.hobbies?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox}>
                          {show.interest && (
                            <SectionSideMenu
                              bg="#006772"
                              iconColor={"#fff"}
                              onHide={() => setShow({ ...show, interest: false })}
                              onDelete={INTEREST}
                            />
                          )}
                        </div>
                        <div>
                          <Heading
                            title={'INTEREST'}
                            fontSize="20px"
                            fontWeight={700}
                            color={color ? color : '#fff'}
                            line={true}
                            lineW="100%"
                            lineH="0.15em"
                            lineBg={color ? color : '#fff'}
                            onSideSectionShow={() =>
                              setShow({ ...show, interest: true })
                            }
                          />
                          <Interest
                            interestStyle={styles.contactFont}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* languages */}
                  <Box
                    margin={'20px 0px 10px 6px'}
                  >
                    {resumeData?.languages?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox}>
                          {show.languages && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, languages: false })}
                              bg="#006772"
                              iconColor={"#fff"}
                              onDelete={LANGUAGES}
                            />
                          )}
                        </div>
                        <div>
                          <Heading
                            title={'LANGUAGES'}
                            fontSize="20px"
                            fontWeight={700}
                            color={color ? color : '#fff'}
                            line={true}
                            lineW="100%"
                            lineH="0.15em"
                            lineBg={color ? color : '#fff'}
                            onSideSectionShow={() =>
                              setShow({ ...show, languages: true })
                            }
                          />
                          <Language
                            langStyle={styles.contactFont}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
              </Box>
              <Box w="62%">
                <Box bgColor="#E4E4E4" h="auto" pt="10%" pl="10%" pb="30px">
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
                  {/* education */}
                  <Box
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
                            color={backgroundColor ? backgroundColor : '#000000'}
                            line={true}
                            lineW="434px"
                            lineH="0.15em"
                            lineBg={backgroundColor ? backgroundColor : '#000000'}
                            fontSize={'22px'}
                            fontWeight={700}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
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
                            textColor="#000000"
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                  {/* work */}
                  <Box
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
                            color={backgroundColor ? backgroundColor : '#000000'}
                            title="WORK EXPERIENCE"
                            line={true}
                            lineW="434px"
                            lineH="0.15em"
                            lineBg={backgroundColor ? backgroundColor : '#000000'}
                            fontSize={'22px'}
                            fontWeight={700}
                            minW="300px"
                            onSideSectionShow={() =>
                              setShow({ ...show, work: true })
                            }
                            maxW={'fit-content'}
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
                            textColor="#000000"
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
      </TempLayout>
    </div>
  );
}
