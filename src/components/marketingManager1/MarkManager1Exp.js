import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import MarkManagerHeading from './MarkManagerHeading';
import Style from './marketingManager1.module.css';
const MarkManager1Exp = (props) => {
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
    <Box
      minW={'460'}
      maxW="460"
      bg={'white'}
      py={'40px'}
      px={'30px'}
      borderBottomLeftRadius={5}
      borderTopRightRadius={'50px'}
    >
      <MarkManagerHeading divider1Color="black" text={'experience'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <UnorderedList>
              <ListItem>
                <HybridText
                  placeholder="Workplace/Company"
                  value={item.company}
                  customclass={`${Style.company}`}
                  path={`${path}.${index}.company`}
                />
              </ListItem>
            </UnorderedList>
            <HybridText
              placeholder="Summary"
              value={item.description}
              customclass={`${Style.description}`}
              path={`${path}.${index}.description`}
            />
          </>
        )}
      />
    </Box>
  );
};

export default MarkManager1Exp;
