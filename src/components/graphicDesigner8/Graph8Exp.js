import { HStack } from '@chakra-ui/react';
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
import Graph8Heading from './Graph8Heading';
import Style from './graph8.module.css';
const Graph8Exp = (props) => {
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
    <div style={{ marginTop: '63px' }}>
      <Graph8Heading
        fontSize={20}
        fontWeight={700}
        text="work experience"
        letterSpacing={'1px'}
        dividerHeight="2px"
        mbTxt={2}
        color="#2A78AB"
        dividerColor={'gray'}
        mb={'20px'}
      />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.startDate`}
              />
              <div>/</div>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.date}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Title/Position"
              value={item.position}
              customclass={`${Style.workText}`}
              path={`${path}.${index}.position`}
            />
            <HybridText
              value={item.description}
              customclass={`${Style.date}`}
              path={`${path}.${index}.description`}
              placeholder={'Summary'}
            />
          </>
        )}
      />
    </div>
  );
};

export default Graph8Exp;
