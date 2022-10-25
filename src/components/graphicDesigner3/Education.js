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
            <Box mt="8%" display="flex" flexDir="flex">
             
                <ChevronRightIcon
                  w={4}
                  h={4}
                  color="white"
                  mt="1%"
                  border="1px"
                  borderRadius="100px"
                />
             
              <Box ml="20px">
                <Box display="flex" >
                  <Text
                    value={item.startDate}
                    placeholder="1995"
                    path={`${path}.${index}.startDate`}
                    color="white"
                    fontSize="1rem"
                    textAlign="left"
                    lineHeight="10px"
fontWeight="bold"

                  />
                  <p style={{ color: "white", fontWeight: "bold" }}>-</p>
                  <Text
                    value={item.endDate}
                    placeholder="2000"
                    path={`${path}.${index}.endDate`}
                    color="white"
                    fontSize="1rem"
                    textAlign="left"
fontWeight="bold"

                    lineHeight="10px"
                  />
                </Box>
              </Box>
             
            </Box>
            <Box display="flex" flexDir="column" ml="40px" mt="2%">
                
                <Text
                  value={item.degree}
                  placeholder="Degree"
                  path={`${path}.${index}.degree`}
                  color="white"
                  fontSize="1rem"
                  textAlign="left"
fontWeight="bold"
                  lineHeight="10px  "
                />
                <Text
                  value={item.institution}
                  placeholder="University"
                  path={`${path}.${index}.institution`}
                  color="grey"
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
