import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "../template1/Text"
import { useDispatch } from "react-redux";
import styles from "../../../styles/templates/templatebabysitter.module.css"
import { useState } from "react";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import {
  Box,

  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text as ChakraText,
} from '@chakra-ui/react';
import { Input, useToast } from '@chakra-ui/react';
import { Line } from 'rc-progress';
import EducationDnd from "./EducationDnd";

function Skills(props) {
  const dispatch = useDispatch();
  const path = "skills.items";

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
    <div>
      < h2 className={styles.SkillHead}>SKILLS</h2>

      <Box >
        <EducationDnd
          data={data}
          additem={_addNewItem}
          removeitem={(index) => _removeItem(index)}
          reorder={(e) => onOrderUpdate(e)}
          renderItem={(item, index) => (
            <div className={styles.mainSkillDiv}>

              <div className="skillCeoMain">

                <div className="skillCeodot">.</div>
                <div className="skillCeobody">
                  <Text
                    value={item.name}
                    placeholder="Skill"
                    customclass={"manager-skillCeo"}
                    path={`${path}.${index}.name`}
                  />
                </div>
              </div>


              <div className={styles.progressContent}>
                <div className={`${styles.progressDiv}`}>
                  <Box w={160} h={2} borderRadius={8} bg={'white'}>
                    <Line
                      percent={progress[index]}
                      strokeWidth={5}
                      strokeColor={"brown"}
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
                    value={`${progress[index]}`}
                    className={`${styles.inputData}`}
                    onChange={(e) => validateData(e, index)}
                    type="number"
                  />
                </div>
                {
                  progress[index] ?
                    <span className={`${styles.perD}`}>%</span> : null}
              </div>
            </div>
          )}
        />
      </Box>
    </div>

  );
}
export default Skills;
