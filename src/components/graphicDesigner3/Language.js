import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Line } from "rc-progress";

import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box, Input } from "@chakra-ui/react";
import styles from "../../../styles/templates/Graphic3.module.css";
function Language(props) {
  const dispatch = useDispatch();
  const path = "certifications.items";

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
  console.log({ data });
  const [value, setValue] = useState([]);
  const skillHandler = (e, index2) => {
    if ((e.target.value > 0 && e.target.value > 100) || e.target.value <= 0) {
      let newArr2 = value.map((item, index) => {
        if (index === index2) {
          return null;
        } else {
          return item;
        }
      });
      setValue(newArr2);
      return;
    }
    let newArr;
    if (value.length <= 0) {
      newArr = [e.target.value];
    } else if (value.length === index2) {
      newArr = [...value, e.target.value];
      console.log(newArr);
    } else {
      newArr = value.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item;
        }
      });
    }
    setValue(newArr);
  };

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <Box display="flex" w="100%" justifyContent="space-between" alignItems="center" ml="40px">
                <Box w="40%" display="flex" alignItems="center" >

              <Box bgColor="#A6A6A6" w="7px" h="6px" borderRadius="200px"></Box>
              <Text
                value={item.title}
                placeholder="English"
                path={`${path}.${index}.title`}
                color="#A6A6A6"
                fontSize="1rem"
                marginLeft="8px"
                lineHeight="10px"
              />
                </Box>

        <div className={styles.barContainer}>


              <Line
                percent={value[index]}
                strokeWidth={4}
                strokeColor={"#56C8EA"}
                className={styles.lineBar}
              />

              <Input
                maxW={50}
                maxH={30}
                borderColor="none"
                variant="unstyled"
                placeholder="0"
                className={styles.skillInput}
                value={`${value[index]}`}
                onChange={(e) => skillHandler(e, index)}
                type="number"
              />
              {value[index] ? (
                <span
                  style={{
                    color: "grey",
                    alignSelf: "right",
                    position: "relative",
                    right: 25,
                  }}
                >
                  %
                </span>
              ) : null}
                </div>


            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Language;
