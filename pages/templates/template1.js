import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "../../src/components/template1/index";
import style from "../../styles/templates/template1.module.scss";
import { onBlurField } from "../../store/actions/builderAction";
import Skills from "../../src/components/template1/Skills";
import AdditionalSkills from "../../src/components/template1/AdditionalSkills";
import WorkExperience from "../../src/components/template1/WorkExperience";
import EducationHistory from "../../src/components/template1/EducationHistory";
import { sampleData } from "../../constants/sampleData";
import { styles } from "../../src/components/componentStyles/template1Style";
import Profile from "../../src/components/template1/Profile";
import Certifications from "../../src/components/template1/Certifications";
import Associations from "../../src/components/template1/Associations";
import Trainings from "../../src/components/template1/Trainings";
import Achievements from "../../src/components/template1/Achievements";
import Projects from "../../src/components/template1/Projects";
import Patents from "../../src/components/template1/Patents";
import Publications from "../../src/components/template1/Publications";
import Speakings from "../../src/components/template1/Speakings";
import Security from "../../src/components/template1/Security";
import Military from "../../src/components/template1/Military";
import { Tooltip } from "react-tippy";
import Link from "next/link";

class Manager extends Component {
  render() {
    const { resumeData, updater, width } = this.props;
    console.log("resumeData", resumeData);
    return (
      <div className={style.main}>
        <Link href={'/templates'}> 
          <div className={style.swapCont}>
            <Tooltip title="Change Template" arrow distance={20}>
              <div className={style.swap} >
                <img src='/icons/swap.png' />
              </div>
            </Tooltip>
          </div>
        </Link>
        <div className={style.managerTemplateWrapper}>
          <div className={width < 500 ? "" : style.a4Paper}>
            <div>
              <Profile />
              <div className={`${style.managerTemplateCol} ${style.managerHeading}`}>
                <Text
                  value={resumeData?.objective?.heading}
                  placeholder="SUMMARY"
                  customclass={"manager-f-heading-title"}
                  path={"objective.heading"}
                  editable={false}
                />
                
                <Text
                  value={resumeData?.objective?.body}
                  placeholder="Summary Detail"
                  customclass={`${style.managerFName} ${style.managerTemplateTextBold}`}
                  path={"objective.body"}
                />
              </div>
              {resumeData?.work?.visible && (
                <>
                  <div className={`${style.managerTemplateCol} ${style.managerFHeading}`}>
                    <Text
                      value={resumeData?.work?.heading}
                      placeholder="Experience"
                      customclass={"manager-f-heading-title"}
                      path={"experience.heading"}
                      editable={false}
                      style={styles.workHeading}
                    />
                    <WorkExperience
                      data={
                        resumeData?.work?.items.length
                          ? [...resumeData?.work?.items]
                          : [...sampleData?.data?.work?.items]
                      }
                      color={this.props.theme.color}
                      updater={updater}
                    />
                  </div>
                </>
              )}
              {/* Education Histroy */}
              {resumeData?.education?.visible && (
                <>
                  <Text
                    value={resumeData?.education?.heading}
                    placeholder="EDUCATION"
                    customclass={"manager-f-heading-title"}
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
                </>
              )}
              {/* Certification */}
              {resumeData?.certifications?.visible && (
                <>
                  <Text
                    value={resumeData?.certifications?.heading}
                    placeholder="Certifications"
                    customclass={"manager-f-heading-title"}
                    path={"certifications.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Certifications
                    data={
                      resumeData?.certifications?.items.length
                        ? [...resumeData?.certifications?.items]
                        : [...sampleData?.data?.certifications?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}
              {
                resumeData?.skills?.visible &&
                <>
                  <Text
                    value={resumeData?.skills?.heading || "Skills"}
                    placeholder="Skills"
                    customclass={"manager-f-heading-title"}
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
              }
              {/* Associations */}
              {resumeData?.associations?.visible && (
                <>
                  <Text
                    value={resumeData?.associations?.heading}
                    placeholder="Associations"
                    customclass={"manager-f-heading-title"}
                    path={"associations.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Associations
                    data={
                      resumeData?.associations?.items.length
                        ? [...resumeData?.associations?.items]
                        : [...sampleData?.data?.associations?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* Trainings */}
              {resumeData?.training?.visible && (
                <>
                  <Text
                    value={resumeData?.training?.heading}
                    placeholder="Trainings"
                    customclass={"manager-f-heading-title"}
                    path={"training.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Trainings
                    data={
                      resumeData?.training?.items.length
                        ? [...resumeData?.training?.items]
                        : [...sampleData?.data?.training?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* achievements */}
              {resumeData?.achievements?.visible && (
                <>
                  <Text
                    value={resumeData?.achievements?.heading}
                    placeholder="Achievements"
                    customclass={"manager-f-heading-title"}
                    path={"achievements.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
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
              {/* projects */}
              {resumeData?.projects?.visible && (
                <>
                  <Text
                    value={resumeData?.projects?.heading}
                    placeholder="Projects"
                    customclass={"manager-f-heading-title"}
                    path={"projects.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Projects
                    data={
                      resumeData?.projects?.items.length
                        ? [...resumeData?.projects?.items]
                        : [...sampleData?.data?.projects?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* patents */}
              {resumeData?.patents?.visible && (
                <>
                  <Text
                    value={resumeData?.patents?.heading}
                    placeholder="Patents"
                    customclass={"manager-f-heading-title"}
                    path={"patents.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Patents
                    data={
                      resumeData?.patents?.items.length
                        ? [...resumeData?.patents?.items]
                        : [...sampleData?.data?.patents?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* publications */}
              {resumeData?.publications?.visible && (
                <>
                  <Text
                    value={resumeData?.publications?.heading}
                    placeholder="Publications"
                    customclass={"manager-f-heading-title"}
                    path={"publications.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Publications
                    data={
                      resumeData?.publications?.items.length
                        ? [...resumeData?.publications?.items]
                        : [...sampleData?.data?.publications?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* speaking_engagements */}
              {resumeData?.speaking_engagements?.visible && (
                <>
                  <Text
                    value={resumeData?.speaking_engagements?.heading}
                    placeholder="Speaking Engagements"
                    customclass={"manager-f-heading-title"}
                    path={"speaking_engagements.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Speakings
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

              {/* security_creds */}
              {resumeData?.security_creds?.visible && (
                <>
                  <Text
                    value={resumeData?.security_creds?.heading}
                    placeholder="Security Credentials"
                    customclass={"manager-f-heading-title"}
                    path={"security_creds.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Security
                    data={
                      resumeData?.security_creds?.items.length
                        ? [...resumeData?.security_creds?.items]
                        : [...sampleData?.data?.security_creds?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}

              {/* military */}
              {resumeData?.military?.visible && (
                <>
                  <Text
                    value={resumeData?.military?.heading}
                    placeholder="Military"
                    customclass={"manager-f-heading-title"}
                    path={"military.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <Military
                    data={
                      resumeData?.military?.items.length
                        ? [...resumeData?.military?.items]
                        : [...sampleData?.data?.military?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </>
              )}
            </div>

            {resumeData?.custom?.visible && (
              <>
                <div className={`${style.managerTemplateCol} ${style.managerHeading}`}>
                  <Text
                    value={resumeData?.custom?.heading}
                    placeholder="Custom"
                    customclass={"manager-f-heading-title"}
                    path={"custom.heading"}
                    editable={true}
                  />
                  <Text
                    value={resumeData?.custom?.body}
                    placeholder="Custom Detail"
                    customclass={`${style.managerFName} ${style.managerTemplateTextBold}`}
                    path={"custom.body"}
                  />
                </div>
              </>
            )}

            {resumeData?.additional_skills?.visible && (
              <>
                <div className={`${style.managerTemplateCol} ${style.managerFHeading}`}>
                  <Text
                    value={resumeData?.additional_skills?.heading}
                    placeholder="Experience"
                    customclass={"manager-f-heading-title"}
                    path={"additional_skills.heading"}
                    editable={false}
                    style={styles.workHeading}
                  />
                  <AdditionalSkills
                    data={
                      resumeData?.additional_skills?.items.length
                        ? [...resumeData?.additional_skills?.items]
                        : [...sampleData?.data?.additional_skills?.items]
                    }
                    color={this.props.theme.color}
                    updater={updater}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});

export default connect(mapStateToProps, { onBlurField })(Manager);
