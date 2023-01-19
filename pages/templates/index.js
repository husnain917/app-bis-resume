import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";
import { CUSTOM_TEMP_DATA } from "../../src/components/customTempData/CustomTempData";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../store/actions/AuthAction";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Templates() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const ismodalOpen = async () => {
    dispatch(modalOpen());
  }
  const ProfessionalTemp = CUSTOM_TEMP_DATA.slice(0, 16);
  const Modern = CUSTOM_TEMP_DATA.slice(16, 38);

  return (
    <Box>
      <Box
        margin={'1% 0% 0% 6%'}
      >
        <Text
          fontSize={'2.6rem'}
          fontStyle={'normal'}
          fontFamily={`poppins-bold`}
          color={'#006772'}
        >
          Categories :
        </Text>
        <Text
          fontSize={'1.6rem'}
          fontStyle={'normal'}
          fontFamily={`poppins-bold`}
          margin={'10px'}
          // className="afterlink"
          width={'fit-content'}
          color={'#757575'}
        >
          Professional
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={10}
        py={4}
        px={10}
      >
        {ProfessionalTemp?.map((items, index) => (
          <>
            <Box className="cursor" key={index}>
              <Link onClick={() => {
                isUserLoggedIn ?
                  router.push(items?.href)
                  :
                  ismodalOpen()
              }} style={{ cursor: "default" }}
                _hover={{
                  textDecoration: 'none'
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
                  <Box
                    display={'flex'}
                    margin={'20px 0px 0px 0px'}
                    width={'87%'}
                  >
                    <Text
                      fontSize={'1.3rem'}
                      fontStyle={'normal'}
                      fontFamily={`poppins-bold`}
                      margin={'20px 0px'}
                      color={'#313B47'}
                    >
                      {items?.category?.categoryName}
                    </Text>
                    <Text
                      fontSize={'0.92rem'}
                      fontStyle={'normal'}
                      fontFamily={`poppins`}
                      margin={'22px 0px 20px 20px'}
                      color={'#757575'}
                    >
                      {items?.category?.categoryID}
                      {"/"}
                      {items?.category?.totalCategory}
                    </Text>
                  </Box>
                </div>
              </Link>
            </Box>
          </>
        ))}
      </SimpleGrid>

      <Box
        margin={'0% 0% 0% 6%'}
      >
        <Text
          fontSize={'2.6rem'}
          fontStyle={'normal'}
          fontFamily={`poppins-bold`}
          color={'#006772'}
        >
          Categories :
        </Text>
        <Text
          fontSize={'1.6rem'}
          fontStyle={'normal'}
          fontFamily={`poppins-bold`}
          margin={'10px'}
          // className="afterlink"
          width={'fit-content'}
          color={'#757575'}
        >
          Modern
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={10}
        py={4}
        px={10}
      >
        {Modern?.map((items, index) => (
          <>
            <Box className="cursor" key={index}>
              <Link onClick={() => {
                isUserLoggedIn ?
                  router.push(items?.href)
                  :
                  ismodalOpen()
              }} style={{ cursor: "default" }}
                _hover={{
                  textDecoration: 'none',
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
                  display={'flex'}
                  margin={'20px 0px 0px 0px'}
                  width={'87%'}
                >
                  <Text
                    fontSize={'1.3rem'}
                    fontStyle={'normal'}
                    fontFamily={`poppins-bold`}
                    margin={'20px 0px'}
                    color={'#313B47'}
                  >
                    {items?.category?.categoryName}
                  </Text>
                  <Text
                    fontSize={'0.92rem'}
                    fontStyle={'normal'}
                    fontFamily={`poppins`}
                    margin={'22px 0px 20px 20px'}
                    color={'#757575'}
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
      </SimpleGrid>
    </Box>
  );
}
export default Templates;
