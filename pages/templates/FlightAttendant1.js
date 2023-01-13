import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import { IoMdJet } from 'react-icons/io';
import Education from '../../src/components/commonSection/Education';
import { BsFillLayersFill } from 'react-icons/bs';
import Certificate from '../../src/components/commonSection/Certificate';
import { FaAward } from 'react-icons/fa';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  CERTIFICATE,
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";

const FlightAttendant1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();

  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout work={true} education={true} certificate={true} skills={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', md: 'center' }}
          flexDir={'column'}
          alignItems={{ base: 'none', lg: 'center' }}
          className={`${Classes.main}`}
        >
          <Box
            mx={'20px'}
            mt="100px"
          >
            <Box
              display="flex"
              flexDir="row"
              w="100%"
              minW="850px"
              maxW="850px"
              mb={'50px'}
              borderWidth="1px"
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              {/* =============== First Section ============== */}
              <Box
                w="40%"
                pb="10%"
                minW={'340px'}
                bgColor={backgroundColor ? backgroundColor : '#00b4d8'}
                // borderLeftRadius={6}
                pr={3}
                pl={12}
                py={8}
              >
                {/* _____________ Profile _____________ */}
                <ImageSelector
                  minWidth={'240px'}
                  maxWidth={'240px'}
                  minHeight={'240px'}
                  maxHeight={'240px'}
                />
                <Name
                  FName={true}
                  SName={true}
                  direction="row"
                  FNameStyle={Classes.name}
                  SNameStyle={Classes.name}
                  margin={'20px 0px 0px 0px'}
                />
                <Profession
                  margin={'10px 0px 0px 0px'}
                  professionStyle={Classes.profession}
                />
                <Contact
                  phone={true}
                  email={true}
                  linkedinURL={true}
                  website={true}
                  circleIcon={true}
                  circleBg={color ? color : '#000000'}
                  circleSize="25px"
                  iconColor={backgroundColor ? backgroundColor : '#fff'}
                  margin={'10px 0px 0px 0px'}
                  style={Classes.profileText}
                />
                &nbsp;
                {/* _____________ Skill _____________ */}
                {resumeData?.skills?.visible && (
                  <>
                    <div className={Classes.sideMenu}>
                      <div
                        className={Classes.sideMenuBox}
                        style={{ marginTop: '5px' }}
                      >
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
                          title={'RELEVANT SKILLS'}
                          color={color ? color : '#000000'}
                          margin={'0px 0px 0px 0px'}
                          fontSize={17}
                          fontWeight={700}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        <Skill skillStyle={Classes.skillText} />
                      </div>
                    </div>
                  </>
                )}
              </Box>
              {/* =============== Second Section ============== */}
              <Box w="60%" bg="white" h="auto" minW="500px" pl={'40px'} py="20px">
                {resumeData?.work?.visible && (
                  <>
                    <div className={Classes.sideMenu}>
                      <div
                        className={Classes.sideMenuBox}
                        style={{ marginTop: '15px' }}
                      >
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
                          minW={'476px'}
                          maxW={'476px'}
                          headBg={'#E0EFFA'}
                          title="WORK EXPERIENCE"
                          margin={'20px 0px 0px 0px'}
                          padding={'0px 0px 0px 20px'}
                          height={50}
                          fontSize={17}
                          fontWeight={700}
                          onSideSectionShow={() =>
                            setShow({ ...show, work: true })
                          }
                        />
                        {/* _____________ Work Experience _____________ */}
                        <WorkExperience
                          company={true}
                          position={true}
                          date={true}
                          summary={true}
                          companyStyle={Classes.company}
                          positionStyle={Classes.programText}
                          dateStyle={Classes.date}
                          summaryStyle={Classes.description}
                          iconShow={true}
                          icon={(props) => (
                            <IoMdJet
                              {...props}
                              color={backgroundColor}
                              size={32}
                              className={Classes.mr}
                            />
                          )}
                          parentContainerStyle={Classes.mt}
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* _____________ Education _____________ */}
                {resumeData?.education?.visible && (
                  <>
                    <div className={Classes.sideMenu}>
                      <div
                        className={Classes.sideMenuBox}
                        style={{ marginTop: '15px' }}
                      >
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
                          minW={'476px'}
                          maxW={'476px'}
                          headBg={'#E0EFFA'}
                          title="EDUCATION HISTORY"
                          margin={'20px 0px 0px 0px'}
                          padding={'0px 0px 0px 20px'}
                          height={50}
                          fontSize={17}
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
                          iconShow={true}
                          icon={(props) => (
                            <BsFillLayersFill
                              {...props}
                              color={backgroundColor}
                              size={32}
                              className={Classes.mr}
                            />
                          )}
                          parentContainerStyle={Classes.mt}
                          institutionStyle={Classes.company}
                          degreeStyle={Classes.programText}
                          dateStyle={Classes.date}
                          summaryStyle={Classes.description}
                          degree_placeholder="Study Program"
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* _____________ Certification _____________ */}
                {resumeData?.certifications?.visible && (
                  <>
                    <div className={Classes.sideMenu}>
                      <div
                        className={Classes.sideMenuBox}
                        style={{ marginTop: '15px' }}
                      >
                        {show.certificates && (
                          <SectionSideMenu
                            onHide={() =>
                              setShow({ ...show, certificates: false })
                            }
                            bg="#006772"
                            iconColor={"#fff"}
                            onDelete={CERTIFICATE}
                          />
                        )}
                      </div>
                      <div>
                        <Heading
                          minW={'476px'}
                          maxW={'476px'}
                          headBg={'#E0EFFA'}
                          title="CERTIFICATIONS"
                          padding={'0px 0px 0px 20px'}
                          margin={'20px 0px 0px 0px'}
                          height={50}
                          fontSize={17}
                          fontWeight={700}
                          onSideSectionShow={() =>
                            setShow({ ...show, certificates: true })
                          }
                        />
                        <Certificate
                          certificate={true}
                          issueDate={true}
                          institute={true}
                          iconShow={true}
                          icon={(props) => (
                            <FaAward
                              {...props}
                              color={backgroundColor}
                              size={32}
                              className={Classes.mr}
                            />
                          )}
                          parentContainerStyle={Classes.mt}
                          certificateStyle={Classes.programText}
                          issueDateStyle={Classes.date}
                          instituteStyle={Classes.company}
                        />
                      </div>
                    </div>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default FlightAttendant1;
