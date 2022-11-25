import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Text from './Text';

const Profession = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { professionPlaceholder, professionStyle, containerStyle, margin } =
    props;
  return (
    <Box
      className={`${containerStyle ? containerStyle : ''}`}
      m={margin ? margin : ''}
    >
      <Text
        placeholder={
          professionPlaceholder ? professionPlaceholder : 'Profession'
        }
        customClass={`${professionStyle}`}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
    </Box>
  );
};

export default Profession;
