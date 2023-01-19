import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Name from '../components/commonSection/Name';
import Classes from '../../styles/templates/flightAttendant.module.css';
import Profession from '../components/commonSection/Profession';
import Contact from '../components/commonSection/Contact';
import Heading from '../components/commonSection/Heading';
import Skill from '../components/commonSection/Skill';
import WorkExperience from '../components/commonSection/WorkExperience';
import Education from '../components/commonSection/Education';
import { useSelector } from 'react-redux';
import useShow from '../components/tempSectionSide/useShow';
import SectionSideMenu from '../components/tempSectionSide/SectionSideMenu';
import About from '../components/commonSection/About';
import {
  EDUCATION,
  SKILL,
  WORK,
} from '../components/tempSectionSide/SectionSideConstant';
import ImageSelector from '../components/imageSelector';
import styles from "../../styles/templates/Social.module.css";

export default function SocialSpecialist() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    <Flex
      justifyContent={{ base: 'none', lg: 'center' }}
      flexDir={'column'}
      alignItems={{ sm: 'none', lg: 'center' }}
      bg={'#fff'}
    >
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        minW="830px"
        maxW="830px"
        mb={'20px'}
      >
        {/* =============== First Section ============== */}
        <Box
          w="40%"
          pb="10%"
          minW={'360px'}
          bgColor={backgroundColor ? backgroundColor : '#F4F3F2'}
          borderLeftRadius={6}
          pr={3}
          pl={12}
          py={8}
          transition="0.5s background"
        >
          {/* _____________ Profile _____________ */}
          <Name
            FName={true}
            SName={true}
            direction="column"
            FNameStyle={styles.nameStyle}
            SNameStyle={styles.nameStyle}
            margin={'15% 0% 0% 0%'}
            fontColor={color ? color : '#E07559'}
          />
          <Profession
            professionStyle={styles.profileSubTitle}
            margin={'0% 0% 10% 0%'}
            fontColor={color ? color : '#000000'}
          />
          <Heading
            title={'CONTACT PERSON'}
            color={color ? color : '#E07559'}
            margin={'20px 0px 0px 0px'}
            line={true}
            lineW="100%"
            lineH="0.15em"
            lineBg={color ? color : '#000000'}
            fontWeight={700}
          />
          <Contact
            phone={true}
            email={true}
            linkedinURL={true}
            website={true}
            circleIcon={true}
            circleBg="#000000"
            circleSize="25px"
            iconColor={color ? color : '#f8f9fa'}
            margin={'10px 0px 0px 0px'}
            parentStyle={styles.contactFont}
          />

          {/* _____________ About me _____________ */}
          <Heading
            title={'ABOUT ME'}
            color={color ? color : '#E07559'}
            margin={'20px 0px 0px 0px'}
            line={true}
            lineW="100%"
            lineH="0.15em"
            lineBg={color ? color : '#000000'}
            fontWeight={700}
          />
          <About
            minW="100%"
            maxW="100%"
            aboutStyle={Classes.aboutText}
            fontColor="#000000"
            fontWeight={'600'}
          />

          {/* _____________ Skill _____________ */}
          <Box margin={'20px 0px 10px 5px'}>
            {resumeData?.skills?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.skills && (
                    <SectionSideMenu
                      onDelete={SKILL}
                      onHide={() => setShow({ ...show, skills: false })}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={'SKILLS'}
                    fontSize="20px"
                    fontWeight={700}
                    color={color ? color : '#E07559'}
                    line={true}
                    lineW="100%"
                    lineH="0.15em"
                    lineBg={color ? color : '#000000'}
                    onSideSectionShow={() =>
                      setShow({ ...show, skills: true })
                    }
                  />
                  <Skill
                    skillStyle={styles.contactFont}
                    progressBar={true}
                    strokeWidth="2"
                    lineStyle={styles.line}
                    strokeColor={color ? color : '#2A78AB'}
                    trailColor="#fff"
                    percentageStyle={styles.percent}
                    parentContainerStyle={Classes.ml}
                  />
                </div>
              </div>
            )}
          </Box>
        </Box>
        {/* =============== Second Section ============== */}
        <Box
          w="60%"
          bg={color ? color : '#F4F3F2'}
          h="auto"
          minW="470px"
          borderRightRadius={6}
          paddingBottom={'40px'}
          transition="0.5s background"
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
          >
            <ImageSelector
              minWidth="240px"
              maxWidth="240px"
              maxHeight="240px"
              minHeight="240px"
              marginTop="50px"
              borderColor={backgroundColor ? backgroundColor : '#000000'}
            />
          </Box>
          {/* Work */}
          <Box
            margin={'20px 0px 10px 50px'}
          >
            {resumeData?.work?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.work && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, work: false })}
                      onDelete={WORK}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    color={backgroundColor ? backgroundColor : '#E07559'}
                    title="WORK EXPERIENCE"
                    line={true}
                    lineW="100%"
                    lineH="0.15em"
                    lineBg={backgroundColor ? backgroundColor : '#000000'}
                    fontSize={'22px'}
                    fontWeight={700}
                    onSideSectionShow={() =>
                      setShow({ ...show, work: true })
                    }
                  />
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
                    textColor="#000000"
                  />
                </div>
              </div>
            )}
          </Box>
          {/* _____________ Education _____________ */}
          <Box
            margin={'20px 0px 10px 50px'}
          >
            {resumeData?.education?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show?.education && (
                    <SectionSideMenu
                      onHide={() =>
                        setShow({ ...show, education: false })
                      }
                      onDelete={EDUCATION}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={'EDUCATION'}
                    color={backgroundColor ? backgroundColor : '#E07559'}
                    line={true}
                    lineW="100%"
                    lineH="0.15em"
                    lineBg={backgroundColor ? backgroundColor : '#000000'}
                    fontSize={'22px'}
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
                    parentContainerStyle={styles.rightContainerWork}
                    institutionStyle={Classes.company}
                    degreeStyle={Classes.programText}
                    dateStyle={Classes.date}
                    summaryStyle={Classes.description}
                    degree_placeholder="Study Program"
                    textColor="#000000"
                  />
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
