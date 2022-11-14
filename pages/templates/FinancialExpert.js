import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "../../src/components/FinancialTemplat/index";
import style from "../../styles/templates/template1.module.scss";
import { onBlurField } from "../../store/actions/builderAction";

import WorkExperience from "../../src/components/FinancialTemplat/WorkExperience";
import Skills from "../../src/components/FinancialTemplat/Skills";
import EducationHistory from "../../src/components/FinancialTemplat/EducationHistory";
import { sampleData } from "../../constants/sampleData";
import { styles } from "../../src/components/componentStyles/template1Style";

import Achievements from "../../src/components/FinancialTemplat/Achievements";

import { Tooltip } from "react-tippy";
import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";
import Profile from "../../src/components/FinancialTemplat/Profile";
import UnderLineBox from "../../src/components/FinancialTemplat/UnderLineBox";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import ImageSelector from "../../src/components/imageSelector";

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
          <Box className={width < 500 ? "" : style.a4PaperFinancial}>
            <Box>
              {/* <Profile /> */}
              <Box display="flex" flexDirection="row">
                <Box w="40%"></Box>
                <Box
                  w="60%"
                  minH="30vh"
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Profile />
                </Box>
              </Box>
              <Box
                bg="white"
                padding="30px"
                backgroundColor="white"
                fontFamily="sans-serif"
                display="flex"
                flexDirection="row"
              >
                <Box w="40%">
                  {/* <Image
                    src="/Profile.jpeg"
                    h={250}
                    w={250}
                    borderRadius="50%"
                    marginTop="-150px"
                    marginLeft="10px"
                  /> */}
                  <ImageSelector marginTop="-150px" marginLeft="10px" />
                  <Box padding="16">
                    <Text
                      value={resumeData?.objective?.Contact}
                      placeholder="My Contact"
                      customclass={"manager-f1-heading-title"}
                      path={"objective.contact"}
                      editable={false}
                    />
                    <UnderLineBox />
                    <Box display="flex" mt="2">
                      <AiOutlineMail size="26" />

                      <Text
                        value={resumeData?.profile?.email}
                        placeholder="Email"
                        customclass={"manager-f-name"}
                        path={"profile.email"}
                        marginLeft={"5px"}
                        color={"black"}
                        fontSize="24px"
                      />
                    </Box>
                    <Box display="flex">
                      <AiOutlinePhone size="26" />
                      <Text
                        value={resumeData?.profile?.phone}
                        placeholder="Phone"
                        customclass={"manager-f-name"}
                        path={"profile.phone"}
                        fontSize="24px"
                        marginLeft={"5px"}
                      />
                    </Box>
                    <Box display="flex">
                      <MdLocationOn size="26" />
                      <Text
                        value={resumeData?.profile?.address?.city}
                        placeholder="City"
                        path={"profile.address.city"}
                        customclass={"manager-f-name"}
                        marginLeft={"5px"}
                      />
                    </Box>
                    <Box display="flex">
                      <GiSpiderWeb size="26" />
                      <Text
                        value={resumeData?.profile?.websiteURL}
                        placeholder="Website URL"
                        customclass={"manager-f-name"}
                        path={"profile.websiteURL"}
                        marginLeft={"5px"}
                        w={950}
                      />
                    </Box>
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
                    {/* Education Histroy */}
                    {resumeData?.education?.visible && (
                      <>
                        <Text
                          value={resumeData?.education?.heading}
                          placeholder="EDUCATION"
                          customclass={"manager-f1-heading-title"}
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
                  </Box>
                </Box>
                <Box w="60%">
                  <Box>
                    <Text
                      value={resumeData?.aboutMe?.heading}
                      placeholder="About Me"
                      customclass={"manager-f1-heading-title"}
                      path={"aboutme.heading"}
                      editable={false}
                      fontSize="1.5em"
                    />
                    <Box>
                      <UnderLineBox />
                    </Box>
                    <Text
                      value={resumeData?.aboutMe?.body}
                      placeholder="Dedicated and detail-oriented Financial Analyst with 10
                      years of experience. Eager to apply proven-budget
                      maximization skills for Bank of Brocelle in monitoring,
                      maintaining, and completing client billing and
                      reconciliations. Special interest in achieving the
                      millennial market and helping with retirement and
                      general financial planning.
                      "
                      path={"aboutMe.body"}
                    />
                  </Box>
                  {resumeData?.work?.visible && (
                    <>
                      <Box
                        className={`${style.managerTemplateCol} ${style.managerFHeading}`}
                      >
                        <Text
                          value={resumeData?.Professional?.heading}
                          placeholder="Professional Experience"
                          customclass={"manager-f1-heading-title"}
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

                  {/* achievements */}
                  {resumeData?.achievements?.visible && (
                    <>
                      <Text
                        value={resumeData?.achievements?.heading}
                        placeholder="Achievements"
                        customclass={"manager-f1-heading-title"}
                        path={"achievements.heading"}
                        editable={false}
                        style={styles.workHeading}
                      />
                      <Box>
                        <UnderLineBox />
                      </Box>
                      <Achievements
                        data={
                          resumeData?.achievements?.items.length
                            ? [...resumeData?.achievements?.items]
                            : [...sampleData?.data?.achievements?.items]
                        }
                        color={this.props.theme.color}
                        updater={updater}
                      />
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

export default connect(mapStateToProps, { onBlurField })(Manager);
