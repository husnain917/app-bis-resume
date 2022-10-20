import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import FashTemp5Heading1 from '../fashionTemp5/FashTemp5Heading1';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Style from './markManager.module.css';
const MarkMangeReference = (props) => {
  const { data } = props;
  const path = 'references.items';
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
    <>
      <FashTemp5Heading1
        text={'Reference'}
        dividerColor="#2e4053"
        color={'#2e4053'}
        fontSize={24}
      />
      <Box h={3}></Box>
      <Dnd
        data={data}
        direction="horizontal"
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box minW={180} maxW={180} ml={4}>
            <HybridText
              placeholder="Name"
              value={item.name}
              customclass={`${Style.referenceText}`}
              path={`${path}.${index}.name`}
            />
            <HybridText
              placeholder="Profession"
              value={item.profession}
              customclass={`${Style.company}`}
              path={`${path}.${index}.profession`}
            />
            <HStack>
              <Text fontSize={12} fontWeight={700} ml={'2px'} color="#2e4053">
                Phone:
              </Text>

              <HybridText
                placeholder="Phone"
                value={item.phone}
                customclass={`${Style.aboutText}`}
                path={`${path}.${index}.phone`}
              />
            </HStack>
            <HStack>
              <Text fontSize={12} fontWeight={700} ml={'2px'} color="#2e4053">
                E-mail:
              </Text>
              <HybridText
                placeholder="Email"
                value={item.email}
                customclass={`${Style.aboutText}`}
                path={`${path}.${index}.email`}
              />
            </HStack>
          </Box>
        )}
      />
    </>
  );
};

export default MarkMangeReference;
