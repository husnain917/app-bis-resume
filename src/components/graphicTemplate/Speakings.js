import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { styles } from "../componentStyles/template1Style";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Speakings(props) {
  const dispatch = useDispatch();
  const path = "speaking_engagements.items";

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
    <Dnd
      data={data}
      reorder={(e) => onOrderUpdate(e)}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => {
        return (
          <div className="" style={{ paddingTop: 30 }}>
            <div className="manager-template-row">
              <Text
                value={item.EventName}
                path={`${path}.${index}.EventName`}
                placeholder="Event Name"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Event Type: </p>
              <Text
                value={item.EventType}
                path={`${path}.${index}.EventType`}
                placeholder="Event Type"
                customclass={"manager-fName"}
              />
            </div>
            <div>
              <strong>Summary</strong>
              <Text
                value={item.Description}
                path={`${path}.${index}.Description`}
                placeholder="Summary"
                customclass={"manager-fName manager-mb-bottom-0"}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Speakings;