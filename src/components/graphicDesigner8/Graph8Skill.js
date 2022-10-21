import { Box, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import Graph8Heading from './Graph8Heading';
import { Line } from 'rc-progress';
import Style from './graph8.module.css';
const Graph8Skill = (props) => {
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
      <Graph8Heading
        fontSize={20}
        fontWeight={700}
        text="skills"
        letterSpacing={'1px'}
        dividerHeight="2px"
        mbTxt={2}
        color="#2A78AB"
        dividerColor={'gray'}
        mb={'20px'}
        mt="20px"
      />
      <DndFash
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
            <Box w={100}>
              <Line
                percent={progress[index]}
                strokeColor={'#2a78ab'}
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
    </div>
  );
};

export default Graph8Skill;
