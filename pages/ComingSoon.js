import Link from "next/link";
import React from "react";
import CommonButton from "../src/components/commonButton/CommonButton";

export default function ComingSoon() {
  return (
    <div className="notFoundContainer">
      <p className="coming-soon-text">Coming Soon</p>
      <Link href="/">
        <CommonButton
          title="Go to Home"
          hoverCursor={"pointer"}
          backgroundColor={"#2CACD5"}
          color={"whitesmoke"}
          padding={"20px"}
          paddingLeft={"40px"}
          paddingRight={"40px"}
          borderRadius={"20px"}
          fontSize={["1rem", "1rem", "1.1rem", "1.1rem", "1.2rem", "1.5rem"]}
          // hoverBackgroundColor={"red"}
          // className={"hoverEffects"}
        />
      </Link>
    </div>
  );
}
