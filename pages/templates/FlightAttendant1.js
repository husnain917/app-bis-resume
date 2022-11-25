import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import ImageSection from '../../src/components/commonSection/ImageSection';
import Name from '../../src/components/commonSection/Name';
import style from '../../styles/templates/template1.module.scss';
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
const FlightAttendant1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();
  return (
    <div className={`${style.main} `}>
      <TempLayout work={true} education={true} certificate={true} skills={true}>
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
            mb={'50px'}
            mx={'20px'}
            mt="100px"
          >
            {/* =============== First Section ============== */}
            <Box
              w="40%"
              pb="10%"
              minW={'340px'}
              bgColor="#2A78AB"
              borderLeftRadius={6}
              pr={3}
              pl={12}
              py={8}
            >
              {/* _____________ Profile _____________ */}
              <ImageSection
                minW="240px"
                maxW="240px"
                maxH="240px"
                minH="240px"
                borderColor="none"
                borderWidth="none"
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
                circleBg="#fff"
                circleSize="25px"
                iconColor="#2A78AB"
                margin={'10px 0px 0px 0px'}
                style={Classes.profileText}
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
                  <Skill skillStyle={Classes.skillText} />
                </>
              )}
            </Box>
            {/* =============== Second Section ============== */}
            <Box
              w="60%"
              bg="white"
              h="auto"
              minW="510px"
              pl={'30px'}
              borderRightRadius={6}
              py="20px"
            >
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
                      headBg={'#E0EFFA'}
                      title="WORK EXPERIENCE"
                      padding={'0px 0px 0px 20px'}
                      height={50}
                      fontSize={17}
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
                    iconShow={true}
                    icon={(props) => (
                      <IoMdJet
                        {...props}
                        color="#2A78AB"
                        size={32}
                        className={Classes.mr}
                      />
                    )}
                    parentContainerStyle={Classes.mt}
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
                      headBg={'#E0EFFA'}
                      title="EDUCATION HISTORY"
                      padding={'0px 0px 0px 20px'}
                      height={50}
                      fontSize={17}
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
                    iconShow={true}
                    icon={(props) => (
                      <BsFillLayersFill
                        {...props}
                        color="#2A78AB"
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
                </>
              )}
              {/* _____________ Certification _____________ */}
              {resumeData?.certifications?.visible && (
                <>
                  <HStack alignItems={'flex-start'} mt={'20px'}>
                    <Box w="20px" ml={'-27px'}>
                      {show.certificates && (
                        <SectionSideMenu
                          onHide={() =>
                            setShow({ ...show, certificates: false })
                          }
                          bg="#2A78AB"
                          iconColor={'#E0EFFA'}
                          onDelete={CERTIFICATE}
                        />
                      )}
                    </Box>
                    <Heading
                      minW={'480px'}
                      maxW={'480px'}
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
                  </HStack>
                  <Certificate
                    certificate={true}
                    issueDate={true}
                    institute={true}
                    iconShow={true}
                    icon={(props) => (
                      <FaAward
                        {...props}
                        color="#2A78AB"
                        size={32}
                        className={Classes.mr}
                      />
                    )}
                    parentContainerStyle={Classes.mt}
                    certificateStyle={Classes.programText}
                    issueDateStyle={Classes.date}
                    instituteStyle={Classes.company}
                  />
                </>
              )}
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </div>
  );
};
export default FlightAttendant1;
