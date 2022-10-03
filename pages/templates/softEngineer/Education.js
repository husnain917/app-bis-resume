import React from "react";
import Util from "../../../utils/templateUtils";

import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Dnd, Text } from "../../../src/components/template1";
import styles from ".././../../styles/templates/SeTemplate.module.css";
function Education(props) {
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
            <Text
              value={item.institution}
              placeholder="Inernational University  
                Bachelor of Science"
              customclass={`${styles.institute_name} ${styles.contentEditableContainer}`}
              path={`${path}.${index}.institution`}
            />

            <Text
              value={item.field}
              placeholder="C O M P U T E R 
            &nbsp;
              
              S C I E N C E"
              customclass={`${styles.feild_name} ${styles.contentEditableContainer}`}
              path={`${path}.${index}.field`}
            />
            <div className="manager-template-row">
              <Text
                value={item.startDate}
                placeholder="A U G 2 0 1 6"
                customclass={`${styles.feild_name} ${styles.contentEditableContainer}`}
                path={`${path}.${index}.month`}
              />
              &nbsp;
              <p style={styles.paraStyles}> - </p>
              &nbsp;
              <Text
                value={item.endDate}
                placeholder="A U G 2 0 2 0"
                customclass={`${styles.feild_name} ${styles.contentEditableContainer}`}
                path={`${path}.${index}.endDate`}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Education;
