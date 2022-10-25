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
import FashTemp5Heading1 from '../fashionTemp5/FashTemp5Heading1';
import HybridText from '../hybridTemplate/HybridText';
import Style from './markManager.module.css';
const MarkMangeLang = (props) => {
  const dispatch = useDispatch();
  const path = 'languages.items';
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
    <div>
      <FashTemp5Heading1 text={'Languages'} fontSize={22} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <UnorderedList>
              <ListItem color={'white'}>
                <HybridText
                  value={item.Name}
                  placeholder="languages"
                  customclass={`${Style.skillText}`}
                  path={`${path}.Name`}
                />
              </ListItem>
            </UnorderedList>
          </>
        )}
      />
    </div>
  );
};

export default MarkMangeLang;
