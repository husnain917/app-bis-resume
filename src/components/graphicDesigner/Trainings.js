import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

function Trainings(props) {
  const dispatch = useDispatch();
  const path = "training.items";

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
          <div>
            <Text
              value={item["sov:Type"]}
              path={`${path}.${index}.sov:Type`}
              placeholder="Training Type"
              customclass={"manager-fName manager-template-text-bold"}
            />
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Entity: </p>
              <Text
                value={item["sov:Entity"]}
                path={`${path}.${index}.sov:Entity`}
                placeholder="Entity"
                customclass={"manager-fName"}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Training Name: </p>
              <Text
                value={item["sov:TrainingName"]}
                path={`${path}.${index}.sov:TrainingName`}
                placeholder="Training Title"
                customclass={"manager-fName manager-template-text-bold "}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>From </p>
              <Text
                value={
                  item["sov:StartDate"] ? item["sov:StartDate"].YearMonth : ""
                }
                path={`${path}.${index}.sov:StartDate.YearMonth`}
                placeholder="2018-09"
                customclass={"manager-fName manager-mb-bottom-0"}
              />
              <p style={styles.paraStyles(true)}>to</p>
              <Text
                value={item["sov:EndDate"] ? item["sov:EndDate"].Year : ""}
                path={`${path}.${index}.sov:EndDate.Year`}
                placeholder="2020"
                customclass={"manager-fName manager-mb-bottom-0"}
              />
            </div>
            <div>
              <strong>Description</strong>
              <Text
                value={item["sov:Description"]}
                path={`${path}.${index}.sov:Description`}
                placeholder="Project Management Professional, Project Management Institute, 2004-2005"
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

export default Trainings;
