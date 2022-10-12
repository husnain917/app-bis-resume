import React from "react";
import BuildResume from "./components/BuildResume";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BuildResume />
      <Footer />
    </>
  );
}
