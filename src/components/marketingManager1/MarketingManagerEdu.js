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
import { HStack } from '@chakra-ui/react';
const MarketingManagerEdu = (props) => {
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
      <MarkManagerHeading
        text={'Education'}
        fontColor="#fff"
        fontWeight={400}
        divider1Color="white"
        divider2Color={'#273746'}
      />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HybridText
              placeholder="Study Program"
              value={item.degree}
              customclass={`${Style.institute}`}
              path={`${path}.${index}.degree`}
            />
            <HybridText
              placeholder="Institute/University"
              value={item.institution}
              customclass={`${Style.institute}`}
              path={`${path}.${index}.institution`}
            />
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
          </>
        )}
      />
    </div>
  );
};

export default MarketingManagerEdu;
