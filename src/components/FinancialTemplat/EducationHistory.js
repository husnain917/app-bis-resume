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
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <div>
              <Box
                display="flex"
                flexDir="row"
                alignItems="center"
                h="30px"
                mt="2px"
              >
                <Box
                  height={2}
                  width="2"
                  backgroundColor="black"
                  borderRadius="20"
                ></Box>
                <Box ml="1">
                  <Text
                    value={item.institution}
                    placeholder="College Name"
                    customclass={"manager-fName"}
                    path={`${path}.${index}.institution`}
                  />
                </Box>
                {/* {data.length - 1 !== index && <p className="aPadding">|</p>} */}
              </Box>
              <Box ml="2">
                <Text
                  value={item.degree}
                  placeholder="Degree"
                  customclass={"manager-fName manager-template-text-bold"}
                  path={`${path}.${index}.degree`}
                />
              </Box>
            </div>

            <div
              className="manager-template-row"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "4px",
              }}
            >
              Completed in :
              <Text
                value={item.endDate}
                placeholder="Year (YYYY)"
                customclass={"manager-fName"}
                path={`${path}.${index}.endDate`}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
export default EducationHistory;
