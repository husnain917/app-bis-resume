import React, { useState } from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const RatingComponent = ({ title, date, name, rating, feedback }) => {
  const [currentValue, setCurrentValue] = useState(rating);
  const [hoverValue, setHoverValue] = useState(undefined);
  return (
    <Box paddingX={4} bg="white" borderRadius={"30px"}>
      <Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <>
                <Badge colorScheme="green" variant="solid" mr="1" h={6}>
                  <StarIcon
                    boxSize={5}
                    key={index}
                    pb={1}
                    color={
                      (hoverValue || currentValue) > index ? "white" : "white"
                    }
                  />
                </Badge>
              </>
            ))}
        </Box>
        <Box lineHeight={"30px"}>
          <Text
            fontSize="1.1rem"
            color="black"
            textAlign={"left"}
            fontWeight={600}
            mt={1}
          >
            {name ? name : "UserName"}
          </Text>
          <Text fontSize="1rem" color="black" textAlign={"left"}>
            {date ? date : "1 day ago"}
          </Text>
        </Box>

        <Box
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          noOfLines={3}
          fontSize="16px"
          textAlign={"left"}
          mt={8}
          _hover={{
            cursor: "pointer",
          }}
        >
          {title ? title : "FeedbackHeading"}
        </Box>
        <Box
          color="gray.600"
          noOfLines={3}
          fontSize="xs"
          fontWeight="semibold"
          textAlign={"left"}
          onClick={() => {}}
          mt={1}
        >
          {feedback ? feedback : "Feedback"}
        </Box>
      </Box>
    </Box>
  );
};

export default RatingComponent;
