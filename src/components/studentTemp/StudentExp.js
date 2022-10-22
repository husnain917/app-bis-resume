import { Box, HStack } from '@chakra-ui/react';
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
import Style from './student.module.css';
import StudentHeading from './StudentHeading';
const StudentExp = (props) => {
  const { data } = props;
  const path = 'work.items';
  const dispatch = useDispatch();
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
      <StudentHeading text={'volunteer experience'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box>
            <HybridText
              placeholder="Workplace/Company"
              value={item.company}
              customclass={`${Style.institute}`}
              path={`${path}.${index}.company`}
            />
            <HStack>
              <HybridText
                placeholder="From"
                value={item.startDate}
                customclass={`${Style.summary}`}
                path={`${path}.${index}.startDate`}
              />
              <div>-</div>
              <HybridText
                placeholder="End"
                value={item.endDate}
                customclass={`${Style.summary}`}
                path={`${path}.${index}.endDate`}
              />
            </HStack>
            <HybridText
              placeholder="Short Description"
              value={item.description}
              customclass={`${Style.summary}`}
              path={`${path}.${index}.description`}
            />
          </Box>
        )}
      />
    </div>
  );
};

export default StudentExp;
