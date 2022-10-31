import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import Style from './graphicDesigner.module.css';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Rating from '../rating/Rating';

const Langugaes = (props) => {
  const dispatch = useDispatch();
  const path = 'languages.items';
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
    <Dnd
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <HStack>
          <HybridText
            value={item.Name}
            placeholder="Language "
            customclass={`${Style.langText}`}
            path={`languages.items.Name`}
          />
          <Rating activeColor={'#3498DB'} size={24} />
        </HStack>
      )}
    />
  );
};

export default Langugaes;
