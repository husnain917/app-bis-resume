import { Divider, Text } from '@chakra-ui/react';
import React from 'react';

const FashTemp5Heading1 = ({
  text,
  color,
  fontSize,
  dividerColor,
  fontWeight,
}) => {
  return (
    <div style={{ marginTop: '12px', marginBottom: '6px' }}>
      <Text
        color={color ? color : 'white'}
        fontSize={fontSize ? fontSize : '18'}
        fontWeight={fontWeight ? fontWeight : 700}
        mb={0.8}
      >
        {text}
      </Text>
      <div
        style={{
          height: '3px',
          width: 'full',
          backgroundColor: dividerColor ? dividerColor : 'white',
        }}
      ></div>
    </div>
  );
};

export default FashTemp5Heading1;
