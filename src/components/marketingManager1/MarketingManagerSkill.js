import { ListItem, UnorderedList } from '@chakra-ui/react';
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
const MarketingManagerSkill = (props) => {
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
    <div style={{ marginTop: '10px', marginBottom: '20px' }}>
      <MarkManagerHeading
        text={'Expertise'}
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
            <UnorderedList color={'#424949'}>
              <ListItem>
                <HybridText
                  value={item.title}
                  placeholder="Skill"
                  customclass={`${Style.date}`}
                  path={`skills.items.title`}
                />
              </ListItem>
            </UnorderedList>
          </>
        )}
      />
    </div>
  );
};

export default MarketingManagerSkill;
