import React, { useState } from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const RatingWeb = ({ title, desc, date, name, rating }) => {
  console.log("RatingWeb:", rating);
  const [currentValue, setCurrentValue] = useState(rating);
  //   const [hoverValue, setHoverValue] = useState(undefined);
  //   console.log("hoverValue", hoverValue);
  const property = {
    title: "Excellent and wonderfull",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste impedit maxime? Corrupti, saepe quam!",
    date: "April 5",
    name: "customer",
    rating: 5,
  };
  return (
    <>
      <Text textAlign="center" fontSize={36} fontWeight="bold">
        Excellent
      </Text>
      <Box maxW="300px" overflow="hidden" paddingX={4}>
        <Box>
          <Box display="flex" alignItems="center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <>
                  <Badge colorScheme="green" variant="solid" mr="1" p="1">
                    <StarIcon
                      boxSize={6}
                      key={index}
                      color={currentValue > index ? "orange" : "white"}
                      // onClick={() => handleClick(index + 1)}
                      // onMouseOver={() => handleMouseOver(index + 1)}
                      // onMouseLeave={handleMouseLeave}
                    />
                  </Badge>
                </>
              ))}
          </Box>
          <Text textAlign="center">Based on {property.rating} reviews</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <StarIcon
            boxSize={8}
            color="green"
            // onClick={() => handleClick(index + 1)}
            // onMouseOver={() => handleMouseOver(index + 1)}
            // onMouseLeave={handleMouseLeave}
          />
          <Text fontSize="2xl" fontWeight="bold" mt={2}>
            {" "}
            Trust Pilot{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default RatingWeb;
