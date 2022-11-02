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
import Style from './digitalStyle.module.css';

import DndDigital from './DndDigital';

const DigiExperience = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const path = 'work.items';
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
    <DndDigital
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box>
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
            placeholder="Title/Position"
            value={item.position}
            customclass={`${Style.programText}`}
            path={`${path}.${index}.position`}
          />
          <HybridText
            placeholder="Short Description"
            value={item.summary}
            customclass={`${Style.desText}`}
            path={`${path}.${index}.summary`}
          />
        </Box>
      )}
    />
  );
};

export default DigiExperience;
