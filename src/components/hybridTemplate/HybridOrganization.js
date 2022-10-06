import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import Style from './hybridStyle.module.css';
import { Text } from '../template1';
import DndTemplate5 from '../template5/DndTemplate5';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';

const HybridOrganization = (props) => {
  const dispatch = useDispatch();
  const path = 'organization.items';
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
    <DndTemplate5
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box>
          <Text
            value={item.name}
            placeholder="Organization Name"
            customclass={`${Style.projectTitleText}`}
            path={`organization.items.name`}
          />
          <HStack>
            <Text
              value={item.startDate}
              placeholder="startDate"
              customclass={`${Style.description}`}
              path={`organization.items.startDate`}
            />
            <div>-</div>
            <Text
              value={item.endDate}
              placeholder="endDate"
              customclass={`${Style.description}`}
              path={`organization.items.endDate`}
            />
          </HStack>
          <Text
            value={item.role}
            placeholder="Role(Optional)"
            customclass={`${Style.description}`}
            path={`organization.items.role`}
          />
        </Box>
      )}
    />
  );
};

export default HybridOrganization;
