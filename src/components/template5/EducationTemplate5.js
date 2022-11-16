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
  Box,
  HStack,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import DndTemplate5 from './DndTemplate5';
import Util from '../../../utils/templateUtils';
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
                value={item.institution}
                customclass={'companyTemplate5'}
                style={styles.mb_10}
                path={`${path}.${index}.institution`}
              />
              <div
                className="manager-template-row"
                style={{ marginTop: '-5px' }}
              >
                <Text
                  value={item.month}
                  placeholder="End Month"
                  customclass={'manager-fName'}
                  path={`${path}.${index}.month`}
                />{' '}
                <Text
                  value={item.endDate}
                  placeholder="End Year"
                  customclass={'manager-fName'}
                  path={`${path}.${index}.endDate`}
                />
              </div>
              {console.log('item:', item)}
            </Stack>
            <Stack w={300} justifyContent="flex-end">
              <UnorderedList>
                <ListItem>
                  <Text
                    placeholder="Summary"
                    value={item.description}
                    customclass={'companyDescriptionTemplate5'}
                    path={`${path}.${index}.description`}
                  />
                </ListItem>
                <ListItem>
                  <Text
                    placeholder="Summary"
                    value={item.awards}
                    customclass={'companyDescriptionTemplate5'}
                    path={`${path}.${index}.awards`}
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
