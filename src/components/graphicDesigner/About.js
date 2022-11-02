import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './graphicDesigner.module.css';
const About = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <Box maxW={230}>
      <HybridText
        placeholder="Short and Engaging Pitch about Yourself"
        customclass={` ${Style.profileText}`}
        value={resumeData?.achievements?.items?.Description}
        path={`${path}.Description`}
      />
    </Box>
  );
};

export default About;
