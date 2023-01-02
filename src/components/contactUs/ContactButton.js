import React from "react";
import CommonButton from "../commonButton/CommonButton";

export default function ContactButton({
  button,
  index,
  onFocunHandler,
  bgColor,
  color
}) {
  return (
    <>

      <CommonButton
        height={"38px"}
        title={button.title}
        hoverCursor={"pointer"}
        backgroundColor={bgColor}
        color={color}
        hoverColor={"white"}
        hoverBackgroundColor={"#2CACD5"}
        focusBg={"#2CACD5"}
        focusColor={'white'}
        margin={'10px'}
        padding="10px 20px 10px 20px"
        onClick={() => onFocunHandler(index)}
      />
    </>
  );
}
