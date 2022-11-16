import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import Dnd from './Dnd'
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Skills(props) {
  const dispatch = useDispatch();
  const path = "skills.items";

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
    <div className="manager-template-col">
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div className="skillCeoMain">
            <div className="skillCeodot">.</div>
            <div className="skillCeobody">
              <Text
                value={item.name}
                placeholder="Skill"
                customclass={"manager-skillCeo"}
                path={`${path}.${index}.name`}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
export default Skills;
