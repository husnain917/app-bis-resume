import { useDisclosure } from '@chakra-ui/react';
import { Collapse } from 'antd';
import React from 'react';
import { MobileNav } from '../navbar/Navbar';
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
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <div style={{ display: '' }}>
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
        {/* <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse> */}
      </div>
      <main>{children}</main>
    </>
  );
}
