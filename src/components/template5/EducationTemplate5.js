import React from 'react';
import { Text } from '../template1';
import { styles } from '../componentStyles/template1Style';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import {
  HStack,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import DndTemplate5 from './DndTemplate5';
const EducationTemplate5 = (props) => {
  const { data } = props;
  const path = 'education.items';
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
        <VStack p={5}>
          <HStack gap={4} pl={24}>
            <Stack w={190} justifyContent="flex-end">
              <Text
                placeholder="Institute or University"
                value={item.company}
                customclass={'companyTemplate5'}
                style={styles.mb_10}
                path={`${path}.${index}.company`}
              />
              {console.log('item:', item)}
            </Stack>
            <Stack w={300} justifyContent="flex-end">
              <UnorderedList>
                <ListItem>
                  <Text
                    placeholder="Summary"
                    value={item.company}
                    customclass={'companyDescriptionTemplate5'}
                    path={`${path}.${index}.company`}
                  />
                </ListItem>
                <ListItem>
                  <Text
                    placeholder="Summary"
                    value={item.company}
                    customclass={'companyDescriptionTemplate5'}
                    path={`${path}.${index}.company`}
                  />
                </ListItem>
              </UnorderedList>
            </Stack>
          </HStack>
        </VStack>
      )}
    />
  );
};

export default EducationTemplate5;
