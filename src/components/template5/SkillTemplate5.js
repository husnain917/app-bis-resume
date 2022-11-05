import React, { useState } from 'react';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import { Box, HStack, Input } from '@chakra-ui/react';
import DndTemplate5 from './DndTemplate5';
import Util from '../../../utils/templateUtils';
import { Line } from 'rc-progress';
import { Text } from '../template1';
import DndHybrid from '../hybridTemplate/DndHybrid';
const SkillBase = (props) => {
  const { data } = props;
  const path = 'skills.items';
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
  const [progress, setProgress] = useState([]);
  const validateData = (e, index2) => {
    if ((e.target.value > 0 && e.target.value > 100) || e.target.value <= 0) {
      let newArr2 = progress.map((item, index) => {
        if (index === index2) {
          return null;
        } else {
          return item;
        }
      });
      setProgress(newArr2);
      return;
    }
    let newArr;
    if (progress.length <= 0) {
      newArr = [e.target.value];
    } else if (progress.length === index2) {
      newArr = [...progress, e.target.value];
      console.log(newArr);
    } else {
      newArr = progress.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item;
        }
      });
    }
    setProgress(newArr);
  };

  return (
    <Box minW={'600px'} maxW="600px" ml={'165px'}>
      <DndHybrid
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        direction="horizontal"
        renderItem={(item, index) => (
          <HStack>
            <Text
              value={item.title}
              placeholder="Skill or Hobbies"
              customclass={
                'manager-fName manager-template-text-bold skillTextTemplate5'
              }
              path={`skills.items.title`}
            />
            <Box h={2} w={100} bg={'white'} borderRadius={4}>
              <Line
                percent={progress[index]}
                strokeWidth={7.5}
                strokeColor={'black'}
              />
            </Box>
            <Input
              maxW={50}
              maxH={30}
              borderColor="none"
              variant="unstyled"
              placeholder="%"
              value={`${progress[index]}`}
              onChange={(e) => validateData(e, index)}
              type="number"
            />
          </HStack>
        )}
      />
    </Box>
  );
};

export default SkillBase;
