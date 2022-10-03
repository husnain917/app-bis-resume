import React from "react";
import Util from "../../../utils/templateUtils";

import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
// import { styles } from "../../../src/components/componentStyles/template1Style";
import { Dnd, Text } from "../../../src/components/template1";
import styles from ".././../../styles/templates/SeTemplate.module.css";
import { Box } from "@chakra-ui/react";
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
            <Box display="flex" flexDir="row" alignItems="center" h="40px">
              <Box fontSize="6rem" mb="11%">
                .
              </Box>
              <Text
                value={item.field}
                placeholder="Programming Language"
                customclass={styles.prog_lang}
                path={`${path}.${index}.field`}
              />
            </Box>
            
          </>
        )}
      />
    </div>
  );
}
export default Languages;
