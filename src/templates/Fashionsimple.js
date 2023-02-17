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

const Fashionsimple = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color, thirdColor, forthColor } = useSelector(
        (store) => store.themeReducer.theme
    );
    console.log("thirdColor======>", forthColor);
    // custom Hook For Template
    const [show, setShow] = useShow();
    const themeHeadingColor = "#0C3366";
    const themesubHeadingColor = "grey";
    const themebackgrondColor = "white";
    const themetextColor = "black";
    return (
        //  ~~~~~~~~~~~~~~ Executive Resume Template ~~~~~~~~~~~~~~  //
        <Flex
            justifyContent={{ base: "none", lg: "center" }}
            flexDir={"column"}
            alignItems={{ sm: "none", lg: "center" }}
            bg={"#fff"}
        >
            <Box
                minW={837}
                maxW={837}
                pt={8}
                pb={2}
                bg={backgroundColor ? backgroundColor : themebackgrondColor}
                borderRadius={6}
                borderWidth="1px"
                borderColor={"#00000023"}
            >
                {/* =============== Profile Section =============== */}
                <Box
                    px={7}
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    pb={7}
                >
                    <Box>
                        <HStack>
                            <Box>
                                <Name
                                    FName={true}
                                    SName={true}
                                    direction="row"
                                    FNameStyle={Classes.Name}
                                    SNameStyle={Classes.Name}
                                    fontColor={thirdColor ? thirdColor : themeHeadingColor}
                                />
                                {/* Profession Section  */}
                                <Profession
                                    professionStyle={Classes.ProfessionHybrid}
                                    fontColor={forthColor ? forthColor : themesubHeadingColor}
                                />
                            </Box>
                        </HStack>
                        <HStack minH={"80px"} alignItems="flex-start">
                            <About
                                maxW={"500px"}
                                minW={"60%"}
                                aboutStyle={Classes.profile}
                                fontColor={color ? color : themetextColor}
                            />
                        </HStack>
                    </Box>
                    <Box>
                        <Contact
                            phone={true}
                            email={true}
                            website={true}
                            location={true}
                            circleIcon={true}
                            iconColor={thirdColor ? thirdColor : themeHeadingColor}
                            circleSize="25px"
                            iconSize="20px"
                            direction="row-reverse"
                            style={Classes.DetailStyle}
                            margin={"8px 0px 0px 0px"}
                            maxWidth={"full"}
                            textColor={color ? color : "black"}
                        />
                    </Box>
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
                                    title="SKILLS"
                                    fontSize="23px"
                                    fontWeight={"bold"}
                                    color={thirdColor ? thirdColor : themeHeadingColor}
                                    maxW={"full"}
                                    minW={"full"}
                                    margin={"10px 0px"}
                                    borderBottom={`2px solid ${color ? color : themetextColor}`}
                                    borderTop={`2px solid ${color ? color : themetextColor}`}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    onSideSectionShow={() => setShow({ ...show, skills: true })}
                                    paddingVertical={5}
                                />
                                {/* Skill Row Components */}
                                <RowSkill
                                    skillStyle={Classes.skillText}
                                    childContainerStyle={Classes.skillContainer}
                                    skillPlaceholder={"Bussiness Process"}
                                    bg={thirdColor ? thirdColor : themeHeadingColor}
                                    textColor={
                                        backgroundColor ? backgroundColor : themebackgrondColor
                                    }
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
                                    title="WORK EXPERIENCE"
                                    fontSize="28px"
                                    fontWeight={"bold"}
                                    color={thirdColor ? thirdColor : themeHeadingColor}
                                    fontFamily={"Ubuntu"}
                                    minW={"full"}
                                    maxW="full"
                                    margin={"10px 0px"}
                                    onSideSectionShow={() => setShow({ ...show, work: true })}
                                    borderBottom={`2px solid ${color ? color : themetextColor}`}
                                    borderTop={`2px solid ${color ? color : themetextColor}`}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    paddingVertical={5}
                                />
                                {/* Work Experience Components */}
                                <WorkExperience
                                    date={true}
                                    position={true}
                                    company={true}
                                    location={false}
                                    achieement={true}
                                    bgColor={backgroundColor ? backgroundColor : themebackgrondColor}
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
                                    textColor={color ? color : themetextColor}
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
                                            textColor={color ? color : themetextColor}
                                            BulletContainerStyle={Classes.BulletContainerStyle}
                                            BulletIcon={() => (
                                                <Box
                                                    w={"10px"}
                                                    bg={thirdColor ? thirdColor : themeHeadingColor}
                                                    h={"3px"}
                                                />
                                            )}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    )}
                </Box>
                <Box px={7} py={2}>
                    {/* Education Section  */}
                    {resumeData?.education?.visible && (
                        <div >
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
                                    fontSize="23px"
                                    fontWeight={"bold"}
                                    color={color ? color : color}
                                    margin={"0px 0px 10px 0px"}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, education: true })
                                    }
                                    minW={"full"}
                                    maxW="full"
                                    borderBottom={`2px solid ${color ? color : themetextColor}`}
                                    borderTop={`2px solid ${color ? color : themetextColor}`}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    paddingVertical={5}
                                />
                                {/* Education Components */}
                                <Education
                                    institution={true}
                                    degree={true}
                                    degree_placeholder="Study Program"
                                    date={true}
                                    institutionStyle={Classes.fashioninstitute}
                                    degreeStyle={Classes.programText}
                                    locationStyle={Classes.date}
                                    datewidthmax={"180px"}
                                    maxChr={20}
                                    maxWidth={"420px"}
                                    textColor={color ? color : themetextColor}
                                    companFontColor={thirdColor ? thirdColor : "black"}
                                    
                                />
                            </div>
                        </div>
                    )}
                </Box>
                <Box px={7} py={2}>
                    {/* Organization Section */}
                    {resumeData?.organization?.visible && (
                        <div >
                            <div className={Classes.sideMenuBox}>
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
                                    fontSize="23px"
                                    fontWeight={"bold"}
                                    color={color}
                                    margin={"15px 0px"}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, organization: true })
                                    }
                                    maxW={"full"}
                                    minW={"full"}
                                    borderBottom={`2px solid ${color ? color : themetextColor}`}
                                    borderTop={`2px solid ${color ? color : themetextColor}`}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    paddingVertical={5}
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
                                    maxwidth={"420px"}
                                    datewidthmax={"200px"}                                    
                                    textColor={color ? color : themetextColor}

                                />
                            </div>
                        </div>
                    )}
                </Box>
            </Box>
        </Flex>
    );
};
export default Fashionsimple;
