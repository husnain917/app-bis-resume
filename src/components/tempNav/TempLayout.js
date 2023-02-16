import React, { useState } from "react";
import { useSelector } from "react-redux";
import Feedback from "../feedbackPopUp/Feedback";
import TempNavbar from "./TempNavbar";
import ThemeSideMenu from "./ThemeSideMenu";
export default function TempLayout({
  children,
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  interest,
  certificate,
  downloadPDF,downloadWord,
  sideTempSelect,
  achievements,
  setsideTempSelect,saveDataHandler,colorLength
}) {
  const feedBackGet = useSelector((state) => state?.feedBackReducer?.feedBack);
  const [leftMenu, setleftMenu] = useState(false);
  return (
    <div>
      <TempNavbar
        work={work}
        education={education}
        references={references}
        skills={skills}
        languages={languages}
        projects={projects}
        organization={organization}
        interest={interest}
        certificate={certificate}
        downloadPDF={downloadPDF}
        achievements={achievements}
        leftMenu={leftMenu}
        saveDataHandler={saveDataHandler}
        downloadWord={downloadWord}

        setleftMenu={() => {
          setsideTempSelect(false);
          setleftMenu(true);
        }}
        colorLength={colorLength}
      />
      {leftMenu && !sideTempSelect && (
        <ThemeSideMenu
          work={work}
          education={education}
          references={references}
          skills={skills}
          languages={languages}
          projects={projects}
          organization={organization}
          interest={interest}
          certificate={certificate}
          downloadPDF={downloadPDF}
          downloadWord={downloadWord}
          achievements={achievements}
          setleftMenu={setleftMenu}
        />
      )}

      {feedBackGet && <Feedback />}
      <main>{children}</main>
    </div>
  );
}
