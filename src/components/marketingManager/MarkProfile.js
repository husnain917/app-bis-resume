import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import FashTemp4Heading from '../fashionTemp4/FashTemp4Heading';
import FashTemp5Heading1 from '../fashionTemp5/FashTemp5Heading1';
import HybridText from '../hybridTemplate/HybridText';
import Style from './markManager.module.css';
const MarkProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const HeadingText = ({ text }) => {
    return (
      <Text fontSize={14} color={'white'} fontWeight={500} mt={2}>
        {text}
      </Text>
    );
  };
  return (
    <Box>
      <FashTemp5Heading1 text={'Contact'} fontSize={22} />
      <HeadingText text={'Phone'} />
      <HybridText
        placeholder="Phone"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.phone}
        path={'profile.phone'}
      />
      <HeadingText text={'E-mail'} />
      <HybridText
        placeholder="Email"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.email}
        path={'profile.email'}
      />
      <HeadingText text={'Address'} />
      <HybridText
        placeholder="Address"
        customclass={` ${Style.profileText}`}
        value={resumeData?.profile?.address?.city}
        path={'profile.address.city'}
      />
    </Box>
  );
};

export default MarkProfile;
