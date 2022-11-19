import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillPersonFill, BsLayersFill } from 'react-icons/bs';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdCastForEducation, MdEmail } from 'react-icons/md';
import style from '../../styles/templates/template1.module.scss';
import Link from 'next/link';
import Classes from '../../styles/templates/fashionTemp1.module.css';
import { Tooltip } from 'react-tippy';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Reference from '../../src/components/commonSection/Reference';
import About from '../../src/components/commonSection/About';
import Language from '../../src/components/commonSection/Language';
import Heading from '../../src/components/commonSection/Heading';
import Education from '../../src/components/commonSection/Education';
import Skill from '../../src/components/commonSection/Skill';
import Name from '../../src/components/commonSection/Name';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  REFERENCE,
  SKILL,
  WORK,
} from '../../src/components/tempSectionSide/SectionSideConstant';
import useShow from '../../src/components/tempSectionSide/useShow';
const FashionTemp1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Fashion Temp 1 Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    //Template Layout for Template Navbar//
    <TempLayout
      work={true}
      education={true}
      references={true}
      skills={true}
      languages={true}
    >
      <div className={style.main}>
        <Link href={'/templates'}>
          <div style={{ position: 'fixed', top: '30px', right: '30px' }}>
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
          <HStack
            minW={830}
            maxW={830}
            h={'full'}
            alignItems="flex-start"
            borderRadius={6}
            bg={'#fff'}
            mb={10}
            mt={'100px'}
            py={8}
            px={10}
          >
            <Box maxW={336} minW={336}>
              <Name
                direction="column"
                FName={true}
                SName={true}
                FNameStyle={Classes.fashionName}
                SNameStyle={Classes.fashionName}
              />
              {/* Profession Section  */}
              <Profession professionStyle={Classes.ProfessionFashion} />
              {/* Profession Heading  */}
              <Heading
                title={'ABOUT ME'}
                headBg={'#3498DB'}
                iconHeading={true}
                icon={(props) => (
                  <BsFillPersonFill {...props} size={20} color={'#fff'} />
                )}
                color={'white'}
                fontSize={20}
                fontWeight="600"
                letterSpacing={3}
                minW={250}
                maxW={250}
                textPadding={'0px 0px 1px 0px'}
                padding={'0px 0px 0px 5px'}
                margin={'10px 0px 0px 0px'}
              />
              &nbsp;
              {/* About Section */}
              <About aboutStyle={Classes.profileText} />
              {/* skill Section  */}
              {resumeData?.skills?.visible && (
                <>
                  <HStack alignItems={'flex-start'}>
                    {/* skill Heading */}
                    <Heading
                      title={'PERSONAL'}
                      headBg={'#3498DB'}
                      iconHeading={true}
                      icon={(props) => (
                        <BsFillPersonFill {...props} size={20} color={'#fff'} />
                      )}
                      color={'white'}
                      fontSize={20}
                      fontWeight="600"
                      textPadding={'0px 0px 1px 0px'}
                      padding={'0px 0px 0px 5px'}
                      letterSpacing={3}
                      minW={250}
                      maxW={250}
                      margin={'10px 0px 0px 0px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, skill: true })
                      }
                    />
                    {/* Section Side Menu */}
                    {show.skill && (
                      <>
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skill: false })}
                          onDelete={SKILL}
                        />
                      </>
                    )}
                  </HStack>
                  &nbsp;
                  {/* Skill  Components */}
                  <Skill skillStyle={Classes.personalText} />
                </>
              )}
              {/* Language Section */}
              {resumeData?.languages?.visible && (
                <>
                  <HStack alignItems={'flex-start'}>
                    {/* languages Heading */}
                    <Heading
                      title={'LANGUAGES'}
                      headBg={'#3498DB'}
                      iconHeading={true}
                      icon={(props) => (
                        <IoLanguageSharp {...props} size={20} color={'#fff'} />
                      )}
                      color={'white'}
                      fontSize={20}
                      fontWeight="600"
                      textPadding={'0px 0px 1px 0px'}
                      padding={'0px 0px 0px 5px'}
                      letterSpacing={3}
                      minW={250}
                      maxW={250}
                      margin={'10px 0px 0px 0px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, languages: true })
                      }
                    />
                    {/* Section Side Menu */}
                    {show.languages && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, languages: false })}
                        onDelete={LANGUAGES}
                      />
                    )}
                  </HStack>
                  &nbsp;
                  {/* Language Component */}
                  <Language langStyle={Classes.langText} rating={true} />
                </>
              )}
            </Box>
            <Box maxW={406} minW={406}>
              {/* Contact Section  */}
              <Contact
                location={true}
                email={true}
                website={true}
                phone={true}
                iconSize={'16px'}
                iconColor="#3498DB"
                circleIcon={true}
              />
              {/* Education Section  */}
              {resumeData?.education?.visible && (
                <>
                  <HStack alignItems={'flex-start'}>
                    {/* Heading For Education Section  */}
                    <Heading
                      title={'EDUCATION'}
                      headBg={'#3498DB'}
                      iconHeading={true}
                      icon={(props) => (
                        <MdCastForEducation
                          {...props}
                          size={20}
                          color={'#fff'}
                        />
                      )}
                      color={'white'}
                      fontSize={20}
                      fontWeight="600"
                      textPadding={'0px 0px 1px 0px'}
                      padding={'0px 0px 0px 5px'}
                      letterSpacing={3}
                      minW={400}
                      maxW={400}
                      margin={'10px 0px 0px 0px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, education: true })
                      }
                    />
                    {/* Section Side Menu */}
                    {show.education && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, education: false })}
                        onDelete={EDUCATION}
                      />
                    )}
                  </HStack>
                  &nbsp;
                  {/* Education Components */}
                  <Education
                    date={true}
                    summary={true}
                    degree={true}
                    institution={true}
                    degree_placeholder="Study Program"
                    degreeStyle={Classes.date}
                    dateStyle={Classes.date}
                    institutionStyle={Classes.date}
                    summaryStyle={Classes.profileText}
                    dateDirection="row"
                    direction="row"
                  />
                </>
              )}
              {/* Work Experience Section */}
              {resumeData?.work?.visible && (
                <>
                  <HStack alignItems={'flex-start'}>
                    {/* Work Experience Heading  */}
                    <Heading
                      title={'EXPERIENCE'}
                      margin={'10px 0px 0px 0px'}
                      headBg={'#3498DB'}
                      iconHeading={true}
                      icon={(props) => (
                        <BsLayersFill {...props} size={20} color={'#fff'} />
                      )}
                      color={'white'}
                      fontSize={20}
                      fontWeight="600"
                      textPadding={'0px 0px 1px 0px'}
                      padding={'0px 0px 0px 5px'}
                      letterSpacing={3}
                      minW={400}
                      maxW={400}
                      onSideSectionShow={() =>
                        setShow({ ...show, workExperience: true })
                      }
                    />
                    {/* Section Side Menu */}
                    {show.workExperience && (
                      <>
                        <SectionSideMenu
                          onHide={() =>
                            setShow({ ...show, workExperience: false })
                          }
                          onDelete={WORK}
                        />
                      </>
                    )}
                  </HStack>
                  &nbsp;
                  {/* Work Experience Components */}
                  <WorkExperience
                    company={true}
                    date={true}
                    position={true}
                    summary={true}
                    dateStyle={Classes.date}
                    companyStyle={Classes.date}
                    positionStyle={Classes.date}
                    summaryStyle={Classes.profileText}
                    direction="row"
                  />
                </>
              )}
              {/* Reference Section  */}
              {resumeData?.references?.visible && (
                <>
                  <HStack alignItems={'flex-start'}>
                    {/* Reference Section Heading */}
                    <Heading
                      title={'REFERENCE'}
                      headBg={'#3498DB'}
                      margin={'10px 0px 0px 0px'}
                      iconHeading={true}
                      icon={(props) => (
                        <MdEmail {...props} size={20} color={'#fff'} />
                      )}
                      color={'white'}
                      fontSize={20}
                      fontWeight="600"
                      textPadding={'0px 0px 1px 0px'}
                      padding={'0px 0px 0px 5px'}
                      letterSpacing={3}
                      minW={400}
                      maxW={400}
                      onSideSectionShow={() =>
                        setShow({ ...show, references: true })
                      }
                    />
                    {/* Section Side Menu */}
                    {show.references && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, references: false })}
                        onDelete={REFERENCE}
                      />
                    )}
                  </HStack>
                  &nbsp;
                  {/* Reference Component */}
                  <Reference
                    name={true}
                    profession={true}
                    email={true}
                    phone={true}
                    phoneStyle={Classes.profileText}
                    emailStyle={Classes.profileText}
                    professionStyle={Classes.profileText}
                    nameStyle={Classes.referenceName}
                    DndDirection="horizontal"
                  />
                </>
              )}
            </Box>
          </HStack>
        </Flex>
      </div>
    </TempLayout>
  );
};
export default FashionTemp1;
