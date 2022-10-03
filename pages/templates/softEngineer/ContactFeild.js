import React from "react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";
import { Text, Box } from "@chakra-ui/react";
export default function ContactFeild({
  text,
  margintop,
  lineHeight,
  pt,
  icon,
  isPhon,
}) {
  return (
    <Box display="flex" alignItems="center" mt={margintop}>
      {isPhon ? (
        <PhoneIcon
          w={8}
          h={8}
          bgColor="#B29E84"
          p="7px"
          color="white"
          borderRadius="5px"
        />
      ) : (
        <EmailIcon
          w={8}
          h={8}
          bgColor="#B29E84"
          p="6px"
          color="white"
          borderRadius="5px"
        />
      )}

      <Text fontSize="1.5rem" ml="5%" lineHeight={lineHeight} pt={pt} w="60%" >
        {text}
      </Text>
    </Box>
  );
}
