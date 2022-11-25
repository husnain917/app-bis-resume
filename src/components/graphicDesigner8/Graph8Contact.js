import { Circle, HStack } from '@chakra-ui/react';
import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Graph8Heading from './Graph8Heading';
import Style from './graph8.module.css';
const Graph8Contact = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const data = [
    {
      icon: <MdEmail color="#2A78AB" />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#2A78AB" />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
    {
      icon: <TbWorld color="#2A78AB" />,
      placeholder: 'Website',
      value: `${resumeData?.profile?.website}`,
      path: 'website',
    },
  ];
  return (
    <div>
      <Graph8Heading
        fontSize={20}
        fontWeight={600}
        text="contact"
        letterSpacing={'1px'}
        dividerHeight="2px"
        mbTxt={2}
        mb="20px"
      />
      {data.map((item, index) => (
        <>
          <HStack key={index} alignItems="flex-start" pt={2} mt={1}>
            <Circle size={'25px'} bg={'white'}>
              {item.icon}
            </Circle>
            <HybridText
              placeholder={item.placeholder}
              customclass={` ${Style.institute}`}
              value={item.value}
              path={`profile.${item.path}`}
            />
          </HStack>
        </>
      ))}
    </div>
  );
};

export default Graph8Contact;
