import { Box, Flex, HStack } from "@chakra-ui/react";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills, GiOrganigram } from "react-icons/gi";
import { IoLanguageOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { FaHorseHead } from "react-icons/fa";
import ImageSelector from "../components/imageSelector";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Classes from "../../styles/templates/novoResumeTemplate.module.css";
import Contact from "../components/commonSection/Contact";
import About from "../components/commonSection/About";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import PointsDescription from "../components/commonSection/PointsDescription";
import Project from "../components/commonSection/Project";
import Organization from "../components/commonSection/Organization";
import Certificate from "../components/commonSection/Certificate";
import Language from "../components/commonSection/Language";
import Interest from "../components/commonSection/Interest";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
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

const NovoResumeTemplate = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor } = useSelector(
    (store) => store.themeReducer.theme
  );
console.log('thirdColor',thirdColor);
  // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <Box
        minW={830}
        maxW={830}
        pt={8}
        pb={2}
        bg={backgroundColor ? backgroundColor : "white"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
      >
        {/* =============== Profile Section =============== */}
        <Box px={7}>
          <HStack>
            <Box>
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.Name}
                SNameStyle={Classes.Name}
                minWidth={"280px"}
                fontColor={color ? color : "#eba43f"}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={Classes.ProfessionHybrid}
                maxWidth={"300px"}
              />
            </Box>
          </HStack>
          <HStack minH={"80px"} alignItems="flex-start">
            <About maxW={"100%"} minW={"100%"} aboutStyle={Classes.profile} fontColor={thirdColor}/>
          </HStack>
        </Box>
        <Box
          w={"full"}
          py={2}
          px={7}
          borderTopColor={"black"}
          borderTopWidth={2}
          borderBottomColor={"black"}
          borderBottomWidth={2}
        >
          {/* Contact Section  */}
          <Contact
            parentStyle={Classes.ContactparentStyle}
            phone={true}
            email={true}
            location={true}
            circleIcon={true}
            website={true}
            linkedinURL={true}
            iconColor={color ? color : "#eba43f"}
            iconSize={"20px"}
            style={Classes.contactprofile}
            textColor={thirdColor}
          />
        </Box>
        <Box>
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
                  title="AREAS OF EXPERTISE"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={color ? color : "#eba43f"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, skills: true })}
                />
                {/* Skill Row Components */}
                <RowSkill
                  skillStyle={Classes.skillText}
                  childContainerStyle={Classes.skillContainer}
                  skillPlaceholder={"Bussiness Process"}
                  bg={color ? color : "#eba43f"}
                  textColor={backgroundColor ? backgroundColor : "white"}
                />
              </div>
            </div>
          )}
        </Box>
        <Box px={7} py={2}>
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
                  title="PROFESSIONAL EXPERIENCE"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={color ? color : "#eba43f"}
                  fontFamily={"Ubuntu"}
                  minW={"full"}
                  maxW="full"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                  paddingHorizantal={7}
                />
                {/* Work Experience Components */}
                <WorkExperience
                  date={true}
                  position={true}
                  company={true}
                  location={true}
                  achieement={true}
                  bgColor={backgroundColor ? backgroundColor : "white"}
                  summary_placeholder="Company Description (optional,fill when the company is not well known"
                  location_placeholder="Country,City"
                  dateStyle={Classes.date}
                  positionStyle={Classes.programText}
                  companyStyle={Classes.institute}
                  locationStyle={Classes.date}
                  summaryStyle={Classes.summaryStyle}
                  datewidthmax={"120px"}
                  parentContainerStyle={Classes.WorkparentContainerStyle}
                  locationWithDate={true}
                  insideContainerStyle={Classes.insideContainerStyle}
                  textColor={thirdColor}
                  positionContainerStyle={Classes.positionContainerStyle}
                  containerForSummaryAndAchievement={
                    Classes.containerForSummaryAndAchievement
                  }
                  childContainerStyle={Classes.WorkchildContainerStyle}
                  summary={false}
                  ponintsDescription={true}
                  PointsComponent={({
                    items,
                    addPoint,
                    deletePoint,
                    index,
                  }) => (
                    <PointsDescription
                      PointsDescriptionStyle={Classes.pointsText}
                      childContainerStyle={Classes.pointsContainer}
                      PointsDescriptionPlaceholder={"Description"}
                      data={items}
                      addPoint={addPoint}
                      deletePoint={deletePoint}
                      parentIndex={index}
                  textColor={thirdColor}

                      BulletContainerStyle={Classes.BulletContainerStyle}
                      BulletIcon={() => (
                        <Box
                          w={"100%"}
                          bg={color ? color : "#eba43f"}
                          h={"5px"}
                        />
                      )}
                    />
                  )}
                />
              </div>
            </div>
          )}
        </Box>
      </Box>
    </Flex>
  );
};
export default NovoResumeTemplate;
