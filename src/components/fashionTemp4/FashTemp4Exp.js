import { HStack } from '@chakra-ui/react';
import React from 'react';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import FashTemp4Heading from './FashTemp4Heading';
import Style from './fashionTemp4.module.css';
import { useDispatch } from 'react-redux';
const FashTemp4Exp = (props) => {
  const { data } = props;
  const path = 'work.items';
  const dispatch = useDispatch();
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
    <HStack alignItems={'flex-start'} mt={10}>
      <FashTemp4Heading text={'EXPERIENCE'} />

      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HybridText
              placeholder="Title/Position"
              value={item.position}
              customclass={`${Style.programText}`}
              path={`${path}.${index}.position`}
            />
            <HybridText
              placeholder="Workplace/Company"
              value={item.company}
              customclass={`${Style.institute}`}
              path={`${path}.${index}.company`}
            />
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.eduText}`}
                path={`${path}.${index}.startDate`}
              />
              <div>-</div>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.eduText}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Summary"
              value={item.description}
              customclass={`${Style.eduText}`}
              path={`${path}.${index}.description`}
            />
          </>
        )}
      />
    </HStack>
  );
};

export default FashTemp4Exp;
