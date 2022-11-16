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
const StudentSkill = (props) => {
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
    <div>
      <StudentHeading text={'computer skills'} />
      <DndFash
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
                  customclass={`${Style.summary}`}
                  path={`skills.items.title`}
                />
              </ListItem>
            </UnorderedList>
          </Box>
        )}
      />
    </div>
  );
};

export default StudentSkill;
