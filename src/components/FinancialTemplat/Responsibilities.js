import React from "react";
import Util from "../../../utils/templateUtils";

import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Dnd, Text } from "../template1";
import { styles } from "../componentStyles/template1Style";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
function Responsibilities(props) {
  const dispatch = useDispatch();
  const path = "responsibilities.items";

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
            <Box>
              <UnorderedList ml={8} fontSize={18}>
                <ListItem
                  value={item.responsibilities}
                  placeholder="responsibilities"
                  customclass={"manager-fName manager-template-text-bold"}
                  path={`${path}.${index}.responsibilities`}
                ></ListItem>
              </UnorderedList>
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Responsibilities;
