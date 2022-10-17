import React, { useState } from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const RatingWeb = ({ title, desc, date, name, rating }) => {
  console.log("RatingWeb:", rating);
  const [currentValue, setCurrentValue] = useState(rating);

  const property = {
    title: "Excellent and wonderfull",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste impedit maxime? Corrupti, saepe quam!",
    date: "April 5",
    name: "customer",
    rating: 5,
  };
  return (
    <>
      <Box mx={["0", "0", "5"]}>
        <Text textAlign="center" fontSize={36} fontWeight="bold">
          Excellent
        </Text>
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <>
                  <Badge colorScheme="green" variant="solid" mr="1" p={["1"]}>
                    <StarIcon
                      boxSize={6}
                      key={index}
                      color={currentValue > index ? "orange" : "white"}
                    />
                  </Badge>
                </>
              ))}
          </Box>
          <Text textAlign="center">Based on {property.rating} reviews</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <StarIcon boxSize={8} color="green" />
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