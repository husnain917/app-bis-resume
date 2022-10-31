import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
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
import StudentHeading from './StudentHeading';
import Style from './student.module.css';
const StudentLang = (props) => {
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
      <StudentHeading text={'languages'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box maxW={230} ml={2}>
            <UnorderedList>
              <ListItem>
                <HybridText
                  value={item.title}
                  placeholder="Languages"
                  customclass={`${Style.summary}`}
                  path={`languages.items.Name`}
                />
              </ListItem>
            </UnorderedList>
          </Box>
        )}
      />
    </div>
  );
};

export default StudentLang;
