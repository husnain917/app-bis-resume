import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { styles } from "./saleReprestatviveStyles";
import { Box } from "@chakra-ui/react";

function EducationHistory(props) {
  const dispatch = useDispatch();
  const path = "education.items";

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
            flexDirection="column"
            justifyContent="space-between"
            height={"90px"}
            padding={"5px"}
            backgroundColor={"whitesmoke"}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              style={styles.workItem}
            >
              <Text
                value={item.designation}
                placeholder="Course Name"
                // customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.designation`}
                fontSize="16px"
                fontWeight="600"
              />
              <Box
                display="flex"
                className="manager-template-row"
                style={styles.workItem}
                mt="1"
              >
                <Text
                  value={item.company}
                  placeholder="University Name"
                  // customclass={"manager-fName manager-template-text-bold"}
                  path={`${path}.${index}.company`}
                  fontSize="14px"
                  fontWeight="500"
                />
                <Box mx={"1"} mb={"1"}>
                  <p style={styles.paraStyles(true)}> | </p>
                </Box>
                <Text
                  value={item.startDate}
                  placeholder="Start Date"
                  // customclass={"manager-fName"}
                  path={`${path}.${index}.startDate`}
                  fontSize="14px"
                  fontWeight="500"
                />
                <p style={styles.paraStyles(true)}>-</p>
                <Text
                  value={item.endDate}
                  placeholder="End Date"
                  // customclass={"manager-fName"}
                  path={`${path}.${index}.endDate`}
                  max="9999-12-31"
                  fontSize="14px"
                  fontWeight="500"
                />
              </Box>
              <p style={styles.paraStyles(true)}> </p>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              pt={1}
              pb={1}
              backgroundColor={"whitesmoke"}
            >
              <Box
                height={"1"}
                width={"1"}
                borderRadius={"50%"}
                mr={"2"}
                background="black"
              ></Box>
              <Text
                value={item?.summary}
                placeholder="Summary"
                // customclass={"manager-fName"}
                path={`${path}.${index}.summary`}
                fontSize="1em"
                fontWeight="500"
              />

              {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
            </Box>
          </Box>
        )}
      />
    </Box>
  );
}
export default EducationHistory;
