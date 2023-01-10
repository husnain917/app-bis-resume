
import { SimpleGrid, Box } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { CUSTOM_TEMP_DATA } from "../components/customTempData/CustomTempData";

function TemplateDetail() {
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
                <Link href={items?.href}>
                  <img
                    src={items?.src}
                    alt={items?.alt}
                    height={items?.height}
                    width={items?.width}
                  />
                </Link>
              </Box>
            </>
          ))
        }
      </SimpleGrid>
    </div>
  );
}
export default TemplateDetail;
