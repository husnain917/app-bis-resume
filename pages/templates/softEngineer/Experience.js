import React from "react";
import Util from "../../../utils/templateUtils";
import { useDispatch } from "react-redux";
import styles from "../../../styles/templates/SeTemplate.module.css";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Dnd, Text } from "../../../src/components/template1";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Experience(props) {
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
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div>
            <Text
              value={item.position}
              placeholder="Software Engineer"
              path={`${path}.${index}.position`}
              customclass={styles.institute_name}
            />
            <Text
              value={item.company}
              placeholder="W A R D I E R E I N C ."
              customclass={styles.feild_name}
              path={`${path}.${index}.company`}
            />
            <div className={styles.workItem}>
              <Text
                value={item.startDate}
                placeholder="N O V 2 0 2 0"
                path={`${path}.${index}.startDate`}
                customclass={styles.feild_name}
              />
              <p className={styles.paraStyles}>-</p>
              <Text
                value={item.endDate}
                placeholder="D E S 2 0 2 1"
                path={`${path}.${index}.endDate`}
                customclass={styles.feild_name}
                max="9999-12-31"
              />
            </div>
            <Box display="flex" flexDir="row" alignItems="start">
              <Box fontSize="6rem">.</Box>
              
              <Text
                value={item.summary}
                placeholder="Developed technologies and assist fortune
                500 companies with scaling content
                distribution by 60% and increasing their
                productivity by 80%"
                path={`${path}.${index}.summary`}
                customclass={styles.workSummary}
              />
            </Box>
            <Box display="flex" flexDir="row" alignItems="start">
              <Box fontSize="6rem">.</Box>
              <Text
                value={item.summary}
                placeholder="Built and maintain websites that scaled to 1M
                daily users%"
                path={`${path}.${index}.summary`}
                customclass={styles.workSummary}
              />
            </Box>

            {/* <Box display="flex" flexDir="row" alignItems="start">
              <Box fontSize="6rem">.</Box>
              <Text
                value={item.summary}
                placeholder="Focused in front-end development, providing
                a good quality website for the company"
                path={`${path}.${index}.summary`}
                customclass={styles.workSummary}
              />
            </Box> */}
          </div>
        )}
      />
    </div>
  );
}
export default Experience;
