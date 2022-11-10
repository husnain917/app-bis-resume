import React from 'react';
import { Box, Circle, Flex, HStack, Text } from '@chakra-ui/react';

export default function Heading({
  title,
  headBg,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  icon,
  minW,
  maxW,
  height,
  margin,
  padding,
  textPadding,
  textMargin,
  iconHeading,
  circleIconHeading,
  circleSize,
  circleBg,
  circleBorderW,
  circleBorderColor,
}) {
  return (
    <>
      <HStack
        minW={minW ? minW : 250}
        maxW={maxW ? maxW : 250}
        bg={headBg}
        h={height ? height : 35}
        m={margin ? margin : ''}
        p={padding ? padding : ''}
      >
        {iconHeading && <>{React.createElement(icon)} </>}
        {circleIconHeading && (
          <>
            <Circle
              size={circleSize ? circleSize : 'none'}
              bg={circleBg ? circleBg : 'none'}
              borderWidth={circleBorderW ? circleBorderW : '0px'}
              borderColor={circleBorderColor ? circleBorderColor : 'none'}
            >
              {React.createElement(icon)}
            </Circle>
          </>
        )}
        <Text
          color={color ? color : '#000'}
          fontSize={fontSize ? fontSize : 20}
          fontWeight={fontWeight ? fontWeight : 500}
          m={textMargin ? textMargin : ''}
          p={textPadding ? textPadding : ''}
          letterSpacing={letterSpacing ? letterSpacing : ''}
        >
          {title}
        </Text>
      </HStack>
    </>
  );
}
