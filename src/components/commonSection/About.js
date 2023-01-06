import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Text from './Text';

const About = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const {
    aboutPlaceholder,
    aboutStyle,
    fontColor,
    fontSize,
    fontWeight,
    textAlign,
    maxW,
    minW,
    margin,
  } = props;
  return (
    <Box
      maxW={maxW ? maxW : 230}
      minW={minW ? minW : 230}
      margin={margin ? margin : ''}
    >
      <Text
        placeholder={
          aboutPlaceholder
            ? aboutPlaceholder
            : 'Short and Engaging pitch about yourself '
        }
        customClass={` ${aboutStyle}`}
        value={resumeData?.objective?.body}
        path="objective.body"
        color={fontColor ? fontColor : ''}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
      />
    </Box>
  );
};

export default About;
