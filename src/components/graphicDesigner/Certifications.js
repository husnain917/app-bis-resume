import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

function Certifications(props) {
  const dispatch = useDispatch();
  const path = "certifications.items";

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
    <div style={styles.pt_20}>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => 
          <div style={{ marginBottom: 20 }}>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Certificate: </p>
              <Text
                value={item.title}
                placeholder="Title"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
                path={`${path}.${index}.title`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Issue Date: </p>
              <Text
                value={item.date}
                path={`${path}.${index}.date`}
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
                placeholder="Date"
              />
            </div>
            <div>
              <strong>Description</strong>
              <Text
                value={item.summary}
                placeholder="Summary"
                customclass={"manager-fName"}
                path={`${path}.${index}.summary`}
                style={styles.experienceText1}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
export default Certifications;
