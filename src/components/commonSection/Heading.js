import React from 'react';
import { Box, Circle, HStack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

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
  padding, paddingHorizantal,
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
  line,
  lineW,
  lineH,
  lineBg,
  lineAlign,
  lineStyle,
  fontFamily,
  marginTop,
  paddingVertical,
  alignItems,
  justifyContent,
}) {
  const { font } = useSelector((state) => state.fontReducer.font);
  return (
    <HStack
      minW={minW ? minW : 250}
      maxW={maxW ? maxW : 250}
      bg={headBg ? headBg : ''}
      h={height ? height : 35}
      m={margin ? margin : ''}
      p={padding ? padding : ''}
      borderTop={borderTop ? borderTop : ''}
      borderBottom={borderBottom ? borderBottom : ''}
      borderRight={borderRight ? borderRight : ''}
      borderLeft={borderLeft ? borderLeft : ''}
      borderRadius={borderRadius ? borderRadius : ''}
      onClick={onSideSectionShow}
      marginTop={marginTop ? marginTop : ''}
      cursor={onSideSectionShow && 'pointer'}
      px={paddingHorizantal}
      alignItems={alignItems ? alignItems : ''}
      justifyContent={justifyContent ? justifyContent : ''}
      py={paddingVertical}
    >
      {iconHeading && <>{React.createElement(icon)} </>}
      {circleIconHeading && (
        <>
          <Circle
            size={circleSize ? circleSize : 'none'}
            bg={circleBg ? circleBg : 'none'}
            borderWidth={circleBorderW ? circleBorderW : '0px'}
            borderColor={circleBorderColor ? circleBorderColor : 'none'}
            transition={'0.5s background'}
          >
            {React.createElement(icon)}
          </Circle>
        </>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text
          color={color ? color : '#000'}
          fontSize={fontSize ? fontSize : 20}
          fontWeight={fontWeight ? fontWeight : 500}
          m={textMargin ? textMargin : ''}
          p={textPadding ? textPadding : ''}
          letterSpacing={letterSpacing ? letterSpacing : ''}
          fontFamily={font ? font : fontFamily}
          transition="1s color"
        >
          {title}
        </Text>
        {line && (
          <Box
            h={lineH ? lineH : 1.5}
            w={lineW ? lineW : 'full'}
            bg={lineBg ? lineBg : '#000'}
            alignSelf={lineAlign ? lineAlign : 'flex-start'}
            className={`${lineStyle ? lineStyle : ''}`}
            transition="1s background"
          ></Box>
        )}
      </div>
    </HStack>
  );
}
