import React from 'react';
import StudentHeading from './StudentHeading';
import DndFash from '../fashionTemp5/DndFash';
import { Box, HStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import Util from '../../../utils/templateUtils';
import Style from './student.module.css';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import HybridText from '../hybridTemplate/HybridText';
const StudentEdu = (props) => {
  const { data } = props;
  const path = 'education.items';
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
      <StudentHeading text={'education'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box>
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
              placeholder="Summary"
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

export default StudentEdu;
