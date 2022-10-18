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
  const [currentValue, setCurrentValue] = useState("");
  const [hoverValue, setHoverValue] = useState(undefined);

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

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const { data } = props;

  return (
    <Box mt={3}>
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
            alignItems="center"
            pt={1}
            pb={1}
          >
            <Text
              value={item?.name}
              placeholder="Skill"
              // customclass={"manager-fName"}
              path={`${path}.${index}.name`}
              fontSize="18px"
              fontWeight="600"
            />
            <Box display={"flex"} flexDirection="row" marginRight={8}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <>
                    <Box margin={"6px"}>
                      <BsCircleFill
                        size={"0.8em"}
                        key={index}
                        color={
                          (hoverValue || currentValue) > index
                            ? "#077BBD"
                            : "black"
                        }
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                      />
                    </Box>
                  </>
                ))}
            </Box>

            {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
          </Box>
        )}
      />
    </Box>
  );
}
export default Skills;
