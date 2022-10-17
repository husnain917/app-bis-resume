import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './fashionTemp4.module.css';
import FashTemp4Heading from './FashTemp4Heading';
const FashTemp4Contact = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div>
      <HStack alignItems={'flex-start'} mt={10}>
        <FashTemp4Heading text={'CONTACT'} />
        <Box pt={1}>
          <HStack alignItems={'flex-start'} mt={1}>
            <Box mr={2}>
              <BsFillTelephoneFill color="#643c28" size={12} />
            </Box>
            <HybridText
              placeholder="Phone"
              customclass={` ${Style.profileText}`}
              value={resumeData?.profile?.phone}
              path={'profile.phone'}
            />
          </HStack>
          <HStack alignItems={'flex-start'} mt={1}>
            <Box mr={2}>
              <TbWorld color="#643c28" />
            </Box>
            <HybridText
              placeholder="Website"
              customclass={` ${Style.profileText}`}
              path={'profile.website'}
              value={resumeData?.profile?.website}
            />
          </HStack>
          <HStack alignItems={'flex-start'} mt={1}>
            <Box mr={2}>
              <MdEmail color="#643c28" />
            </Box>
            <HybridText
              placeholder="E-mail"
              customclass={` ${Style.profileText}`}
              value={resumeData?.profile?.email}
              path={'profile.email'}
            />
          </HStack>
          <HStack alignItems={'flex-start'} mt={1}>
            <Box mr={2}>
              <MdLocationOn color="#643c28" />
            </Box>
            <HybridText
              placeholder="Location"
              customclass={` ${Style.profileText}`}
              value={resumeData?.profile?.address?.city}
              path={'profile.address.city'}
            />
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default FashTemp4Contact;
