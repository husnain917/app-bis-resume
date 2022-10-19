import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";

function Skills(props) {
  const dispatch = useDispatch();
  const path = "skills.items";

  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, "id");

    //
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
  console.log({ data });

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div  >
            <UnorderedList >
              <ListItem>
                <Text
                  value={item.name}
                  placeholder="Social media planning"
                  path={`${path}.${index}.name`}
                  fontSize="1.3rem"
                  marginTop="2px"
                />
              </ListItem>
            </UnorderedList>
          </div>
        )}
      />
    </div>
  );
}
export default Skills;
