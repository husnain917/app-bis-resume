import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import HybridText from '../hybridTemplate/HybridText';
import FashTemp5Heading1 from './FashTemp5Heading1';
import Style from './fashionTemp5.module.css';
import DndFash from './DndFash';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
const FashTemp5Skill = (props) => {
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
    <div>
      <FashTemp5Heading1 text={'SKILLS'} />
      <DndFash
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        data={data}
        renderItem={(item, index) => (
          <UnorderedList>
            <ListItem color={'white'}>
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
    </div>
  );
};

export default FashTemp5Skill;
