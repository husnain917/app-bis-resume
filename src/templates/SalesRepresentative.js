import { Box, Flex } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import Name from "../components/commonSection/Name";
import About from "../components/commonSection/About";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import { useSelector } from "react-redux";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import ImageSelector from "../components/imageSelector";
import Class from "../../styles/templates/salesRepresentative.module.scss";
import Skill from "../components/commonSection/Skill";
import Reference from "../components/commonSection/Reference";
import {
  EDUCATION,
  SKILL,
  WORK,
  REFERENCE,
} from "../components/tempSectionSide/SectionSideConstant";

const SalesRepresentative = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color } = useSelector(
    (store) => store.themeReducer.theme
  ); // custom Hook For Template
  const [show, setShow] = useShow();

  return (
    // ~~~~~~~~~~~~~~~~~~~~~~~~~ Hybrid Template ~~~~~~~~~~~~~~~~~~~~~~~~~//
    <Flex
      justifyContent={{ base: "none", lg: "center" }}
      flexDir={"column"}
      alignItems={{ sm: "none", lg: "center" }}
      bg={"#fff"}
    >
      <Box
        display="flex"
        flexDir="row"
        w="100%"
        minW="830px"
        maxW="830px"
        mb={"20px"}
      >
        {/* =============== First Section ============== */}
        <Box
          w="40%"
          minW={"340px"}
          bgColor={backgroundColor ? backgroundColor : "whitesmoke"}
          borderLeftRadius={6}
          pr={3}
          pl={12}
          py={8}
          transition="0.5s background"
        >
          {/* _____________ Profile _____________ */}
          <ImageSelector
            maxH={"16em"}
            maxW={"16em"}
            borderRadius="50%"
            marginTop={"5"}
            marginLeft={"10px"}
            borderColor={color ? color : ""}
          />
          <Heading
            title={"My Contact"}
            color="black"
            margin={"35px 0px 0px 0px"}
            line={true}
            lineW="45%"
            lineH="0.30em"
            lineBg={backgroundColor}
            fontSize={"1.8em"}
            lineStyle={Class.lineStyle}
          />
          <Contact
            parentDirection="column"
            phone={true}
            email={true}
            location={true}
            website={true}
            circleIcon={true}
            iconColor="black"
            iconSize={"24px"}
            margin={"2px 0px 2px 0px"}
            parentStyle={Class.parentStyle}
            style={Class.style}
            maxWidth={"250px"}
          />

          {/* _____________ Skill _____________ */}
          <Box margin={"20px 0px 10px 0px"}>
            {resumeData?.skills?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show.skills && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, skills: false })}
                      bg="#006772"
                      iconColor={"#fff"}
                      onDelete={SKILL}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={"Skills"}
                    color="black"
                    margin={"20px 0px 0px 0px"}
                    onSideSectionShow={() => setShow({ ...show, skills: true })}
                    line={true}
                    lineW="45%"
                    lineH="0.30em"
                    lineBg={backgroundColor}
                    fontSize={"1.8em"}
                    lineStyle={Class.lineStyle}
                  />
                  <Skill
                    skillStyle={Classes.skillText}
                    rating={true}
                    strokeWidth="2"
                    strokeColor="#1890ff"
                    trailColor="#fff"
                  />
                </div>
              </div>
            )}
          </Box>
          {/* Reference Section  */}
          <Box margin={"20px 0px 0px 0px"}>
            {resumeData?.references?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
                  {show.references && (
                    <SectionSideMenu
                      onHide={() => setShow({ ...show, references: false })}
                      bg="#006772"
                      iconColor={"#fff"}
                      onDelete={REFERENCE}
                    />
                  )}
                </div>
                <div>
                  <Heading
                    title={"REFERENCE"}
                    margin={"5px 0px 0px 0px"}
                    iconHeading={true}
                    icon={(props) => (
                      <MdEmail {...props} size={20} color={backgroundColor} />
                    )}
                    color={"black"}
                    fontSize={20}
                    fontWeight="600"
                    textPadding={"0px 0px 1px 0px"}
                    padding={"0px 0px 0px 5px"}
                    letterSpacing={3}
                    minW={250}
                    maxW={400}
                    onSideSectionShow={() =>
                      setShow({ ...show, references: true })
                    }
                  />
                  <Reference
                    name={true}
                    profession={true}
                    email={true}
                    phone={true}
                    phoneStyle={Class.profileText}
                    emailStyle={Class.profileText}
                    professionStyle={Class.profileText}
                    nameStyle={Class.profileText}
                    DndDirection="horizontal"
                    parentContainerStyle={Class.parentContainerStyle}
                  />
                </div>
              </div>
            )}
          </Box>
        </Box>
        {/* =============== Second Section ============== */}
        <Box
          w="60%"
          bg={color ? color : "whitesmoke"}
          h="auto"
          minW="490px"
          borderRightRadius={6}
          paddingBottom={"40px"}
          transition="0.5s background"
          px={"20px"}
        >
          <Box maxWidth={"400px"}>
            <Name
              FName={true}
              SName={true}
              direction="column"
              //   maxWidth={"160px"}
              FNameStyle={Class.fName}
              SNameStyle={Class.sName}
              margin={"38px 0px 0px 0px"}
              maxChr={38}
            />
          </Box>
          <About aboutStyle={Class.profileText} maxW={"320px"} minW={"320px"} />
          {/* Work Experience Section */}
          <Box margin={"20px 0px 10px 7px"}>
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
                    maxW={"400"}
                    title="WORK EXPERIENCE"
                    line={true}
                    lineH="0.30em"
                    lineBg={backgroundColor}
                    lineStyle={Class.lineStyle}
                    fontSize="23px"
                    fontWeight={"bold"}
                    color="#313B47"
                    margin={"20px 0px 0px 0px"}
                    onSideSectionShow={() => setShow({ ...show, work: true })}
                  />
                  <WorkExperience
                    date={true}
                    position={true}
                    company={true}
                    location={true}
                    summary={true}
                    maxWidth={"420px"}
                    datewidthmax={"160px"}
                    maxChr={20}
                    summary_placeholder="Company Description (optional,fill when the company is not well known"
                    location_placeholder="Country,City"
                    dateStyle={Classes.date}
                    positionStyle={Classes.programText}
                    companyStyle={Classes.institute}
                    locationStyle={Classes.date}
                    summaryStyle={Classes.date}
                  />
                </div>
              </div>
            )}
          </Box>
          {/* Education Section  */}
          <Box margin={"30px 0px 10px 7px"}>
            {resumeData?.education?.visible && (
              <div className={Classes.sideMenu}>
                <div className={Classes.sideMenuBox}>
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
                  <Heading
                    title="EDUCATION"
                    line={true}
                    lineH="0.30em"
                    lineBg={backgroundColor}
                    lineStyle={Class.lineStyle}
                    fontSize="23px"
                    fontWeight={"bold"}
                    color="#313B47"
                    margin={"20px 0px 0px 0px"}
                    onSideSectionShow={() =>
                      setShow({ ...show, education: true })
                    }
                  />
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
                    maxWidth={"420px"}
                    datewidthmax={"160px"}
                    maxChr={20}
                  />
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SalesRepresentative;
