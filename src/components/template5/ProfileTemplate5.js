import { Circle, HStack } from '@chakra-ui/react';
import { Row } from 'antd';
import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { Text } from '../template1/index';
const ProfileTemplate5 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <div>
      <Row style={{ marginBottom: '15px' }}>
        <Text
          value={resumeData?.profile?.firstName}
          placeholder="First Name"
          customclass={'fullName'}
          path={'profile.firstName'}
        />
        &nbsp;
        <Text
          value={resumeData?.profile?.lastName}
          placeholder="Last Name"
          customclass={'fullName'}
          path={'profile.lastName'}
        />
      </Row>

      <Text
        placeholder="Profession"
        customclass={'professionNameTemplate5'}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="phone"
          customclass={'DetailStyleTemplate5'}
          path={'profile.phone'}
          value={resumeData?.profile?.phone}
        />
        <Circle size={'25px'} bg="black">
          <MdPhone color={'white'} />
        </Circle>
      </HStack>
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="E-mail"
          customclass={'DetailStyleTemplate5'}
          value={resumeData?.profile?.email}
          path={'profile.email'}
        />

        <Circle size={'25px'} bg="black">
          <IoMdMail color={'white'} />
        </Circle>
      </HStack>

      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="Website"
          customclass={'DetailStyleTemplate5'}
          path={'profile.website'}
          value={resumeData?.profile?.website}
        />
        <Circle size={'25px'} bg="black">
          <TbWorld color={'white'} />
        </Circle>
      </HStack>
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="Location"
          customclass={'DetailStyleTemplate5'}
          value={resumeData?.profile?.address?.city}
          path={'profile.address.city'}
        />
        <Circle size={'25px'} bg="black">
          <MdLocationOn color={'white'} />
        </Circle>
      </HStack>
    </div>
  );
};

export default ProfileTemplate5;
