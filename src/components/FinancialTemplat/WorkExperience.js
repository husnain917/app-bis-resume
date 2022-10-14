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
          <Box>
            <Box className="manager-template-row" style={styles.workItem}>
              <Text
                value={item.company}
                placeholder="Company"
                customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.company`}
              />
              <p style={styles.paraStyles(true)}> | </p>
              <Text
                value={item.position}
                placeholder="Position"
                customclass={"manager-fName"}
                path={`${path}.${index}.position`}
              />
            </Box>

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
              />
            </Box>
            <Box>
              <p>Key responsibilities:</p>
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                h="30px"
                mt="2px"
              >
                <Box fontSize="3rem" mb="5">
                  .
                </Box>
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
                flexDir="row"
                alignItems="center"
                h="30px"
                mt="2px"
              >
                <Box fontSize="3rem" mb="5">
                  .
                </Box>
                <Text
                  value={item.summary1}
                  placeholder="Summary1"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.summary1`}
                  style={styles.summary}
                  listItem="Summary1"
                />
              </Box>
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                h="30px"
                mt="2px"
              >
                <Box fontSize="3rem" mb="5">
                  .
                </Box>
                <Text
                  value={item.summary2}
                  placeholder="Summary2"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.summary2`}
                  style={styles.summary}
                  listItem="Summary2"
                />
              </Box>
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                h="30px"
                mt="2px"
              >
                <Box fontSize="3rem" mb="5">
                  .
                </Box>
                <Text
                  value={item.summary3}
                  placeholder="Summary3"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.summary3`}
                  style={styles.summary}
                  listItem="Summary3"
                />
              </Box>
            </Box>
            <Box>
              {/* <p>Key responsibilities:</p> */}
              {/* <Responsibilities /> */}
              {/* <Responsibilities
                data={
                  resumeData?.responsibilities?.items.length
                    ? [...resumeData?.responsibilities?.items]
                    : [...sampleData?.data?.responsibilities?.items]
                }
                color={this.props.theme.color}
                updater={updater}
              /> */}
            </Box>
          </Box>
        )}
      />
    </Box>
  );
}
export default WorkExperience;
