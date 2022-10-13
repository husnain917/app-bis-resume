import React from "react";
import Util from "../../../utils/templateUtils";

import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Dnd, Text } from "../template1";
import { Box } from "@chakra-ui/react";
import styles from ".././../../styles/templates/Fashion.module.css";
function Languages(props) {
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

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <div>
              <Box bgColor="#1B4245" borderColor="#1B4245">
                <Box display="flex">
                  <Text
                    value={item?.language}
                    placeholder="Fashion School"
                    customClass={styles.educationFeild}
                    path={`${path}.${index}.language`}
                    color="white"
                  />
                </Box>
              </Box>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Languages;
