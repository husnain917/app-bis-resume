import React, { useState } from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { Text } from "@chakra-ui/react";
import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

export default function StarRating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={{ marginLeft: "8%" }}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <>
            <Badge colorScheme="#1B4245" variant="solid" mr="1" p="1">
              <StarIcon
                boxSize={4}
                key={index}
                color={(hoverValue || currentValue) > index ? "white" : "black"}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            </Badge>
          </>
        ))}
    </div>
  );
}
