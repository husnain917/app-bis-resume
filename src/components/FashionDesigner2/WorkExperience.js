import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
<<<<<<< HEAD
import { styles } from "../financialStyles/template1Style";
=======
import { styles } from "../FD2Styles/FD2Styles";
>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
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
          >
            <Box
              display={"flex"}
              flexDirection="column"
              style={styles.workItem}
            >
              <Text
                value={item.company}
                placeholder="Company"
                customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.company`}
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

<<<<<<< HEAD
            <Box display="flex" style={styles.workItem}>
=======
            <Box
              display="flex"
              // className="manager-template-row"
              justifyContent={"center"}
              style={styles.workItem}
            >
>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
              <Text
                value={item.startDate}
                placeholder="Start Date"
                customclass={"manager-fName"}
                path={`${path}.${index}.startDate`}
              />
<<<<<<< HEAD
              <p style={styles.paraStyles(true)}>-</p>
=======
              <p style={styles.paraStyles(true)}> - </p>
>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
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
