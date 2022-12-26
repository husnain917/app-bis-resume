import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  // get path
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {
        path.includes('templates/') ?
          <>
            <main>{children}</main>
          </>
          :
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
      }
    </>
  );
}
