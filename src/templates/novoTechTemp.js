import React from 'react'
import styles from "../../styles/novoTechTemp.module.css";
import { Box, Flex } from "@chakra-ui/react";
import ImageSelector from "../components/imageSelector";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import Contact from "../components/commonSection/Contact";
import About from "../components/commonSection/About";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import WorkExperience from "../components/commonSection/WorkExperience";
import RowSkill from "../components/commonSection/RowSkill";
import PointsDescription from "../components/commonSection/PointsDescription";
import Project from "../components/commonSection/Project";
import Certificate from "../components/commonSection/Certificate";
import Language from "../components/commonSection/Language";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
    CERTIFICATE,
    EDUCATION,
    LANGUAGES,
    PROJECT,
    SKILL,
    WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { IoLanguageOutline } from "react-icons/io5";

export default function Novo_Tech_Temp() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
        (store) => store.themeReducer.theme
    );
    // custom Hook For Template
    const [show, setShow] = useShow();
    return (
        <>
            <Flex
                justifyContent={{ base: "none", lg: "center" }}
                flexDir={"column"}
                alignItems={{ sm: "none", lg: "center" }}
                bg={"#fff"}
            >
                <Box
                    minW={830}
                    maxW={830}
                    pt={2}
                    pb={2}
                    bg={"#fff"}
                    borderRadius={6}
                    borderWidth="1px"
                    borderColor={"#00000023"}
                >
                    {/* header section */}
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        transition="0.8s background"
                    >
                        <Box
                            width={'65%'}
                            transition="0.8s background"
                            display={'flex'}
                        >
                            <Box
                                bg={backgroundColor ? backgroundColor : '#1d3344'}
                                p={'6px'}
                                margin={'0px 0px 0px 7px'}
                                borderRadius={6}
                            ></Box>
                            <Box
                                bg={'#ebebeb'}
                                margin={'0px 0px 0px 7px'}
                                borderRadius={'10px 0px 0px 10px'}
                                pt={8}
                                display={'flex'}
                                width={'100%'}
                            >
                                <Box>
                                    {/* Image Section  */}
                                    <ImageSelector
                                        minWidth={180}
                                        maxWidth={180}
                                        minHeight={180}
                                        maxHeight={180}
                                        marginLeft="20px"
                                        borderColor={thirdColor ? thirdColor : '#f3b943'}
                                    />
                                </Box>
                                <Box
                                    margin={'0px 0px 0px 20px'}
                                >
                                    <Name
                                        FName={true}
                                        SName={true}
                                        FNameStyle={styles.nameStyle}
                                        SNameStyle={styles.nameStyle}
                                        maxWidth={"260px"}
                                        minWidth={"260px"}
                                        maxChr={12}
                                        fontColor={backgroundColor ? backgroundColor : "#1d3344"}
                                    />
                                    {/* Profession Section  */}
                                    <Profession
                                        professionStyle={styles.ProfessionHybrid}
                                        fontColor={thirdColor ? thirdColor : '#f3b943'}
                                        maxWidth={"260px"}
                                    />
                                    {/* about section */}
                                    <About
                                        maxW={"260px"}
                                        minW={"260px"}
                                        aboutStyle={styles.profile}
                                        fontColor={'#1d3344'}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            width={'33.2%'}
                            transition="0.8s background"
                            margin={'0px 7px 0px 0px'}
                        >
                            <Box
                                bg={backgroundColor ? backgroundColor : '#1d3344'}
                                borderRadius={'0px 8px 0px 0px'}
                                transition="0.8s background"
                            >
                                <Contact
                                    email={true}
                                    phone={true}
                                    location={true}
                                    circleIcon={true}
                                    linkedinURL={true}
                                    website={true}
                                    circleBorderColor={thirdColor ? thirdColor : '#f3b943'}
                                    iconColor={thirdColor ? thirdColor : '#f3b943'}
                                    circleBorderW={'1px'}
                                    iconSize={"20px"}
                                    circleSize={'35px'}
                                    style={styles.contactprofile}
                                    textColor={color ? color : '#fff'}
                                    maxWidth={'180px'}
                                    minWidth={'180px'}
                                    parentStyle={styles.parentStyleContact}
                                    margin={'20px 0px 0px 0px'}
                                />
                            </Box>
                        </Box>
                    </Box>
                    {/* main section */}
                    <Box
                        width={'100%'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        transition="0.8s background"
                    >
                        <Box
                            width={'65%'}
                            transition="0.8s background"
                        >
                            <Box
                                padding={'10px 20px 10px 35px'}
                                transition="0.8s background"
                            >
                                {resumeData?.education?.visible && (
                                    <div className={styles.sideMenu}>
                                        <div
                                            className={styles.sideMenuBox}
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
                                                circleSize="35px"
                                                circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                circleBorderW={'1px'}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <MdCastForEducation
                                                        {...props}
                                                        size={18}
                                                        color={backgroundColor ? backgroundColor : '#1d3344'}
                                                    />
                                                )}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#1d3344"}
                                                margin={"10px 0px 10px 0px"}
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
                                                institutionStyle={styles.institute}
                                                degreeStyle={styles.programText}
                                                dateStyle={styles.date}
                                                locationStyle={styles.date}
                                                maxWidth={"465px"}
                                                maxChr={20}
                                                datewidthmax={"210px"}
                                                textColor={'#000'}
                                                companFontColor={backgroundColor ? backgroundColor : '#1d3344'}
                                            />
                                        </div>
                                    </div>
                                )}
                                {/* work */}
                                {resumeData?.work?.visible && (
                                    <div className={styles.sideMenu}>
                                        <div className={styles.sideMenuBox}>
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
                                                circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                circleBorderW={'1px'}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <BsFillLayersFill
                                                        {...props}
                                                        size={18}
                                                        color={backgroundColor ? backgroundColor : '#1d3344'}
                                                    />
                                                )}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#1d3344"}
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
                                                achieement={true}
                                                summary_placeholder="Company Description"
                                                dateStyle={styles.date}
                                                positionStyle={styles.programText}
                                                companyStyle={styles.institute}
                                                summaryStyle={styles.date}
                                                maxWidth={"465px"}
                                                maxChr={20}
                                                datewidthmax={"460px"}
                                                textColor={'#000'}
                                                companFontColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                ponintsDescription={true}
                                                PointsComponent={({
                                                    items,
                                                    addPoint,
                                                    deletePoint,
                                                    index,
                                                }) => (
                                                    <PointsDescription
                                                        PointsDescriptionStyle={styles.pointsText}
                                                        PointsDescriptionPlaceholder={"Description"}
                                                        data={items}
                                                        addPoint={addPoint}
                                                        deletePoint={deletePoint}
                                                        parentIndex={index}
                                                        maxWidth={'445px'}
                                                        textColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                        BulletContainerStyle={styles.BulletContainerStyle}
                                                        BulletIcon={() => (
                                                            <Box
                                                                w={"100%"}
                                                                bg={thirdColor ? thirdColor : "#f3b943"}
                                                                h={"6px"}
                                                                borderRadius={'100% 100%'}
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
                        <Box
                            width={'33.2%'}
                            transition="0.8s background"
                            margin={'7px 7px 0px 0px'}
                        >
                            <Box
                                bg={'#ebebeb'}
                                borderRadius={'0px 0px 8px 8px'}
                                transition="0.8s background"
                                padding={'0px 0px 0px 2px'}
                            >
                                <Box>
                                    {resumeData?.skills?.visible && (
                                        <div className={styles.sideMenu}>
                                            <div className={styles.width}>
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
                                                    circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                    circleBorderW={'1px'}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <GiSkills
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#1d3344'} />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={backgroundColor ? backgroundColor : "#1d3344"}
                                                    circleSize={'35px'}
                                                    margin={"15px 0px 10px 0px"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                />
                                                {/* Skill Row Components */}
                                                <RowSkill
                                                    skillStyle={styles.skillText}
                                                    maxWidth={"230px"}
                                                    maxChr={20}
                                                    bg={fourthColor ? fourthColor : "#8e99a1"}
                                                    textColor={color ? color : "#fff"}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    {resumeData?.projects?.visible && (
                                        <div className={styles.sideMenu}>
                                            <div className={styles.width}>
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
                                                    circleSize="35px"
                                                    circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                    circleBorderW={'1px'}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <GoProject
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#1d3344'} />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={backgroundColor ? backgroundColor : "#1d3344"}
                                                    minW={225}
                                                    maxW={225}
                                                    margin={"10px 0px 35px 0px"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, project: true })
                                                    }
                                                />
                                                {/* project Component */}
                                                <Project
                                                    project={true}
                                                    duration={true}
                                                    summary={true}
                                                    projectStyle={styles.projectTitleText}
                                                    summaryStyle={styles.description}
                                                    durationStyle={styles.description}
                                                    projectPlaceholder={"Project Name"}
                                                    durationPlaceholder="Project Duration"
                                                    summaryPlaceholder="Project Summary"
                                                    maxWidth={"215px"}
                                                    textColor={"#1d3344"}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    {resumeData?.certifications?.visible && (
                                        <div className={styles.sideMenu}>
                                            <div className={styles.width}>
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
                                                    circleSize="35px"
                                                    circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                    circleBorderW={'1px'}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <TbCertificate
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#1d3344'}
                                                        />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={backgroundColor ? backgroundColor : "#1d3344"}
                                                    minW={225}
                                                    maxW={225}
                                                    margin={"15px 0px 10px 0px"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, certificates: true })
                                                    }
                                                />
                                                {/* Certificate Component */}
                                                <Certificate
                                                    issueDate={true}
                                                    certificate={true}
                                                    institute={true}
                                                    certificateStyle={styles.projectTitleText}
                                                    issueDateStyle={styles.description}
                                                    instituteStyle={styles.description}
                                                    maxWidth={"215px"}
                                                    datewidthmax={"150px"}
                                                    textColor={"#1d3344"}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                                <Box>
                                    {resumeData?.languages?.visible && (
                                        <div className={styles.sideMenu}>
                                            <div className={styles.width}>
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
                                                    circleSize="35px"
                                                    circleBorderColor={backgroundColor ? backgroundColor : '#1d3344'}
                                                    circleBorderW={'1px'}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <IoLanguageOutline
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#1d3344'}
                                                        />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={backgroundColor ? backgroundColor : "#1d3344"}
                                                    minW={225}
                                                    maxW={225}
                                                    margin={"15px 0px 10px 0px"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, languages: true })
                                                    }
                                                />
                                                {/* Language Component */}
                                                <Language
                                                    langStyle={styles.langText}
                                                    maxWidth={"205px"}
                                                    textColor={"#1d3344"}
                                                    margin={'0px 0px 15px 0px'}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}
