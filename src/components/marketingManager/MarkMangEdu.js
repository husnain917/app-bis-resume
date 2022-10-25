import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import FashTemp5Heading1 from '../fashionTemp5/FashTemp5Heading1';
import HybridText from '../hybridTemplate/HybridText';
import Style from './markManager.module.css';
const MarkMangEdu = (props) => {
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
    <div>
      <FashTemp5Heading1 text={'Education'} fontSize={22} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box mt={2} mb={2}>
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.startDate`}
              />
              <div style={{ color: 'white' }}>-</div>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Study Program"
              value={item.degree}
              customclass={`${Style.programText}`}
              path={`${path}.${index}.degree`}
            />
            <HybridText
              placeholder="Institute/University"
              value={item.institution}
              customclass={`${Style.date}`}
              path={`${path}.${index}.institution`}
            />
          </Box>
        )}
      />
    </div>
  );
};

export default MarkMangEdu;
