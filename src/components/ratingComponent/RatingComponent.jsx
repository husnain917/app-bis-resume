import React, { useState } from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const RatingComponent = ({ title, desc, date, name, rating }) => {
  console.log("RatingComponent:", rating);
  const [currentValue, setCurrentValue] = useState(rating);
  const [hoverValue, setHoverValue] = useState(undefined);
  console.log("hoverValue", hoverValue);
  const property = {
    title: "Excellent and wonderfull",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iste impedit maxime? Corrupti, saepe quam!",
    date: "April 5",
    name: "customer",
    rating: 5,
  };

  const handleClick = (value) => {
    console.log("Value", value);
  };
  const handleMouseOver = (value) => {
    "";
  };
  const handleMouseLeave = () => {
    "";
  };
  return (
    <Box paddingX={4}>
      <Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <>
                <Badge colorScheme="green" variant="solid" mr="1" p="1">
                  <StarIcon
                    boxSize={4}
                    key={index}
                    color={
                      (hoverValue || currentValue) > index ? "orange" : "white"
                    }
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                </Badge>
              </>
            ))}

          {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box> */}
          <Box ml="3">
            <CheckCircleIcon boxSize={4} color="gray" mb={0.5} />
          </Box>
          <Text fontSize="lg" ml={1.5} color="gray">
            {" "}
            Verified{" "}
          </Text>
        </Box>

        <Box
          my="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={3}
          fontSize="lg"
        >
          {property.title}
        </Box>
        <Box color="gray.600" noOfLines={3} fontSize="xs" fontWeight="semibold">
          {property.desc}
        </Box>
        <Box color="gray.500" letterSpacing="wide" fontSize="xs" display="flex">
          <Text fontWeight="semibold"> {property.name}</Text>,
          <Text fontSize="13px"> {property.date}</Text>
        </Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          mt={2}
        >
          Showing our 4 & 5 Star reviews
        </Box>
      </Box>
    </Box>
  );
};

export default RatingComponent;
