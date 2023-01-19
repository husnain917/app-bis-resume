import { SimpleGrid, Box, Image } from "@chakra-ui/react";
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
  return (
    <div>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={10}
        py={4}
        px={10}
      >
        {CUSTOM_TEMP_DATA?.map((items, index) => (
          <>
            <Box className="cursor" key={index}>
              <Link onClick={() => {
                isUserLoggedIn ?
                  router.push(items.href)
                  :
                  ismodalOpen()
              }} style={{ cursor: "default" }}>
                <div class="templatecontainer">
                  <Image
                    className="templateimage"
                    src={items?.src}
                    alt={items?.alt}
                    height={items?.height}
                    width={items?.width}
                  />
                  <div class="templatemiddle">
                    <div class="templatetext">Create my Resume</div>
                  </div>
                </div>
              </Link>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </div>
  );
}
export default Templates;
