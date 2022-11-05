import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MarkManagerHeading = ({
  divider1Color,
  divider2Color,
  fontWeight,
  fontColor,
  fontSize,
  text,
}) => {
  return (
    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
      <Text
        fontWeight={fontWeight ? fontWeight : 700}
        fontSize={fontSize ? fontSize : 23}
        textTransform="uppercase"
        color={fontColor ? fontColor : 'black'}
        letterSpacing="2px"
      >
        {text}
      </Text>
      <div
        style={{
          height: '3px',
          width: 'full',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: divider1Color ? divider1Color : 'white',
        }}
      >
        <div
          style={{
            height: '5px',
            width: '40%',

            backgroundColor: divider2Color ? divider2Color : 'black',
          }}
        ></div>
      </div>{' '}
    </div>
  );
};

export default MarkManagerHeading;
