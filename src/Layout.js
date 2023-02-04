import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // get path
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      {path.includes("templates/") ||
      path.includes("/blog") ||
      path.includes("/personal-development") ||
      path.includes("/Jobs") ||
      path.includes("/ComingSoon") ||
      path.includes("/inspiring-stories") ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
