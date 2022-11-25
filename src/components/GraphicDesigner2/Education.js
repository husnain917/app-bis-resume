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
            <Box mt="2%" >
              <Text
                value={item.institution}
                placeholder="ANY CITY UNIVERSITAS"
                path={`${path}.${index}.institution`}
                color="black"
                fontSize="1.5rem"
                fontWeight="bold"
                textAlign="left"
                textTransform="uppercase"
              />
              <Box display="flex">
                <Text
                  value={item.startDate}
                  placeholder="1995"
                  path={`${path}.${index}.startDate`}
                  color="black"
                  fontSize="1.1rem"
                  textAlign="left"
                  lineHeight="10px"
                />
                <p style={{ color: "black", fontWeight: "bold" }}>_</p>
                <Text
                  value={item.endDate}
                  placeholder="2000"
                  path={`${path}.${index}.endDate`}
                  color="black"
                  fontSize="1.1rem"
                  textAlign="left"
                  lineHeight="10px"

                />
                <Text
                  value={item.degree}
                  placeholder="Degree"
                  path={`${path}.${index}.degree`}
                  color="black"
                  fontSize="1.1rem"
                  textAlign="left"
                  lineHeight="10px"

                />
              </Box>
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default Education;
