import { Divider, Text } from '@chakra-ui/react';
import React from 'react';

const Graph8Heading = ({
  text,
  color,
  fontSize,
  dividerColor,
  fontWeight,
  letterSpacing,
  dividerHeight,
  mbTxt,
  textTransform,
  mb,
  mt,
}) => {
  return (
    <div style={{ marginTop: mt ? mt : '12px', marginBottom: mb ? mb : '6px' }}>
      <Text
        color={color ? color : 'white'}
        fontSize={fontSize ? fontSize : '18'}
        fontWeight={fontWeight ? fontWeight : 700}
        mb={mbTxt ? mbTxt : 0.8}
        textTransform={textTransform ? textTransform : 'uppercase'}
        letterSpacing={letterSpacing ? letterSpacing : '0px'}
      >
        {text}
      </Text>
      <div
        style={{
          height: dividerHeight ? dividerHeight : '2px',
          width: 'full',
          backgroundColor: dividerColor ? dividerColor : 'white',
        }}
      ></div>
    </div>
  );
};

export default Graph8Heading;
