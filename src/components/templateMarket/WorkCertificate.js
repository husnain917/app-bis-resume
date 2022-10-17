import React from "react";
import Util from "../../../utils/templateUtils";
import { Text, Dnd } from "../template1";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
import { styles } from "../componentStyles/template1Style";

function WorkCertificate(props) {
    const dispatch = useDispatch();
    const path = "certifications.items";

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
        <div style={styles.pt_20}>
            <Dnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) =>
                    <div style={{ flexDirection: "row" }}>
                        <div style={{ margin: '10px 0' }}>

                            <div style={styles.workItem}>
                                <div style={{ marginBottom: 20 }}>

                                    <Text
                                        value={item.title}
                                        placeholder="CERTIFICATE TITLE"
                                        customclass={
                                            "manager-position"
                                        }
                                        path={`${path}.${index}.title`}
                                    />
                                </div>
                            </div>
                            <div>
                                <Text
                                    value={item.date}
                                    path={`${path}.${index}.date`}
                                    customclass={
                                        "manager-position"
                                    }
                                    placeholder=" Issuse Date"
                                />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
}
export default WorkCertificate;


