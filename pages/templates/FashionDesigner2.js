import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../../src/components/commonSection/Text";
import style from "../../styles/templates/fashion2.module.scss";
import { onBlurField } from "../../store/actions/builderAction";
// import WorkExperience from "../../src/components/commonSection/WorkExperience";
import WorkExperience from "../../src/components/FashionDesigner2/WorkExperience";
import Skills from "../../src/components/FashionDesigner2/Skills";
import EducationHistory from "../../src/components/FashionDesigner2/EducationHistory";
import Name from "../../src/components/commonSection/Name";
import { sampleData } from "../../constants/sampleData";
import { styles } from "../../src/components/componentStyles/template1Style";

import Achievements from "../../src/components/FinancialTemplat/Achievements";

import { Tooltip } from "react-tippy";
import Link from "next/link";
import { Box, Center, Image } from "@chakra-ui/react";
import UnderLineBox from "../../src/components/FashionDesigner2/UnderLineBox";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import ImageSelector from "../../src/components/imageSelector";

class FashionDesigner2 extends Component {
  render() {
    const { resumeData, updater, width } = this.props;
    console.log("resumeData", resumeData);
    return (
      <Box position="relative" overflow="auto">
        <Link href={"/templates"}>
          <Box position="fixed" right="60px" top="40px">
            <Tooltip title="Change Template" arrow distance={20}>
              <Box className={style.swap}>
                <img src="/icons/swap.png" />
              </Box>
            </Tooltip>
          </Box>
        </Link>
        <Box
          padding="30px"
          backgroundColor="white"
          fontFamily="sans-serif"
          margin="auto"
          maxW="1050"
          w={1050}
        >
          <Box className={width < 500 ? "" : style.a4PaperFashion2}>
            <Box>
              {/* <Profile /> */}
              <Box display="flex" flexDirection="row">
                <Box
                  w="100%"
                  minH="10em"
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  backgroundColor="#077BBD"
                  marginTop="10"
                ></Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                maxHeight={"20px"}
              >
                <ImageSelector
                  maxHeight={"12em"}
                  maxWidth={"12em"}
                  minHeight={"12em"}
                  minWidth={"12em"}
                  marginLeft={"10px"}
                  marginTop={"-70%"}
                />
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Name
                  parentContainerStyle="fD2textContainer"
                  FNameStyle="fDesigner2"
                  SNameStyle="fDesigner2a"
                  FName={true}
                  SName={true}
                />
              </Box>
              <Box
                bg="white"
                padding="30px"
                backgroundColor="white"
                fontFamily="sans-serif"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <Box w="40%">
                  <Box>
                    <Text
                      value={resumeData?.aboutMe?.heading}
                      placeholder="Profile"
                      customClass={"manager-f1-heading-title"}
                      path={"aboutme.heading"}
                      editable={false}
                      fontWeight="1.5em"
                    />
                    <Box>
                      <UnderLineBox />
                    </Box>
                    <Box mt="3">
                      <Text
                        value={resumeData?.aboutMe?.body}
                        placeholder="Short and engaging pitch about yourself."
                        path={"aboutMe.body"}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Text
                      value={resumeData?.objective?.Contact}
                      placeholder="My Contact"
                      customClass={"manager-f-heading-title"}
                      path={"objective.contact"}
                      editable={false}
                    />
                    <UnderLineBox />
                    <Box display="flex" mt="2">
                      <AiOutlineMail size="26" />
                      <Box ml={1}>
                        <Text
                          value={resumeData?.profile?.email}
                          placeholder="Email"
                          customClass={"manager-f-name"}
                          path={"profile.email"}
                          margin={"4px"}
                          marginLeft={"8px"}
                          color={"black"}
                        />
                      </Box>
                    </Box>
                    <Box display="flex" mt="1">
                      <AiOutlinePhone size="26" />
                      <Box ml={1}>
                        <Text
                          value={resumeData?.profile?.phone}
                          placeholder="Phone"
                          customClass={"manager-f-name"}
                          path={"profile.phone"}
                          margin={"4px"}
                          marginLeft={"8px"}
                        />
                      </Box>
                    </Box>
                    <Box display="flex" mt="1">
                      <MdLocationOn size="26" />
                      <Box ml={1}>
                        <Text
                          value={resumeData?.profile?.address?.city}
                          placeholder="City"
                          path={"profile.address.city"}
                          customClass={"manager-f-name"}
                          margin={"4px"}
                          marginLeft={"8px"}
                        />
                      </Box>
                    </Box>
                    <Box display="flex" mt="1">
                      <GiSpiderWeb size="26" />
                      <Box ml={1}>
                        <Text
                          value={resumeData?.profile?.websiteURL}
                          placeholder="Website URL"
                          customClass={"manager-f-name"}
                          path={"profile.websiteURL"}
                          margin={"4px"}
                          marginLeft={"8px"}
                        />
                      </Box>
                    </Box>
                    {/* Skills */}
                    {resumeData?.skills?.visible && (
                      <>
                        <Text
                          value={resumeData?.skills?.heading || "Skills"}
                          placeholder="Skills"
                          customClass={"manager-f1-heading-title"}
                          path={"skills.heading"}
                          editable={false}
                          style={styles.workHeading}
                        />
                        <Box>
                          <UnderLineBox />
                        </Box>
                        <Skills
                          data={
                            resumeData?.skills?.items.length
                              ? [...resumeData?.skills?.items]
                              : [...sampleData?.data?.skills?.items]
                          }
                          color={this.props.theme.color}
                          updater={updater}
                        />
                      </>
                    )}
                  </Box>
                </Box>
                <Box w="40%">
                  {/* Education Histroy */}
                  {resumeData?.education?.visible && (
                    <>
                      <Text
                        value={resumeData?.education?.heading}
                        placeholder="EDUCATION"
                        customClass={"manager-f1-heading-title"}
                        path={"education.heading"}
                        editable={false}
                        style={styles.workHeading}
                      />
                      <Box>
                        <UnderLineBox />
                      </Box>
                      <EducationHistory
                        data={
                          resumeData?.education?.items.length
                            ? [...resumeData?.education?.items]
                            : [...sampleData?.data?.education?.items]
                        }
                        color={this.props.theme.color}
                        updater={updater}
                      />
                    </>
                  )}
                  {/* {" Work Experience"} */}
                  {resumeData?.work?.visible && (
                    <>
                      <Box
                        className={`${style.managerTemplateCol} ${style.managerFHeading}`}
                      >
                        <Text
                          value={resumeData?.Professional?.heading}
                          placeholder="Experience"
                          customClass={"manager-f1-heading-title"}
                          color="black"
                          path={"ProfessionalExperience.heading"}
                          editable={false}
                          style={styles.workHeading}
                        />
                        <Box>
                          <UnderLineBox />
                        </Box>

                        <WorkExperience
                          data={
                            resumeData?.work?.items.length
                              ? [...resumeData?.work?.items]
                              : [...sampleData?.data?.work?.items]
                          }
                          color={this.props.theme.color}
                          updater={updater}
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(FashionDesigner2);
