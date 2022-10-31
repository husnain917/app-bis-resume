import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../../components/hybridTemplate/HybridText';
import Style from './student.module.css';
import { MdEmail } from 'react-icons/md';
import { HiPhone } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
const StudentProfile = () => {
  const PText = ({ txt }) => (
    <Text
      color={'#fff'}
      fontSize={'16px'}
      fontWeight="700"
      letterSpacing={'2px'}
      mt="20px"
    >
      {txt}
    </Text>
  );
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const data = [
    {
      icon: <MdEmail color="#fff" size={23} />,
      placeholder: 'E-mail',
      value: `${resumeData?.profile?.email}`,
      path: 'email',
    },
    {
      icon: <HiPhone color="#fff" size={23} />,
      placeholder: 'Phone',
      value: `${resumeData?.profile?.phone}`,
      path: 'phone',
    },
    {
      icon: <ImLocation2 color="#fff" size={23} />,
      placeholder: 'Location',
      value: `${resumeData?.profile?.address?.city}`,
      path: 'address.city',
    },
  ];
  return (
    <div>
      <Box display="flex" justifyContent={'center'}>
        <Box
          minW={'210px'}
          maxW="210px"
          borderRadius={'full'}
          borderWidth="4px"
          borderColor={'#fff'}
          mt={12}
        >
          <Image
            borderRadius={'full'}
            boxSize="203px"
            src="/profileDigi.png"
            alt="Profile"
          />
        </Box>
      </Box>
      <Box ml={'30px'} mr={'20px'} mt="50px">
        <PText txt={'PROFILE'} />
        <HybridText
          placeholder="Short and Engaging pitch about yourself"
          customclass={`${Style.about}`}
          path={'objective.body'}
          value={resumeData?.achievements?.items?.Description}
        />
        <PText txt={'CONTACT ME'} />
        {data.map((item, index) => (
          <>
            <HStack key={index} alignItems="flex-start" pt={2}>
              {item.icon}
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
    </div>
  );
};

export default StudentProfile;
