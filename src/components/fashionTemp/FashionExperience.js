import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { FashionDnd } from "../fashionTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/fashionTemp.module.css";

function FashionExperience(props) {
    const dispatch = useDispatch();
    const path = "work.items";

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
            <FashionDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) =>
                    <div>
                        <div className={style.managerTemplateContentRow}>
                            <Text
                                value={item.company}
                                placeholder="Company"
                                customclass={`${style.editContectCollege} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.company`}
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
                                customclass={`${style.editContectCollege} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.location`}
                            />
                        </div>
                        <div>
                            <p className={style.editContentHeadings}>Position: </p>
                            <Text
                                value={item.position}
                                placeholder="Position"
                                customclass={`${style.editContentsBody} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.position`}
                            />
                        </div>
                        <div>
                            <p className={style.editContentHeadings}>From: </p>
                            <Text
                                value={item.startDate}
                                placeholder="Start Date 19"
                                customclass={`${style.editContentsBody} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.startDate`}
                            />
                            <p className={style.editContentHeadings}>to</p>
                            <Text
                                value={item.endDate}
                                placeholder="End Date 10"
                                customclass={`${style.editContentsBody} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.endDate`}
                                max="9999-12-31"

                            />
                        </div>
                        <div>
                            <p className={style.editContentHeadings}>Experience Years: </p>
                            <Text
                                value={item.expYear}
                                placeholder="Experience Years"
                                customclass={`${style.editContentsBody} ${style.fashionContentEditableContainer}`}
                                path={`${path}.${index}.expYear`}
                            />
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default FashionExperience;
