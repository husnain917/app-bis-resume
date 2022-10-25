import { Box } from '@chakra-ui/react';
import React from 'react';
import Style from './executive.module.css';
import { Text } from '../template1';
import DndTemplate5 from '../template5/DndTemplate5';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import DndFash from '../fashionTemp5/DndFash';

const ExecutiveProject = (props) => {
  const dispatch = useDispatch();
  const path = 'projects.items';
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
    <DndFash
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box>
          <Text
            value={item.Title}
            placeholder="Project Name"
            customclass={`${Style.projectTitleText}`}
            path={`projects.items.Title`}
          />
          <Text
            value={item.Duration}
            placeholder="Project Duration"
            customclass={`${Style.description}`}
            path={`projects.items.Duration`}
          />
          <Text
            value={item.Summary}
            placeholder="Project Summary"
            customclass={`${Style.description}`}
            path={`projects.items.Summary`}
          />
        </Box>
      )}
    />
  );
};

export default ExecutiveProject;
