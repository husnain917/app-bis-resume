import { Box, Flex, HStack } from '@chakra-ui/react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/digitalMarkTemp2.module.css';
import Profession from '../../src/components/commonSection/Profession';
import About from '../../src/components/commonSection/About';
import Heading from '../../src/components/commonSection/Heading';
import Contact from '../../src/components/commonSection/Contact';
import Skill from '../../src/components/commonSection/Skill';
import ImageSection from '../../src/components/commonSection/ImageSection';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
const DigitalMarkTemp2 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout skills={true} education={true} work={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />
        <Box
          display={'flex'}
          justifyContent={{ base: 'none', md: 'center' }}
          flexDir={'column'}
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box
            m={'100px 20px 20px 20px'}
          >
            <Box
              minW={820}
              bg={'white'}
              borderRadius={6}
              h={'full'}
              pb={4}
              borderWidth="1px"
              borderColor={'#00000033'}
              ref={pdfRef}
            >
              <Box
                bg={backgroundColor}
                h={'60px'}
                borderBottomRightRadius={25}
                minW={410}
                maxW={410}
              ></Box>
              <HStack minW={820} maxW={820} alignItems="flex-start">
                <Box minW={410} maxW={410}>
                  <Name
                    FName={true}
                    SName={true}
                    direction="row"
                    margin={'20px 0px 0px 20px'}
                    FNameStyle={Classes.digitalName}
                    SNameStyle={Classes.digitalName}
                  />
                  <Box
                    minH={10}
                    bg={backgroundColor}
                    maxW={310}
                    minW={310}
                    borderRightRadius={8}
                    justifyContent="center"
                    alignItems={'center'}
                    pt={0.5}
                    mt={4}
                  >
                    <Profession professionStyle={Classes.ProfessionDigital} />
                  </Box>
                  <About aboutStyle={Classes.about} minW="full" maxW="full" />
                  <Heading
                    title={'CONTACT'}
                    textMargin="10px 0px 10px 20px"
                    headBg={backgroundColor}
                    borderRadius="0px 8px 8px 0px"
                    fontSize={'23px'}
                    height="40px"
                    minW={260}
                    maxW={260}
                    letterSpacing="1px"
                    margin={'20px 0px 20px 0px'}
                  />
                  <Contact
                    phone={true}
                    email={true}
                    location={true}
                    website={true}
                    heading={true}
                    headingStyle={Classes.contactHead}
                    style={Classes.profileText}
                    direction="column"
                    margin="5px 0px 0px 30px"
                  />
                  {resumeData?.skills?.visible && (
                    <div className={Classes.sideMenu}>
                      <div>
                        <Heading
                          title={'SKILLS'}
                          textMargin="10px 0px 10px 20px"
                          headBg={'backgroundColor'}
                          borderRadius="0px 8px 8px 0px"
                          fontSize={'23px'}
                          height="40px"
                          minW={260}
                          maxW={260}
                          letterSpacing="1px"
                          margin={'20px 0px 20px 0px'}
                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                        <Skill
                          progressBar={true}
                          strokeWidth="2"
                          lineStyle={Classes.line}
                          direction="row"
                          strokeColor="#9ccced"
                          trailColor="#80808073"
                          skillStyle={Classes.skillText}
                          percentageStyle={Classes.percent}
                          percentStyle={Classes.percent2}
                          minWText="220px"
                          maxWText={'220px'}
                          parentContainerStyle={Classes.ml}
                        />
                      </div>
                      <div className={Classes.sideMenuBox}>
                        {show.skills && (
                          <SectionSideMenu
                            onHide={() => setShow({ ...show, skills: false })}
                            bg="#AED6F1"
                            iconColor={'#000'}
                            onDelete={SKILL}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </Box>
                <Box minW={410} maxW={410} alignItems="flex-start">
                  <ImageSelector
                    minWidth={300}
                    maxWidth={300}
                    minHeight={300}
                    maxHeight={300}
                    marginLeft="50px"
                  />
                  <Box
                    bg={backgroundColor}
                    minW={372}
                    maxW={372}
                    ml={'30px'}
                    borderLeftRadius={23}
                    p={7}
                    mt={10}
                  >
                    {resumeData?.education?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox1}>
                          {show.education && (
                            <SectionSideMenu
                              onHide={() =>
                                setShow({ ...show, education: false })
                              }
                              bg="#000"
                              iconColor={'#AED6F1'}
                              onDelete={EDUCATION}
                            />
                          )}
                        </div>
                        <div>
                          <Heading
                            title={'EDUCATION'}
                            fontSize={'23px'}
                            letterSpacing="1px"
                            fontWeight={700}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
                          />
                          <Education
                            degree={true}
                            date={true}
                            summary={true}
                            degreeStyle={Classes.programText}
                            dateStyle={Classes.date}
                            summaryStyle={Classes.desText}
                            degree_placeholder={'Study Program'}
                          />
                        </div>
                      </div>
                    )}
                    {resumeData?.work?.visible && (
                      <div className={Classes.sideMenu}>
                        <div className={Classes.sideMenuBox1}>
                          {show.work && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, work: false })}
                              bg="#000"
                              iconColor={'#AED6F1'}
                              onDelete={WORK}
                            />
                          )}
                        </div>
                        <div>
                          <Heading
                            title={'WORK EXPERIENCE'}
                            fontSize={'23px'}
                            letterSpacing="1px"
                            fontWeight={700}
                            onSideSectionShow={() =>
                              setShow({ ...show, work: true })
                            }
                          />
                          <WorkExperience
                            position={true}
                            date={true}
                            summary={true}
                            positionStyle={Classes.programText}
                            dateStyle={Classes.date}
                            summaryStyle={Classes.desText}
                          />
                        </div>
                      </div>
                    )}
                  </Box>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Box>
      </TempLayout>
    </div>
  );
};
export default DigitalMarkTemp2;
