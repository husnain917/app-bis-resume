import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/Graphic.module.css";
import styled from "@emotion/styled";
function Education(props) {
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
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <div className={styles.eduContainer}>
              <Text
                value={item.degree}
                placeholder="Bachelor Of Design"
                path={`${path}.${index}.degree`}
                customClass={styles.educationFeild}
                color="white"
                fontSize="1rem"
                fontWeight="bold"
                textAlign="right"
              />
              <div className={styles.eduFeilds}>
                <Text
                  value={item.institution}
                  placeholder="Wardiere University "
                  path={`${path}.${index}.institution`}
                  customClass={styles.educationFeild}
                  color="white"
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="right"
                />
                <Box w="2px" bgColor="white" h="20px" mt="8px" m="5px"></Box>
                <Text
                  value={item.startDate}
                  placeholder="2014"
                  path={`${path}.${index}.startDate`}
                  customClass={styles.educationFeild}
                  color="white"
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="right"
                />
                <p style={{ color: "white", fontWeight: "bold" }}>_</p>
                <Text
                  value={item.endDate}
                  placeholder="2016"
                  path={`${path}.${index}.endDate`}
                  customClass={styles.educationFeild}
                  color="white"
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="right"
                />
              </div>
              <Text
                value={item.summary}
                placeholder="Post Graduated in Graphics Designing."
                path={`${path}.${index}.summary`}
                customClass={styles.eduFeild}
                fontSize="1rem"
                color="white"
                textAlign="right"
              />

              <div>
                <Text
                  value={`${item.extracurricular}`}
                  placeholder="Academic Excellence in Web Design."
                  path={`${path}.${index}.extracurricular`}
                  customClass={styles.eduFeild}
                  fontSize="1rem"
                  color="white"
                  textAlign="right"
                />
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Education;
