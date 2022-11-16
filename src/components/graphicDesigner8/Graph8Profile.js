import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Graph8Heading from './Graph8Heading';
import Style from './graph8.module.css';
const Graph8Profile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <Box>
      <Box
        maxW={260}
        minW={260}
        borderRadius="full"
        mt={2}
        mb={10}
        ml={-1}
        justifyContent="center"
      >
        <Image
          borderRadius={'full'}
          boxSize="250px"
          src="/profileDigi.png"
          alt="Profile"
        />
      </Box>
      <Graph8Heading
        fontSize={20}
        fontWeight={600}
        text="About Me"
        letterSpacing={'1px'}
        dividerHeight="2px"
        mbTxt={2}
      />
      <HybridText
        placeholder="Short and Engaging Pitch about Yourself"
        customclass={` ${Style.aboutText}`}
        value={resumeData?.achievements?.items?.Description}
        path={`${path}.Description`}
      />
    </Box>
  );
};

export default Graph8Profile;
