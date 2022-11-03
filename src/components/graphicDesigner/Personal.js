import {
  Box,
  Input,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import HybridText from '../hybridTemplate/HybridText';
import { Dnd } from '../template1';
import Style from './graphicDesigner.module.css';
import { Line } from 'rc-progress';
const Personal = (props) => {
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
    if (e.target.value > 0 && e.target.value > 100 || e.target.value <= 0) {
      let newArr2 = progress.map((item, index) => {
        if (index === index2) {
          return null;
        }
        else {
          return item
        }
      })
      setProgress(newArr2);
      return;
    }
    let newArr;
    if (progress.length <= 0) {
      newArr = [e.target.value]
    }
    else if (progress.length === index2) {
      newArr = [...progress, e.target.value]
      console.log(newArr);
    }
    else {
      newArr = progress.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item
        }
      })
    }
    setProgress(newArr);
  }
  return (
    <Dnd
      data={data}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      reorder={(e) => onOrderUpdate(e)}
      renderItem={(item, index) => (
        <Box
          padding={"5px 10px"}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          width={'90%'}
        >
          <Box
            width={'50%'}
          >
            <UnorderedList
              color={'#2e4229'}
            >
              <ListItem>
                <HybridText
                  value={item.title}
                  placeholder="Skill"
                  customclass={`${Style.personalText}`}
                  path={`skills.items.title`}
                />
              </ListItem>
            </UnorderedList>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            width={'48%'}
          >
            <Box w={'100%'} borderRadius={8}>
              <Line
                percent={progress[index]}
                strokeWidth={12}
                strokeColor={'#2e4229'}
              />
            </Box>
            <Input
              maxW={10}
              maxH={30}
              borderColor="none"
              variant="unstyled"
              placeholder="0"
              value={`${progress[index]}`}
              className={`${Style.inputData}`}
              onChange={(e) => validateData(e, index)}
              type="number"
            />
            {

              progress[index] ?
                <span className={`${Style.perD}`}>%</span>
                :
                null
            }
          </Box>
        </Box>
      )}
    />
  );
};

export default Personal;
