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
  interest,
  certificate,
}) {
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
      />

      <main>{children}</main>
    </div>
  );
}
