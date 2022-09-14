import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

function AdditionalSkills(props) {
  const dispatch = useDispatch();
  const path = "additional_skills.items";

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
    <div
      className="manager-template-row manager-template-text-center"
      style={styles.justifyContentCenter}
    >
      <Dnd
        direction="horizontal"
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => 
          <div className="manager-template-row manager-template-text-center manager-f-sub-row">
            <Text
              value={item.name}
              placeholder="Skill"
              customclass={"manager-fName"}
              path={`${path}.${index}.name`}
            />
            {data.length - 1 !== index && <p className="aPadding">|</p>}
          </div>
        }
      />
    </div>
  );
}
export default AdditionalSkills;
