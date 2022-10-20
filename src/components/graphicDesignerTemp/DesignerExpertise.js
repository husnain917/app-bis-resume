import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { GraphicDesignerDnd } from "../graphicDesignerTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/graphicDesignerTemp.module.css";
import {
    ListItem,
    UnorderedList
} from "@chakra-ui/react";


function DesignerExpertise(props) {
    const dispatch = useDispatch();
    const path = "expertise.items";

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

    const [progress, setProgress] = useState([]);
    const validateData = (e, index2) => {
        if (e.target.value > 0 && e.target.value > 100 || e.target.value <= 0) {
            let newArr2 = progress.map((item, index) => {
                if (index === index2) {
                    return null;
                }
                else {
                    return item
                }
            })
            setProgress(newArr2);
            return;
        }
        let newArr;
        if (progress.length <= 0) {
            newArr = [e.target.value]
        }
        else if (progress.length === index2) {
            newArr = [...progress, e.target.value]
            console.log(newArr);
        }
        else {
            newArr = progress.map((item, index) => {
                if (index === index2) {
                    return e.target.value;
                } else {
                    return item
                }
            })
        }
        setProgress(newArr);
    }
    return (
        <GraphicDesignerDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <>
                    <UnorderedList
                        padding={'0px 15px'}
                    >
                        <ListItem>
                            <Text
                                value={item.expertise}
                                placeholder="Creativity"
                                customclass={`${style.expertiseBodyHeadings}`}
                                path={`${path}.${index}.creativity`}
                            />
                        </ListItem>
                    </UnorderedList>
                </>
            }
        />
    );
}
export default DesignerExpertise;
