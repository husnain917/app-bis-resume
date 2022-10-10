import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "../template1";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

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
    <div style={styles.mt_10}>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) =>
          <div style={{margin: '10px 0'}}>
              <Text
                value={item.position}
                placeholder="Position"
                customclass={"manager-position"}
                path={`${path}.${index}.position`}
              />
            <div className="manager-template-row" style={styles.workItem}>
              <Text
                value={item.startDate}
                placeholder="Start Date"
                customclass={"manager-position"}
                path={`${path}.${index}.startDate`}
              />
              <p style={styles.paraStyles(true)}>&nbsp;-&nbsp;</p>
              <Text
                value={item.endDate}
                placeholder="End Date"
                customclass={"manager-position"}
                path={`${path}.${index}.endDate`}
                max="9999-12-31"

              />
            </div>
            <div style={{margin: '6px 0'}}>
              <Text
                value={item.summary}
                placeholder="Summary"
                customclass={"manager-psummary"}
                path={`${path}.${index}.summary`}
                style={styles.summary}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
export default WorkExperience;
