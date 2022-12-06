import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../src/components/commonSection/Name';
import style from '../../styles/templates/template1.module.scss';
import styles from "../../styles/graphicDesignerTemp.module.css";
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';
import Heading from '../../src/components/commonSection/Heading';
import Skill from '../../src/components/commonSection/Skill';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Education from '../../src/components/commonSection/Education';
import Interest from '../../src/components/commonSection/Interest';
import TempLayout from '../../src/components/tempNav/TempLayout';
import { useSelector } from 'react-redux';
import useShow from '../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../src/components/tempSectionSide/SectionSideMenu';
import About from '../../src/components/commonSection/About';
import {
  EDUCATION,
  SKILL,
  WORK,
  INTEREST
} from '../../src/components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../../src/components/imageSelector';
import Underline from "../../src/components/graphicDesignerTemp/Underline";

export default function Graphic_Design_Temp() {
  // redux Data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    <>
      <TempLayout work={true} education={true} skills={true} interest={true}>
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
          bg={{ md: 'none', lg: '#fff' }}
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
              w="100%"
              bgColor="#F4F5F7"
              borderLeftRadius={6}
              py={2}
              px={8}
              position={'relative'}
            >
              {/* _____________ Profile _____________ */}
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Name
                  FName={true}
                  SName={true}
                  direction="row"
                  FNameStyle={styles.nameStyle}
                  SNameStyle={styles.nameStyle}
                />
                <Profession
                  professionStyle={styles.profileSubTitle}
                />
              </Box>
              {/* _____________ Image _____________ */}
              <Box
                border={'3px solid #3D3D3D'}
                display={'flex'}
                justifyContent={'space-between'}
                width={'100%'}
                margin={'50px 0px 30px 0px'}
              >
                {/* left container */}
                <Box
                  display={'flex'}
                  justifyContent={'flex-end'}
                  margin={'25px 0px'}
                  width={'34%'}
                >
                  <Contact
                    phone={true}
                    email={true}
                    circleIcon={true}
                    circleBg="#947F57"
                    circleSize="35px"
                    iconColor="#fff"
                    margin={'12px 0px 0px 0px'}
                    parentStyle={styles.contactFont}
                  />
                </Box>
                {/* center container */}
                <Box
                  width={'26%'}
                >
                  {/* avatar */}
                  <Box
                    position={'absolute'}
                    top={'19%'}
                  >
                    <ImageSelector
                      minWidth="200px"
                      maxWidth="200px"
                      maxHeight="200px"
                      minHeight="200px"
                    />
                  </Box>
                </Box>
                {/* right container */}
                <Box
                  display={'flex'}
                  justifyContent={'flex-start'}
                  margin={'25px 0px'}
                  width={'34%'}
                >
                  <Contact
                    linkedinURL={true}
                    website={true}
                    circleIcon={true}
                    circleBg="#947F57"
                    circleSize="35px"
                    iconColor="#fff"
                    margin={'12px 0px 0px 0px'}
                    parentStyle={styles.contactFont}
                  />
                </Box>
              </Box>
              {/* _____________ About me _____________ */}
              <Box
                paddingTop={'20px'}
              >
                <Underline
                  width='100%'
                  bgColor='#947F57'
                />
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                >
                  <Heading
                    title={'PROFILE'}
                    color="#947F57"
                    padding={'0px 0px 0px 86px'}
                  />
                </Box>
                <Underline
                  width='100%'
                  bgColor='#947F57'
                />
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                >
                  <About
                    minW="40%"
                    maxW="40%"
                    aboutStyle={Classes.aboutText}
                    textColor="#947F57"
                    fontSize="16px"
                    fontWeight={600}
                  />
                </Box>
              </Box>
              {/* _____________ main container _____________ */}
              <Box
                marginTop={'30px'}
                width={'100%'}
                display={'flex'}
              >
                {/* left container */}
                <Box
                  width={'40%'}
                  borderRight={'2px solid #947F57'}
                  padding={'0px 40px 0px 0px'}
                >
                  {/* expertise section */}
                  {resumeData?.hobbies?.visible && (
                    <>
                      <Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                        <Box
                          display={'flex'}
                        >
                          <Heading
                            title="INTEREST"
                            color="#947F57"
                            fontSize={'20px'}
                            fontWeight={600}
                            onSideSectionShow={() =>
                              setShow({ ...show, interest: true })
                            }
                          />
                          {show.interest && (
                            <SectionSideMenu
                              bg="#947F57"
                              iconColor={'#fff'}
                              onHide={() => setShow({ ...show, interest: false })}
                              onDelete={INTEREST}
                            />
                          )}
                        </Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                      </Box>
                      {/* Interest Component  */}
                      <Interest
                        interestStyle={styles.contactFont}
                        parentContainerStyle={styles.parentDiv}
                      />
                    </>
                  )}
                  {/* skill */}
                  {resumeData?.skills?.visible && (
                    <>
                      <Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                        <Box
                          display={'flex'}
                        >
                          <Heading
                            title={'RELEVANT SKILLS'}
                            color="#947F57"
                            fontSize={'20px'}
                            fontWeight={600}
                            onSideSectionShow={() =>
                              setShow({ ...show, skills: true })
                            }
                          />
                          {show.skills && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, skills: false })}
                              bg="#947F57"
                              iconColor={'#fff'}
                              onDelete={SKILL}
                            />
                          )}
                        </Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                      </Box>
                      {/* skill component */}
                      <Skill
                        skillStyle={styles.contactFont}
                        progressBar={true}
                        strokeWidth="2"
                        lineStyle={styles.line}
                        strokeColor="#947F57"
                        trailColor="#fff"
                        percentageStyle={styles.percent}
                        parentContainerStyle={styles.parentDiv}
                      />
                    </>
                  )}
                </Box>

                {/* right container */}
                <Box
                  width={'60%'}
                  padding={'0px 0px 0px 40px'}
                >
                  {/* work experience */}
                  {resumeData?.work?.visible && (
                    <>
                      <Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                        >
                          <Heading
                            color={'#947F57'}
                            title="WORK EXPERIENCE"
                            fontSize={'20px'}
                            fontWeight={600}
                            onSideSectionShow={() => setShow({ ...show, work: true })}
                          />
                          {show.work && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, work: false })}
                              bg="#947F57"
                              iconColor={'#fff'}
                              onDelete={WORK}
                            />
                          )}
                        </Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                      </Box>
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
                        parentContainerStyle={styles.parentDiv}
                        textColor="#947F57"
                        direction='row'
                      />
                    </>
                  )}
                  {/* education */}
                  {resumeData?.education?.visible && (
                    <>
                      <Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                        >
                          <Heading
                            color={'#947F57'}
                            title="EDUCATION"
                            fontSize={'20px'}
                            fontWeight={600}
                            onSideSectionShow={() =>
                              setShow({ ...show, education: true })
                            }
                          />
                          {show.education && (
                            <SectionSideMenu
                              onHide={() => setShow({ ...show, education: false })}
                              bg="#947F57"
                              iconColor={'#fff'}
                              onDelete={EDUCATION}
                            />
                          )}
                        </Box>
                        <Underline
                          width='100%'
                          bgColor='#947F57'
                        />
                      </Box>
                      <Education
                        degree={true}
                        institution={true}
                        date={true}
                        summary={true}
                        parentContainerStyle={styles.parentDiv}
                        institutionStyle={Classes.company}
                        degreeStyle={Classes.programText}
                        dateStyle={Classes.date}
                        summaryStyle={Classes.description}
                        degree_placeholder="Study Program"
                        textColor="#947F57"
                        direction='row'
                      />
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </>
  )
}