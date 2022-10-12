import React from 'react';
import Util from '../../../utils/templateUtils';
import { Text, Dnd } from './index';
import { useDispatch } from 'react-redux';
import { updateOrder, addNewObj, deleteObjInArray } from '../../../store/actions/builderAction';

function Achievements(props) {
  const dispatch = useDispatch();
  const path = 'achievements.items';

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
    <Dnd
      data={data}
      reorder={(e) => onOrderUpdate(e)}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => {
        return (
          <div style={{ paddingTop: 10 }}>
            <Text
              value={item.Description}
              path={`${path}.${index}.Description`}
              placeholder="Description"
              customclass={'manager-fName'}
            />
          </div>
        );
      }}
    />
  );
}

export default Achievements;
