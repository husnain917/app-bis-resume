import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/Social.module.css";
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
            <div>
              <Text
                value={item.institution}
                placeholder="College"
                path={`${path}.${index}.institution`}
                fontSize="1.3rem"
                fontWeight="bold"
                marginTop="5%"
              />
              <Text
                value={item.degree}
                placeholder="Degree"
                path={`${path}.${index}.degree`}
                fontSize="1.3rem"
                fontWeight="bold"
                lineHeight="5px"
              />

              <Text
                value={`${item.summary}`}
                placeholder="FEILD OF STUDY"
                path={`${path}.${index}.summary`}
                letterSpacing="3px"
                fontSize="14px"
                marginTop="4%"
              />
              <div className="manager-template-row">
                <Text
                  value={item.startDate}
                  placeholder="START DATE"
                  path={`${path}.${index}.startDate`}
                  letterSpacing="3px"
                  lineHeight="5px"
                />
                <h1>-</h1>
                <Text
                  value={item.endDate}
                  placeholder="END DATE"
                  path={`${path}.${index}.endDate`}
                  letterSpacing="3px"
                  lineHeight="5px"
                />
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
}
export default Education;
