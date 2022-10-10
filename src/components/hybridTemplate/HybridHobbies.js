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
import DndHybrid from './DndHybrid';
import Style from './hybridStyle.module.css';
import HybridText from './HybridText';

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
    <DndHybrid
      direction="horizontal"
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box
          borderWidth={2}
          borderColor={'blackAlpha.400'}
          borderRadius={6}
          m={0.5}
        >
          <HybridText
            value={item.title}
            placeholder="Interest"
            customclass={`${Style.skillText}`}
            path={`hobbies.items.title`}
          />
        </Box>
      )}
    />
  );
};

export default HybridHobbies;
