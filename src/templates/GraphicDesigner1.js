import React from "react";
import styles from "../../styles/templates/Graphic.module.css";
import Classes from "../../styles/templates/hybridTemplate.module.css";
import { Box } from "@chakra-ui/react";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import About from "../components/commonSection/About";
import Contact from "../components/commonSection/Contact";
import WorkExperience from "../components/commonSection/WorkExperience";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import {
  EDUCATION,
  SKILL,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import useStoreData from "../components/useStoreData";
import Heading from "../components/commonSection/Heading";
import Skill from "../components/commonSection/Skill";
import Education from "../components/commonSection/Education";

export default function GraphicDesigner1() {
  const { resumeData, theme, updater } = useStoreData();
  const [show, setShow] = useShow();

  return (
    <Box display="flex" minW="830px" maxW="830px" mb={"20px"}>
      <Box w="40%" bgColor="#365B6D" pb="100px" pr={"30px"}>
        <Box mr="5%" mt={"30px"}>
          <Contact
            phone={true}
            phonePlaceholder="123-456-7890"
            email={true}
            emailPlaceholder="abc@gmail.com"
            websitePlaceholder="www.real.com"
            locationPlaceholder="123,House,City"
            website={true}
            location={true}
            circleIcon={true}
            iconColor="black"
            circleBg="white"
            circleSize="35px"
            iconSize="20px"
            direction="row-reverse"
            style={styles.DetailStyle}
            margin={"8px 0px 0px 0px"}
            maxWidth={"220px"}
          />
        </Box>
        <Box margin={"20px 0px 0px 40px"}>
          {resumeData?.education?.visible && (
            <div className={Classes.sideMenu}>
              <div className={Classes.sideMenuBox}>
                {show.education && (
                  <SectionSideMenu
                    onHide={() => setShow({ ...show, education: false })}
                    bg="#006772"
                    iconColor={"#fff"}
                    onDelete={EDUCATION}
                  />
                )}
              </div>
              <div>
                <Heading
                  color={"white"}
                  title="EDUCATION"
                  line={true}
                  fontSize={30}
                  fontWeight={900}
                  lineBg={"white"}
                  margin={"10px 0px 0px 0px"}
                  onSideSectionShow={() =>
                    setShow({ ...show, education: true })
                  }
                />
                <Education
                  institution={true}
                  date={true}
                  maxWidth={"400px"}
                  datewidthmax={"160px"}
                  maxChr={20}
                  summary={true}
                  summaryStyle={styles.Educationdescription}
                  dateStyle={styles.date}
                  institutionStyle={styles.company}
                  institution_placeholder={"College"}
                  parentContainerStyle={styles.mt}
                />
              </div>
            </div>
          )}
        </Box>
        {/* skill */}
        <Box margin={"20px 0px 0px 40px"}>
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
                  font-size={30}
                  font-weight={900}
                  color={"white"}
                  title="SKILLS"
                  line={true}
                  lineBg={"white"}
                  fontSize={30}
                  fontWeight={900}
                  margin={"10px 0px 0px 0px"}
                  onSideSectionShow={() => setShow({ ...show, skills: true })}
                />
                <Skill
                  skillStyle={styles.skillText}
                  parentContainerStyle={styles.mt}
                  minW={"220px"}
                  maxW={"220px"}
                />
              </div>
            </div>
          )}
        </Box>
      </Box>

      <Box w="60%" h="auto" m="0px 0px 30px 30px" pl={"5px"} pb={"80px"}>
        <Box
          bgColor="#F2F1EC"
          display="flex"
          flexDir="column"
          alignItems="center"
          p="25px"
          pb="65px"
        >
          <Name
            FName={true}
            SName={true}
            maxChr={38}
            direction="column"
            FNameStyle={styles.name}
            SNameStyle={styles.name}
          />
          <Profession
            margin={"0px 0px 0px 0px"}
            professionStyle={styles.profession}
            professionPlaceholder="PROFESSION"
          />
        </Box>

        <Box margin={"20px 0px 0px 0px"}>
          <Heading
            color={"black"}
            title="ABOUT ME"
            line={true}
            fontSize={23}
            fontWeight={900}
          />
          <About
            aboutStyle={styles.description}
            aboutPlaceholder={"Short and engaging pitch about yourself"}
          />
        </Box>
        {/* work */}
        <Box margin={"20px 0px 0px 3px"}>
          {resumeData?.work?.visible && (
            <div className={Classes.sideMenu}>
              <div className={Classes.sideMenuBox}>
                {show.work && (
                  <SectionSideMenu
                    onHide={() => setShow({ ...show, work: false })}
                    bg="#006772"
                    iconColor={"#fff"}
                    onDelete={WORK}
                  />
                )}
              </div>
              <div>
                <Heading
                  line={true}
                  color={"black"}
                  title="EXPERIENCE"
                  fontSize={22}
                  fontWeight={900}
                  onSideSectionShow={() => setShow({ ...show, work: true })}
                />
                <WorkExperience
                  date={true}
                  maxWidth={"400px"}
                  datewidthmax={"200px"}
                  maxChr={20}
                  position={true}
                  company={true}
                  dateStyle={Classes.date}
                  positionStyle={Classes.programText}
                  companyStyle={Classes.institute}
                />
              </div>
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}
