import styles from "../../styles/templates/graphTemp/graphTemp.module.css"
import BottomLine from '../../src/components/graphTemp/BottomLine'
import Skillprogress from '../../src/components/graphTemp/Skillprogress'
import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../../src/components/template1/Text";
import style from "../../styles/templates/template1.module.scss";
import { onBlurField } from "../../store/actions/builderAction";

import { sampleData } from "../../constants/sampleData";
import { Tooltip } from "react-tippy";
import Link from "next/link";

import { Row } from "antd";
import ProfileTemp from "../../src/components/graphTemp/ProfileTemp"
import { Line, Circle } from 'rc-progress';
import Experience from "../../src/components/graphTemp/Experience"


class Project extends Component {
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
                <div className={styles.mainDiv}>
                    <div className={styles.mainContainer}>
                        <div className={styles.mainContent}>
                            <div className={styles.skill}>
                                <ProfileTemp />
                                <div className={styles.nextHalf}>
                                    <div className={styles.skillDiv}>
                                        <h6 className={styles.headEduc}>Skills</h6>
                                        <BottomLine />
                                        <Skillprogress />
                                        <Skillprogress />
                                        <Skillprogress />
                                    </div>

                                </div>
                            </div>

                            <div className={styles.mainSecDiv}>

                                <div className={styles.mainSecDiv}>
                                    <div className={styles.mainSecDiv}>
                                        <div className={styles.profileDiv2}>
                                            <h2 className={styles.profileHead}>
                                                <div style={{ display: "flex", flexDirection: "row" }}>
                                                    <Row>
                                                        <Text
                                                            value={resumeData?.profile?.firstName}
                                                            placeholder="First Name"
                                                            customclass={`${styles.firstName}`}

                                                            path={"profile.firstName"}

                                                        />
                                                        &nbsp;
                                                        <Text
                                                            value={resumeData?.profile?.lastName}
                                                            placeholder="Last Name"
                                                            customclass={`${styles.lastName}`}
                                                            path={"profile.lastName"}
                                                        />
                                                    </Row>
                                                </div>
                                            </h2>
                                            <h4 className={styles.p}>Graphic designner</h4>
                                            <BottomLine />


                                            <div className={styles.AboutDiv}>
                                                <p className={styles.AboutPar} >About Me</p>
                                                <Text
                                                    value={resumeData?.objective?.body}
                                                    placeholder="Summary About"
                                                    customclass={`${styles.SummaryAbout} `}
                                                    path={"objective.body"}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.profileDiv3}>
                                            <h6 className={styles.headEduc}>Education</h6>
                                            <BottomLine />
                                            <div className={styles.EduPara}>
                                                <div className={styles.AboutContent}>  <Text

                                                    placeholder="Education Short Summary"
                                                    customclass={`${styles.EducSummary} `}
                                                />
                                                </div>


                                            </div>



                                        </div>
                                    </div>


                                </div>

                                <div className={styles.expDiv}>

                                    {resumeData?.work?.visible && (
                                        <>
                                            <div className={`${styles.experAdd} ${style.managerFHeading}`}>
                                                <Text
                                                    value={resumeData?.work?.heading}
                                                    placeholder="Experience"
                                                    path={"experience.heading"}
                                                    customclass={`${styles.expHeading}`}
                                                    editable={false}
                                                />
                                                <div className={styles.lineManage}>
                                                    <BottomLine />
                                                </div>
                                                <div className={styles.manageConenetExp}>
                                                    <Experience

                                                        data={
                                                            resumeData?.work?.items.length
                                                                ? [...resumeData?.work?.items]
                                                                : [...sampleData?.data?.work?.items]
                                                        }
                                                        updater={updater}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}


                                </div>
                            </div>







                        </div>
                    </div>
                    <div>
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
export default connect(mapStateToProps, { onBlurField })(Project);


