import { Box, Flex, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../.././styles/templates/template5.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import About from '../../src/components/commonSection/About';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import Skill from '../../src/components/commonSection/Skill';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
const Template5 = () => {
  const MainHeading = ({ title, w, side }) => (
    <Box display={'flex'} alignItems="flex-end" justifyContent={'flex-start'}>
      <Heading
        fontSize={'25px'}
        title={title ? title : ''}
        fontWeight="700"
        minW={'fit-content'}
        maxW="fit-content"
        margin={'30px 15px 0px 0px'}
        onSideSectionShow={side}
      />
      <Box minW={w ? w : '550px'} h="1px" bg={'black'}></Box>
    </Box>
  );
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  // PDF Download Hook
  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout education={true} work={true} skills={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', lg: 'center' }}
          mb="30px"
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box
            margin={'100px 20px 20px 20px'}
          >
            <SimpleGrid
              minW={850}
              maxW={850}
              bg={'blackAlpha.300'}
              py={12}
              borderRadius={6}
              borderWidth="1px"
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              <HStack alignItems={'flex-start'}>
                <VStack align={'flex-end'} lineHeight="34px" pr={6} w="399px">
                  <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
                    <Name
                      FName={true}
                      SName={true}
                      direction="row"
                      FNameStyle={Classes.name}
                      SNameStyle={Classes.name}
                    />
                    <Profession
                      professionStyle={Classes.professionNameTemplate5}
                    />
                  </Box>
                  <Contact
                    phone={true}
                    email={true}
                    website={true}
                    location={true}
                    circleIcon={true}
                    iconColor="#fff"
                    circleBg="black"
                    circleSize="25px"
                    iconSize="14px"
                    direction="row-reverse"
                    style={Classes.DetailStyle}
                    margin={'8px 0px 0px 0px'}
                  />
                </VStack>
                <Box h={'full'} width="2px" bg="black"></Box>

                <VStack align={'right'} pl={6} w={370} pr={6}>
                  <Heading
                    fontSize={'25px'}
                    title={'About Me'}
                    fontWeight="700"
                  />
                  <About minW="full" aboutStyle={Classes.aboutTextTemplate5} />
                </VStack>
              </HStack>
              {resumeData?.work?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.work && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, work: false })}
                        onDelete={WORK}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    )}
                  </div>
                  <div>
                    <MainHeading
                      title={'Experience'}
                      w="650px"
                      side={() => setShow({ ...show, work: true })}
                    />
                    <WorkExperience
                      company={true}
                      date={true}
                      position={true}
                      summary={true}
                      direction="row"
                      companyStyle={Classes.companyTemplate5}
                      positionStyle={Classes.companyTemplate5}
                      dateStyle={Classes.date}
                      summaryStyle={Classes.companyDescriptionTemplate5}
                      parentContainerStyle={Classes.mWork}
                      row1MinW={230}
                      row1MaxW={230}
                      row2MaxW={250}
                      row2MinW={250}
                    />
                  </div>
                </div>
              )}
              {resumeData?.education?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.education && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, education: false })}
                        onDelete={EDUCATION}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    )}
                  </div>
                  <div>
                    <MainHeading
                      title={'Education'}
                      w="660px"
                      side={() => setShow({ ...show, education: true })}
                    />
                    <Education
                      institution={true}
                      date={true}
                      summary={true}
                      degree={true}
                      direction="row"
                      parentContainerStyle={Classes.mWork}
                      degreeStyle={Classes.companyTemplate5}
                      institutionStyle={Classes.companyTemplate5}
                      dateStyle={Classes.date}
                      summaryStyle={Classes.companyDescriptionTemplate5}
                      row1MinW={230}
                      row1MaxW={230}
                      row2MaxW={250}
                      row2MinW={250}
                      degree_placeholder="Study Program"
                    />
                  </div>
                </div>
              )}
              {resumeData?.skills?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.sideMenuBox}>
                    {show.skills && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, skills: false })}
                        onDelete={SKILL}
                      />
                    )}
                  </div>
                  <div>
                    <MainHeading
                      title={'Skill & Hobbies'}
                      w="595px"
                      side={() => setShow({ ...show, skills: true })}
                    />
                    <Skill
                      parentContainerStyle={Classes.m}
                      progressBar={true}
                      lineStyle={Classes.line}
                      trailColor="#fff"
                      trailWidth="6"
                      DndDirection="horizontal"
                      skillStyle={Classes.skillTxt}
                      percentageStyle={Classes.percentageStyle}
                      minWText="90px"
                      maxWText="90px"
                      margin={'0px 20px '}
                      percentStyle={Classes.percent}
                    />
                  </div>
                </div>
              )}
            </SimpleGrid>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default Template5;
