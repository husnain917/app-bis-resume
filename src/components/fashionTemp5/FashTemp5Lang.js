import { ListItem, UnorderedList } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Style from './fashionTemp5.module.css';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import DndFash from './DndFash';
import FashTemp5Heading1 from './FashTemp5Heading1';

const FashTemp5Lang = (props) => {
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
      <FashTemp5Heading1 text={'LANGUAGES'} />
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

export default FashTemp5Lang;
