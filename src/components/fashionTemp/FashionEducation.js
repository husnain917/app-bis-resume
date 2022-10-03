import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { FashionDnd } from "../fashionTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/fashionTemp.module.css";

function FashionEducation(props) {
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
      <FashionDnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <div className={style.managerTemplateContentRow}>
              <Text
                value={item.institution}
                placeholder="College Name"
                customclass={`${style.editContectCollege} `}
                path={`${path}.${index}.institution`}
              />
              <p style={{
                color: '#fff',
                fontSize: '20px',
                fontWeight: '600',
              }}>
                &nbsp;,&nbsp;
              </p>
              <Text
                value={item.location}
                placeholder="Location"
                customclass={`${style.editContectCollege} `}
                path={`${path}.${index}.location`}
              />
            </div>
            <div>
              <p className={style.editContentHeadings}>CGPA</p>
              <Text
                value={item.gpa}
                placeholder="GPA/CGPA"
                customclass={`${style.editContentsBody}`}
                path={`${path}.${index}.gpa`}
              />
            </div>
            <div>
              <p className={style.editContentHeadings}>Field of Study: </p>
              <Text
                value={item.field}
                placeholder="Field of Study"
                customclass={`${style.editContentsBody}`}
                path={`${path}.${index}.field`}
              />
            </div>
            <div>
              <p className={style.editContentHeadings}>Courseworks: </p>
              <Text
                value={item.courseworks}
                placeholder="Courseworks"
                customclass={`${style.editContentsBody}`}
                path={`${path}.${index}.courseworks`}
              />
            </div>
            <div>
              <p className={style.editContentHeadings}>Awards: </p>
              <Text
                value={item.awards}
                placeholder="Awards"
                customclass={`${style.editContentsBody}`}
                path={`${path}.${index}.awards`}
              />
            </div>
          </>
        )}
      />
    </div>
  );
}
export default FashionEducation;
