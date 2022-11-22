import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../../src/components/commonSection/Name';
import style from '../../../styles/templates/template1.module.scss';
import styles from '../../../styles/digitalMarketingTemp.module.css';
import Classes from '../../../styles/templates/flightAttendant.module.css';
import Profession from '../../../src/components/commonSection/Profession';
import Contact from '../../../src/components/commonSection/Contact';
import Heading from '../../../src/components/commonSection/Heading';
import Skill from '../../../src/components/commonSection/Skill';
import WorkExperience from '../../../src/components/commonSection/WorkExperience';
import Education from '../../../src/components/commonSection/Education';
import TempLayout from '../../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../../src/components/commonSection/About';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../../src/components/imageSelector';

export default function Digital_Marketing_Temp() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    <>
      <TempLayout work={true} education={true} skills={true}>
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
          overflow="auto"
          flexDir={'column'}
          alignItems={{ sm: 'none', md: 'center' }}
          bg={{ md: 'none', lg: 'blackAlpha.100' }}
          className={`${Classes.main}`}
        >
          <Box
            display="flex"
            flexDir="row"
            w="100%"
            minW="850px"
            maxW="850px"
            mb={'20px'}
            mx={'20px'}
            mt="100px"
          >
            {/* =============== First Section ============== */}
            <Box
              w="40%"
              pb="10%"
              minW={'340px'}
              bgColor="#3A4D6C"
              borderLeftRadius={6}
              pr={3}
              pl={12}
              py={8}
            >
              {/* _____________ Profile _____________ */}
              <ImageSelector
                minWidth="240px"
                maxWidth="240px"
                maxHeight="240px"
                minHeight="240px"
                marginTop="30px"
              />
              <Heading
                title={'CONTACT PERSON'}
                color="#fff"
                margin={'20px 0px 0px 0px'}
              />
              <Contact
                phone={true}
                email={true}
                linkedinURL={true}
                website={true}
                circleIcon={true}
                circleBg="#fff"
                circleSize="25px"
                iconColor="#3A4D6C"
                margin={'10px 0px 0px 0px'}
                style={Classes.profileText}
              />

              {/* _____________ About me _____________ */}
              <Heading
                title={'ABOUT ME'}
                color="#fff"
                margin={'20px 0px 0px 0px'}
              />
              <About
                minW="100%"
                maxW="100%"
                aboutStyle={Classes.aboutText}
                textColor="#fff"
              />

              {/* _____________ Skill _____________ */}
              {resumeData?.skills?.visible && (
                <>
                  <HStack alignItems={'flex-start'} mt={5}>
                    <Box w="20px" ml={'-27px'}>
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          bg="#E0EFFA"
                          iconColor={'#2A78AB'}
                          onDelete={SKILL}
                        />
                      )}
                    </Box>

                    <Heading
                      title={'RELEVANT SKILLS'}
                      color="#fff"
                      margin={'20px 0px 0px 0px'}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                    />
                  </HStack>
                  <Skill
                    skillStyle={Classes.skillText}
                    progressBar={true}
                    strokeWidth="2"
                    lineStyle={styles.line}
                    strokeColor="#F2DB7A"
                    trailColor="#fff"
                    percentageStyle={styles.percent}
                    parentContainerStyle={Classes.ml}
                  />
                </>
              )}
            </Box>
            {/* =============== Second Section ============== */}
            <Box
              w="60%"
              bg="#fff"
              h="auto"
              minW="510px"
              borderRightRadius={6}
            >
              <Box
                width={'100%'}
                backgroundColor={'#F2DB7A'}
                padding={'20px 0px 20px 0px'}
                marginTop={'15%'}
                display={'flex'}
                alignItems={'center'}
                flexDir={'column'}
              >
                <Name
                  FName={true}
                  SName={true}
                  direction="column"
                  FNameStyle={styles.nameStyle}
                  SNameStyle={styles.nameStyle}
                />
                <Profession
                  professionStyle={styles.profileSubTitle}
                />
              </Box>
              {resumeData?.work?.visible && (
                <>
                  <HStack alignItems={'flex-start'} mt={'20px'}>
                    <Box w="20px" ml={'-27px'}>
                      {show.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          bg="#2A78AB"
                          iconColor={'#E0EFFA'}
                          onDelete={WORK}
                        />
                      )}
                    </Box>

                    <Heading
                      minW={'480px'}
                      maxW={'480px'}
                      color={'#3A4D6C'}
                      title="WORK EXPERIENCE"
                      padding={'0px 0px 0px 20px'}
                      fontSize={'22px'}
                      fontWeight={700}
                      onSideSectionShow={() => setShow({ ...show, work: true })}
                    />
                  </HStack>
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
                    parentContainerStyle={styles.rightContainerWork}
                    textColor="#3A4D6C"
                  />
                </>
              )}
              {/* _____________ Education _____________ */}
              {resumeData?.education?.visible && (
                <>
                  <HStack alignItems={'flex-start'} mt={'20px'}>
                    <Box w="20px" ml={'-27px'}>
                      {show.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          bg="#2A78AB"
                          iconColor={'#E0EFFA'}
                          onDelete={EDUCATION}
                        />
                      )}
                    </Box>
                    <Heading
                      minW={'480px'}
                      maxW={'480px'}
                      color={'#3A4D6C'}
                      title="EDUCATION"
                      padding={'0px 0px 0px 20px'}
                      fontSize={'22px'}
                      fontWeight={700}
                      onSideSectionShow={() =>
                        setShow({ ...show, education: true })
                      }
                    />
                  </HStack>
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
                    textColor="#3A4D6C"
                  />
                </>
              )}

              <Box
                height={'50px'}
                width={'100%'}
                backgroundColor={'#F2DB7A'}
                marginTop={'10px'}
              >
                {/* footer container */}
              </Box>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </>
  )
}