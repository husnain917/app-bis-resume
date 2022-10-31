import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { styles } from "../financialStyles/template1Style";
import { Box, Image } from "@chakra-ui/react";
import Responsibilities from "./Responsibilities";
import { connect } from "react-redux";

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
    <Box style={styles.mt_10}>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="space-between"
            height={"70px"}
            backgroundColor={"whitesmoke"}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              style={styles.workItem}
            >
              <Text
                value={item.designation}
                placeholder="DESIGNATION"
                // customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.designation`}
                fontSize="16px"
                fontWeight="600"
              />
              <Text
                value={item.company}
                placeholder="Company Name"
                // customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.company`}
                fontSize="12px"
                fontWeight="600"
              />
              <Text
                value={item.position}
                placeholder="Position"
                customclass={"manager-fName"}
                path={`${path}.${index}.position`}
              />
              <p style={styles.paraStyles(true)}></p>
              <Text
                value={item.summary}
                placeholder="Summary"
                customclass={"manager-fName"}
                path={`${path}.${index}.summary`}
                style={styles.summary}
                listItem="Summary"
              />
            </Box>

            <Box
              display="flex"
              className="manager-template-row"
              style={styles.workItem}
            >
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
              />
            </Box>
          </Box>
        )}
      />
    </Box>
  );
}
export default WorkExperience;
