import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import FashTemp5Heading1 from './FashTemp5Heading1';
import Style from './fashionTemp5.module.css';
const FashTemp5Profile = () => {
  const HeadingText = ({ text }) => {
    return (
      <Text fontSize={16} color={'white'} fontWeight={400} mt={2}>
        {text}
      </Text>
    );
  };
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const path = 'achievements.items';
  return (
    <Box>
      <FashTemp5Heading1 text={'CONTACT'} />
      <HeadingText text={'PHONE'} />
      <HybridText
        placeholder="Phone"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.phone}
        path={'profile.phone'}
      />
      <HeadingText text={'E-MAIL'} />
      <HybridText
        placeholder="Email"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.email}
        path={'profile.email'}
      />
      <HeadingText text={'ADDRESS'} />
      <HybridText
        placeholder="Address"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.address?.city}
        path={'profile.address.city'}
      />
    </Box>
  );
};

export default FashTemp5Profile;
