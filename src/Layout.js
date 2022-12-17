import React, { useState } from 'react';
import BuildResume from './components/BuildResume';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Layout({ children }) {
  const router = useRouter();
  const [show, setShowNav] = useState(true);
  const path = router.pathname;
  useEffect(() => {
    if (path.includes('templates/')) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  });

  return (
    <>
      {show && <Navbar />}
      <main>{children}</main>
      {show && <Footer />}
    </>
  );
}
