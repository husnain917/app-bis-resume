import React from 'react';
import FashTemp5Heading1 from '../fashionTemp5/FashTemp5Heading1';
import DndFash from '../fashionTemp5/DndFash';
import { Box, HStack } from '@chakra-ui/react';
import HybridText from '../hybridTemplate/HybridText';
import { useDispatch } from 'react-redux';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Style from './markManager.module.css';
const MarkMangExp = (props) => {
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
    <div style={{ marginTop: '40px' }}>
      <FashTemp5Heading1
        text={'Experience'}
        dividerColor="#2e4053"
        color={'#2e4053'}
        fontSize={24}
      />
      <Box h={3}></Box>
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HStack alignItems="stretch">
              <Box w={'1px'} bg={'#06213D'} mt={2}>
                <Box
                  h={3}
                  w={3}
                  borderWidth={2}
                  borderColor="black"
                  borderRadius="full"
                  mr={4}
                  ml={-1.5}
                  mt={-3}
                ></Box>
              </Box>

              <Box px={4}>
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
                  placeholder="Workplace/Company"
                  value={item.company}
                  customclass={`${Style.company}`}
                  path={`${path}.${index}.company`}
                />
                <HybridText
                  placeholder="Title/Position"
                  value={item.position}
                  customclass={`${Style.workText}`}
                  path={`${path}.${index}.position`}
                />

                <HybridText
                  value={item.description}
                  customclass={`${Style.company}`}
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

export default MarkMangExp;
