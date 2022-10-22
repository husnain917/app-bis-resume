import { Box, HStack, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import { Text } from '../template1';
import DndTemplate5 from '../template5/DndTemplate5';
import Style from './executive.module.css';

const ExecutiveLang = (props) => {
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
    <DndFash
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <UnorderedList>
          <ListItem>
            <Text
              value={item.Name}
              placeholder="Language "
              customclass={`${Style.languageText}`}
              path={`languages.items.Name`}
            />
          </ListItem>
        </UnorderedList>
      )}
    />
  );
};

export default ExecutiveLang;
