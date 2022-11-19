import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import style from '../../styles/templates/template1.module.scss';
import ImageSection from '../../src/components/commonSection/ImageSection';
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
const FashionTemp4 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  return (
    <TempLayout work={true} education={true}>
      <div className={style.main}>
        <Link href={'/templates'}>
          <div className={style.swapCont}>
            <Tooltip title="Change Template" arrow distance={20}>
              <div className={style.swap}>
                <img src="/icons/swap.png" />
              </div>
            </Tooltip>
          </div>
        </Link>
        <Flex
          justifyContent={{ base: 'none', md: 'center' }}
          bg={{ md: 'none', lg: 'blackAlpha.100' }}
          overflow="auto"
          flexDir={'column'}
          alignItems={{ sm: 'none', md: 'center' }}
        >
          <Box
            minW={830}
            maxW={830}
            h={'full'}
            borderRadius={6}
            bg={'#F9E4D6'}
            mb={10}
            mt={'100px'}
            pl={'90px'}
            pr={'70px'}
            pt={8}
            pb={20}
            mx={5}
          >
            <HStack>
              <ImageSection borderColor="none" borderWidth="none" />
              <Name
                FName={true}
                SName={true}
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
                lineBg="#643c28"
                letterSpacing={3}
                fontSize={23}
                color="#643c28"
                fontWeight={'600'}
                lineAlign="flex-end"
                minW={'fit-content'}
                maxW="fit-content"
                margin={'0px 40px 0px 40px '}
              />
              <About
                minW="420px"
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
                      bg="#643c28"
                    />
                  )}
                </Box>
                <Heading
                  title={'EDUCATION'}
                  line={true}
                  lineW={'100px'}
                  lineBg="#643c28"
                  letterSpacing={3}
                  fontSize={23}
                  color="#643c28"
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
                      bg="#643c28"
                    />
                  )}
                </Box>
                <Heading
                  title={'EXPERIENCE'}
                  line={true}
                  lineW={'100px'}
                  lineBg="#643c28"
                  letterSpacing={3}
                  fontSize={23}
                  color="#643c28"
                  fontWeight={'600'}
                  lineAlign="flex-end"
                  minW={'fit-content'}
                  maxW="fit-content"
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                />
                <WorkExperience
                  position={true}
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
                lineBg="#643c28"
                letterSpacing={3}
                fontSize={23}
                color="#643c28"
                fontWeight={'600'}
                lineAlign="flex-end"
                minW={'fit-content'}
                maxW="fit-content"
                margin={'0px 40px 0px 60px '}
              />
              <Contact
                location={true}
                email={true}
                website={true}
                phone={true}
                iconSize={'16px'}
                iconColor="#643c28"
                circleIcon={true}
                style={Classes.contact}
              />
            </HStack>
          </Box>
        </Flex>
      </div>
    </TempLayout>
  );
};

export default FashionTemp4;
