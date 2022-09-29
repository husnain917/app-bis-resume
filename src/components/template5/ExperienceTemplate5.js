import React from 'react';
import { Text } from '../template1';
import { styles } from '../componentStyles/template1Style';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import { HStack, Stack, VStack } from '@chakra-ui/react';
import DndTemplate5 from './DndTemplate5';
import Util from '../../../utils/templateUtils';
const ExperienceTemplate5 = ({ data }) => {
  const path = 'work.items';
  const dispatch = useDispatch();

  const _addNewItem = () => {
    console.log(data);
    dispatch(addNewObj(data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };
  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, 'id');
    dispatch(updateOrder(storeReorder, path));
  };
  return (
    <DndTemplate5
      data={data}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      reorder={(e) => onOrderUpdate(e)}
      renderItem={(item, index) => (
        <VStack p={5}>
          <HStack gap={4} pl={24}>
            <Stack w={190} justifyContent="flex-end">
              <Text
                placeholder="Company"
                value={item.company}
                customclass={'companyTemplate5'}
                style={styles.mb_10}
                path={`${path}.${index}.company`}
              />
            </Stack>
            <Stack w={300} justifyContent="flex-end">
              <Text
                placeholder="Summary"
                value={item.company}
                customclass={'companyDescriptionTemplate5'}
                style={styles.mb_10}
                path={`${path}.${index}.company`}
              />
            </Stack>
          </HStack>
        </VStack>
      )}
    />
  );
};

export default ExperienceTemplate5;
