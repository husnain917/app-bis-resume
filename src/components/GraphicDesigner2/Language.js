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

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <Box display="flex" alignItems="center" ml="10px" mt="2%">
              <Box bgColor="white" w="5px" h="5px" borderRadius="100px"></Box>
              <Text
                value={item.title}
                placeholder="English"
                path={`${path}.${index}.title`}
                color="white"
                fontSize="1rem"
                marginLeft="10px"
                lineHeight="10px"
              />
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Language;
