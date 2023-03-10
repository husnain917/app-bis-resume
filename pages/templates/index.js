import { Box, Image, Text, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import { CUSTOM_TEMP_DATA } from "../../src/components/customTempData/CustomTempData";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../store/actions/AuthAction";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import CustomTempSearchModel from "../../src/components/customTempSearchModel/CustomTempSearchModel";

function Templates() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const ismodalOpen = async () => {
    dispatch(modalOpen());
  };
  const ProfessionalTemp = CUSTOM_TEMP_DATA.slice(0, 24);
  const Modern = CUSTOM_TEMP_DATA.slice(24, 47);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"center"} margin={"20px 0px"}>
        <Text
          fontSize={"1.6rem"}
          fontStyle={"normal"}
          fontFamily={`poppins-bold`}
          className="afterlink"
          width={"fit-content"}
          color={"#313B47"}
        >
          Professional
        </Text>
      </Box>
      <Container
        maxWidth={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        py={4}
      >
        {ProfessionalTemp?.map((items, index) => (
          <>
            <Box className="cursor" key={index} mx={[0, 4, 6, 3, 6]}>
              <CustomTempSearchModel
                href={items?.href}
                src={items?.src}
                alt={items?.alt}
              />
              <Link onClick={() => {
                router.push(items?.href)
              }} style={{ cursor: "default" }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <div class="templatecontainer">
                  <Image
                    className="templateimage"
                    src={items?.src}
                    alt={items?.alt}
                    height={items?.height}
                    width={items?.width}
                  />
                  <div className="templatemiddle">
                    <div className="templatetext">Create my Resume</div>
                  </div>
                </div>
                <Box
                  display={"flex"}
                  margin={"20px 0px 30px 0px"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"1.3rem"}
                    fontStyle={"normal"}
                    fontFamily={`poppins-bold`}
                    margin={"10px 0px 0px 0px"}
                    color={"#313B47"}
                  >
                    {items?.category?.categoryName}
                  </Text>
                  <Text
                    fontSize={"0.92rem"}
                    fontStyle={"normal"}
                    fontFamily={`poppins`}
                    margin={"10px 0px 0px 20px"}
                    color={"#757575"}
                  >
                    {items?.category?.categoryID}
                    {"/"}
                    {items?.category?.totalCategory}
                  </Text>
                </Box>
              </Link>
            </Box>
          </>
        ))}
      </Container>

      <Box display={"flex"} justifyContent={"center"} margin={"20px 0px"}>
        <Text
          fontSize={"1.6rem"}
          fontStyle={"normal"}
          fontFamily={`poppins-bold`}
          className="afterlink"
          width={"fit-content"}
          color={"#313B47"}
        >
          Modern
        </Text>
      </Box>
      <Container
        maxWidth={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        py={4}
      >
        {Modern?.map((items, index) => (
          <>
            <Box className="cursor" key={index} mx={[0, 4, 6, 3, 6]}>
              <CustomTempSearchModel
                href={items?.href}
                src={items?.src}
                alt={items?.alt}
              />
              <Link onClick={() => {
                isUserLoggedIn ?
                  router.push(items?.href)
                  :
                  ismodalOpen()
              }} style={{ cursor: "default" }}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <div className="templatecontainer">
                  <Image
                    className="templateimage"
                    src={items?.src}
                    alt={items?.alt}
                    height={items?.height}
                    width={items?.width}
                  />
                  <div className="templatemiddle">
                    <div className="templatetext">Create my Resume</div>
                  </div>
                </div>
                <Box
                  display={"flex"}
                  margin={"20px 0px 30px 0px"}
                  alignItems={"center"}
                >
                  <Text
                    fontSize={"1.3rem"}
                    fontStyle={"normal"}
                    fontFamily={`poppins-bold`}
                    margin={"10px 0px 0px 0px"}
                    color={"#313B47"}
                  >
                    {items?.category?.categoryName}
                  </Text>
                  <Text
                    fontSize={"0.92rem"}
                    fontStyle={"normal"}
                    fontFamily={`poppins`}
                    margin={"10px 0px 0px 20px"}
                    color={"#757575"}
                  >
                    {items?.category?.categoryID}
                    {"/"}
                    {items?.category?.totalCategory}
                  </Text>
                </Box>
              </Link>
            </Box>
          </>
        ))}
      </Container>
    </Box>
  );
}
export default Templates;
