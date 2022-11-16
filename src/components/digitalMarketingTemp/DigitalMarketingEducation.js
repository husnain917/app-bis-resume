import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { DigitalDnd } from "../digitalMarketingTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/digitalMarketingTemp.module.css";

function DigitalMarketingEducation(props) {
    const dispatch = useDispatch();
    const path = "education.items";

    const onOrderUpdate = (data) => {
        const storeReorder = Util.mapOrder(props?.data, data, "id");
        dispatch(updateOrder(storeReorder, path));
    };

    const _addNewItem = () => {
        dispatch(addNewObj(props?.data[0], path));
    };

    const _removeItem = (index) => {
        let deletedPath = `${path}.${index}`;
        dispatch(deleteObjInArray(deletedPath));
    };
    const { data } = props;

    return (
        <div>
            <DigitalDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) => (
                    <>
                        <div className={style.educationDesHeadingDiv}>
                            <ul>
                                <li className={style.educationDesHeading}>
                                    <Text
                                        value={item.year}
                                        placeholder="2005 - 2010"
                                        customclass={`${style.educationDesHeading} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.year`}
                                    />
                                    {/* education about */}
                                    <Text
                                        value={`${item.summary}`}
                                        placeholder="Bachelor of Arts in Digital Marketing Graduated with mention"
                                        customclass={`${style.educationDesAbout} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.summary`}
                                    />
                                </li>
                                {/* <li className={style.educationDesHeading}>
                                    <Text
                                        value={item.month}
                                        placeholder="2010 - 2012"
                                        customclass={`${style.educationDesHeading} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.month`}
                                    />
                                    <Text
                                        value={`${item.description}`}
                                        placeholder="BA in Digital Marketing and Social Media Graduated with honor"
                                        customclass={`${style.educationDesAbout} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.description`}
                                    />
                                </li> */}
                            </ul>
                        </div>
                    </>
                )}
            />
        </div>
    );
}
export default DigitalMarketingEducation;
