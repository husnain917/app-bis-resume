import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "../../src/components/salesRepresentative/index";
import style from "../../styles/templates/salesRepresentative.module.scss";
import { onBlurField } from "../../store/actions/builderAction";

import WorkExperience from "../../src/components/salesRepresentative/WorkExperience";
import Skills from "../../src/components/salesRepresentative/Skills";
import EducationHistory from "../../src/components/salesRepresentative/EducationHistory";
import Reference from "../../src/components/salesRepresentative/Reference";

import Profile from "../../src/components/salesRepresentative/Profile";
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

class Manager extends Component {
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
              <Box display="flex" flexDirection="row" background={"whitesmoke"}>
                <Box w="20%" minH="25em" backgroundColor="#DBCABA"></Box>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                background={"whitesmoke"}
              >
                <Box
                  background={"whitesmoke"}
                  fontFamily="sans-serif"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  marginTop={"-41%"}
                  width="92%"
                >
                  <Box
                    w="40%"
                    borderColor={"black"}
                    borderWidth="1px"
                    padding="15px"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      marginTop={"3"}
                    >
                      <Image
                        src="/Profile.jpeg"
                        h={"16em"}
                        w={"16em"}
                        borderRadius="50%"
                      />
                    </Box>
                    <Box padding={"5"}>
                      <Box>
                        <Text
                          value={resumeData?.objective?.Contact}
                          placeholder="My Contact"
                          customclass={"manager-f-heading-title"}
                          path={"objective.contact"}
                          editable={false}
                        />

                        <Box display="flex" mt="2">
                          <AiOutlineMail size="26" />

                          <Text
                            value={resumeData?.profile?.email}
                            placeholder="Email"
                            // customclass={"manager-f-name"}
                            path={"profile.email"}
                            margin={"4px"}
                            marginLeft={"8px"}
                            color={"black"}
                            marginTop={"0.2em"}
                          />
                        </Box>
                        <Box display="flex" mt="1">
                          <AiOutlinePhone size="26" />
                          <Text
                            value={resumeData?.profile?.phone}
                            placeholder="Phone"
                            // customclass={"manager-f-name"}
                            path={"profile.phone"}
                            margin={"4px"}
                            marginLeft={"8px"}
                            marginTop={"0.2em"}
                          />
                        </Box>
                        <Box display="flex" mt="1">
                          <MdLocationOn size="26" />
                          <Text
                            value={resumeData?.profile?.address?.city}
                            placeholder="City"
                            path={"profile.address.city"}
                            // customclass={"manager-f-name"}
                            margin={"4px"}
                            marginLeft={"8px"}
                            marginTop={"0.2em"}
                          />
                        </Box>
                        <Box display="flex" mt="1">
                          <GiSpiderWeb size="26" />
                          <Text
                            value={resumeData?.profile?.websiteURL}
                            placeholder="Website URL"
                            // customclass={"manager-f-name"}
                            path={"profile.websiteURL"}
                            margin={"4px"}
                            marginLeft={"8px"}
                            marginTop={"0.2em"}
                          />
                        </Box>
                        {/* Skills */}
                        {resumeData?.skills?.visible && (
                          <>
                            <Text
                              value={resumeData?.skills?.heading || "Skills"}
                              placeholder="Skills"
                              customclass={"manager-f1-heading-title"}
                              path={"skills.heading"}
                              editable={false}
                              style={styles.workHeading}
                            />
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
                        {/* Refrences */}
                        {resumeData?.skills?.visible && (
                          <>
                            <Box marginY={"4"}>
                              <Text
                                placeholder="Reference"
                                color="black"
                                fontSize="1.1rem"
                                fontWeight="600"
                                marginRight="60px"
                              />
                            </Box>
                            <Reference
                              data={
                                resumeData?.references?.items.length
                                  ? [...resumeData?.references?.items]
                                  : [...sampleData?.data?.references?.items]
                              }
                              color={this.props.theme.color}
                              updater={updater}
                            />
                          </>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Box w="60%">
                    <Box marginLeft={"2em"}>
                      <Box>
                        <Profile />
                      </Box>
                      <Box mt="10">
                        <Text
                          value={resumeData?.aboutMe?.body}
                          placeholder="Short and engaging pitch about yourself."
                          path={"aboutMe.body"}
                        />
                      </Box>
                      {/* {" Experience"} */}
                      {resumeData?.work?.visible && (
                        <>
                          <Box
                            className={`${style.managerTemplateCol} ${style.managerFHeading}`}
                          >
                            <Box mb="6">
                              <Text
                                value={resumeData?.Professional?.heading}
                                placeholder="RELEVANT EXPERIENCE
                              "
                                customclass={"manager-f1-heading-title"}
                                color="black"
                                path={"ProfessionalExperience.heading"}
                                editable={false}
                                style={styles.workHeading}
                              />
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
                      {/* Education Histroy */}
                      {resumeData?.education?.visible && (
                        <Box mb="8">
                          <Text
                            value={resumeData?.education?.heading}
                            placeholder="
                            EDUCATION BACKGROUND
                            "
                            customclass={"manager-f1-heading-title"}
                            path={"education.heading"}
                            editable={false}
                            style={styles.workHeading}
                          />

                          <EducationHistory
                            data={
                              resumeData?.education?.items.length
                                ? [...resumeData?.education?.items]
                                : [...sampleData?.data?.education?.items]
                            }
                            color={this.props.theme.color}
                            updater={updater}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
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

export default connect(mapStateToProps, { onBlurField })(Manager);