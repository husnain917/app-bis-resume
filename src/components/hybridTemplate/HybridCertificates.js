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

const HybridCertificates = (props) => {
  const dispatch = useDispatch();
  const path = 'certifications.items';
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
            value={item.title}
            placeholder="Certificate Name"
            customclass={`${Style.projectTitleText}`}
            path={`certifications.items.title`}
          />
          <HStack>
            <Text
              value={item.startDate}
              placeholder="startDate"
              customclass={`${Style.description}`}
              path={`certifications.items.startDate`}
            />
            <div>-</div>
            <Text
              value={item.endDate}
              placeholder="endDate"
              customclass={`${Style.description}`}
              path={`certifications.items.endDate`}
            />
          </HStack>
          <Text
            value={item.summary}
            placeholder="Description(Optional)"
            customclass={`${Style.description}`}
            path={`certifications.items.summary`}
          />
        </Box>
      )}
    />
  );
};

export default HybridCertificates;
