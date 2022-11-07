import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import style from "../../../styles/templates/graphicDesigner/graphicDesigner.module.scss";

function WorkExperience(props) {
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
    <div >
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) =>
          <div className={style.experience} >
            <div>
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

              <div className="manager-template-row" >
                <Text
                  value={item.company}
                  placeholder="Company"
                  customclass={"manager-fName manager-template-text-bold"}
                  path={`${path}.${index}.company`}
                // style={styles.mb_10}
                />
              </div>
            </div>


            <div className={style.position}>
              <div className="manager-template-row">
                <Text
                  value={item.position}
                  placeholder="Position"
                  customclass={style.positionName}
                  path={`${path}.${index}.position`}
                />
              </div>
              <div>
                <Text
                  value={item.summary}
                  placeholder="Short Detail"
                  customclass={"manager-fName"}
                  path={`${path}.${index}.summary`}
                // style={styles.summary}
                />
              </div>
            </div>

          </div>
        }
      />
    </div>
  );
}
export default WorkExperience;
