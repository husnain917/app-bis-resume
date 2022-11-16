import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './fashionTemp1.module.css';
const FashTemp1PersonalInfo = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div>
      <HStack mt={8} ml={2}>
        <Box mr={2}>
          <BsFillTelephoneFill color="#3498DB" size={12} />
        </Box>
        <HybridText
          placeholder="Phone"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.phone}
          path={'profile.phone'}
        />
      </HStack>
      <HStack ml={2}>
        <Box mr={2}>
          <TbWorld color="#3498DB" />
        </Box>
        <HybridText
          placeholder="Website"
          customclass={` ${Style.profileText}`}
          path={'profile.website'}
          value={resumeData?.profile?.website}
        />
      </HStack>
      <HStack ml={2}>
        <Box mr={2}>
          <MdEmail color="#3498DB" />
        </Box>
        <HybridText
          placeholder="E-mail"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.email}
          path={'profile.email'}
        />
      </HStack>
      <HStack ml={2}>
        <Box mr={2}>
          <MdLocationOn color="#3498DB" />
        </Box>
        <HybridText
          placeholder="Location"
          customclass={` ${Style.profileText}`}
          value={resumeData?.profile?.address?.city}
          path={'profile.address.city'}
        />
      </HStack>
    </div>
  );
};

export default FashTemp1PersonalInfo;
