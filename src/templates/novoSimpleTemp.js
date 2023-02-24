import React from 'react'
import styles from "../../styles/novoSimpleTemp.module.css";
import { Box, Flex } from "@chakra-ui/react";
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
import Language from "../components/commonSection/Language";
import Interest from "../components/commonSection/Interest";
import useShow from "../components/tempSectionSide/useShow";
import { useSelector } from "react-redux";
import {
    EDUCATION,
    INTEREST,
    LANGUAGES,
    PROJECT,
    SKILL,
    WORK,
} from "../components/tempSectionSide/SectionSideConstant";

export default function Novo_Simple_Temp() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
        (store) => store.themeReducer.theme
    );
    // console.log('thirdColor', thirdColor);
    // custom Hook For Template
    const [show, setShow] = useShow();

    return (
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
                <Box
                    px={8}
                    width={'100%'}
                    pb={2}
                >
                    <Name
                        FName={true}
                        SName={true}
                        FNameStyle={styles.nameStyle}
                        SNameStyle={styles.nameStyle}
                        maxWidth={"770px"}
                        minWidth={"770px"}
                        maxChr={38}
                        fontColor={backgroundColor ? backgroundColor : "#00232b"}
                    />
                    {/* Profession Section  */}
                    <Profession
                        professionStyle={styles.ProfessionHybrid}
                        fontColor={thirdColor ? thirdColor : '#708bb2'}
                        maxWidth={"770px"}
                    />
                    <About
                        maxW={"99%"}
                        minW={"99%"}
                        aboutStyle={styles.profile}
                        fontColor={'#00232b'}
                    />
                </Box>
                <Box
                    width={'100%'}
                    display={'flex'}
                >
                    <Box
                        width={'45%'}
                        pl={'27px'}
                    >
                        {/* Contact Section  */}
                        <Heading
                            title={'Personal Info'}
                            color={backgroundColor ? backgroundColor : '#708bb2'}
                            margin={'5px 0px 0px 7px'}
                            fontWeight={700}
                            line={true}
                            lineH={'1px'}
                            lineW={'312px'}
                            lineBg={'#ebebeb'}
                        />
                        <Contact
                            email={true}
                            phone={true}
                            location={true}
                            circleIcon={true}
                            linkedinURL={true}
                            iconColor={backgroundColor ? backgroundColor : '#708bb2'}
                            iconSize={"20px"}
                            style={styles.contactprofile}
                            textColor={'#00232b'}
                            maxWidth={'280px'}
                            minWidth={'280px'}
                            parentStyle={styles.parentStyleContact}
                        />
                        <Box ml={'-23px'}>
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
                                            title="Skills"
                                            fontSize="23px"
                                            fontWeight={"bold"}
                                            color={backgroundColor ? backgroundColor : "#708bb2"}
                                            minW={280}
                                            maxW={280}
                                            margin={"10px 0px 10px 0px"}
                                            line={true}
                                            lineW={'312px'}
                                            lineBg={'#ebebeb'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, skills: true })
                                            }
                                        />
                                        {/* Skill Row Components */}
                                        <RowSkill
                                            skillStyle={styles.skillText}
                                            maxWidth={"310px"}
                                            maxChr={28}
                                            bg={fourthColor ? fourthColor : "#7f9195"}
                                            textColor={color ? color : "#fff"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        <Box ml={'-23px'}>
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
                                            title="Personal Projects"
                                            fontSize="23px"
                                            fontWeight={"bold"}
                                            color={backgroundColor ? backgroundColor : "#708bb2"}
                                            minW={310}
                                            maxW={310}
                                            line={true}
                                            lineW={'312px'}
                                            lineBg={'#ebebeb'}
                                            margin={"15px 0px 8px 0px"}
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
                                            maxWidth={"310px"}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        <Box ml={'-23px'}>
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
                                            title="Languages"
                                            fontSize="23px"
                                            fontWeight={"bold"}
                                            color={backgroundColor ? backgroundColor : "#708bb2"}
                                            minW={280}
                                            maxW={280}
                                            margin={"15px 0px 0px 0px"}
                                            line={true}
                                            lineW={'312px'}
                                            lineBg={'#ebebeb'}
                                            onSideSectionShow={() =>
                                                setShow({ ...show, languages: true })
                                            }
                                        />
                                        {/* Language Component */}
                                        <Language
                                            langStyle={styles.projectTitleText}
                                            textColor={'#00232b'}
                                            rating={true}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                    </Box>
                    <Box
                        width={'55%'}
                        pl={'27px'}
                    >
                        <Box>
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
                                            title="Education"
                                            fontSize="23px"
                                            fontWeight={"bold"}
                                            color={backgroundColor ? backgroundColor : "#708bb2"}
                                            margin={"0px 0px 10px 0px"}
                                            line={true}
                                            lineW={'400px'}
                                            lineBg={'#ebebeb'}
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
                                            maxWidth={"400px"}
                                            maxChr={20}
                                            datewidthmax={"210px"}
                                            textColor={"#00232b"}
                                            companFontColor={backgroundColor ? backgroundColor : '#708bb2'}
                                            textFieldMargin={'-5px'}
                                        />
                                    </div>
                                </div>
                            )}
                        </Box>
                        <Box>
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
                                            title="Work Experience"
                                            fontSize="23px"
                                            fontWeight={"bold"}
                                            color={backgroundColor ? backgroundColor : "#708bb2"}
                                            minW={"full"}
                                            maxW="full"
                                            margin={"10px 0px"}
                                            line={true}
                                            lineW={'400px'}
                                            lineBg={'#ebebeb'}
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
                                            maxWidth={"400px"}
                                            maxChr={20}
                                            datewidthmax={"400px"}
                                            textFieldMargin={'-5px'}
                                            textColor={'#00232b'}
                                            companFontColor={backgroundColor ? backgroundColor : '#708bb2'}
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
                                                    textColor={backgroundColor ? backgroundColor : '#708bb2'}
                                                    BulletContainerStyle={styles.BulletContainerStyle}
                                                    BulletIcon={() => (
                                                        <Box
                                                            w={"100%"}
                                                            bg={thirdColor ? thirdColor : "#708bb2"}
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
                        <Box ml={'-32px'}>
                            {resumeData?.hobbies?.visible && (
                                <>
                                    <div className={styles.sideMenu}>
                                        <div className={styles.width}>
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
                                                title="Interest"
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#708bb2"}
                                                line={true}
                                                lineW={'400px'}
                                                lineBg={'#ebebeb'}
                                                margin={"0px 0px 8px 0px"}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, interest: true })
                                                }
                                            />
                                            {/* Interest Component  */}
                                            <Interest
                                                interestStyle={styles.langText}
                                                maxWidth={"385px"}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}
