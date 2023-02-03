import React from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";

const SecondSection = ({ heading, content, image, direction, subHeading }) => {
  //   const content = contentLinks === 1 ? "<> Ahsan</> " : "<>Bilal</>";
  return (
    <Box
    // w={["100%", "94%", "94%", "960px", "1220px", "1500px"]}
    >
      <Grid
        marginTop={["0rem", "0rem", "1.2rem", "1.2rem", "1.2rem"]}
        templateAreas={[`"${direction}"`]}
        gridTemplateRows={"1,1fr"}
        gridTemplateColumns={[
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
          "2fr 2fr 0fr",
        ]}
        color="blackAlpha.700"
        // margin="3.2rem auto"
        display={["flex", "flex", "flex", "flex", "grid", "grid", "grid"]}
        flexDirection={["column-reverse"]}
        marginInlineStart={["20px", "20px", "20px", "20px", "40px"]}
        marginInlineEnd={["20px", "20px", "20px", "20px", "40px"]}
      >
        <GridItem  area={"textArea"} position="relative"
    
        >
        <Box pr={["0","0","0","0","8"]}
        pl={["0","0","0","0","8"]}>
          <Text
            fontSize={["3rem", "3.2rem", "3.6rem", "3.6rem", "3.6rem"]}
            fontWeight="600"
            className="main-heading"
            mt={[10, 10, 10, 10, 0]}
       
            
          >
            {heading}
          </Text>
          <Text
            fontSize={["1em", "1em", "1em", "1em", "1em", "1.5em"]}
            fontWeight={"bold"}
            margin={[
              "0 0 0px 0",
              "0 0 0px 0",
              "0 0 20px 0",
              "0 0 20px 0",
              "0 0 20px 0",
            ]}

            className={"sub-heading"}
         
          >
            {" "}
            {subHeading}
          </Text>
          <Text
            margin={["0 0 0px", "0 0 0px", "0 0 0px", "0 0 0px", "0 0 20px"]}
            className={"small-text"}
            textAlign="justify"
      


          >
            {content}
          </Text>
          </Box>
        </GridItem>
        <GridItem
 
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          area={"image"}
        
        >
          <Image src={image} alt="Loading" height={["300px","300px","300px","300px","430px"]}  />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecondSection;
