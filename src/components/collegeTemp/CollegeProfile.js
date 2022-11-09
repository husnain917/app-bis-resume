import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { GrMail } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import Style from './college.module.css';

import { BsPhoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { Text } from '../template1';
import HybridText from '../hybridTemplate/HybridText';
import { HiPhone } from 'react-icons/hi';
const CollegeProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  const data = [
    {
      icon: <MdEmail color="#313B47" />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#313B47" />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
  ];
  return (
    <div>
      <HStack mb={5} alignItems="flex-start">
        <Box ml={5} minW={400} maxW={400}>
          <HStack>
            <HybridText
              value={resumeData?.profile?.firstName}
              placeholder="First Name"
              customclass={`fullName ${Style.hybridName}`}
              path={'profile.firstName'}
            />
            &nbsp;
            <HybridText
              value={resumeData?.profile?.lastName}
              placeholder="Last Name"
              customclass={`fullName ${Style.hybridName}`}
              path={'profile.lastName'}
            />
          </HStack>
          <Box maxW={'750px'} pb={10} justifyContent={'center'} ml={1}>
            <HybridText
              placeholder="Profession"
              customclass={`${Style.ProfessionHybrid}`}
              path={'profile.profession'}
              value={resumeData?.profile?.profession}
            />
            <HybridText
              placeholder="Short and Engaging Pitch about Yourself"
              customclass={` ${Style.profileText}`}
              value={resumeData?.achievements?.items?.Description}
              path={`${path}.Description`}
            />
          </Box>
        </Box>
        <Box minH={150} maxW={150} minW={150} borderRadius="full">
          <Image
            borderRadius={'full'}
            boxSize="150px"
            src="/ProfilePic.jpg"
            alt="Profile"
          />
        </Box>
        <Box borderRadius={6}>
          {data.map((item, index) => (
            <HStack
              key={index}
              my={5}
              ml={3}
              alignItems="flex-start"
              minW={250}
              maxW={250}
              justifyContent="flex-end"
            >
              <HybridText
                placeholder={item.placeholder}
                value={item.value}
                path={`profile.${item.path}`}
              />
              <Box
                minH={30}
                maxH={30}
                display={'flex'}
                justifyContent={'center'}
                alignItems="center"
              >
                {item.icon}
              </Box>
            </HStack>
          ))}
        </Box>
      </HStack>
    </div>
  );
};

export default CollegeProfile;
