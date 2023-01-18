import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // get path
  const router = useRouter();
  const path = router.pathname;
  console.log("BLOG >>>>", path);

  return (
    <>
      {path.includes("templates/") || path.includes("blog/") ? (
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
