import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { styles } from "../componentStyles/template1Style";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Security(props) {
  const dispatch = useDispatch();
  const path = "security_creds.items";

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
                value={item.Name}
                path={`${path}.${index}.Name`}
                placeholder="Name"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Issue Date: </p>
              <Text
                value={item.EffectiveDate?.FirstIssuedDate?.Year}
                path={`${path}.${index}.EffectiveDate.FirstIssuedDate.Year`}
                placeholder="Issued Date Ex: 2012"
                customclass={"manager-fName"}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Security;
