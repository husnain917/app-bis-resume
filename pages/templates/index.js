import React from 'react';
import Link from "next/link";
import { SimpleGrid, Box, Image, Button as ChkraBtn } from '@chakra-ui/react';
import AuthModal from '../../src/components/authModal/AuthModal';
import Navbar from '../../src/components/navbar/Navbar';
import Footer from '../../src/components/footer/Footer';
function Templates() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const Button = () => (
    <ChkraBtn
      w={'130px'}
      _hover={{ background: '#5d6d7e' }}
      bg=" #5d6d7e;"
      className="btn"
      borderRadius={'12px'}
      fontSize={{ base: '12px', md: '14px' }}
      onClick={() => setIsModalOpen(true)}
    >
      Create My Resume
    </ChkraBtn>
  );
  return (
    <div>
  
      <Box display={{ base: 'flex', sm: '' }} justifyContent={'center'} m={4}>
        <AuthModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={10}
          py={4}
        >
          <Box className="container">
            <img
              src="Chief_Exclusive_Office.jpg"
              alt="Chief_Exclusive_Office"
              height="200px"
              width="250px"
            />

            <Button />
          </Box>
          <Box className="container">
            <img
              src="FashTemp5.png"
              alt="Fashion Designer Temmplate 5"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="FashTemp4.png"
              alt="Fashion Designer Temmplate 4"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="salesReprentative.png"
              alt="Fashion Designer Temmplate 4"
              height={"340"}
              width={270}
              mt={-2}
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="financialAdvisor.png"
              alt="Fashion Designer Temmplate 4"
              height={"340"}
              width={270}
              mt={-2}
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="FashionDesigner2.png"
              alt="Fashion Designer 2"
              height={340}
              width={270}
              mt={-2}
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="gdBanner.jpg"
              alt="Resume Digital Market"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <Box className="container">
              <img
                src="resumeMarket.png"
                alt="Resume Digital Market"
                height="200px"
                width="250px"
              />
              <Button />
            </Box>
          </Box>

          <Box className="container">
            <img
              src="digitalMarketingTemp.PNG"
              alt="Digital_Marketing_Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="FlightAttendantTemplate.png"
              alt="Flight Attendant Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="graphicTemp.PNG"
              alt="Graphic Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="social.jpg"
              alt="Social Media Specialist"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="templateBaby.png"
              alt=" Baby Resume"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="Hybrid_Template_Design.png"
              alt="Hybrid_Template_Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="DigitalMarketingTemp2.png"
              alt="Digital Marketing_Template 2_Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="FashionDesigner1.png"
              alt="Fashion Designer_Template 1_Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="gdBanner2.jpg"
              alt="Graphic_Designer_Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="GraphicDesigner5.png"
              alt="Graphic Designer_Template 5_Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="MarketingManagerTemp.png"
              alt="Graphic Designer_Template 5_Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="designerTemplate.PNG"
              alt="Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="graphicTemplate.PNG"
              alt="Graphic Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="graphDes8.png"
              alt="Graphic Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="MarkManager2.png"
              alt="Marketing Manager Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="gdBanner3.jpg"
              alt="Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="harumiTemplate.PNG"
              alt="Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="templateContent.png"
              alt="Content Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="ExecTemp.png"
              alt=" Executive Resume Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="graphic.png"
              alt=" Graphic Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="studentTemp.png"
              alt=" Student Resume Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="TechTemp.png"
              alt="Tech Editable Resume Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="softEngr.jpg"
              alt="Tech Resume Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="fashionTemp.PNG"
              alt="Fashion Designer Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="CollegeTemp.png"
              alt="College Resume Template"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="simpleTemp.png"
              alt="Simple Template Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
          <Box className="container">
            <img
              src="Skilled_Base_Template.png"
              alt="Simple Template Design"
              height="200px"
              width="250px"
            />
            <Button />
          </Box>
        </SimpleGrid>
      </Box>
  
    </div>
  );
}

export default Templates;
