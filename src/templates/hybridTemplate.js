import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills, GiOrganigram } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { FaHorseHead } from "react-icons/fa";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import About from "../components/commonSection/About";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import Project from "../components/commonSection/Project";
import Organization from "../components/commonSection/Organization";
import Certificate from "../components/commonSection/Certificate";
import Language from "../components/commonSection/Language";
import Interest from "../components/commonSection/Interest";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import {
  CERTIFICATE,
  EDUCATION,
  INTEREST,
  LANGUAGES,
  ORGANIZATION,
  PROJECT,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../components/imageSelector";

const HybridTemplate = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  );
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Hybrid Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <>
      <Flex
        justifyContent={{ base: "none", lg: "center" }}
        flexDir={"column"}
        alignItems={{ sm: "none", lg: "center" }}
        bg={"#fff"}
      >
        <Box
          minW={"837px"}
          maxW={"837px"}
          minHeight={1183}
          pt={10}
          pb={2}
          px={2}
          bg={"white"}
          borderRadius={6}
          borderWidth="1px"
          borderColor={"#00000023"}
        >
          <HStack>
            {/* Image Section  */}
            <ImageSelector
              minWidth={150}
              maxWidth={150}
              minHeight={150}
              maxHeight={150}
              marginLeft="40px"
              borderColor={backgroundColor ? backgroundColor : "#313B47"}
            />
            <Box>
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.hybridName}
                SNameStyle={Classes.hybridName}
                maxWidth={"300px"}
                minWidth={"200px"}
                maxChr={38}
              />
              {/* Profession Section  */}

              <Profession
                professionStyle={Classes.ProfessionHybrid}
                maxWidth={"570px"}
              />
            </Box>
          </HStack>
          <HStack
            bg={backgroundColor ? backgroundColor : "#313B47"}
            width="full"
            minH={"110px"}
            borderTopRightRadius={6}
            borderTopLeftRadius={6}
            alignItems="flex-start"
            justifyContent={"center"}
            mt={-10}
            transition={"0.5s background"}
          >
            {/* About Section */}
            <About
              aboutStyle={Classes.profileText}
              maxW={"400px"}
              minW={"400px"}
            />
          </HStack>
          <Box
            bg={"#449399"}
            borderBottomRightRadius={6}
            borderBottomLeftRadius={6}
            w={"full"}
            display="flex"
            justifyContent="center"
          >
            {/* Contact Section  */}
            <Contact
              parentDirection="row"
              phone={true}
              email={true}
              location={true}
              circleIcon={true}
              iconColor="#fff"
              iconSize={"20px"}
              style={Classes.profileText}
              margin={"0px 4px 0px 4px"}
              maxWidth={"200px"}
            />
          </Box>
          <HStack mt={5} alignItems="stretch">
            <Box minW={490} maxW={490} h="full">
              <Box pl={6}>
                {/* Education Section  */}
                {resumeData?.education?.visible && (
                  <div className={Classes.sideMenu}>
                    <div
                      className={Classes.sideMenuBox}
                      style={{ marginTop: "0px" }}
                    >
                      {/* Section Side Menu */}
                      {show.education && (
                        <SectionSideMenu
                          bg="#006772"
                          iconColor={"#fff"}
                          onHide={() => setShow({ ...show, education: false })}
                          onDelete={EDUCATION}
                        />
                      )}
                    </div>
                    <div>
                      {/* Heading For Education Section  */}
                      <Heading
                        title="EDUCATION"
                        circleSize="38px"
                        circleBg="#313B47"
                        circleIconHeading={true}
                        icon={(props) => (
                          <MdCastForEducation
                            {...props}
                            size={18}
                            color={"white"}
                          />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#313B47"
                        margin={"0px 0px 10px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, education: true })
                        }
                      />
                      {/* Education Components */}
                      <Education
                        institution={true}
                        degree={true}
                        degree_placeholder="Study Program"
                        date={true}
                        location={true}
                        institutionStyle={Classes.institute}
                        degreeStyle={Classes.programText}
                        dateStyle={Classes.date}
                        locationStyle={Classes.date}
                        maxWidth={"440px"}
                        maxChr={20}
                        datewidthmax={"210px"}
                      />
                    </div>
                  </div>
                )}
                {/* Work Experience Section */}
                {resumeData?.work?.visible && (
                  <div className={Classes.sideMenu}>
                    <div className={Classes.sideMenuBox}>
                      {/* Section Side Menu */}
                      {show.work && (
                        <SectionSideMenu
                          bg="#006772"
                          iconColor={"#fff"}
                          onHide={() => setShow({ ...show, work: false })}
                          onDelete={WORK}
                        />
                      )}
                    </div>
                    <div>
                      {/* Work Experience Heading  */}
                      <Heading
                        title="WORK EXPERIENCE"
                        circleSize="38px"
                        circleBg="#313B47"
                        circleIconHeading={true}
                        icon={(props) => (
                          <BsFillLayersFill
                            {...props}
                            size={18}
                            color={"white"}
                          />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#313B47"
                        minW={"full"}
                        maxW="full"
                        margin={"10px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, work: true })
                        }
                      />
                      {/* Work Experience Components */}
                      <WorkExperience
                        date={true}
                        position={true}
                        company={true}
                        location={true}
                        summary={true}
                        summary_placeholder="Company Description (optional,fill when the company is not well known"
                        location_placeholder="Country,City"
                        dateStyle={Classes.date}
                        positionStyle={Classes.programText}
                        companyStyle={Classes.institute}
                        locationStyle={Classes.date}
                        summaryStyle={Classes.date}
                        maxWidth={"440px"}
                        maxChr={20}
                        datewidthmax={"210px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
            <Box
              minW={313}
              maxW={313}
              bg="#D6D6D6"
              py={4}
              pl={"5px"}
              borderRadius={6}
            >
              {/* skill Section  */}
              {resumeData?.skills?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.width}>
                    {show.skills && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, skills: false })}
                        onDelete={SKILL}
                      />
                    )}
                  </div>
                  <div>
                    {/* skill Heading */}
                    <Heading
                      title="SKILLS"
                      circleSize="38px"
                      circleBg="#313B47"
                      circleIconHeading={true}
                      icon={(props) => (
                        <GiSkills {...props} size={18} color={"white"} />
                      )}
                      fontSize="23px"
                      fontWeight={"bold"}
                      color="#313B47"
                      minW={250}
                      maxW={250}
                      margin={"10px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, skills: true })
                      }
                    />
                    {/* Skill Row Components */}
                    <RowSkill
                      skillStyle={Classes.skillText}
                      maxWidth={"250px"}
                      maxChr={20}
                    />
                  </div>
                </div>
              )}
              {/* Project Section  */}
              {resumeData?.projects?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.width}>
                    {/* Section Side Menu */}
                    {show.project && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, project: false })}
                        onDelete={PROJECT}
                      />
                    )}
                  </div>
                  <div>
                    {/* project Section Heading */}
                    <Heading
                      title="PERSONAL PROJECTS"
                      circleSize="38px"
                      circleBg="#313B47"
                      circleIconHeading={true}
                      icon={(props) => (
                        <GoProject {...props} size={18} color={"white"} />
                      )}
                      fontSize="23px"
                      fontWeight={"bold"}
                      color="#313B47"
                      minW={250}
                      maxW={250}
                      margin={"15px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, project: true })
                      }
                    />
                    {/* project Component */}
                    <Project
                      project={true}
                      duration={true}
                      summary={true}
                      projectStyle={Classes.projectTitleText}
                      summaryStyle={Classes.description}
                      durationStyle={Classes.description}
                      projectPlaceholder={"Project Name"}
                      durationPlaceholder="Project Duration"
                      summaryPlaceholder="Project Summary"
                      maxWidth={"240px"}
                    />
                  </div>
                </div>
              )}
              {/* Organization Section */}
              {resumeData?.organization?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.width}>
                    {/* Section Side Menu */}
                    {show.organization && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, organization: false })}
                        onDelete={ORGANIZATION}
                      />
                    )}
                  </div>
                  <div>
                    {/* Organization Heading */}
                    <Heading
                      title="ORGANIZATION"
                      circleSize="38px"
                      circleBg="#313B47"
                      circleIconHeading={true}
                      icon={(props) => (
                        <GiOrganigram {...props} size={18} color={"white"} />
                      )}
                      fontSize="23px"
                      fontWeight={"bold"}
                      color="#313B47"
                      minW={250}
                      maxW={250}
                      margin={"15px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, organization: true })
                      }
                    />
                    {/* Organization Component */}
                    <Organization
                      organization={true}
                      date={true}
                      role={true}
                      organizationStyle={Classes.projectTitleText}
                      dateStyle={Classes.description}
                      roleStyle={Classes.description}
                      rolePlaceholder="Role"
                      maxWidth={"240px"}
                      datewidthmax={"100px"}
                    />
                  </div>
                </div>
              )}
              {/* Certificate Section  */}
              {resumeData?.certifications?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.width}>
                    {/* Section Side Menu */}
                    {show.certificates && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, certificates: false })}
                        onDelete={CERTIFICATE}
                      />
                    )}
                  </div>
                  <div>
                    {/* Certificate Heading */}
                    <Heading
                      title="CERTIFICATES"
                      circleSize="38px"
                      circleBg="#313B47"
                      circleIconHeading={true}
                      icon={(props) => (
                        <TbCertificate {...props} size={18} color={"white"} />
                      )}
                      fontSize="23px"
                      fontWeight={"bold"}
                      color="#313B47"
                      minW={250}
                      maxW={250}
                      margin={"15px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, certificates: true })
                      }
                    />
                    {/* Certificate Component */}
                    <Certificate
                      issueDate={true}
                      certificate={true}
                      institute={true}
                      certificateStyle={Classes.projectTitleText}
                      issueDateStyle={Classes.description}
                      instituteStyle={Classes.description}
                      maxWidth={"240px"}
                      datewidthmax={"100px"}
                    />
                  </div>
                </div>
              )}
              {/* Language Section */}
              {resumeData?.languages?.visible && (
                <div className={Classes.sideMenu}>
                  <div className={Classes.width}>
                    {/* Section Side Menu */}
                    {show.languages && (
                      <SectionSideMenu
                        bg="#006772"
                        iconColor={"#fff"}
                        onHide={() => setShow({ ...show, languages: false })}
                        onDelete={LANGUAGES}
                      />
                    )}
                  </div>
                  <div>
                    {/* languages Heading */}
                    <Heading
                      title="LANGUAGES"
                      circleSize="38px"
                      circleBg="#313B47"
                      circleIconHeading={true}
                      icon={(props) => (
                        <IoLanguageOutline
                          {...props}
                          size={18}
                          color={"white"}
                        />
                      )}
                      fontSize="23px"
                      fontWeight={"bold"}
                      color="#313B47"
                      minW={250}
                      maxW={250}
                      margin={"15px 0px"}
                      onSideSectionShow={() =>
                        setShow({ ...show, languages: true })
                      }
                    />
                    {/* Language Component */}
                    <Language
                      langStyle={Classes.projectTitleText}
                      maxWidth={"240px"}
                    />
                  </div>
                </div>
              )}
              {/* Interest Section */}
              {resumeData?.hobbies?.visible && (
                <>
                  <div className={Classes.sideMenu}>
                    <div className={Classes.width}>
                      {/* Section Side Menu */}
                      {show.interest && (
                        <SectionSideMenu
                          bg="#006772"
                          iconColor={"#fff"}
                          onHide={() => setShow({ ...show, interest: false })}
                          onDelete={INTEREST}
                        />
                      )}
                    </div>
                    <div>
                      {/* Interest Heading */}
                      <Heading
                        title="INTEREST"
                        circleSize="38px"
                        circleBg="#313B47"
                        circleIconHeading={true}
                        icon={(props) => (
                          <FaHorseHead {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#313B47"
                        minW={250}
                        maxW={250}
                        margin={"15px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, interest: true })
                        }
                      />
                      {/* Interest Component  */}
                      <Interest
                        dndDirection="horizontal"
                        interestStyle={Classes.skillText}
                        maxBoxWidth={"240px"}
                        maxChr={20}
                      />
                    </div>
                  </div>
                </>
              )}
            </Box>
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default HybridTemplate;
