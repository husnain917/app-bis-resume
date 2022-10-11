import {
  Box,
  HStack,
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
              <Slider aria-label="slider-ex-1" defaultValue={30} w={'100px'}>
                <SliderTrack h={3} borderRadius={8} bg={'blackAlpha.400'}>
                  <SliderFilledTrack borderRadius={8} bg={'#AED6F1'} />
                </SliderTrack>
              </Slider>
            </HStack>
          )}
        />
      </Box>
    </div>
  );
};

export default DigiSkill;
