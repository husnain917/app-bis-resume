import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { styles } from "../componentStyles/template1Style";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Patents(props) {
  const dispatch = useDispatch();
  const path = "patents.items";

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
          <div className="" style={{ marginTop: 30 }}>
            <div
              className="manager-template-row"
              style={{ marginBottom: 10 }}
            >
              <Text
                value={item.PatentTitle}
                path={`${path}.${index}.PatentTitle`}
                placeholder="Patent Title"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
              />
            </div>
            <div className="manager-template-row">
              {item?.Inventors?.InventorName.map((inv, ind) => (
                <>
                  <p style={styles.paraStyles(true)}>Inventor Name: </p>
                  <Text
                    value={inv}
                    path={`${path}.${index}.Inventors.InventorName.${ind}`}
                    placeholder="George Doam and Neil Griffin"
                    customclass={"manager-fName"}
                  />
                </>
              ))}
            </div>
            <div>
              <strong>Description</strong>
              <Text
                value={item.Description}
                path={`${path}.${index}.Description`}
                placeholder="George Doam and Neil Griffin, inventors, Method and Apparatus for Removing Corn Kernels From Dentures, Patent 1,064,098."
                customclass={"manager-fName"}
                style={{ lineHeight: 1.6 }}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Patents;
