import { Box, Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
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
import ImageSelector from '../../src/components/imageSelector';
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
              <ImageSelector
                minWidth={'240px'}
                maxWidth={'240px'}
                minHeight={'240px'}
                maxHeight={'240px'}
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
              &nbsp;
              {/* _____________ Skill _____________ */}
              {resumeData?.skills?.visible && (
                <>
                  <div className={Classes.sideMenu}>
                    <div
                      className={Classes.sideMenuBox}
                      style={{ marginTop: '5px' }}
                    >
                      {show.skills && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, skills: false })}
                          bg="#E0EFFA"
                          iconColor={'#2A78AB'}
                          onDelete={SKILL}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        title={'RELEVANT SKILLS'}
                        color="#fff"
                        margin={'0px 0px 0px 0px'}
                        onSideSectionShow={() =>
                          setShow({ ...show, skills: true })
                        }
                      />
                      <Skill skillStyle={Classes.skillText} />
                    </div>
                  </div>
                </>
              )}
            </Box>
            {/* =============== Second Section ============== */}
            <Box
              w="60%"
              bg="white"
              h="auto"
              minW="510px"
              pl={'40px'}
              borderRightRadius={6}
              py="20px"
            >
              {resumeData?.work?.visible && (
                <>
                  <div className={Classes.sideMenu}>
                    <div
                      className={Classes.sideMenuBox}
                      style={{ marginTop: '15px' }}
                    >
                      {show.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          bg="#2A78AB"
                          iconColor={'#E0EFFA'}
                          onDelete={WORK}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        minW={'476px'}
                        maxW={'476px'}
                        headBg={'#E0EFFA'}
                        title="WORK EXPERIENCE"
                        margin={'20px 0px 0px 0px'}
                        padding={'0px 0px 0px 20px'}
                        height={50}
                        fontSize={17}
                        fontWeight={700}
                        onSideSectionShow={() =>
                          setShow({ ...show, work: true })
                        }
                      />
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
                    </div>
                  </div>
                </>
              )}
              {/* _____________ Education _____________ */}
              {resumeData?.education?.visible && (
                <>
                  <div className={Classes.sideMenu}>
                    <div
                      className={Classes.sideMenuBox}
                      style={{ marginTop: '15px' }}
                    >
                      {show.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          bg="#2A78AB"
                          iconColor={'#E0EFFA'}
                          onDelete={EDUCATION}
                        />
                      )}
                    </div>
                    <div>
                      <Heading
                        minW={'476px'}
                        maxW={'476px'}
                        headBg={'#E0EFFA'}
                        title="EDUCATION HISTORY"
                        margin={'20px 0px 0px 0px'}
                        padding={'0px 0px 0px 20px'}
                        height={50}
                        fontSize={17}
                        fontWeight={700}
                        onSideSectionShow={() =>
                          setShow({ ...show, education: true })
                        }
                      />
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
                    </div>
                  </div>
                </>
              )}
              {/* _____________ Certification _____________ */}
              {resumeData?.certifications?.visible && (
                <>
                  <div className={Classes.sideMenu}>
                    <div
                      className={Classes.sideMenuBox}
                      style={{ marginTop: '15px' }}
                    >
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
                    </div>
                    <div>
                      <Heading
                        minW={'476px'}
                        maxW={'476px'}
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
                    </div>
                  </div>
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
