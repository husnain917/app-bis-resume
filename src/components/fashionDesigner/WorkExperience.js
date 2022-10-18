import React from "react";
import Util from "../../../utils/templateUtils";
import FdText from "./FdText";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/Fashion.module.css";
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
          <div className={styles.experienceContainer}>
            <div>
              <FdText
                value={item.startYear}
                placeholder="2023"
                path={`${path}.${index}.startYear`}
                fontSize="1.2rem"
                fontWeight="bold"
                color="#1B4245"
                
              />
            </div>
            <div style={{ display: "flex", marginLeft: "40px" }}>
              <Box w="5px" h="100%" bgColor="#1B4245"></Box>
              <div style={{ marginLeft: "30px" }}>
                <FdText
                  value={item.position}
                  placeholder="FASHION MANAGER"
                  customclass={styles.work}
                  path={`${path}.${index}.position`}
                  fontSize="1.2rem"
                  fontWeight="700"
                  color="#1B4245"
                />
                <FdText
                  value={item.company}
                  placeholder="Salford Company"
                  // customclass={'manager-fName manager-template-text-bold'}
                  path={`${path}.${index}.company`}
                  color="#1B4261"
                  fontSize="1rem"
                  fontWeight="750"
                />

                <FdText
                  value={item.summary}
                  placeholder="Already made all the styles for all
              seasons and made all the
              designs to be more sold."
                  customclass={styles.wrokFeild}
                  path={`${path}.${index}.summary`}
                  color="#1B4261"
                  fontSize="20px"
                />
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
export default WorkExperience;
