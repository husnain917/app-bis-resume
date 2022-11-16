import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box } from "@chakra-ui/react";

function Skills(props) {
  const dispatch = useDispatch();
  const path = "skills.items";

  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, "id");

    //
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
    <Box>
      <Dnd
        direction="horizontal"
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box
            display="flex"
            flexDir="row"
            alignItems="center"
            h="30px"
            mt="2px"
          >
            <Box fontSize="3rem" mb="7">
              .
            </Box>
            <Text
              value={item?.name}
              placeholder="Skill"
              customclass={"manager-fName"}
              path={`${path}.${index}.name`}
            />
            {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
          </Box>
        )}
      />
    </Box>
  );
}
export default Skills;
