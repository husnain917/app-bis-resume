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
import styles from "../../../styles/templates/Graphic2.module.css";
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
            <Box display="flex" flexDir="column" ml="40px" mt="2%">
              <Text
                value={item.degree}
                placeholder="Study Program"
                path={`${path}.${index}.degree`}
                color="#313C4E"
                fontSize="1.2rem"
                textAlign="left"
                fontWeight="bold"
                lineHeight="10px  "
              />
              <Text
                value={item.institution}
                placeholder="Institution/Place of Education"
                path={`${path}.${index}.institution`}
                color="black"
                fontSize="1rem"
                textAlign="left"
              />
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Education;
