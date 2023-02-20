import { Box, Flex, HStack } from "@chakra-ui/react";
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
import Organization from "../components/commonSection/Organization";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
    EDUCATION,
    ORGANIZATION,
    SKILL,
    WORK,
} from "../components/tempSectionSide/SectionSideConstant";

const Fashionsimple = () => {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
        (store) => store.themeReducer.theme
    );
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
                minW={837}
                maxW={837}
                pt={8}
                pb={2}
                bg={'#fff'}
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
                                    fontColor={backgroundColor ? backgroundColor : '#0C3366'}
                                    maxChr={13}
                                    maxWidth={250}
                                />
                                {/* Profession Section  */}
                                <Profession
                                    professionStyle={Classes.ProfessionHybrid}
                                    fontColor={thirdColor ? thirdColor : 'grey'}
                                    maxWidth={500}
                                />
                            </Box>
                        </HStack>
                        <HStack minH={"80px"} alignItems="flex-start">
                            <About
                                maxW={"500px"}
                                minW={"60%"}
                                aboutStyle={Classes.profile}
                                fontColor={'#000'}
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
                            iconColor={backgroundColor ? backgroundColor : '#0C3366'}
                            circleSize="25px"
                            iconSize="20px"
                            direction="row-reverse"
                            style={Classes.DetailStyle}
                            margin={"8px 0px 0px 0px"}
                            maxWidth={200}
                            textColor={"#000"}
                        />
                    </Box>
                </Box>
                <Box px={7} py={2}>
                    {resumeData?.skills?.visible && (
                        <div>
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
                                    color={backgroundColor ? backgroundColor : '#0C3366'}
                                    maxW={"full"}
                                    minW={"full"}
                                    margin={"10px 0px"}
                                    borderBottom={`2px solid ${backgroundColor ? backgroundColor : '#000'}`}
                                    borderTop={`2px solid ${backgroundColor ? backgroundColor : '#000'}`}
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
                                    bg={fourthColor ? fourthColor : '#0C3366'}
                                    textColor={
                                        color ? color : '#fff'
                                    }
                                />
                            </div>
                        </div>
                    )}
                </Box>
                <Box px={7} py={2}>
                    {resumeData?.work?.visible && (
                        <div >
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
                                    color={backgroundColor ? backgroundColor : '#0C3366'}
                                    fontFamily={"Ubuntu"}
                                    minW={"full"}
                                    maxW="full"
                                    margin={"10px 0px"}
                                    onSideSectionShow={() => setShow({ ...show, work: true })}
                                    borderBottom={`2px solid ${backgroundColor ? backgroundColor : '#000'}`}
                                    borderTop={`2px solid ${backgroundColor ? backgroundColor : '#000'}`}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    paddingVertical={5}
                                />
                                {/* Work Experience Components */}
                                <WorkExperience
                                    date={true}
                                    position={true}
                                    maxWidth={300}
                                    company={true}
                                    location={false}
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
                                    textColor={backgroundColor ? backgroundColor : "#0C3366"}
                                    companFontColor={"#000"}
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
                                            textColor={'#000'}
                                            BulletContainerStyle={Classes.BulletContainerStyle}
                                            BulletIcon={() => (
                                                <Box
                                                    w={"10px"}
                                                    bg={backgroundColor ? backgroundColor : '#0C3366'}
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
                                    color={backgroundColor ? backgroundColor : '#0C3366'}
                                    margin={"0px 0px 10px 0px"}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, education: true })
                                    }
                                    minW={"full"}
                                    maxW="full"
                                    borderBottom={`2px solid ${backgroundColor ? backgroundColor : '#0C3366'}`}
                                    borderTop={`2px solid ${backgroundColor ? backgroundColor : '#0C3366'}`}
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
                                    textColor={backgroundColor ? backgroundColor : '#0C3366'}
                                    companFontColor={"#000"}
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
                                    color={backgroundColor ? backgroundColor : '#0C3366'}
                                    margin={"15px 0px"}
                                    onSideSectionShow={() =>
                                        setShow({ ...show, organization: true })
                                    }
                                    maxW={"full"}
                                    minW={"full"}
                                    borderBottom={`2px solid ${backgroundColor ? backgroundColor : '#0C3366'}`}
                                    borderTop={`2px solid ${backgroundColor ? backgroundColor : '#0C3366'}`}
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
                                    roleColor={'#000'}
                                    dateColor={backgroundColor ? backgroundColor : '#0C3366'}
                                    nameColor={backgroundColor ? backgroundColor : '#0C3366'}
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
