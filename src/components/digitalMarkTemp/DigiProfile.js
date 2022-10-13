import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './digitalStyle.module.css';
const DigiProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <Box>
      <HStack ml={4} mb={5} mt={8}>
        <HybridText
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          customclass={`fullName ${Style.digitalName}`}
          path={'profile.firstName'}
        />
        &nbsp;
        <HybridText
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          customclass={`fullName ${Style.digitalName}`}
          path={'profile.lastName'}
        />
      </HStack>
      <Box
        minH={10}
        bg={'#AED6F1'}
        maxW={310}
        minW={310}
        borderRightRadius={8}
        justifyContent="center"
        alignItems={'center'}
        pt={0.5}
        mt={4}
      >
        <HybridText
          placeholder="Profession"
          customclass={`${Style.ProfessionDigital}`}
          path={'profile.profession'}
          value={resumeData?.profile?.profession}
        />
      </Box>
      <HybridText
        placeholder="Short and Engaging pitch about yourself"
        customclass={`${Style.about}`}
        path={'objective.body'}
        value={resumeData?.achievements?.items?.Description}
      />
      <Box
        minH={10}
        bg={'#AED6F1'}
        maxW={260}
        minW={260}
        borderRightRadius={8}
        pt={0.9}
        mt={4}
        maxH={10}
      >
        <Text
          fontSize={'23px'}
          ml={4}
          fontWeight="500"
          color={'black'}
          letterSpacing={2}
        >
          CONTACT
        </Text>
      </Box>
      <Box ml={8} my={6}>
        <Text fontSize={16} fontWeight="800" color={'black'}>
          ADDRESS:
        </Text>
        <HybridText
          placeholder="Location"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.address?.city}
          path={'profile.address.city'}
        />
        <Text fontSize={16} fontWeight="800" color={'black'}>
          E-MAIL:
        </Text>
        <HybridText
          placeholder="E-mail"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.email}
          path={'profile.email'}
        />
        <Text fontSize={16} fontWeight="800" color={'black'}>
          WEBSITE:
        </Text>
        <HybridText
          placeholder="Website"
          customclass={` ${Style.profileText}`}
          path={'profile.website'}
          value={resumeData?.profile?.website}
        />
        <Text fontSize={16} fontWeight="800" color={'black'}>
          PHONE NUMBER:
        </Text>
        <HybridText
          placeholder="Phone"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.phone}
          path={'profile.phone'}
        />
      </Box>
    </Box>
  );
};

export default DigiProfile;
