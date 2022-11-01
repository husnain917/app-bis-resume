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
function Reference(props) {
  const dispatch = useDispatch();
  const path = "references.items";

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
        bg="black"
        direction="horizontall"
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box>
            <Box>
              <Box marginY={"4"}>
                <Text
                  value={item.name}
                  placeholder="name"
                  path={`${path}.${index}.name`}
                  color="black"
                  fontSize="1rem"
                  textAlign="left"
                />
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text
                  value={item.profession}
                  placeholder="Profession"
                  path={`${path}.${index}.profession`}
                  color="black"
                  fontSize="1rem"
                  textAlign="left"
                />
                ,
                <Text
                  value={item.company}
                  placeholder="Company Name"
                  // customclass={"manager-fName manager-template-text-bold"}
                  path={`${path}.${index}.company`}
                  color="black"
                  fontSize="1rem"
                  textAlign="left"
                />
              </Box>
              <Text
                value={item.phone}
                placeholder="123-456-7890"
                path={`${path}.${index}.phone`}
                color="black"
                fontSize="1rem"
                textAlign="left"
                lineHeight="10px  "
              />
              <Text
                value={item.email}
                placeholder="ahsanbutt515@icloud.com"
                path={`${path}.${index}.phone`}
                color="black"
                fontSize="1rem"
                textAlign="left"
                lineHeight="10px  "
              />
            </Box>
          </Box>
        )}
      />
    </div>
  );
}
export default Reference;
