import { Circle, HStack } from '@chakra-ui/react';
import { Row } from 'antd';
import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { Text } from '../template1/index';
const ProfileTemplate5 = () => {
  return (
    <div>
      <Row style={{ marginBottom: '15px' }}>
        <Text
          placeholder="First Name"
          customclass={'fullName'}
          path={'profile.firstName'}
        />
        &nbsp;
        <Text
          placeholder="Last Name"
          customclass={'fullName'}
          path={'profile.lastName'}
        />
      </Row>

      <Text
        placeholder="Profession"
        customclass={'professionNameTemplate5'}
        path={'profile.firstName'}
      />
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="phone"
          customclass={'DetailStyleTemplate5'}
          path={'profile.firstName'}
        />
        <Circle size={'25px'} bg="black">
          <MdPhone color={'white'} />
        </Circle>
      </HStack>
      <HStack justifyContent={'flex-end'}>
        <Text placeholder="E-mail" customclass={'DetailStyleTemplate5'} />
        <Circle size={'25px'} bg="black">
          <IoMdMail color={'white'} />
        </Circle>
      </HStack>
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="Website"
          customclass={'DetailStyleTemplate5'}
          path={'profile.firstName'}
        />
        <Circle size={'25px'} bg="black">
          <TbWorld color={'white'} />
        </Circle>
      </HStack>
      <HStack justifyContent={'flex-end'}>
        <Text
          placeholder="Location"
          customclass={'DetailStyleTemplate5'}
          path={'profile.firstName'}
        />
        <Circle size={'25px'} bg="black">
          <MdLocationOn color={'white'} />
        </Circle>
      </HStack>
    </div>
  );
};

export default ProfileTemplate5;
