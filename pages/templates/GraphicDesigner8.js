import { background, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Heading from '../../src/components/commonSection/Heading';
import ImageSelector from '../../src/components/imageSelector';
import Classes from '../../styles/templates/graph8.module.css';
import About from '../../src/components/commonSection/About';
import Education from '../../src/components/commonSection/Education';
import Contact from '../../src/components/commonSection/Contact';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import Name from '../../src/components/commonSection/Name';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Skill from '../../src/components/commonSection/Skill';
import TempLayout from '../../src/components/tempNav/TempLayout';
import Profession from '../../src/components/commonSection/Profession';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from '../../src/components/tempNav/PDFGenerater';
const GraphicDesigner8 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    // Graphic Designer Template 8 //
    <div style={{ overflow: 'auto' }}>
      <TempLayout
        education={true}
        work={true}
        skills={true}
        downloadPDF={downloadPDFHandler}
      >
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', md: 'center' }}
          flexDir={'column'}
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box margin={'100px 20px 30px 20px'}>
            <Box
              minW={830}
              maxW={830}
              borderRadius={6}
              bg={'#fff'}
              pr={'30px'}
              py={'60px'}
              display="flex"
              alignItems={'stretch'}
              borderWidth="1px"
              borderColor={'#00000033'}
              ref={pdfRef}
            >
              {/* _______________ First Section _______________  */}
              <Box
                w="40%"
                pb="10%"
                minW={'340px'}
                maxW={'340px'}
                bgColor={backgroundColor ? backgroundColor : '#2A78AB'}
                borderBottomRadius={6}
                borderTopRadius={'180px'}
                ml={'40px'}
                py={8}
                pr={6}
                transition={'0.5s background'}
              >
                {/* =============== Profile Section ============== */}
                <ImageSelector
                  minWidth={240}
                  maxWidth={240}
                  minHeight={240}
                  maxHeight={240}
                  marginTop="20px"
                  marginLeft={12}
                  borderColor={color ? color : 'black'}
                  borderWidth={color ? '5px' : '0px'}
                />
                <Heading
                  title={'ABOUT ME'}
                  color={color ? color : '#fff'}
                  line={true}
                  lineH="2px"
                  lineBg={color ? color : '#fff'}
                  lineW="17pc"
                  margin={'25px 0px 15px 30px'}
                  textMargin="0px 0px 8px 0px"
                />
                <About aboutStyle={Classes.aboutText} minW="full" maxW="full" />
                {/* =============== Education Section ============== */}
                {resumeData?.education?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          onDelete={EDUCATION}
                          bg={color ? color : '#fff'}
                          iconColor={background ? '#fff' : '#2A78AB'}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={'EDUCATION'}
                        color={color ? color : '#fff'}
                        line={true}
                        lineH="2px"
                        lineBg={color ? color : '#fff'}
                        lineW="17pc"
                        margin="15px 0px"
                        textMargin="0px 0px 8px 0px"
                        onSideSectionShow={() =>
                          setShow({ ...show, education: true })
                        }
                      />
                      <Education
                        institution={true}
                        degree={true}
                        institutionStyle={Classes.institute}
                        degreeStyle={Classes.program}
                        degree_placeholder="Study Program"
                      />
                    </div>
                  </div>
                )}
                {/* =============== Contact Section ============== */}
                <Heading
                  title={'CONTACT'}
                  color={color ? color : '#fff'}
                  line={true}
                  lineH="2px"
                  lineBg={color ? color : '#fff'}
                  lineW="17pc"
                  margin={'20px 0px 15px 30px'}
                  textMargin="0px 0px 8px 0px"
                />
                <Contact
                  email={true}
                  phone={true}
                  website={true}
                  circleIcon={true}
                  circleSize="25px"
                  circleBg="#fff"
                  iconColor={color ? color : '#2A78AB'}
                  style={Classes.contact}
                  margin="10px 0px 0px 30px"
                />
              </Box>
              {/* _______________ Second Section _______________  */}
              <Box
                w="60%"
                bg="white"
                minW="440px"
                maxW={'440px'}
                pt={'100px'}
                pr="30px"
              >
                {/* =============== Name Section ============== */}
                <Name
                  FNameStyle={Classes.name}
                  SNameStyle={Classes.name}
                  FName={true}
                  SName={true}
                  margin="0px 0px 0px 30px"
                  fontColor={color ? color : '#2a78ab'}
                />
                <Profession
                  professionStyle={Classes.profession}
                  margin="0px 0px 0px 30px"
                  fontColor={color ? color : '#2a78ab'}
                />
                {/* =============== Work Experience Section ============== */}
                {resumeData?.work?.visible && (
                  <div
                    className={Classes.sideMenu}
                    style={{ marginTop: '28px' }}
                  >
                    <div className={Classes.sideMenuBox}>
                      {show.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          onDelete={WORK}
                          bg={color ? color : ''}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={'WORK EXPERIENCE'}
                        color={color ? color : '#2a78ab'}
                        line={true}
                        lineH="2px"
                        lineBg={color ? color : 'gray'}
                        lineW="24pc"
                        fontWeight={700}
                        textMargin="0px 0px 8px 0px"
                        margin={'15px 0px'}
                        onSideSectionShow={() =>
                          setShow({ ...show, work: true })
                        }
                      />
                      <WorkExperience
                        position={true}
                        date={true}
                        summary={true}
                        positionStyle={Classes.workText}
                        dateStyle={Classes.date}
                        summaryStyle={Classes.date}
                      />
                    </div>
                  </div>
                )}

                {/* =============== Skill Section ============== */}
                {resumeData?.skills?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          onDelete={SKILL}
                          bg={color ? color : ''}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={'SKILLS'}
                        color={color ? color : '#2a78ab'}
                        line={true}
                        lineH="2px"
                        lineBg={color ? color : 'gray'}
                        lineW="24pc"
                        fontWeight={700}
                        textMargin="0px 0px 8px 0px"
                        margin={'15px 0px'}
                        onSideSectionShow={() =>
                          setShow({ ...show, skills: true })
                        }
                      />
                      <Skill
                        skillStyle={Classes.skillText}
                        progressBar={true}
                        lineStyle={Classes.line}
                        strokeColor={color ? color : '#2A78AB'}
                        strokeWidth="2"
                        trailColor="#80808073"
                        percentStyle={Classes.mt}
                        minWText="210px"
                        maxWText="210px"
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default GraphicDesigner8;
