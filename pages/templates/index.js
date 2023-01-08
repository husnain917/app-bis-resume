import { SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { CUSTOM_TEMP_DATA } from "../../src/components/customTempData/CustomTempData";

function Templates() {
  return (
    <div>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={10}
        py={4}
        px={10}
      >
        {
          CUSTOM_TEMP_DATA?.map((items, index) => (
            <>
              <Box className="cursor" key={index}>
                <Link href={items?.href} style={{ cursor: "default" }}>
                  <div class="templatecontainer">
                    <img
                      className='templateimage'
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
          ))
        }
      </SimpleGrid>
    </div>
  );
}
export default Templates;
