import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import { Text } from '../template1';
import DndTemplate5 from '../template5/DndTemplate5';
import Style from './hybridStyle.module.css';

const HybridHobbies = (props) => {
  const dispatch = useDispatch();
  const path = 'hobbies.items';
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
  const { data } = props;
  return (
    <DndTemplate5
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box>
          <Text
            value={item.title}
            placeholder="Interest"
            customclass={`${Style.projectTitleText}`}
            path={`hobbies.items.title`}
          />
        </Box>
      )}
    />
  );
};

export default HybridHobbies;
