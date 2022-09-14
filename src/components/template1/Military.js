import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { styles } from "../componentStyles/template1Style";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Military(props) {
  const dispatch = useDispatch();
  const path = "military.items";

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
          <div className="" style={{ paddingTop: 10 }}>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Branch:</p>
              <Text
                value={item['["@branch"]']}
                path={`${path}.${index}.["@branch"]`}
                placeholder="US Army"
                customclass={"manager-fName entryLevel-mb-bottom-0"}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Rank:</p>
              <Text
                value={item.RankAchieved.CurrentOrEndRank}
                path={`${path}.${index}.RankAchieved.CurrentOrEndRank`}
                placeholder="Training Title"
                customclass={
                  "manager-fName manager-template-text-bold manager-mb-bottom-0"
                }
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>From </p>
              <Text
                value={item.DatesOfService?.StartDate?.YearMonth}
                path={`${path}.${index}.DatesOfService.StartDate.YearMonth`}
                placeholder="2012-02"
                customclass={"manager-fName"}
              />
              <p style={styles.paraStyles(true)}>to </p>
              <Text
                value={item.DatesOfService?.EndDate?.YearMonth}
                path={`${path}.${index}.DatesOfService.EndDate.YearMonth`}
                placeholder="2018-09"
                customclass={"manager-fName"}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Military;
