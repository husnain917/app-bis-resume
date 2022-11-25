import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";
import { Box } from "@chakra-ui/react";

function EducationHistory(props) {
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
    <div style={styles.mt_10}>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <Box
              display="flex"
              flexDirection="row"
              mt="2px"
              justifyContent="space-between"
            >
              <Box>
<<<<<<< HEAD
                <Box ml="1">
=======
                <Box>
>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
                  <Text
                    value={item.institution}
                    placeholder="College Name"
                    customclass={"manager-fName"}
                    path={`${path}.${index}.institution`}
                  />
                </Box>
<<<<<<< HEAD
                <Box ml="1">
=======
                <Box>
>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
                  <Text
                    value={item.degree}
                    placeholder="Degree"
                    customclass={"manager-fName manager-template-text-bold"}
                    path={`${path}.${index}.degree`}
                  />
                </Box>
<<<<<<< HEAD
=======
                <p style={styles.paraStyles(true)}></p>

>>>>>>> 70cf1ff85038859a5d61edc08a9f1e419f0c85a7
                <Box>
                  <Text
                    value={item.summary}
                    placeholder="Summary"
                    customclass={"manager-fName"}
                    path={`${path}.${index}.summary`}
                    style={styles.experienceText1}
                  />
                </Box>
              </Box>
              <Box>
                <Text
                  value={item.endDate}
                  placeholder="Year (YYYY)"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.endDate`}
                />
              </Box>
              {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
            </Box>
          </>
        )}
      />
    </div>
  );
}
export default EducationHistory;
