import { Box, HStack, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Style from './fashionTemp1.module.css';
const FashTemp1Reference = (props) => {
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
            customclass={`${Style.referenceName}`}
            path={`${path}.${index}.name`}
          />
          <HybridText
            placeholder="Profession"
            value={item.profession}
            customclass={`${Style.profileText}`}
            path={`${path}.${index}.profession`}
          />
          <HStack alignItems={'flex-start'}>
            <Text fontSize={'16px'} fontWeight={400} mt={1} maxW={5} minW={5}>
              A :
            </Text>
            <HybridText
              placeholder="Address"
              value={item.address}
              customclass={`${Style.profileText}`}
              path={`${path}.${index}.address`}
            />
          </HStack>
          <HStack alignItems={'flex-start'}>
            <Text fontSize={'16px'} fontWeight={400} mt={1} maxW={5} minW={5}>
              P :
            </Text>
            <HybridText
              placeholder="Phone"
              value={item.phone}
              customclass={`${Style.profileText}`}
              path={`${path}.${index}.phone`}
            />
          </HStack>
        </Box>
      )}
    />
  );
};

export default FashTemp1Reference;
