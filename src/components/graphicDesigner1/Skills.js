import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box, Input } from "@chakra-ui/react";
import styles from "../../../styles/templates/Graphic.module.css";
import { Line } from "rc-progress";
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
          <div className={styles.skillContainer}>
            <Line
              percent={value[index]}
              strokeWidth={10}
              strokeColor={"white"}
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
{value[index] ? <span style={{ color: "white",alignSelf:"right",position:'relative',right:20 }}>%</span> : null}

            <Text
              value={item.name}
              placeholder="Content Design"
              path={`${path}.${index}.name`}
              color="white"
              fontSize="1rem"
              fontWeight="bold"
            />
          </div>
        )}
      />
    </div>
  );
}
export default Skills;
