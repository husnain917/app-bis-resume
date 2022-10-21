import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";
function WorkExperience(props) {
  const dispatch = useDispatch();
  const path = "work.items";

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
          <div style={{ marginTop: "3%", display: "flex" }}>
            <ChevronRightIcon
              w={5}
              h={5}
              color="black"
              mt="1%"
              border="1px"
              borderRadius="100px"
            />
            <Box ml="5%">
              <Box
                display="flex"
                // justifyContent="space-between"
              >
                <Text
                  value={item.position}
                  placeholder="Position"
                  path={`${path}.${index}.position`}
                  fontSize="1.1rem"
                  fontWeight="bold"
                />
                <div className="manager-template-row">
                  <Text
                    value={item.startDate}
                    placeholder="1999"
                    path={`${path}.${index}.startDate`}
                    fontSize="1.1rem"
                    fontWeight="bold"
                  />
                  <p style={styles.paraStyles(true)}>-</p>
                  <Text
                    value={item.endDate}
                    placeholder="2003"
                    path={`${path}.${index}.endDate`}
                    max="9999-12-31"
                    fontSize="1.1rem"
                    fontWeight="bold"
                  />
                </div>
              </Box>
              <Text
                value={item.company}
                placeholder="Company Name"
                path={`${path}.${index}.company`}
                fontSize="1.1rem"
                fontWeight="bold"
                lineHeight="10px"
              />
              <Text
                value={item.summary}
                placeholder="Short Pitch About Your Work Experience"
                path={`${path}.${index}.summary`}
                fontSize="17px"
                marginTop="2%"
              />
            </Box>
          </div>
        )}
      />
    </div>
  );
}
export default WorkExperience;
