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
                value={item.degree}
                placeholder="Degree"
                customclass={"manager-fName manager-template-text-bold"}
                path={`${path}.${index}.degree`}
              />

              <p style={styles.paraStyles(false)}>,</p>
              <Text
                value={item.institution}
                placeholder="College Name"
                customclass={"manager-fName"}
                path={`${path}.${index}.institution`}
              />
              <p style={styles.paraStyles(false)}>,</p>
              <Text
                value={item.location}
                placeholder="Location"
                customclass={"manager-fName"}
                path={`${path}.${index}.location`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>CGPA</p>
              <Text
                value={item.gpa}
                placeholder="GPA/CGPA"
                customclass={"manager-fName"}
                path={`${path}.${index}.gpa`}
              />
            </div>
            <div className="manager-template-row">
              <Text
                value={item.month}
                placeholder="Month"
                customclass={"manager-fName"}
                path={`${path}.${index}.month`}
              />
              <Text
                value={item.endDate}
                placeholder="Graduation Year (YYYY)"
                customclass={"manager-fName"}
                path={`${path}.${index}.endDate`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Field of Study: </p>
              <Text
                value={item.field}
                placeholder="Field of Study"
                customclass={"manager-fName"}
                path={`${path}.${index}.field`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Courseworks: </p>
              <Text
                value={item.courseworks}
                placeholder="Courseworks"
                customclass={"manager-fName"}
                path={`${path}.${index}.courseworks`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>Awards: </p>
              <Text
                value={item.awards}
                placeholder="Awards"
                customclass={"manager-fName"}
                path={`${path}.${index}.awards`}
              />
            </div>
            <div className="manager-template-row">
              <p style={styles.paraStyles(true)}>
                Extracurricular Activities:{" "}
              </p>
              <Text
                value={item.extracurricular}
                placeholder="Extracurricular Activities"
                customclass={"manager-fName"}
                path={`${path}.${index}.extracurricular`}
              />
            </div>
            <div>
              <strong>Summary</strong>
              <Text
                value={`${item.summary}`}
                placeholder="Summary"
                customclass={"manager-fName"}
                path={`${path}.${index}.summary`}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
export default EducationHistory;
