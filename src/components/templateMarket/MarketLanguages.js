import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import DndMarket from './DndMarket'
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/templateMarket.module.css"

import {
  Box,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text as ChakraText,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Line } from 'rc-progress';
import { useState } from "react";

function MarketLanguages(props) {
  const dispatch = useDispatch();
  const path = "languages.items";

  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, "id");
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

  const [progresslang, setProgressLang] = useState([]);
  const validateData = (e, index2) => {
    if (e.target.value > 0 && e.target.value > 100 || e.target.value <= 0) {
      let newArr2 = progresslang.map((item, index) => {
        if (index === index2) {
          return null;
        }
        else {
          return item
        }
      })
      setProgressLang(newArr2);
      return;
    }
    let newArr;
    if (progresslang.length <= 0) {
      newArr = [e.target.value]
    }
    else if (progresslang.length === index2) {
      newArr = [...progresslang, e.target.value]
      console.log(newArr);
    }
    else {
      newArr = progresslang.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item
        }
      })
    }
    setProgressLang(newArr);
  }

  return (
    <div>
      < h2 className={styles.SkillHead}>Language</h2>

      <Box style={{ marginBottom: 20 }}>
        <DndMarket
          data={data}
          additem={_addNewItem}
          removeitem={(index) => _removeItem(index)}
          reorder={(e) => onOrderUpdate(e)}
          renderItem={(item, index) => (
            <HStack>
              <div className="skillCeoMain">
                <div className="skillCeodot">.</div>
                <div className="skillCeobody">
                  <Text
                    value={item.name}
                    placeholder="Language"
                    customclass={"manager-skillCeo"}
                    path={`${path}.${index}.name`}
                  />
                </div>
              </div>


              <div className={`${styles.progresslangDiv}`}>
                <Box w={100} h={2} borderRadius={8} bg={'white'}>
                  <Line
                    percent={progresslang[index]}
                    strokeWidth={8}
                    strokeColor={'#005063'}
                  />

                </Box>
              </div>
              <div className={`${styles.percDiv}`}>
                <Input
                  maxW={50}
                  maxH={30}
                  borderColor="none"
                  variant="unstyled"
                  placeholder="0"
                  value={`${progresslang[index]}`}
                  className={`${styles.inputData}`}
                  onChange={(e) => validateData(e, index)}
                  type="number"
                />
              </div>
              {

                progresslang[index] ?
                  <span className={`${styles.perD}`}>%</span> : null}


            </HStack>
          )}
        />
      </Box>
    </div>
  );
}
export default MarketLanguages;
