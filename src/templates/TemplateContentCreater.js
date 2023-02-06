import React from "react";
import { Box } from "@chakra-ui/react";
import Classes from "../../styles/templates/templateContentCreater.module.css";
import Classe from "../../styles/templates/flightAttendant.module.css";
import { useSelector } from "react-redux";
import Name from "../components/commonSection/Name";
import Profession from "../components/commonSection/Profession";
import About from "../components/commonSection/About";
import Contact from "../components/commonSection/Contact";
import Heading from "../components/commonSection/Heading";
import Education from "../components/commonSection/Education";
import useShow from "../components/tempSectionSide/useShow";
import SectionSideMenu from "../components/tempSectionSide/SectionSideMenu";
import WorkExperience from "../components/commonSection/WorkExperience";
import {
  EDUCATION,
  WORK,
} from "../components/tempSectionSide/SectionSideConstant";
import ImageSelector from "../components/imageSelector";

export default function TemplateContentCreater() {
  // redux data
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const [show, setShow] = useShow();

  return (
    <Box className={Classes.mainDiv}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box className={Classes.innerMainDiv} mb={"20px"}>
          <Box className={Classes.innerMainDiv1}>
            <Box display="flex" flexDirection="row">
              <Box w="50%" marginTop="30px">
                <Box style={{ overflow: "hidden" }}>
                  <Name
                    FName={true}
                    SName={true}
                    direction="column"
                    FNameStyle={Classes.name}
                    SNameStyle={Classes.name}
                  />
                </Box>
                <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" ml="10%"></Box>
                <Profession professionStyle={Classes.profession} />
              </Box>
              <Box
                w="50%"
                height={300}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box borderRadius="100%">
                  <ImageSelector height={"200px"} width={"200px"} />
                </Box>
              </Box>
            </Box>
            <Box className={Classes.ProfileIcons}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                padding="10px 0px"
              >
                <Box display="flex" mt="1">
                  <Contact
                    location={true}
                    locationPlaceholder={"City"}
                    iconSize={"30px"}
                    iconColor="black"
                    circleIcon={true}
                    style={Classes.contact}
                    maxWidth={"200px"}
                  />
                </Box>
                <Box display="flex" mt="1">
                  <Contact
                    email={true}
                    iconSize={"30px"}
                    iconColor="black"
                    circleIcon={true}
                    maxWidth={"200px"}
                    style={Classes.contact}
                  />
                </Box>
                <Box display="flex" mt="1">
                  <Contact
                    phone={true}
                    iconSize={"30px"}
                    iconColor="black"
                    maxWidth={"200px"}
                    circleIcon={true}
                    style={Classes.contact}
                  />
                </Box>
              </Box>
            </Box>
            <Box className={Classes.profileDiv}>
              <About
                aboutStyle={Classes.description}
                aboutPlaceholder={"Profile Summary"}
              />
              <Box margin={"30px 0px 10px 0px"}>
                {resumeData?.work?.visible && (
                  <div className={Classe.sideMenu}>
                    <div className={Classe.sideMenuBox}>
                      {show?.work && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, work: false })}
                          onDelete={WORK}
                          bg="#006772"
                          iconColor={"#fff"}
                        />
                      )}
                    </div>
                    <div>
                      <div className={Classes.workExp}>
                        <div className={Classes.bgImage}>
                          <Box marginLeft="30%">
                            <Heading
                              title="WORK EXPERIENCE"
                              fontSize="23px"
                              fontWeight={900}
                              minW="600px"
                              maxW="600px"
                              onSideSectionShow={() =>
                                setShow({ ...show, work: true })
                              }
                            />
                          </Box>
                        </div>
                      </div>
                      <WorkExperience
                        company={true}
                        position={true}
                        date={true}
                        summary={true}
                        companyStyle={Classe.company}
                        positionStyle={Classe.programText}
                        dateStyle={Classe.date}
                        summaryStyle={Classe.description}
                        parentContainerStyle={Classes.rightContainerWork}
                        textColor="#000000"
                        maxWidth={"720px"}
                        datewidthmax={"220px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
              {/* education */}
              <Box margin={"30px 0px 10px 0px"}>
                {resumeData?.education?.visible && (
                  <div className={Classe.sideMenu}>
                    <div className={Classe.sideMenuBox}>
                      {show?.education && (
                        <SectionSideMenu
                          onHide={() => setShow({ ...show, education: false })}
                          onDelete={EDUCATION}
                          bg="#006772"
                          iconColor={"#fff"}
                        />
                      )}
                    </div>
                    <div>
                      <div className={Classes.workExp}>
                        <div className={Classes.bgImage}>
                          <Box marginLeft="30%">
                            <Heading
                              title="EDUCATION"
                              fontSize="23px"
                              fontWeight={900}
                              margin={"0px 0px 10px 0px"}
                              minW="600px"
                              maxW="600px"
                              onSideSectionShow={() =>
                                setShow({ ...show, education: true })
                              }
                            />
                          </Box>
                        </div>
                      </div>
                      <Education
                        degree={true}
                        institution={true}
                        date={true}
                        summary={true}
                        parentContainerStyle={Classes.rightContainerWork}
                        institutionStyle={Classe.company}
                        degreeStyle={Classe.programText}
                        dateStyle={Classe.date}
                        summaryStyle={Classe.description}
                        degree_placeholder="Study Program"
                        textColor="#000000"
                        maxWidth={"720px"}
                        datewidthmax={"220px"}
                      />
                    </div>
                  </div>
                )}
              </Box>
            </Box>
            <Box bgColor="#E2CDC1" w="100%" h="5px" mt="2%" mb="5%"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
