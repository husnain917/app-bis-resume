import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import DndFash from './DndFash';
import FashTemp5Heading1 from './FashTemp5Heading1';
import Style from './fashionTemp5.module.css';
const FashTemp5Work = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const path = 'work.items';
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
      <FashTemp5Heading1
        text={'WORK EXPERIENCE'}
        color="black"
        fontSize={25}
        dividerColor="black"
        fontWeight={800}
      />
      <Box h={8}></Box>
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HStack alignItems="stretch">
              <Box w={1} bg={'#06213D'}>
                <Box
                  h={4}
                  w={4}
                  bg={'#06213D'}
                  borderRadius="full"
                  mr={4}
                  ml={-1.5}
                  mt={-1}
                ></Box>
              </Box>

              <Box px={4}>
                <HybridText
                  placeholder="Title/Position"
                  value={item.position}
                  customclass={`${Style.workText}`}
                  path={`${path}.${index}.position`}
                />
                <HStack>
                  <HybridText
                    placeholder="From"
                    value={item.startDate}
                    customclass={`${Style.workText}`}
                    path={`${path}.${index}.startDate`}
                  />
                  <div>-</div>
                  <HybridText
                    placeholder="End"
                    value={item.endDate}
                    customclass={`${Style.workText}`}
                    path={`${path}.${index}.endDate`}
                  />
                </HStack>
                <HybridText
                  value={item.description}
                  customclass={`${Style.summaryText}`}
                  path={`${path}.${index}.description`}
                  placeholder={'Summary'}
                />
              </Box>
            </HStack>
          </>
        )}
      />
    </div>
  );
};

export default FashTemp5Work;
