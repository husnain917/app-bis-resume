import React from 'react'
import styles from "../../styles/novoITtemp.module.css";
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
import { FaUser } from "react-icons/fa";

export default function Novo_IT_Temp() {
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
                    pt={4}
                    pb={2}
                    bg={"#fff"}
                    borderRadius={6}
                    borderWidth="1px"
                    borderColor={"#00000023"}
                >
                    {/* Main section */}
                    <Box
                        width={'100%'}
                        display={'flex'}
                        transition="0.8s background"
                    >
                        <Box
                            width={'63%'}
                            transition="0.8s background"
                        >
                            <Box
                                display={'flex'}
                                width={'100%'}
                                pt={4}
                                transition="0.8s background"
                            >
                                <Box>
                                    {/* Image Section  */}
                                    <ImageSelector
                                        minWidth={190}
                                        maxWidth={190}
                                        minHeight={190}
                                        maxHeight={190}
                                        marginLeft="30px"
                                        borderColor={backgroundColor ? backgroundColor : '#313b47'}
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
                                        maxWidth={"250px"}
                                        minWidth={"250px"}
                                        maxChr={38}
                                        fontColor={backgroundColor ? backgroundColor : "#2b343d"}
                                    />
                                    {/* Profession Section  */}
                                    <Profession
                                        professionStyle={styles.ProfessionHybrid}
                                        fontColor={thirdColor ? thirdColor : '#bf965c'}
                                        maxWidth={"250px"}
                                    />
                                </Box>
                            </Box>
                            <Box
                                width={'83%'}
                                mx={'auto'}
                                transition="0.8s background"
                            >
                                <Heading
                                    title={'ABOUT ME'}
                                    color={backgroundColor ? backgroundColor : '#313b47'}
                                    margin={'50px 0px 10px 0px'}
                                    fontWeight={700}
                                    circleIconHeading={true}
                                    circleBg={backgroundColor ? backgroundColor : '#313b47'}
                                    circleSize={'35px'}
                                    iconBorderRadius={'10px 10px'}
                                    icon={(props) => (
                                        <FaUser
                                            color={color ? color : '#fff'}
                                            size={18}
                                            {...props}
                                        />
                                    )}
                                />
                                <About
                                    maxW={"100%"}
                                    minW={"100%"}
                                    aboutStyle={styles.profile}
                                    fontColor={'#313b47'}
                                />
                            </Box>
                            <Box
                                padding={'0px 20px 10px 45px'}
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
                                                circleBg={backgroundColor ? backgroundColor : "#313b47"}
                                                circleIconHeading={true}
                                                iconBorderRadius={'10px 10px'}
                                                icon={(props) => (
                                                    <MdCastForEducation
                                                        {...props}
                                                        size={18}
                                                        color={color ? color : '#fff'}
                                                    />
                                                )}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#313b47"}
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
                                                maxWidth={"432px"}
                                                maxChr={20}
                                                datewidthmax={"210px"}
                                                textColor={"#000"}
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
                                                circleBg={backgroundColor ? backgroundColor : "#313b47"}
                                                circleIconHeading={true}
                                                iconBorderRadius={'10px 10px'}
                                                icon={(props) => (
                                                    <BsFillLayersFill
                                                        {...props}
                                                        size={18}
                                                        color={color ? color : '#fff'}
                                                    />
                                                )}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#313b47"}
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
                                                maxWidth={"432px"}
                                                maxChr={20}
                                                datewidthmax={"432px"}
                                                textColor={'#000'}
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
                                                        maxWidth={'370px'}
                                                        textColor={backgroundColor ? backgroundColor : '#000'}
                                                        BulletContainerStyle={styles.BulletContainerStyle}
                                                        BulletIcon={() => (
                                                            <Box
                                                                w={"100%"}
                                                                bg={thirdColor ? thirdColor : "#eaad42"}
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
                            width={'35%'}
                        >
                            <Box
                                bg={backgroundColor ? backgroundColor : '#313b47'}
                                borderRadius={8}
                                mb={2}
                                transition="0.8s background"
                            >
                                <Contact
                                    email={true}
                                    phone={true}
                                    location={true}
                                    circleIcon={true}
                                    linkedinURL={true}
                                    website={true}
                                    circleBg={color ? color : '#fff'}
                                    iconColor={backgroundColor ? backgroundColor : '#313b47'}
                                    iconSize={"20px"}
                                    circleSize={'35px'}
                                    iconBorderRadius={'10px 10px'}
                                    style={styles.contactprofile}
                                    textColor={color ? color : '#fff'}
                                    maxWidth={'190px'}
                                    minWidth={'190px'}
                                    parentStyle={styles.parentStyleContact}
                                    margin={'15px 0px 0px 0px'}
                                />
                            </Box>
                            <Box
                                bg={backgroundColor ? backgroundColor : '#313b47'}
                                borderRadius={8}
                                pl={'5px'}
                                mb={2}
                                transition="0.8s background"
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
                                                    circleBg={color ? color : "#fff"}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <GiSkills
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#313b47'} />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={color ? color : "#fff"}
                                                    circleSize={'35px'}
                                                    iconBorderRadius={'10px 10px'}
                                                    margin={"20px 0px 10px 0px"}
                                                    onSideSectionShow={() =>
                                                        setShow({ ...show, skills: true })
                                                    }
                                                />
                                                {/* Skill Row Components */}
                                                <RowSkill
                                                    skillStyle={styles.skillText}
                                                    skillPlaceholder={'Bussiness Process'}
                                                    maxWidth={"230px"}
                                                    maxChr={20}
                                                    bg={fourthColor ? fourthColor : "#95999e"}
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
                                                    circleBg={color ? color : "#fff"}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <GoProject
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#313b47'} />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={color ? color : "#fff"}
                                                    minW={225}
                                                    maxW={225}
                                                    margin={"10px 0px 35px 0px"}
                                                    iconBorderRadius={'10px 10px'}
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
                                                    maxWidth={"225px"}
                                                    textColor={color ? color : '#fff'}
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
                                                    circleBg={color ? color : "#fff"}
                                                    circleIconHeading={true}
                                                    iconBorderRadius={'10px 10px'}
                                                    icon={(props) => (
                                                        <TbCertificate
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#313b47'}
                                                        />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={color ? color : "#fff"}
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
                                                    maxWidth={"225px"}
                                                    datewidthmax={"150px"}
                                                    textColor={color ? color : '#fff'}
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
                                                    circleBg={color ? color : "#fff"}
                                                    circleIconHeading={true}
                                                    iconBorderRadius={'10px 10px'}
                                                    icon={(props) => (
                                                        <IoLanguageOutline
                                                            {...props}
                                                            size={18}
                                                            color={backgroundColor ? backgroundColor : '#313b47'}
                                                        />
                                                    )}
                                                    fontSize="23px"
                                                    fontWeight={"bold"}
                                                    color={color ? color : "#fff"}
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
                                                    maxWidth={"215px"}
                                                    textColor={color ? color : '#fff'}
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
