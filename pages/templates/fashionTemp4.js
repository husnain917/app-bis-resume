import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/fashionTemp4.module.css';
import Heading from '../../src/components/commonSection/Heading';
import About from '../../src/components/commonSection/About';
import Education from '../../src/components/commonSection/Education';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Contact from '../../src/components/commonSection/Contact';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import ChangeTempBtn from '../../src/components/changeTempbtn/ChangeTempBtn';
import PDFGenerater from "../../src/components/tempNav/PDFGenerater";
const FashionTemp4 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  // PDF Download Hook

  const { downloadPDFHandler, pdfRef } = PDFGenerater();
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  return (
    <div style={{ overflow: 'auto' }}>
      <TempLayout work={true} education={true} downloadPDF={downloadPDFHandler}>
        <ChangeTempBtn />
        <Flex
          justifyContent={{ base: 'none', md: 'center' }}
          flexDir={'column'}
          alignItems={{ base: 'none', lg: 'center' }}
        >
          <Box
            mb={10}
            mt={'100px'}
            ml={{ base: 20, lg: 0 }}
            mr={5}
          >
            <Box
              minW={830}
              maxW={830}
              h={'full'}
              borderRadius={6}
              bg={backgroundColor}
              pl={'90px'}
              pr={'70px'}
              pt={8}
              pb={20}
              borderColor={'#00000023'}
              ref={pdfRef}
            >
              <HStack>
                <ImageSelector
                  minWidth={150}
                  maxWidth={150}
                  minHeight={150}
                  maxHeight={150}
                />
                <Name
                  FName={true}
                  SName={true}
                  color={color}
                  FNameStyle={Classes.fashionName}
                  SNameStyle={Classes.fashionName}
                  parentContainerStyle={Classes.ml}
                />
              </HStack>
              <HStack mt={10} alignItems="flex-start">
                <Heading
                  title={'ABOUT ME'}
                  line={true}
                  lineW={'100px'}
                  lineBg={color}
                  letterSpacing={3}
                  fontSize={23}
                  color={color}
                  fontWeight={'600'}
                  lineAlign="flex-end"
                  minW={'fit-content'}
                  maxW="fit-content"
                  margin={'0px 40px 0px 40px '}
                />
                <About
                  minW="420px"
                  color={color}
                  maxW="420px"
                  aboutStyle={Classes.aboutText}
                  margin={'40px'}
                />
              </HStack>
              {resumeData?.education?.visible && (
                <HStack mt={10} alignItems="flex-start">
                  <Box w="20px">
                    {show.education && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, education: false })}
                        onDelete={EDUCATION}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    )}
                  </Box>
                  <Heading
                    title={'EDUCATION'}
                    line={true}
                    lineW={'100px'}
                    lineBg={color}
                    letterSpacing={3}
                    fontSize={23}
                    color={color}
                    fontWeight={'600'}
                    lineAlign="flex-end"
                    minW={'fit-content'}
                    maxW="fit-content"
                    margin={'0px 40px 0px 0px '}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                  />

                  <Education
                    textColor={color}
                    degree={true}
                    institution={true}
                    date={true}
                    summary={true}
                    degreeStyle={Classes.programText}
                    institutionStyle={Classes.institute}
                    degree_placeholder="Study Program"
                    summary_placeholder="Summary"
                    dateStyle={Classes.eduText}
                    summaryStyle={Classes.eduText}
                    parentContainerStyle={Classes.ml}
                  />
                </HStack>
              )}
              {resumeData?.work?.visible && (
                <HStack alignItems={'flex-start'} mt={10}>
                  <Box w="20px">
                    {show.work && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, work: false })}
                        onDelete={WORK}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    )}
                  </Box>
                  <Heading
                    title={'EXPERIENCE'}
                    line={true}
                    lineW={'100px'}
                    lineBg={color}
                    letterSpacing={3}
                    fontSize={23}
                    color={color}
                    fontWeight={'600'}
                    lineAlign="flex-end"
                    minW={'fit-content'}
                    maxW="fit-content"
                    onSideSectionShow={() => setShow({ ...show, work: true })}
                  />
                  <WorkExperience
                    position={true}
                    textColor={color}
                    company={true}
                    date={true}
                    summary={true}
                    summary_placeholder="Summary"
                    positionStyle={Classes.programText}
                    companyStyle={Classes.institute}
                    dateStyle={Classes.eduText}
                    summaryStyle={Classes.eduText}
                    parentContainerStyle={Classes.ml}
                  />
                </HStack>
              )}
              <HStack alignItems={'flex-start'} mt={10}>
                <Heading
                  title={'CONTACT'}
                  line={true}
                  lineW={'100px'}
                  lineBg={color}
                  letterSpacing={3}
                  fontSize={23}
                  color={color}
                  fontWeight={'600'}
                  lineAlign="flex-end"
                  minW={'fit-content'}
                  maxW="fit-content"
                  margin={'0px 40px 0px 60px '}
                />
                <Contact
                  color={color}
                  location={true}
                  email={true}
                  website={true}
                  phone={true}
                  iconSize={'16px'}
                  iconColor={color}
                  circleIcon={true}
                  style={Classes.contact}
                />
              </HStack>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};

export default FashionTemp4;
