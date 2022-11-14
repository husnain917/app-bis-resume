import React from 'react';
import TempNavbar from './TempNavbar';
export default function TempLayout({
  children,
  work,
  education,
  references,
  skills,
  languages,
  projects,
  organization,
  hobbies,
  certificate,
}) {
  return (
    <>
      <TempNavbar
        work={work}
        education={education}
        references={references}
        skills={skills}
        languages={languages}
        projects={projects}
        organization={organization}
        hobbies={hobbies}
        certificate={certificate}
      />

      <main>{children}</main>
    </>
  );
}
