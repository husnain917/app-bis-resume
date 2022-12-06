import React from "react";
import { Box, Circle, HStack, Text } from "@chakra-ui/react";
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
  line,
  lineW,
  lineH,
  lineBg,
  lineAlign,
  lineStyle,

  marginTop,

  alignItems,
  justifyContent,
}) {
  return (
    <HStack
      minW={minW ? minW : 250}
      maxW={maxW ? maxW : 250}
      bg={headBg ? headBg : ""}
      h={height ? height : 35}
      m={margin ? margin : ""}
      p={padding ? padding : ""}
      borderTop={borderTop ? borderTop : ""}
      borderBottom={borderBottom ? borderBottom : ""}
      borderRight={borderRight ? borderRight : ""}
      borderLeft={borderLeft ? borderLeft : ""}
      borderRadius={borderRadius ? borderRadius : ""}
      onClick={onSideSectionShow}

      marginTop={marginTop ? marginTop : ""}

      cursor={onSideSectionShow && 'pointer'}

      // alignItems={alignItems ? alignItems : ''}
      // justifyContent={justifyContent ? justifyContent : ''}
    >
      {iconHeading && <>{React.createElement(icon)} </>}
      {circleIconHeading && (
        <>
          <Circle
            size={circleSize ? circleSize : "none"}
            bg={circleBg ? circleBg : "none"}
            borderWidth={circleBorderW ? circleBorderW : "0px"}
            borderColor={circleBorderColor ? circleBorderColor : "none"}
          >
            {React.createElement(icon)}
          </Circle>
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          color={color ? color : "#000"}
          fontSize={fontSize ? fontSize : 20}
          fontWeight={fontWeight ? fontWeight : 500}
          m={textMargin ? textMargin : ""}
          p={textPadding ? textPadding : ""}
          letterSpacing={letterSpacing ? letterSpacing : ""}
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
          ></Box>
        )}
      </div>
    </HStack>
  );
}
