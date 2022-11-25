import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box, Image } from "@chakra-ui/react";
import { styles } from "../financialStyles/template1Style";

function Achievements(props) {
  const dispatch = useDispatch();
  const path = "achievements.items";

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
    <Dnd
      data={data}
      reorder={(e) => onOrderUpdate(e)}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => {
        return (
          <div style={{ paddingTop: 10, display: "flex" }}>
            <Box>
              <Box className="manager-template-row" style={styles.workItem}>
                <Text
                  value={item.startDate}
                  placeholder="Start Date"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.startDate`}
                />
                <p style={styles.paraStyles(true)}>-</p>
                <Text
                  value={item.endDate}
                  placeholder="End Date"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.endDate`}
                  max="9999-12-31"
                  fontSize="16px"
                />
              </Box>
            </Box>
            <Box>
              <Text
                value={item.Description}
                path={`${path}.${index}.Description`}
                placeholder="Description"
                customclass={"manager-fName"}
                marginLeft="5px"
              />
            </Box>
          </div>
        );
      }}
    />
  );
}

export default Achievements;
