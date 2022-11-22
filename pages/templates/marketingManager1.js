import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import style from '../../styles/templates/template1.module.scss';
import Name from '../../src/components/commonSection/Name';
import Classes from '../../styles/templates/marketingManager1.module.css';
import ImageSelector from '../../src/components/imageSelector';
import Profession from '../../src/components/commonSection/Profession';
import Heading from '../../src/components/commonSection/Heading';
import WorkExperience from '../../src/components/commonSection/WorkExperience';
import Contact from '../../src/components/commonSection/Contact';
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
const MarketingManager1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  // custom Hook For Template
  const [show, setShow] = useShow();
  const MainHeading = ({
    title,
    weight,
    line1bBg,
    line2Bg,
    txtColor,
    onCl,
    w,
  }) => (
    <>
      <Heading
        fontSize={23}
        title={title}
        letterSpacing={1}
        fontWeight={weight}
        color={txtColor}
        onSideSectionShow={onCl}
        minW={w}
      />
      <div
        style={{
          height: '3px',
          width: 'full',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: line1bBg,
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            height: '5px',
            width: '40%',

            backgroundColor: line2Bg,
          }}
        ></div>
      </div>
    </>
  );
  return (
    // ==========Marketing Manager Template 1 ===========
    <div className={style.main}>
      <TempLayout education={true} work={true} skills={true}>
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
          overflow="auto"
          flexDir={'column'}
          alignItems={{ sm: 'none', md: 'center' }}
        >
          <Box
            minW={830}
            maxW={830}
            borderRadius={6}
            bg={'#01012a'}
            my={10}
            mt={'100px'}
            mx={5}
            pr={'30px'}
            borderWidth="1px"
            borderColor={'black'}
          >
            {/* ============== Profile Section ============== */}
            <div style={{ display: 'flex', marginLeft: '3pc' }}>
              <Box
                h={260}
                w={'205px'}
                bg={'white'}
                borderBottomRadius={'8%'}
                display="flex"
                alignItems={'flex-end'}
                justifyContent="center"
                pb={2}
                mr={5}
                px="10px"
              >
                <ImageSelector
                  minWidth={'180px'}
                  maxWidth="180px"
                  minHeight={'180px'}
                  maxHeight="180px"
                  borderRadius={'18%'}
                />
              </Box>
              <Box display={'flex'} justifyContent="center" w="full" mt={20}>
                <Box display={'flex'} flexDir="column" alignItems={'center'}>
                  <Name
                    FName={true}
                    SName={true}
                    direction="row"
                    FNameStyle={Classes.name}
                    SNameStyle={Classes.name}
                  />
                  <Box h={'2px'} bg="white" width={'full'}></Box>
                  <Profession professionStyle={Classes.profession} />
                </Box>
              </Box>
            </div>
            <Box display={'flex'} alignItems={'stretch'} mt={10}>
              {/* ============== Work Experience Section ============== */}

              <Box
                minW={'460'}
                maxW="460"
                bg={'white'}
                py={'40px'}
                pr={'30px'}
                borderBottomLeftRadius={5}
                borderTopRightRadius={'50px'}
              >
                {resumeData?.work?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          onDelete={WORK}
                          bg="#01012a"
                        />
                      )}
                    </div>
                    <div>
                      <MainHeading
                        line1bBg={'black'}
                        line2Bg="black"
                        title="EXPERIENCE"
                        weight={700}
                        txtColor="#26272c"
                        onCl={() => setShow({ ...show, work: true })}
                        w="400px"
                      />
                      <WorkExperience
                        company={true}
                        position={true}
                        summary={true}
                        companyStyle={Classes.company}
                        positionStyle={Classes.position}
                        summaryStyle={Classes.description}
                        margin={'5px 0px'}
                      />
                    </div>
                  </div>
                )}
              </Box>
              <Box minW={'300px'} maxW="300px" pr="20px" py={'20px'}>
                {/* ============== Contact Section ============== */}
                <div style={{ marginLeft: '28px' }}>
                  <MainHeading
                    line1bBg={'#fff'}
                    line2Bg="#273746"
                    title="CONTACT"
                    weight={600}
                    txtColor="#fff"
                  />
                  <Contact
                    email={true}
                    phone={true}
                    website={true}
                    circleIcon={true}
                    circleBg="white"
                    circleSize="25px"
                    style={Classes.profileText}
                    margin={'7px 0px'}
                  />
                </div>
                {/* ============== Education Section ============== */}
                {resumeData?.education?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          onDelete={EDUCATION}
                          bg="#fff"
                          iconColor={'#01012a'}
                        />
                      )}
                    </div>
                    <div>
                      <MainHeading
                        line1bBg={'#fff'}
                        line2Bg="#273746"
                        title="EDUCATION"
                        weight={600}
                        txtColor="#fff"
                        onCl={() => setShow({ ...show, education: true })}
                      />
                      <Education
                        degree={true}
                        institution={true}
                        date={true}
                        degreeStyle={Classes.institute}
                        institutionStyle={Classes.institute}
                        dateStyle={Classes.date}
                        degree_placeholder="Study Program"
                        margin="5px 0px"
                      />
                    </div>
                  </div>
                )}

                {/* ============== Expertise or Skill Section ============== */}
                {resumeData?.skills?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          onDelete={SKILL}
                          bg="#fff"
                          iconColor={'#01012a'}
                        />
                      )}
                    </div>
                    <div>
                      <MainHeading
                        line1bBg={'#fff'}
                        line2Bg="#273746"
                        title="EXPERTISE"
                        weight={600}
                        txtColor="#fff"
                        onCl={() => setShow({ ...show, skills: true })}
                      />
                      <Skill skillStyle={Classes.date} margin="5px 0px" />
                    </div>
                  </div>
                )}
              </Box>
              {/* ============== Right Border Section ============== */}
              <Box
                minW={'58px'}
                maxW="58px"
                bg={'white'}
                ml={'10px'}
                borderTopLeftRadius="50px"
                borderBottomRightRadius={5}
              ></Box>
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default MarketingManager1;
