import React from 'react'
import styles from "../../styles/novoEasyTemp.module.css";
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
    SKILL,
    WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { IoLanguageOutline } from "react-icons/io5";
import { FaHorseHead, FaUser } from "react-icons/fa";

export default function Novo_Easy_Temp() {
    let resumeData = useSelector((state) => state.editorReducer.resumeData);
    const { backgroundColor, color, thirdColor, fourthColor } = useSelector(
        (store) => store.themeReducer.theme
    );
    // console.log('thirdColor', thirdColor);
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
                    pt={8}
                    pb={10}
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
                            maxWidth={"385px"}
                            minWidth={"385px"}
                            direction={'row'}
                            maxChr={38}
                            fontColor={backgroundColor ? backgroundColor : "#00232b"}
                        />
                        {/* Profession Section  */}
                        <Profession
                            professionStyle={styles.ProfessionHybrid}
                            fontColor={thirdColor ? thirdColor : '#1b4f77'}
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
                            width={'55%'}
                            pl={'34px'}
                        >
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
                                                circleSize="38px"
                                                circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <BsFillLayersFill
                                                        {...props}
                                                        size={18}
                                                        color={"white"}
                                                    />
                                                )}
                                                iconBorderRadius={'5px 5px'}
                                                line={true}
                                                lineW={'312px'}
                                                lineBg={'#ebebeb'}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#1b4f77"}
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
                                                maxWidth={"350px"}
                                                maxChr={20}
                                                datewidthmax={"350px"}
                                                textColor={'#00232b'}
                                                textFieldMargin={'-5px'}
                                                companFontColor={backgroundColor ? backgroundColor : '#1b4f77'}
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
                                                        maxWidth={'335px'}
                                                        textColor={backgroundColor ? backgroundColor : '#1b4f77'}
                                                        BulletContainerStyle={styles.BulletContainerStyle}
                                                        BulletIcon={() => (
                                                            <Box
                                                                w={"100%"}
                                                                bg={thirdColor ? thirdColor : "#1b4f77"}
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
                                                circleSize="38px"
                                                circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <MdCastForEducation
                                                        {...props}
                                                        size={18}
                                                        color={"white"}
                                                    />
                                                )}
                                                iconBorderRadius={'5px 5px'}
                                                line={true}
                                                lineW={'312px'}
                                                lineBg={'#ebebeb'}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#1b4f77"}
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
                                                institutionStyle={styles.institute}
                                                degreeStyle={styles.programText}
                                                dateStyle={styles.date}
                                                locationStyle={styles.date}
                                                maxWidth={"350px"}
                                                maxChr={20}
                                                datewidthmax={"210px"}
                                                textColor={"#000"}
                                                textFieldMargin={'-5px'}
                                                companFontColor={backgroundColor ? backgroundColor : '#1b4f77'}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                            <Box ml={'-31px'}>
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
                                                    color={backgroundColor ? backgroundColor : "#1b4f77"}
                                                    line={true}
                                                    lineW={'312px'}
                                                    lineBg={'#ebebeb'}
                                                    margin={"10px 0px 8px 0px"}
                                                    circleSize="38px"
                                                    circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                    circleIconHeading={true}
                                                    icon={(props) => (
                                                        <FaHorseHead {...props} size={18} color={"white"} />
                                                    )}
                                                    iconBorderRadius={'5px 5px'}
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
                        <Box
                            width={'45%'}
                        >
                            <Box pt={'5px'}>
                                <Heading
                                    title={'Personal Info'}
                                    color={backgroundColor ? backgroundColor : '#1b4f77'}
                                    margin={'5px 0px 10px 7px'}
                                    fontWeight={700}
                                    circleSize="38px"
                                    circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                    circleIconHeading={true}
                                    icon={(props) => (
                                        <FaUser
                                            {...props}
                                            size={18}
                                            color={"white"}
                                        />
                                    )}
                                    iconBorderRadius={'5px 5px'}
                                    lineH={'1px'}
                                    line={true}
                                    lineW={'280px'}
                                    lineBg={'#ebebeb'}
                                />
                                <Contact
                                    email={true}
                                    phone={true}
                                    location={true}
                                    circleIcon={true}
                                    linkedinURL={true}
                                    iconColor={backgroundColor ? backgroundColor : '#1b4f77'}
                                    iconSize={"20px"}
                                    style={styles.contactprofile}
                                    textColor={'#00232b'}
                                    maxWidth={'280px'}
                                    minWidth={'280px'}
                                    parentStyle={styles.parentStyleContact}
                                />
                            </Box>
                            <Box ml={'-20px'}>
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
                                                circleSize="38px"
                                                circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <GiSkills {...props} size={18} color={"white"} />
                                                )}
                                                color={backgroundColor ? backgroundColor : "#1b4f77"}
                                                minW={280}
                                                maxW={280}
                                                margin={"10px 0px 10px 0px"}
                                                iconBorderRadius={'5px 5px'}
                                                line={true}
                                                lineW={'280px'}
                                                lineBg={'#ebebeb'}
                                                onSideSectionShow={() =>
                                                    setShow({ ...show, skills: true })
                                                }
                                            />
                                            {/* Skill Row Components */}
                                            <RowSkill
                                                skillStyle={styles.skillText}
                                                skillPlaceholder={'Bussiness Process'}
                                                maxWidth={"330px"}
                                                maxChr={28}
                                                bg={fourthColor ? fourthColor : "#8da7bb"}
                                                textColor={color ? color : "#fff"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                            <Box ml={'-20px'}>
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
                                                title="Certificates"
                                                circleSize="38px"
                                                circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <TbCertificate {...props} size={18} color={"white"} />
                                                )}
                                                fontSize="23px"
                                                fontWeight={"bold"}
                                                color={backgroundColor ? backgroundColor : "#1b4f77"}
                                                minW={250}
                                                maxW={250}
                                                iconBorderRadius={'5px 5px'}
                                                line={true}
                                                lineW={'280px'}
                                                lineBg={'#ebebeb'}
                                                margin={"15px 0px 8px 0px"}
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
                                                maxWidth={"325px"}
                                                datewidthmax={"120px"}
                                            />
                                        </div>
                                    </div>
                                )}
                            </Box>
                            <Box ml={'-20px'}>
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
                                                color={backgroundColor ? backgroundColor : "#1b4f77"}
                                                minW={280}
                                                maxW={280}
                                                circleSize="38px"
                                                circleBg={backgroundColor ? backgroundColor : "#1b4f77"}
                                                circleIconHeading={true}
                                                icon={(props) => (
                                                    <IoLanguageOutline
                                                        {...props}
                                                        size={18}
                                                        color={"white"}
                                                    />
                                                )}
                                                margin={"15px 0px 10px 0px"}
                                                iconBorderRadius={'5px 5px'}
                                                line={true}
                                                lineW={'280px'}
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
                    </Box>
                </Box>
            </Flex>
        </>
    )
}
