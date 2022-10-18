import { Box, HStack, Text as ChakraText } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Style from './hybridStyle.module.css';
import Util from '../../../utils/templateUtils';
import { Text } from '../template1';
import DndTemplate5 from '../template5/DndTemplate5';
import DndHybrid from './DndHybrid';
import HybridText from './HybridText';

const HybridSkill = (props) => {
  const { data } = props;
  const path = 'skills.items';
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
    <DndHybrid
      data={data}
      direction="horizontal"
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      reorder={(e) => onOrderUpdate(e)}
      renderItem={(item, index) => (
        <Box h={'32px'} m={0.4} bg="blackAlpha.400" borderRadius={6}>
          <HybridText
            value={item.title}
            placeholder="Skill"
            customclass={`${Style.skillText}`}
            path={`skills.items.title`}
          />
        </Box>
      )}
    />
  );
};

export default HybridSkill;