import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ImageSection = (props) => {
  const {
    minW,
    maxW,
    borderRadius,
    borderWidth,
    borderColor,
    margin,
    src,
    minH,
    maxH,
  } = props;
  return (
    <Box
      maxW={maxW ? maxW : 150}
      minW={minW ? minW : 150}
      borderColor={borderColor ? borderColor : '#313C4E'}
      borderWidth={borderWidth ? borderWidth : 4}
      borderRadius={borderRadius ? borderRadius : 'full'}
      m={margin ? margin : 0}
      minH={minH ? minH : 150}
      maxH={maxH ? maxH : 150}
    >
      <Image
        borderRadius={borderRadius ? borderRadius : 'full'}
        src={src ? src : '/ProfilePic.jpg'}
        alt="Profile"
        boxSize={'full'}
      />
    </Box>
  );
};

export default ImageSection;
