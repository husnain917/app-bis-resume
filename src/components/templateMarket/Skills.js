import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "../template1/Text"
import DndMarket from "./DndMarket"
import { useDispatch } from "react-redux";
import styles from "../../../styles/templates/templateMarket.module.css"
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

  return (
    <div>
    < h2  className={styles.SkillHead}> Pro Skills</h2>

      <Box >
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
                    placeholder="Skill"
                    customclass={"manager-skillCeo"}
                    path={`${path}.${index}.name`}
                  />
                </div>
              </div>
              <Slider aria-label="slider-ex-1" defaultValue={5} w={'200px'}>
                <SliderTrack h={2} borderRadius={8} bg={'white'}>
                  <SliderFilledTrack borderRadius={8} bg={'red'} />
                </SliderTrack>
              </Slider>
            </HStack>
          )}
        />
      </Box>
    </div>

  );
}
export default Skills;
