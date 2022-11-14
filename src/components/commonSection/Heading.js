import React from 'react';
import { Box, Circle, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import SectionSideMenu from '../tempSectionSide/SectionSideMenu';

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
  borderTop,
  borderBottom,
  borderRight,
  borderLeft,
  borderRadius,
  onSideSectionShow,
}) {
  return (
    <Stack>
      <HStack
        minW={minW ? minW : 250}
        maxW={maxW ? maxW : 250}
        bg={headBg}
        h={height ? height : 35}
        m={margin ? margin : ''}
        p={padding ? padding : ''}
        borderTop={borderTop ? borderTop : ''}
        borderBottom={borderBottom ? borderBottom : ''}
        borderRight={borderRight ? borderRight : ''}
        borderLeft={borderLeft ? borderLeft : ''}
        borderRadius={borderRadius ? borderRadius : ''}
        onClick={onSideSectionShow}
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
      <SectionSideMenu />
    </Stack>
  );
}
