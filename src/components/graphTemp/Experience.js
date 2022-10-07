import React from "react";
import Util from "../../../utils/templateUtils";
import DndDesign from "./DndDesign";
import { Text } from "../template1";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/graphTempStyle";
import style from "../../../styles/templates/graphTemp/graphTemp.module.css"

function Experience(props) {
  const dispatch = useDispatch();
  const path = "work.items";

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
    <div style={styles.mt_10}>
      <DndDesign
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) =>
          <div>
            <div className="manager-template-row" style={styles.workItem}>
              <Text
                value={item.company}
                placeholder="Company"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.company`}
                style={styles.mb_10}
              />
              <p customclass={`${style.ExpComa}`}>,</p>
              <Text
                value={item.location}
                placeholder="Location"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.location`}
                style={styles.mb_10}
              />
            </div>
            <div className="manager-template-row" style={styles.workItem}>
              <p style={styles.paraStyles(true)}>Position: </p>
              <Text
                value={item.position}
                placeholder="Position"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.position`}
              />
            </div>
            <div className="manager-template-row" style={styles.workItem}>
              <p style={styles.paraStyles(true)}>From</p>
              <Text
                value={item.startDate}
                placeholder="Start Date 19"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.startDate`}
              />
              <p style={styles.paraStyles(true)}>to</p>
              <Text
                value={item.endDate}
                placeholder="End Date 10"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.endDate`}
                max="9999-12-31"
              />
            </div>
            <div>
              <strong>Summary</strong>
              <Text
                value={item.summary}
                placeholder="Summary"
                customclass={`${style.ExpericerceSec}`}

                path={`${path}.${index}.summary`}
                style={styles.summary}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
export default Experience;
