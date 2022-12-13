import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tippy';
import Name from '../../../src/components/commonSection/Name';
import style from '../../../styles/templates/template1.module.scss';
import styles from '../../../styles/fashionTemp.module.css';
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
import { MdCastForEducation } from 'react-icons/md';
import { FaSignLanguage, FaRegUser } from "react-icons/fa";
import Name from '../../../src/components/commonSection/Name';
import Profession from '../../../src/components/commonSection/Profession';
import About from '../../../src/components/commonSection/About';
import Contact from '../../../src/components/commonSection/Contact';
import useShow from '../../../src/components/tempSectionSide/useShow';
import SectionSideMenu from '../../../src/components/tempSectionSide/SectionSideMenu';
import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
} from '../../../src/components/tempSectionSide/SectionSideConstant';
import TempLayout from '../../../src/components/tempNav/TempLayout';
import useStoreData from "../../../src/components/useStoreData";
import Education from '../../../src/components/commonSection/Education';
import Heading from '../../../src/components/commonSection/Heading';
import Skill from "../../../src/components/commonSection/Skill";
import WorkExperience from '../../../src/components/commonSection/WorkExperience';
import ChangeTempBtn from '../../../src/components/changeTempbtn/ChangeTempBtn';
import ImageSelector from '../../../src/components/imageSelector';

export default function Fashion_Temp() {
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
              bgColor="#FDC726"
              borderLeftRadius={6}
              pr={3}
              pl={12}
              py={8}
            >
              {/* _____________ Profile _____________ */}
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

              {/* _____________ Image _____________ */}
              <ImageSelector
                minWidth="240px"
                maxWidth="240px"
                maxHeight="240px"
                minHeight="240px"
                marginTop="30px"
                marginBottom="30px"
              />

              {/* _____________ About me _____________ */}
              <Heading
                title={'ABOUT ME'}
                color="#000000"
                circleSize="38px"
                circleBg="#000000"
                circleIconHeading={true}
                icon={(props) => (
                  <FaRegUser
                    {...props}
                    size={18}
                    color={'#FDC726'}
                  />
                )}
              />
              <About
                minW="100%"
                maxW="100%"
                aboutStyle={Classes.aboutText}
                textColor="#000000"
                fontSize="14px"
                fontWeight={600}
              />
              {/* _____________ Skill _____________ */}
              {resumeData?.skills?.visible && (
                <>
                  <Box
                    mt={5}
                    display={'flex'}
                  >
                    <Heading
                      title={'RELEVANT SKILLS'}
                      color="#000000"
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                      circleSize="38px"
                      circleBg="#000000"
                      circleIconHeading={true}
                      icon={(props) => (
                        <FaSignLanguage
                          {...props}
                          size={18}
                          color={'#FDC726'}
                        />
                      )}
                    />
                    {show.skills && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, skills: false })}
                        bg="#000000"
                        iconColor={'#FDC726'}
                        onDelete={SKILL}
                      />
                    )}
                  </Box>
                  <Skill
                    skillStyle={styles.skillText}
                    progressBar={true}
                    strokeWidth="2"
                    lineStyle={styles.line}
                    strokeColor="#000000"
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
              bg="#0F0F0F"
              h="auto"
              minW="510px"
              borderRightRadius={6}
            >
              {/* _____________ Contact Us _____________ */}
              <Heading
                title={'CONTACTS'}
                color="#fff"
                padding={'70px 0px 20px 25px'}
                circleSize="38px"
                circleBg="#FDC726"
                circleIconHeading={true}
                icon={(props) => (
                  <FaRegUser
                    {...props}
                    size={18}
                    color={'#000000'}
                  />
                )}
              />
              <Contact
                phone={true}
                email={true}
                linkedinURL={true}
                website={true}
                circleIcon={true}
                circleBg="#FDC726"
                circleSize="25px"
                iconColor="#000000"
                margin={'5px 0px 0px 0px'}
                parentStyle={styles.rightContainerWork}
                style={Classes.profileText}
              />
              {/* _____________ Work _____________ */}
              {resumeData?.work?.visible && (
                <>
                  <Box
                    mt={'20px'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    mx={'26px'}
                  >
                    <Heading
                      color={'#fff'}
                      title="WORK EXPERIENCE"
                      fontSize={'22px'}
                      fontWeight={700}
                      circleSize="38px"
                      circleBg="#FDC726"
                      circleIconHeading={true}
                      icon={(props) => (
                        <MdCastForEducation
                          {...props}
                          size={18}
                          color={'#000000'}
                        />
                      )}
                      onSideSectionShow={() => setShow({ ...show, work: true })}
                    />
                    {show.work && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, work: false })}
                        bg="#FDC726"
                        iconColor={'#000000'}
                        onDelete={WORK}
                      />
                    )}
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
                    parentContainerStyle={styles.workDiv}
                    textColor="#fff"
                  />
                </>
              )}
              {/* _____________ Education _____________ */}
              {resumeData?.education?.visible && (
                <>
                  <Box
                    mt={'20px'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    mx={'26px'}
                  >
                    <Heading
                      color={'#fff'}
                      title="EDUCATION"
                      fontSize={'22px'}
                      fontWeight={700}
                      circleSize="38px"
                      circleBg="#FDC726"
                      circleIconHeading={true}
                      icon={(props) => (
                        <MdCastForEducation
                          {...props}
                          size={18}
                          color={'#000000'}
                        />
                      )}
                      onSideSectionShow={() =>
                        setShow({ ...show, education: true })
                      }
                    />
                    {show.education && (
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, education: false })}
                        bg="#FDC726"
                        iconColor={'#000000'}
                        onDelete={EDUCATION}
                      />
                    )}
                  </Box>
                  <Education
                    degree={true}
                    institution={true}
                    date={true}
                    summary={true}
                    parentContainerStyle={styles.workDiv}
                    institutionStyle={Classes.company}
                    degreeStyle={Classes.programText}
                    dateStyle={Classes.date}
                    summaryStyle={Classes.description}
                    degree_placeholder="Study Program"
                    textColor="#fff"
                  />
                </>
              )}
            </Box>
          </Box>
        </Flex>
      </TempLayout>
    </>
  )
}