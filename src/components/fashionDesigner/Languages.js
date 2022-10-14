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
import StarRating from "./StarRating";
function Languages(props) {
  const dispatch = useDispatch();
  const path = "languages.items";

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
              <Box bgColor="#1B4245" borderColor="#1B4245">
                <Box display="flex" flexDir="row" alignItems="center" mr="40px">
                  <Box display="flex" p="10px" alignItems="center">
                    <Box
                      bgColor="white"
                      p="3px"
                      h="3px"
                      borderRadius="100px"
                    ></Box>
                    <FdText
                      value={item?.language}
                      placeholder="English"
                      customClass={styles.educationFeild}
                      path={`${path}.${index}.language`}
                      color="white"
                      fontSize="1.2rem"
                      fontWeight="200"
                      marginLeft="10px"
                    />
                  </Box>

                  <StarRating marginLeft="10px" />
                </Box>
              </Box>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Languages;
