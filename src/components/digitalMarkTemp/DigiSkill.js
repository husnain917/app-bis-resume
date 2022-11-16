import {
  Box,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text as ChakraText,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import Style from './digitalStyle.module.css';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd, Text } from '../template1';
import { Line } from 'rc-progress';
import { useState } from 'react';
const DigiSkill = (props) => {
  const { data } = props;
  const path = 'skills.items';
  const dispatch = useDispatch();
  const _addNewItem = () => {
    console.log(data);
    dispatch(addNewObj(data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };
  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, 'id');
    dispatch(updateOrder(storeReorder, path));
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
    <div>
      <Box
        minH={10}
        bg={'#AED6F1'}
        maxW={260}
        minW={260}
        borderRightRadius={8}
        pt={0.9}
        mt={4}
        maxH={10}
      >
        <ChakraText
          fontSize={'23px'}
          ml={4}
          fontWeight="500"
          color={'black'}
          letterSpacing={2}
        >
          SKILL
        </ChakraText>
      </Box>
      <Box ml={8} my={6}>
        <Dnd
          data={data}
          additem={_addNewItem}
          removeitem={(index) => _removeItem(index)}
          reorder={(e) => onOrderUpdate(e)}
          renderItem={(item, index) => (
            <HStack>
              <HybridText
                value={item.title}
                placeholder="Skill"
                customclass={`${Style.skillText}`}
                path={`skills.items.title`}
              />
              <Box w={100} borderRadius={4}>
                <Line
                  percent={progress[index]}
                  strokeColor={'#AED6F1'}
                  className={`${Style.bg}`}
                  strokeWidth={10}
                  trailColor="#D5DBDB"
                  trailWidth={10}
                />
              </Box>
              <Input
                maxW={50}
                maxH={30}
                borderColor="none"
                variant="unstyled"
                placeholder="0"
                value={`${progress[index]}`}
                onChange={(e) => validateData(e, index)}
                type="number"
              />
              <div style={{ marginLeft: '-30px' }}>%</div>
            </HStack>
          )}
        />
      </Box>
    </div>
  );
};

export default DigiSkill;
