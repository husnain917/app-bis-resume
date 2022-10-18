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
import styles from "../../../styles/templates/Graphic.module.css";
import { Box } from "@chakra-ui/react";
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
          <Box mt="5%">
            <div className="manager-template-row">
              <Text
                value={item.position}
                placeholder="Position"
                customclass={styles.workFeild}
                path={`${path}.${index}.position`}
              />
              <Text
                value={item.startDate}
                placeholder="1996 "
                // customclass={"manager-fName"}
                path={`${path}.${index}.startDate`}
                customclass={styles.workFeild}
              />
              <p>_</p>
              <Text
                value={item.endDate}
                placeholder="2001"
                path={`${path}.${index}.endDate`}
                customclass={styles.workFeild}
                max="9999-12-31"
              />
            </div>
            <Text
              value={item.company}
              placeholder="Company"
              path={`${path}.${index}.company`}
              customclass={styles.workFeild}
            />
            <Text
              value={item.summary}
              placeholder="Working as graphic designer for 1 year, Academic
                Excellence in Web Design, English"
              customclass={styles.workSummary}
              path={`${path}.${index}.summary`}
            />
          </Box>
        )}
      />
    </div>
  );
}
export default WorkExperience;
