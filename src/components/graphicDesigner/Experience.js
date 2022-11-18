import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Style from './graphicDesigner.module.css';

export default function Experience(props) {
  const { data } = props;
  const path = 'work.items';
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
    <Dnd
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <HStack alignItems={'flex-start'}>
          <Box maxW={160} minW={160}>
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.startDate`}
              />
              <Text color={'black'} fontWeight="bold">
                -
              </Text>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Workplace/Company"
              value={item.company}
              customclass={`${Style.date}`}
              path={`${path}.${index}.company`}
            />
            <HybridText
              placeholder="Title/Position"
              value={item.position}
              customclass={`${Style.date}`}
              path={`${path}.${index}.position`}
            />
            <HybridText
              placeholder="Location"
              value={item.location}
              customclass={`${Style.profileText}`}
              path={`${path}.${index}.location`}
            />
            <HybridText
              placeholder="Short Description"
              value={item.description}
              customclass={`${Style.profileText}`}
              path={`${path}.${index}.description`}
            />
          </Box>
        </HStack>
      )}
    />
  );
}