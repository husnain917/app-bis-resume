import { Box, Flex, HStack } from "@chakra-ui/react";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Classes from "../../styles/templates/novoResumeTemplate.module.css";
import Contact from "../components/commonSection/Contact";
import About from "../components/commonSection/About";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import Heading from "../components/commonSection/Heading";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import PointsDescription from "../components/commonSection/PointsDescription";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const NovoResumeTemplate = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
    (store) => store.themeReducer.theme
  );
  // console.log('thirdColor',thirdColor);
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
        bg={"#fff"}
        borderRadius={6}
        borderWidth="1px"
        borderColor={"#00000023"}
      >
        {/* =============== Profile Section =============== */}
        <Box
          px={7}
          transition="0.8s background"
        >
          <HStack>
            <Box>
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={Classes.Name}
                SNameStyle={Classes.Name}
                minWidth={"280px"}
                fontColor={backgroundColor ? backgroundColor : "#eba43f"}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={Classes.ProfessionHybrid}
                maxWidth={"300px"}
                fontColor={thirdColor ? thirdColor : '#666766'}
              />
            </Box>
          </HStack>
          <HStack
            minH={"80px"}
            alignItems="flex-start"
            transition="0.8s background"
          >
            <About
              maxW={"100%"}
              minW={"100%"}
              aboutStyle={Classes.profile}
              fontColor={"#000"}
            />
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
          transition="0.8s background"
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
            iconColor={backgroundColor ? backgroundColor : "#eba43f"}
            iconSize={"20px"}
            style={Classes.contactprofile}
            textColor={"#000"}
          />
        </Box>
        <Box
          transition="0.8s background"
        >
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
                  color={backgroundColor ? backgroundColor : "#eba43f"}
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
                  bg={fourthColor ? fourthColor : "#eba43f"}
                  textColor={color ? color : "white"}
                />
              </div>
            </div>
          )}
        </Box>
        <Box
          px={'30px'}
          py={2}
          transition="0.8s background"
        >
          {resumeData?.work?.visible && (
            <div className={Classes.sideMenu}>
              <div className={Classes.sideMenuBox}>

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

                <Heading
                  title="PROFESSIONAL EXPERIENCE"
                  fontSize="28px"
                  fontWeight={"bold"}
                  color={backgroundColor ? backgroundColor : "#eba43f"}
                  fontFamily={"Ubuntu"}
                  minW={"750px"}
                  maxW="750px"
                  margin={"10px 0px"}
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                />

                <WorkExperience
                  date={true}
                  position={true}
                  company={true}
                  location={true}
                  achieement={true}
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
                  textColor={"#000"}
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
                      textColor={"#000"}

                      BulletContainerStyle={Classes.BulletContainerStyle}
                      BulletIcon={() => (
                        <Box
                          w={"100%"}
                          bg={backgroundColor ? backgroundColor : "#eba43f"}
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
