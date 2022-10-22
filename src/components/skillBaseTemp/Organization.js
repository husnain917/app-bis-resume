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
import { styles } from "../componentStyles/template1Style";
function Organization(props) {
  const dispatch = useDispatch();
  const path = "organization.items";

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
          <div style={{marginLeft:'42px', marginTop:'2%'}}> 
                <Text
                  value={item.name}
                  placeholder="Organization Name"
                  path={`${path}.${index}.name`}
                  color="#313C4E"
                  fontSize="1rem"
                  textAlign="left"
                  lineHeight="0px"
                />
      
          </div>
        )}
      />
    </div>
  );
}
export default Organization;
