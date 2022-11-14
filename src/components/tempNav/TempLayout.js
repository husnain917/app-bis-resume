import React from 'react';
import TempNavbar from './components/tempNav/TempNavbar';
export default function TempLayout({ children, criteria }) {
  return (
    <>
      {criteria && <TempNavbar />}
      <main>{children}</main>
    </>
  );
}
