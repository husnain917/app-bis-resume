import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Style from './tech.module.css';
import { MdEmail } from 'react-icons/md';
import HybridText from '../hybridTemplate/HybridText';
import { HiPhone } from 'react-icons/hi';
const TechProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  const data = [
    {
      icon: <MdEmail color="#319795" />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#319795" />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
  ];
  return (
    <div>
      <HStack mb={5} alignItems="flex-start">
        <HStack bg={'#D6D6D6'} py={3} borderRadius={6}>
          <Box minH={150} maxW={150} minW={150} borderRadius="full" ml={12}>
            <Image
              borderRadius={'full'}
              boxSize="150px"
              src="/ProfilePic.jpg"
              alt="Profile"
            />
          </Box>
          <Box ml={10}>
            <HStack mt={5} minW={375}>
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
                value={resumeData?.achievements?.items?.Description}
                path={`${path}.Description`}
              />
            </Box>
          </Box>
        </HStack>
        <Box bg={'#313c4e'} borderRadius={6} minW={302} maxW={302} minH={180}>
          {data.map((item, index) => (
            <HStack key={index} my={5} ml={3} alignItems="flex-start">
              <Box
                minW={30}
                maxW={30}
                minH={30}
                maxH={30}
                borderRadius="full"
                borderWidth={1}
                borderColor="#319795"
                display={'flex'}
                justifyContent={'center'}
                alignItems="center"
              >
                {item.icon}
              </Box>
              <HybridText
                placeholder={item.placeholder}
                customclass={` ${Style.profileText}`}
                value={item.value}
                path={`profile.${item.path}`}
              />
            </HStack>
          ))}
        </Box>
      </HStack>

      {/* <Box bg={'blackAlpha.200'} borderRadius={6} w={'full'}>
        <HStack
          justifyContent="center"
          minH={'45px'}
          alignItems="center"
          maxW={'900px'}
        >
          <GrMail size={20} color="#313B47" />
          <HybridText
            placeholder="E-mail"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.email}
            path={'profile.email'}
          />
          <BsPhoneFill size={20} color="#313B47" />
          <HybridText
            placeholder="Phone"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.phone}
            path={'profile.phone'}
          />
          <MdLocationOn size={20} color="#313B47" />
          <HybridText
            placeholder="Location"
            customclass={` ${Style.profileText}`}
            value={resumeData?.profile?.address?.city}
            path={'profile.address.city'}
          />
        </HStack>
      </Box> */}
    </div>
  );
};

export default TechProfile;
