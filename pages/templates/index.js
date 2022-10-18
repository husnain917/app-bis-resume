import { SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function Templates() {
  return (
    <div>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={10}
        py={4}
        px={10}
      >
        <Box className="cursor">
          <Link href="/templates/templateCEO">
            <img
              src="Chief_Exclusive_Office.jpg"
              alt="Chief_Exclusive_Office"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/fashionTemp5">
            <img
              src="FashTemp5.png"
              alt="Fashion Designer Temmplate 5"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/fashionTemp4">
            <img
              src="FashTemp4.png"
              alt="Fashion Designer Temmplate 4"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/FashionDesigner2">
            <img
              src="FashionDesigner2.png"
              alt="Fashion Designer 2"
              height="350px"
              width="300px"
            />
          </Link>
        </Box>
        {/*  <Box className='cursor'>
          <Link href='/templates/templateCEO'>
              <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
          </Link>
        </Box> */}
      </SimpleGrid>
    </div>
  );
}

export default Templates;
