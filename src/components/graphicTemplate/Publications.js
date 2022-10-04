import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { styles } from "../componentStyles/template1Style";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Publications(props) {
  const dispatch = useDispatch();
  const path = "publications.items";

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
            <div
              className="manager-template-row"
              style={{ marginBottom: 10 }}
            >
              <Text
                value={item.Title}
                path={`${path}.${index}.Title`}
                placeholder="Publication Title"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Serial Name: </p>
              <Text
                value={item.JournalOrSerialName}
                path={`${path}.${index}.JournalOrSerialName`}
                placeholder="Journal Or SerialName"
                customclass={"manager-fName"}
                style={{ marginBottom: 10 }}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Issue: </p>
              <Text
                value={item.Issue}
                path={`${path}.${index}.Issue`}
                placeholder="Volume 1, Number 4"
                customclass={"manager-fName manager-mb-bottom-0"}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Publications;
