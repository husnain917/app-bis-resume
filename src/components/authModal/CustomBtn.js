import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/Auth.module.css"
export default function CustomBtn({ title, color, bgColor, mt, hoverColor,blue }) {
  return (
    <div>
      <Button
        w="85%"
        ml="8%"
        borderRadius="100px"
        mt={mt}
        pt="5px"
        pb="5px"
        color={color}
        bgColor={bgColor}
        _hover={{
          color: { color },
          fontSize: "18px",
          opacity:'0.8'
        }}
        
        className={`${ blue? styles.hoverBtn : styles.modalBtn }`}
      >
        {title}
      </Button>
    </div>
  );
}
