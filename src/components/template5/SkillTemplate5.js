import React, { useState } from 'react';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import { Box, HStack, Input } from '@chakra-ui/react';
import DndTemplate5 from './DndTemplate5';
import Util from '../../../utils/templateUtils';
import { Line } from 'rc-progress';
import { Text } from '../template1';
const SkillBase = (props) => {
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const { data } = props;
  const path = 'skills.items';
  const dispatch = useDispatch();
  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, 'id');
    dispatch(updateOrder(storeReorder, path));
  };
  const _addNewItem = () => {
    dispatch(addNewObj(props.data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };

  return (
    <DndTemplate5
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box width={'3xl'}>
          <Box ml={30} justifyContent="flex-end" gap={4} mt={8}>
            <HStack justifyContent={'flex-end'}>
              <HStack>
                <Text
                  value={item.skill1}
                  placeholder="Skill or Hobbies"
                  customclass={
                    'manager-fName manager-template-text-bold skillTextTemplate5'
                  }
                  path={`skills.items.skill1`}
                />
                <Box h={2} w={100} bg={'white'} borderRadius={4}>
                  <Line
                    percent={skill1}
                    strokeWidth={7.5}
                    strokeColor={'black'}
                  />
                </Box>
                <Input
                  maxW={50}
                  maxH={30}
                  borderColor="none"
                  variant="unstyled"
                  placeholder="%"
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                  type="number"
                />
              </HStack>
              <Box></Box>
              <HStack>
                <Text
                  value={item.skill2}
                  customclass={
                    'manager-fName manager-template-text-bold skillTextTemplate5'
                  }
                  placeholder="Skill or Hobbies"
                  path={'skills.items.skill2'}
                />
                <Box h={2} w={100} bg={'white'} borderRadius={4}>
                  <Line
                    percent={skill2}
                    strokeWidth={7.5}
                    strokeColor={'black'}
                  />
                </Box>
                <Input
                  maxW={50}
                  maxH={30}
                  borderColor="none"
                  variant="unstyled"
                  placeholder="%"
                  value={skill2}
                  onChange={(e) => setSkill2(e.target.value)}
                  type="number"
                />
              </HStack>
            </HStack>
          </Box>
        </Box>
      )}
    />
  );
};

export default SkillBase;
