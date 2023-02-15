import React from 'react'
import styles from "../../styles/novoHybirdTemp.module.css";
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
import { MdCastForEducation } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";
import { GiSkills, GiOrganigram } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { IoLanguageOutline } from "react-icons/io5";
import { FaHorseHead } from "react-icons/fa";

export default function Novo_Hybird_Temp() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { backgroundColor, color, thirdColor } = useSelector(
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
          pb={2}
          bg={backgroundColor ? backgroundColor : "white"}
          borderRadius={6}
          borderWidth="1px"
          borderColor={"#00000023"}
        >
          {/* Ist section */}
          <Box
            display={'flex'}
            width={'100%'}
          >
            <Box
              mb={'-30px'}
            >
              {/* Image Section  */}
              <ImageSelector
                minWidth={180}
                maxWidth={180}
                minHeight={180}
                maxHeight={180}
                marginLeft="40px"
                borderColor={backgroundColor ? backgroundColor : ""}
              />
            </Box>
            <Box
              margin={'15px 0px 5px 30px'}
            >
              <Name
                FName={true}
                SName={true}
                direction="row"
                FNameStyle={styles.nameStyle}
                SNameStyle={styles.nameStyle}
                maxWidth={"270px"}
                minWidth={"270px"}
                maxChr={38}
                fontColor={color ? color : "#432543"}
              />
              {/* Profession Section  */}
              <Profession
                professionStyle={styles.ProfessionHybrid}
                fontColor={color ? color : '#eaad42'}
                maxWidth={"540px"}
              />
            </Box>
          </Box>
          {/* second section */}
          <Box
            display={'flex'}
            justifyContent={'center'}
            bg={color ? color : "#432543"}
            margin={'0px 10px 0px 10px'}
            mt={'-10px'}
            borderRadius={'8px 8px 0px 0px'}
            padding={'5px 0px 15px 0px'}
          >
            <Box width={'30%'}></Box>
            <Box
              width={'70%'}
            >
              <About
                maxW={"96%"}
                minW={"96%"}
                aboutStyle={styles.profile}
                fontColor={thirdColor ? thirdColor : '#fff'}
              />
            </Box>
          </Box>
          {/* third section */}
          <Box
            bg={color ? color : "#eaad42"}
            margin={'0px 10px 10px 10px'}
            borderRadius={'0px 0px 8px 8px'}
            padding={'5px 20px 15px 40px'}
          >
            {/* Contact Section  */}
            <Contact
              email={true}
              phone={true}
              location={true}
              circleIcon={true}
              linkedinURL={true}
              iconColor={color ? color : "#fff"}
              iconSize={"20px"}
              style={styles.contactprofile}
              textColor={thirdColor ? thirdColor : '#fff'}
              maxWidth={'340px'}
              minWidth={'340px'}
              parentStyle={styles.parentStyleContact}
              parentDirection={'row'}
            />
          </Box>
          {/* forth section */}
          <Box
            width={'100%'}
            display={'flex'}
          >
            <Box
              width={'55%'}
              pl={'35px'}
              pt={'10px'}
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
                        title="EDUCATION"
                        circleSize="38px"
                        circleBg="#432543"
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
                        color="#432543"
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
                        maxWidth={"400px"}
                        maxChr={20}
                        datewidthmax={"210px"}
                        textColor={color ? color : "#432543"}
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
                        title="WORK EXPERIENCE"
                        circleSize="38px"
                        circleBg="#432543"
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
                        color="#432543"
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
                        maxWidth={"400px"}
                        maxChr={20}
                        datewidthmax={"400px"}
                        textColor={color ? color : '#432543'}
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
                            textColor={thirdColor}
                            BulletContainerStyle={styles.BulletContainerStyle}
                            BulletIcon={() => (
                              <Box
                                w={"100%"}
                                bg={color ? color : "#eaad42"}
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
              width={'44%'}
              bg="#ebebeb"
              borderRadius={6}
              pb={2}
              pl={"5px"}
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
                        circleSize="38px"
                        circleBg="#432543"
                        circleIconHeading={true}
                        icon={(props) => (
                          <GiSkills {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#432543"
                        minW={250}
                        maxW={250}
                        margin={"10px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, skills: true })
                        }
                      />
                      {/* Skill Row Components */}
                      <RowSkill
                        skillStyle={styles.skillText}
                        maxWidth={"250px"}
                        maxChr={20}
                        bg={color ? color : "#a192a1"}
                        textColor={backgroundColor ? backgroundColor : "#fff"}
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
                        circleSize="38px"
                        circleBg="#432543"
                        circleIconHeading={true}
                        icon={(props) => (
                          <GoProject {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#432543"
                        minW={250}
                        maxW={250}
                        margin={"20px 0px 15px 0px"}
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
                        maxWidth={"300px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
              <Box>
                {resumeData?.organization?.visible && (
                  <div className={styles.sideMenu}>
                    <div className={styles.width}>
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
                        circleBg="#432543"
                        circleIconHeading={true}
                        icon={(props) => (
                          <GiOrganigram {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#432543"
                        minW={250}
                        maxW={250}
                        margin={"15px 0px 8px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, organization: true })
                        }
                      />
                      {/* Organization Component */}
                      <Organization
                        organization={true}
                        date={true}
                        role={true}
                        organizationStyle={styles.projectTitleText}
                        dateStyle={styles.description}
                        roleStyle={styles.description}
                        rolePlaceholder="Role"
                        maxWidth={"300px"}
                        datewidthmax={"135px"}
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
                        circleSize="38px"
                        circleBg="#432543"
                        circleIconHeading={true}
                        icon={(props) => (
                          <TbCertificate {...props} size={18} color={"white"} />
                        )}
                        fontSize="23px"
                        fontWeight={"bold"}
                        color="#432543"
                        minW={250}
                        maxW={250}
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
                        maxWidth={"295px"}
                        datewidthmax={"120px"}
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
                        circleSize="38px"
                        circleBg="#432543"
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
                        color="#432543"
                        minW={250}
                        maxW={250}
                        margin={"15px 0px 8px 0px"}
                        onSideSectionShow={() =>
                          setShow({ ...show, languages: true })
                        }
                      />
                      {/* Language Component */}
                      <Language
                        langStyle={styles.projectTitleText}
                        maxWidth={"285px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
              <Box>
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
                          title="INTEREST"
                          circleSize="38px"
                          circleBg="#432543"
                          circleIconHeading={true}
                          icon={(props) => (
                            <FaHorseHead {...props} size={18} color={"white"} />
                          )}
                          fontSize="23px"
                          fontWeight={"bold"}
                          color="#432543"
                          minW={250}
                          maxW={250}
                          margin={"15px 0px 8px 0px"}
                          onSideSectionShow={() =>
                            setShow({ ...show, interest: true })
                          }
                        />
                        {/* Interest Component  */}
                        <Interest
                          dndDirection="horizontal"
                          interestStyle={styles.langText}
                          maxBoxWidth={"240px"}
                          maxChr={20}
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
    </>
  )
}
