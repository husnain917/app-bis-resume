import { SimpleGrid, Box, Image } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

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
            <Image
              src="FashionDesigner2.png"
              alt="Fashion Designer 2"
              height={340}
              width={270}
              mt={-2}
            />
          </Link>
        </Box>
        {/* <Box className='cursor'>
          <Link href='/templates/templateCEO'>
              <img src='Chief_Exclusive_Office.jpg' alt='Chief_Exclusive_Office' height='200px' width='250px' />
          <Link href="/templates/fashionDesigner/FashionDesigner">
            <img
              src="fashionDesigner.jpg"
              alt="Fashion_Designer_Template"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className='cursor'>
          <Link href='/templates/GraphicDesigner1'>
            <img src='gdBanner.jpg' alt='Resume Digital Market' height='200px' width='250px' />
          </Link>
        </Box>
                <Box className='cursor'>
        <Box className='cursor'>
          <Link href='/templates/templateMarket'>
            <img src='resumeMarket.png' alt='Resume Digital Market' height='200px' width='250px' />
          </Link>
        </Box>
        </Box>
        <Box className="cursor">
          <Box className="cursor">
            <Link href="/templates/templateMarket">
              <img
                src="resumeMarket.png"
                alt="Resume Digital Market"
                height="200px"
                width="250px"
              />
            </Link>
          </Box>
        </Box>
        <Box className="cursor">
          <Link href="/templates/digitalMarketingTemps/digitalMarketingTemp">
            <img
              src="digitalMarketingTemp.PNG"
              alt="Digital_Marketing_Template"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/FlightAttendant1">
            <img
              src="FlightAttendantTemplate.png"
              alt="Flight Attendant Template"
              height="200px"
              width="250px"
            />
          </Link>
 
        </Box> */}
        <Box className="cursor">
          <Link href="/templates/marketingManager1">
            <img
              src="MarketingManagerTemp.png"
              alt="Marketing Managert Template"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/template5">
            <img
              src="GraphicDesigner5.png"
              alt="Graphic Designer 5 Template"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/hybridTemplate">
            <img
              src="Hybrid_Template_Design.png"
              alt="Graphic Designer 5 Template"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/DigitalMarkTemp2">
            <img
              src="DigitalMarketingTemp2.png"
              alt="Digital Marketing Template 2"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
        <Box className="cursor">
          <Link href="/templates/fashionTemp1">
            <img
              src="FashionDesigner1.png"
              alt="Digital Marketing Template 2"
              height="200px"
              width="250px"
            />
          </Link>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Templates;
