import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

function EducationHistory(props) {
  const dispatch = useDispatch();
  const path = "education.items";

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
          <>
            <div className="manager-template-row">
              <Text
                value={item.startDate}
                placeholder="Start Date"
                customclass={"manager-fName"}
                path={`${path}.${index}.startDate`}
              />
              <p> &nbsp; - &nbsp;</p>
              <Text
                value={item.endDate}
                placeholder="End Date"
                customclass={"manager-fName"}
                path={`${path}.${index}.endDate`}
                max="9999-12-31"

              />
            </div>
            <div className="manager-template-row">
              <Text
                value={item.degree}
                placeholder="Degree"
                customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.degree`}
              />
            </div>
            <div className="manager-template-row">
              <Text
                value={item.institution}
                placeholder="College Name"
                customclass={"manager-fName"}
                path={`${path}.${index}.institution`}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
export default EducationHistory;
