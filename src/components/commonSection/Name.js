import { Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import Text from './Text';

const Name = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const {
    direction,
    FName,
    SName,
    FNameStyle,
    SNameStyle,
    FNamePlaceholder,
    SNamePlaceholder,
  } = props;
  return (
    <Stack direction={direction ? direction : 'column'}>
      {FName && (
        <Text
          value={resumeData?.profile?.firstName}
          placeholder={FNamePlaceholder ? FNamePlaceholder : 'First Name'}
          customClass={` ${SNameStyle}`}
          path={'profile.firstName'}
        />
      )}
      {SName && (
        <Text
          value={resumeData?.profile?.lastName}
          placeholder={SNamePlaceholder ? SNamePlaceholder : 'Last Name'}
          customClass={`${FNameStyle}`}
          path={'profile.lastName'}
        />
      )}
    </Stack>
  );
};

export default Name;
