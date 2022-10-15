import React, { useState } from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
<<<<<<< HEAD
=======
import StarRatings from "react-star-ratings";
>>>>>>> 3265bab (sample rating component)
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const RatingWeb = ({ title, desc, date, name, rating }) => {
  console.log("RatingWeb:", rating);
  const [currentValue, setCurrentValue] = useState(rating);
<<<<<<< HEAD
=======
  //   const [hoverValue, setHoverValue] = useState(undefined);
  //   console.log("hoverValue", hoverValue);
>>>>>>> 3265bab (sample rating component)
  const property = {
    title: "Excellent and wonderfull",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste impedit maxime? Corrupti, saepe quam!",
    date: "April 5",
    name: "customer",
    rating: 5,
  };
  return (
    <>
<<<<<<< HEAD
      <Box mx={["0", "0", "5"]}>
        <Text textAlign="center" fontSize={36} fontWeight="bold">
          Excellent
        </Text>
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center">
=======
      <Text textAlign="center" fontSize={36} fontWeight="bold">
        Excellent
      </Text>
      <Box maxW="300px" overflow="hidden" paddingX={4}>
        <Box>
          <Box display="flex" alignItems="center">
>>>>>>> 3265bab (sample rating component)
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <>
<<<<<<< HEAD
                  <Badge colorScheme="green" variant="solid" mr="1" p={["1"]}>
=======
                  <Badge colorScheme="green" variant="solid" mr="1" p="1">
>>>>>>> 3265bab (sample rating component)
                    <StarIcon
                      boxSize={6}
                      key={index}
                      color={currentValue > index ? "orange" : "white"}
<<<<<<< HEAD
=======
                      // onClick={() => handleClick(index + 1)}
                      // onMouseOver={() => handleMouseOver(index + 1)}
                      // onMouseLeave={handleMouseLeave}
>>>>>>> 3265bab (sample rating component)
                    />
                  </Badge>
                </>
              ))}
          </Box>
          <Text textAlign="center">Based on {property.rating} reviews</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
<<<<<<< HEAD
          <StarIcon boxSize={8} color="green" />
=======
          <StarIcon
            boxSize={8}
            color="green"
            // onClick={() => handleClick(index + 1)}
            // onMouseOver={() => handleMouseOver(index + 1)}
            // onMouseLeave={handleMouseLeave}
          />
>>>>>>> 3265bab (sample rating component)
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
