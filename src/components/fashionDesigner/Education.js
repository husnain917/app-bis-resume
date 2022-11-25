import React from "react";
import Util from "../../../utils/templateUtils";

import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import FdText from "./FdText";
import Dnd from "./Dnd";
import { Box } from "@chakra-ui/react";
import styles from ".././../../styles/templates/Fashion.module.css";
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
            <div>
              <Box bgColor="#1B4245">
                <Box display="flex">
                  <FdText
                    value={item?.institution}
                    placeholder="Fashion School"
                    customClass={styles.educationFeild}
                    path={`${path}.${index}.instituion`}
                    color="white"
                    fontSize="1.2rem"
                    fontWeight="600"
                  />
                  <Box bgColor="white" w="3px" h="22px" m="3px" mt="8px"></Box>
                  <FdText
                    value={item?.year}
                    placeholder="2023"
                    customClass={styles.educationFeild}
                    path={`${path}.${index}.year`}
                    color="white"
                    fontSize="1.2rem"
                    fontWeight="600"
                  />
                </Box>

                <FdText
                  value={item?.description}
                  placeholder="Ginyard International Universitye"
                  path={`${path}.${index}.description`}
                  color="white"
                  fontSize="1.2rem"
                  fontWeight="200"
                />
              </Box>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Education;
