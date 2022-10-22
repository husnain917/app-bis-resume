import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box } from "@chakra-ui/react";
import styles from "../../../styles/templates/Graphic2.module.css";
function Interest(props) {
  const dispatch = useDispatch();
  const path = "hobbies.items";

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

  return (
    <div>
      <Dnd
        data={data}
        direction="horizontal"
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <Box
              h="32px"
              m="3px"
              borderRadius={6}
              pl="8px"
              pr="8px"
              mt="20%"
              border="1px"
              borderColor="gray.200"
            >
              <Text
                value={item.name}
                placeholder="Interest"
                path={`${path}.${index}.name`}
                color="white"
                paddingLeft="10px"
                paddingRight="10px"
              />
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Interest;
