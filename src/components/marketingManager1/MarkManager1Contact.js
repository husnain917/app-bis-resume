import React from 'react';
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Box, Circle, HStack } from '@chakra-ui/react';
import MarkManagerHeading from './MarkManagerHeading';
import HybridText from '../hybridTemplate/HybridText';
import Style from './marketingManager1.module.css';
const MarkManager1Contact = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const data = [
    {
      icon: <MdEmail color="#01012a" />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#01012a" />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
    {
      icon: <TbWorld color="#01012a" />,
      placeholder: 'Website',
      value: `${resumeData?.profile?.website}`,
      path: 'website',
    },
  ];
  return (
    <Box minW={'260px'} maxW="260px">
      <MarkManagerHeading
        text={'contact'}
        fontColor="#fff"
        fontWeight={400}
        divider1Color="white"
        divider2Color={'#273746'}
      />
      {data.map((item, index) => (
        <>
          <HStack key={index} alignItems="flex-start" pt={3}>
            <Circle size={'25px'} bg={'white'}>
              {item.icon}
            </Circle>
            <HybridText
              placeholder={item.placeholder}
              customclass={` ${Style.profileText}`}
              value={item.value}
              path={`profile.${item.path}`}
            />
          </HStack>
        </>
      ))}
    </Box>
  );
};

export default MarkManager1Contact;
