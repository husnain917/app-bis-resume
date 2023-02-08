import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { BsFillPersonFill, BsLayersFill } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { MdCastForEducation, MdEmail } from "react-icons/md";
import Classes from "../../styles/templates/fashionTemp1.module.css";
import WorkExperience from "../components/commonSection/WorkExperience";
import Reference from "../components/commonSection/Reference";
import About from "../components/commonSection/About";
import Language from "../components/commonSection/Language";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import Skill from "../components/commonSection/Skill";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Contact from "../components/commonSection/Contact";
import { useSelector } from "react-redux";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import {
  EDUCATION,
  LANGUAGES,
  REFERENCE,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import useShow from "../components/tempSectionSide/useShow";

const FashionTemp1 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Fashion Temp 1 Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <HStack
        minW={830}
        maxW={830}
        h={"full"}
        alignItems="flex-start"
        borderRadius={6}
        bg={"#fff"}
        py={8}
        px={10}
        borderWidth="1px"
        borderColor={"#00000030"}
        mb={"20px"}
      >
        <Box maxW={336} minW={336}>
          <Name
            direction="column"
            FName={true}
            SName={true}
            FNameStyle={Classes.fashionName}
            SNameStyle={Classes.fashionName}
            maxWidth={"310px"}
            minWidth={"200px"}
            maxChr={38}
          />
          {/* Profession Section  */}
          <Profession
            professionStyle={Classes.ProfessionFashion}
            maxWidth={"300px"}
          />
          {/* Profession Heading  */}
          <Heading
            title={"ABOUT ME"}
            headBg={"#3498DB"}
            iconHeading={true}
            icon={(props) => (
              <BsFillPersonFill {...props} size={20} color={"#fff"} />
            )}
            color={"white"}
            fontSize={20}
            fontWeight="600"
            letterSpacing={3}
            minW={250}
            maxW={250}
            textPadding={"0px 0px 1px 0px"}
            padding={"0px 0px 0px 5px"}
            margin={"10px 0px 0px 0px"}
          />
          &nbsp;
          {/* About Section */}
          <About aboutStyle={Classes.profileText} minWidth={"300px"} />
          {/* skill Section  */}
          {resumeData?.skills?.visible && (
            <>
              <div className={Classes.sideMenu}>
                <div>
                  {/* skill Heading */}
                  <Heading
                    title={"PERSONAL"}
                    headBg={"#3498DB"}
                    iconHeading={true}
                    icon={(props) => (
                      <BsFillPersonFill {...props} size={20} color={"#fff"} />
                    )}
                    color={"white"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={250}
                    maxW={250}
                    margin={"10px 0px 10px 0px"}
                    onSideSectionShow={() => setShow({ ...show, skill: true })}
                  />

                  {/* Skill  Components */}
                  <Skill
                    skillStyle={Classes.personalText}
                    maxWidth={"280px"}
                    maxChr={20}
                  />
                </div>
                {/* Section Side Menu */}
                <div className={Classes.sideMenuBox}>
                  {show.skill && (
                    <>
                      <SectionSideMenu
                        onHide={() => setShow({ ...show, skill: false })}
                        onDelete={SKILL}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {/* Language Section */}
          {resumeData?.languages?.visible && (
            <>
              <div className={Classes.sideMenu}>
                {/* languages Heading */}
                <div>
                  <Heading
                    title={"LANGUAGES"}
                    headBg={"#3498DB"}
                    iconHeading={true}
                    icon={(props) => (
                      <IoLanguageSharp {...props} size={20} color={"#fff"} />
                    )}
                    color={"white"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={250}
                    maxW={250}
                    margin={"10px 0px 10px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, languages: true })
                    }
                  />

                  {/* Language Component */}
                  <Language langStyle={Classes.langText} rating={true} />
                </div>
                {/* Section Side Menu */}
                <div className={Classes.sideMenuBox}>
                  {show.languages && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, languages: false })}
                      onDelete={LANGUAGES}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
              </div>
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
            iconSize={"16px"}
            iconColor="#3498DB"
            circleIcon={true}
            maxWidth={"350px"}
          />
          {/* Education Section  */}
          {resumeData?.education?.visible && (
            <>
              <div className={Classes.sideMenu}>
                <div>
                  {/* Heading For Education Section  */}
                  <Heading
                    title={"EDUCATION"}
                    headBg={"#3498DB"}
                    iconHeading={true}
                    icon={(props) => (
                      <MdCastForEducation {...props} size={20} color={"#fff"} />
                    )}
                    color={"white"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={400}
                    maxW={400}
                    margin={"10px 0px 10px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                  />
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
                    maxWidth={"200"}
                    maxChr={20}
                    datewidthmax={"68px"}
                  />
                </div>
                {/* Section Side Menu */}
                <div className={Classes.sideMenuBox}>
                  {show.education && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, education: false })}
                      onDelete={EDUCATION}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
              </div>
              &nbsp;
            </>
          )}
          {/* Work Experience Section */}
          {resumeData?.work?.visible && (
            <>
              <div className={Classes.sideMenu}>
                <div>
                  {/* Work Experience Heading  */}

                  <Heading
                    title={"EXPERIENCE"}
                    margin={"10px 0px 10px 0px"}
                    headBg={"#3498DB"}
                    iconHeading={true}
                    icon={(props) => (
                      <BsLayersFill {...props} size={20} color={"#fff"} />
                    )}
                    color={"white"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={400}
                    maxW={400}
                    onSideSectionShow={() =>
                      setShow({ ...show, workExperience: true })
                    }
                  />
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
                    maxWidth={"200"}
                    maxChr={20}
                    datewidthmax={"68px"}
                  />
                </div>
                {/* Section Side Menu */}
                <div className={Classes.sideMenuBox}>
                  {show.workExperience && (
                    <>
                      <SectionSideMenu
                        onHide={() =>
                          setShow({ ...show, workExperience: false })
                        }
                        onDelete={WORK}
                        bg="#006772"
                        iconColor={"#fff"}
                      />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {/* Reference Section  */}
          {resumeData?.references?.visible && (
            <>
              <div className={Classes.sideMenu}>
                <div>
                  {/* Reference Section Heading */}
                  <Heading
                    title={"REFERENCE"}
                    headBg={"#3498DB"}
                    margin={"10px 0px 10px 0px"}
                    iconHeading={true}
                    icon={(props) => (
                      <MdEmail {...props} size={20} color={"#fff"} />
                    )}
                    color={"white"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={400}
                    maxW={400}
                    onSideSectionShow={() =>
                      setShow({ ...show, references: true })
                    }
                  />
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
                    maxWidth={'390px'}
                    minWidth={'390px'}
                  />
                </div>
                {/* Section Side Menu */}
                <div className={Classes.sideMenuBox}>
                  {show.references && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, references: false })}
                      onDelete={REFERENCE}
                      bg="#006772"
                      iconColor={"#fff"}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </Box>
      </HStack>
    </Flex>
  );
};
export default FashionTemp1;
