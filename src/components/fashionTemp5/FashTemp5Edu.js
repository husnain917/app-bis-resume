import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import DndFash from './DndFash';
import FashTemp5Heading1 from './FashTemp5Heading1';
import Style from './fashionTemp5.module.css';
const FashTemp5Edu = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const path = 'education.items';
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
    <Box>
      <FashTemp5Heading1
        text={'EDUCATION'}
        color="black"
        fontSize={25}
        dividerColor="black"
        fontWeight={800}
      />
      <Box h={6}></Box>
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box>
            <HybridText
              placeholder="Institute/University"
              value={item.institution}
              customclass={`${Style.workText}`}
              path={`${path}.${index}.institution`}
            />
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.workText}`}
                path={`${path}.${index}.startDate`}
              />
              <div>-</div>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.workText}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Summary"
              value={item.description}
              customclass={`${Style.summaryText}`}
              path={`${path}.${index}.description`}
            />
          </Box>
        )}
      />
    </Box>
  );
};

export default FashTemp5Edu;
