import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box } from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";

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
  const [currentValue, setCurrentValue] = useState("");
  const [hoverValue, setHoverValue] = useState(undefined);
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
            flexDirection="row"
            justifyContent={"space-between"}
            h="20px"
            mt="2px"
          >
            <Text
              value={item?.name}
              placeholder="Skill"
              customclass={"manager-fName"}
              path={`${path}.${index}.name`}
            />
            <Box display={"flex"} flexDirection={"row"}>
              <Box marginX="1">
                <BsCircle />
              </Box>
              <Box>
                <BsCircleFill />
              </Box>
              <Box marginX="1">
                <BsCircle />
              </Box>
              <Box>
                <BsCircleFill />
              </Box>
              <Box marginX="1">
                <BsCircle />
              </Box>
            </Box>
            {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
          </Box>
        )}
      />
    </Box>
  );
}
export default Skills;
