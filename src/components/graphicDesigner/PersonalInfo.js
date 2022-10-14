import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './graphicDesigner.module.css';
const PersonalInfo = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div style={{marginTop: -18}}>
      <HStack mt={8} ml={2}>
        <Box mr={2}>
          <BsFillTelephoneFill color="#2e4229" size={16} />
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
          <TbWorld color="#2e4229" size={16} />
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
          <MdEmail color="#2e4229" size={16} />
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
          <MdLocationOn color="#2e4229" size={16} />
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

export default PersonalInfo;
