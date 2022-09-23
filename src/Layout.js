import React from "react";
import Footer from "./components/footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
