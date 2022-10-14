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
function Interest(props) {
  const dispatch = useDispatch();
  const path = "hobbies.items";

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
              
                <Box display="flex"  bgColor="#E6D5C2" pl="5%">
                  <FdText
                    value={item?.title}
                    placeholder="Photography"
                    // customClass={styles.educationFeild}
                    path={`${path}.${index}.title`}
                    color="#1B4245"
                    fontSize="1.5rem"
                    fontWeight="600"
                  />
                 

              </Box>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Interest;
