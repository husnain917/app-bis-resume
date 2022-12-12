import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Adv from './Adv';
import { data } from './Constant';
import styles from '../../../styles/Index.module.css';
import CardSliderFunc from '../compProfessionalResume/compComponents/CardSlider';
import { useWindowSizing } from '../../../customHooks/useWindowSizing';
import AdvSlider from './AdvSlider';
import Link from "next/link";
export default function Advantages() {
  const [isTabActive, setIsTabActive] = useState(0);
  const [Width, setWidth] = useState('500');
  const [Display, setDisplay] = useState('none');
  const [toastWidth, setToastWidth] = useState(0);

  const size = useWindowSizing();
  const width = size.width;

  const tabHandler = (index) => {
    setToastWidth(0);
    setWidth('100%');
    setDisplay('block');
    setIsTabActive(index);
  };

  useEffect(() => {
    const progressBar = setInterval(() => {
      setToastWidth((prev) => (prev + 25) % 100);
    }, 1000);

    const interval = setInterval(() => {
      setIsTabActive(
        (prev) => (prev + 1) % data.length
      );
    }, 4000);
  },[])
  return (
    <>
      <Box bgColor="#F6F5F0">
        <Text
          fontSize={['1.5rem', , '2.5rem', '2.5rem', '3rem', '4rem']}
          align="center"
          fontWeight="600"
          color="#002D6B"
          mt="5%"
          pt="2%"
          p="10px"
        >
          Advantages of Using My Perfect BisResume
        </Text>
        {width > 767 ? (
          <Box
            w="100%"
            h="auto"
            display="flex"
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent="center"
            mt={['10%', '2%']}
            pl="10%"
            pr="10%"
            pb="5%"
          >
            <Box w={['100%', '100%', '100%', '50%']}>
              <Image
                src={data[isTabActive].imgSrc}
                w="100%"
                h={['90vh', '90vh', 'auto', 'auto', 'auto']}
              />
            </Box>
            <Box w={['100%', '100%', '100%', '50%']} mt="2.5%">
              {data?.map((tab, index) => {
                return (
                  <Adv
                    key={index}
                    advNum={tab.advNum}
                    title={tab.title}
                    advDesc={tab.advDesc}
                    tabHandler={() => tabHandler(index)}
                    Width={Width}
                    Display={Display}
                    toastWidth={toastWidth}
                    isTabActive={isTabActive}
                    index={index}
                  />
                );
              })}
            </Box>
          </Box>
        ) : (
          <AdvSlider />
        )}
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box className="cursor">
            <Link href="/templates">
              <Button
                colorScheme="#027C87"
                bgColor="#027C87"
                color="white"
                borderRadius="50px"
                fontSize={["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1.5rem"]}
                fontWeight="bold"
                textAlign="center"
                mb="5%"
                p={["0px", , "25px", "25px", "25px", "30px"]}
                pl="40px"
                pr="40px"
                mt={["10%", "10%", "0%"]}
                className={styles.benefitBtn}
              >
                Build my resume
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
