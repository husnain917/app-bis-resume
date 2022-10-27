import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Style from './graphicDesigner.module.css';
const Personal = (props) => {
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
    <Dnd
      data={data}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      reorder={(e) => onOrderUpdate(e)}
      renderItem={(item, index) => (
        <Box maxW={230} ml={2}>
          <UnorderedList>
            <ListItem>
              <HybridText
                value={item.title}
                placeholder="Skill"
                customclass={`${Style.personalText}`}
                path={`skills.items.title`}
              />
            </ListItem>
          </UnorderedList>
        </Box>
      )}
    />
  );
};

export default Personal;
