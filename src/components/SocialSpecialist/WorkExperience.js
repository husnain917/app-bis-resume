import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { Box } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
function WorkExperience(props) {
  const dispatch = useDispatch();
  const path = "work.items";

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
          <div style={{ marginTop: "5%" }}>
            <Text
              value={item.position}
              placeholder="Position"
              path={`${path}.${index}.position`}
              fontSize="1.3rem"
              fontWeight="bold"
            />
            <Text
              value={item.company}
              placeholder="COMPANY"
              path={`${path}.${index}.company`}
              letterSpacing="3px"
              lineHeight="15px"
            />

            <div className="manager-template-row">
              <Text
                value={item.startDate}
                placeholder="START DATE"
                path={`${path}.${index}.startDate`}
                letterSpacing="2px"
                lineHeight="3px"
              />
              <h1>-</h1>
              <Text
                value={item.endDate}
                placeholder="END DATE"
                letterSpacing="2px"
                lineHeight="3px"
                path={`${path}.${index}.endDate`}
                max="9999-12-31"
              />
            </div>

            <UnorderedList>
              <ListItem>
                <Text
                  value={item.summary}
                  placeholder="Write Your Short Working History and Acheivements"
                  path={`${path}.${index}.summary`}
                  fontSize="1.2rem"
                  lineHeight="25px"
                />
              </ListItem>
            </UnorderedList>
          </div>
        )}
      />
    </div>
  );
}
export default WorkExperience;
