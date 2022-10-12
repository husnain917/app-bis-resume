import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "../template1";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

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
            <div style={{margin:'8px 0'}}>
              <Text
                value={item.institution}
                placeholder="College Name & From Year - To Year"
                customclass={"manager-position"}
                path={`${path}.${index}.institution`}
              />
              <div style={{margin: '6px 0'}}>
                <Text
                  value={`${item.summary}`}
                  placeholder="Summary"
                  customclass={"manager-psummary"}
                  path={`${path}.${index}.summary`}
                />
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default EducationHistory;
