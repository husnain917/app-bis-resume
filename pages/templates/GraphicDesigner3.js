import React from "react";
import styles from "../../styles/templates/Graphic3.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import { Box } from "@chakra-ui/react";
import {
  FaUserCircle,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaGlobe,
  FaCloudscale,
  FaAddressBook,
} from "react-icons/fa";
import Name from "../../src/components/commonSection/Name";
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
  REFERENCE
} from '../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../src/components/tempNav/TempLayout';
import useStoreData from "../../src/components/useStoreData";
import Heading from '../../src/components/commonSection/Heading';
import ImageSelector from '../../src/components/imageSelector';
import Skill from "../../src/components/commonSection/Skill";
import Language from "../../src/components/commonSection/Language";
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import Education from '../../src/components/commonSection/Education';
import About from "../../src/components/commonSection/About";
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from "../../src/components/commonSection/Reference";
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

export default function GraphicDesigner3() {
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
      <TempLayout work={true} education={true} skills={true} languages={true} references={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />
        <Box
          pt="5%"
          display={'flex'}
          justifyContent={'center'}
          pb={'2%'}
        >
          <Box w="100%" display="flex" flexDir="row" maxW="930px" minW="930px" ref={pdfRef}>
            <Box w="30%" h="auto" display="flex" flexDir="column">
              <Box bgColor="#56C8EA" pb="30px">
                <ImageSelector
                  maxH={"14em"}
                  maxW={"14em"}
                  borderRadius="50%"
                  marginTop={"6"}
                  marginLeft={"7"}
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
              <Box bgColor="#3C4240" h="100%" pb="30px">
                <Heading
                  color={'#fff'}
                  title="CONTACT"
                  line={true}
                  lineW="100%"
                  lineH="0.15em"
                  lineBg={'#fff'}
                  fontSize={'22px'}
                  fontWeight={700}
                  minW="300px"
                  margin={'30px 0px 0px 30px'}
                  circleIconHeading={true}
                  icon={(props) => (
                    <FaUser
                      {...props}
                      size={22}
                      color="#56C8EA"
                    />
                  )}
                />
                <Box ml="10%">
                  <Contact
                    phone={true}
                    email={true}
                    linkedinURL={true}
                    website={true}
                    circleIcon={true}
                    circleBg="#fff"
                    circleSize="35px"
                    iconColor="#1C2125"
                    margin={'10px 0px 0px 10px'}
                    style={styles.profileText}
                  />
                </Box>
                {/* languages */}
                <Box
                  margin={'30px 0px 10px 40px'}
                >
                  {resumeData?.languages?.visible && (
                    <div className={Classes.sideMenu}>
                      <div className={Classes.sideMenuBox}>
                        {show?.languages && (
                          <SectionSideMenu
                            onDelete={LANGUAGES}
                            onHide={() => setShow({ ...show, languages: false })}
                            bg="#006772"
                            iconColor={"#fff"}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          title={'LANGUAGES'}
                          fontSize="20px"
                          fontWeight={700}
                          color={'#fff'}
                          line={true}
                          lineW="100%"
                          lineH="0.15em"
                          lineBg={'#fff'}
                          onSideSectionShow={() =>
                            setShow({ ...show, languages: true })
                          }
                          circleIconHeading={true}
                          icon={(props) => (
                            <FaGlobe
                              {...props}
                              size={22}
                              color="#56C8EA"
                            />
                          )}
                        />
                        <Language
                          langContainerStyle={styles.langDiv}
                        />
                      </div>
                    </div>
                  )}
                </Box>
              </Box>
            </Box>

            <Box w="70%" pl="50px" pr="50px" pb="50px">
              <Heading
                color={'#3C4240'}
                title="PROFILE INFO"
                line={true}
                lineW="100%"
                lineH="0.15em"
                lineBg={'#fff'}
                fontSize={'22px'}
                fontWeight={700}
                minW="300px"
                margin={'30px 0px 0px 0px'}
                circleIconHeading={true}
                icon={(props) => (
                  <FaUserCircle
                    {...props}
                    size={30}
                    color="#56C8EA"
                  />
                )}
              />
              <About
                aboutStyle={styles.description}
                aboutPlaceholder={"Short and engaging pitch about yourself"}
              />
              {/* work */}
              <Box
                margin={'30px 0px 10px 0px'}
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
                        color={'#3C4240'}
                        title="WORK EXPERIENCE"
                        line={true}
                        lineW="410px"
                        lineH="0.15em"
                        lineBg={'#3C4240'}
                        fontSize={'22px'}
                        fontWeight={700}
                        minW="300px"
                        onSideSectionShow={() =>
                          setShow({ ...show, work: true })
                        }
                        maxW={'fit-content'}
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaBriefcase
                            {...props}
                            size={30}
                            color="#56C8EA"
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
                        parentContainerStyle={styles.rightContainer}
                        textColor="#3C4240"
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* education */}
              <Box
                margin={'30px 0px 10px 0px'}
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
                        color={'#3C4240'}
                        line={true}
                        lineW="410px"
                        lineH="0.15em"
                        lineBg={'#3C4240'}
                        fontSize={'22px'}
                        fontWeight={700}
                        onSideSectionShow={() =>
                          setShow({ ...show, education: true })
                        }
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaBookOpen
                            {...props}
                            size={30}
                            color="#56C8EA"
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
                        textColor="#3C4240"
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* skill */}
              <Box margin={'30px 0px 10px 0px'}>
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
                        color={'#3C4240'}
                        line={true}
                        lineW="410px"
                        lineH="0.15em"
                        lineBg={'#3C4240'}
                        onSideSectionShow={() =>
                          setShow({ ...show, skills: true })
                        }
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaCloudscale
                            {...props}
                            size={30}
                            color="#56C8EA"
                          />
                        )}
                      />
                      <Skill
                        progressBar={true}
                        strokeWidth="2"
                        lineStyle={styles.line}
                        strokeColor={'#2A78AB'}
                        trailColor="#fff"
                        percentageStyle={styles.percent}
                        parentContainerStyle={styles.skillDiv}
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* references */}
              <Box margin={'30px 0px 10px 0px'}>
                {resumeData?.references?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.references && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, references: false })}
                          bg="#006772"
                          iconColor={"#fff"}
                          onDelete={REFERENCE}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={'MY REFERENCE'}
                        fontSize="20px"
                        fontWeight={700}
                        color={'#3C4240'}
                        line={true}
                        lineW="410px"
                        lineH="0.15em"
                        lineBg={'#3C4240'}
                        onSideSectionShow={() =>
                          setShow({ ...show, references: true })
                        }
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaAddressBook
                            {...props}
                            size={30}
                            color="#56C8EA"
                          />
                        )}
                      />
                      <Reference
                        name={true}
                        phone={true}
                        namePlaceholder={"Reference Name"}
                        phonePlaceholder={"Contact Number"}
                        phoneStyle={styles.refernceText}
                        emailStyle={styles.refernceText}
                        nameStyle={styles.refernceText}
                        parentContainerStyle={styles.refernceDiv}
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div>
  );
}
