import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../../components/fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import Style from './flightAttendant.module.css';
const FlightAttendantSkill = (props) => {
  const path = 'skills.items';
  const dispatch = useDispatch();
  const { data } = props;
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
    <Box mt={14}>
      <Text
        color={'white'}
        textTransform="upperCase"
        fontWeight={'600'}
        fontSize={17}
      >
        Relevant Skills
      </Text>
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <UnorderedList color={'white'}>
            <ListItem>
              <HybridText
                value={item.title}
                placeholder="Skill"
                customclass={`${Style.skillText}`}
                path={`skills.items.title`}
              />
            </ListItem>
          </UnorderedList>
        )}
      />
    </Box>
  );
};

export default FlightAttendantSkill;
