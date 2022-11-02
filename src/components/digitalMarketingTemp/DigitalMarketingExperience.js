import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { DigitalExperienceDnd } from "../digitalMarketingTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/digitalMarketingTemp.module.css";

function DigitalMarketingExperience(props) {
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
            <DigitalExperienceDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) => (
                    <>
                        <div className={style.experienceDesContainer}>
                            <ul>
                                <li className={style.experienceDesDiv}>
                                    <Text
                                        value={item.startYear}
                                        placeholder="2010 - 2012"
                                        customclass={`${style.experienceYear} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.startYear`}
                                    />

                                    {/* experience about */}
                                    <Text
                                        value={`${item.title}`}
                                        placeholder="Manage and create a strong presence on social media business presence on social media. Manage and create a strong."
                                        customclass={`${style.experienceDesTitle} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.title`}
                                    />

                                    {/* experience description */}
                                    <Text
                                        value={`${item.summary}`}
                                        placeholder="Work closely with the creative team to make, create,
                                        and manage advertising campaigns on social media.
                                        Able to manage and evaluate the campaign's result.
                                        Work closely with the creative team to make."
                                        customclass={`${style.experienceDes} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.summary`}
                                    />
                                </li>
                                {/* <li className={style.experienceDesDiv}>
                                    <Text
                                        value={item.endYear}
                                        placeholder="2012 - now"
                                        customclass={`${style.experienceYear} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.endYear`}
                                    />

                                    <Text
                                        value={`${item.role}`}
                                        placeholder="Marketing Manager"
                                        customclass={`${style.experienceDesTitle} ${style.digitalContentEditableContainer}`}
                                        path={`${path}.${index}.role`}
                                    />


                                    <Text
                                        value={`${item.description}`}
                                        placeholder="Manage and evaluate the creative team works and
                                        campaigns. Evaluate and manage the result of
                                        advertising campaigns on social media. Know what is
                                        trending and create brand awareness, sell products
                                        or services, and able to grow the client's companies.
                                        Evaluate and manage the result of
                                        advertising campaigns on social media. Know what is
                                        trending and create brand awareness, sell products
                                        or services, and able to grow the client's companies.                                         
                                        "
                                        customclass={`${style.experienceDes} ${style.digitalContentEditableContainer}`}
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
export default DigitalMarketingExperience;
