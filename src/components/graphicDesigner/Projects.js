import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { styles } from "../componentStyles/template1Style";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";

function Projects(props) {
  const dispatch = useDispatch();
  const path = "projects.items";

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
          <div style={{ marginTop: 10 }}>
            <Text
              value={item.Company}
              path={`${path}.${index}.Company`}
              placeholder="Company"
              customclass={"manager-fName manager-template-text-bold"}
            />
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Duration: </p>
              <Text
                value={item.Duration}
                path={`${path}.${index}.Duration`}
                placeholder="Duration Ex: 6 Months"
                customclass={"manager-fName"}
              />
            </div>

            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Project Title: </p>
              <Text
                value={item.Title}
                path={`${path}.${index}.Title`}
                placeholder="Project Title"
                customclass={
                  "manager-fName manager-template-text-bold"
                }
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Technologies: </p>
              <Text
                value={item.TechnologiesUsed}
                path={`${path}.${index}.TechnologiesUsed`}
                placeholder="Technologies Used"
                customclass={"manager-fName "}
              />
            </div>
            <div>
              <p style={styles.paraStyles(true)}>Summary</p>
              <Text
                value={item.Summary}
                path={`${path}.${index}.Summary`}
                placeholder="Summary"
                customclass={"manager-fName"}
              />
            </div>
          </div>
        );
      }}
    />
  );
}

export default Projects;
