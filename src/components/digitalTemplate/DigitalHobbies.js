import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { DigitalDnd } from "../digitalTemplate/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/designerTemplate.module.css";
import {
    Box,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";


function DigitalHobbies(props) {
    const dispatch = useDispatch();
    const path = "hobbies.items";

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
        <DigitalDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <>
                    {/* Digital Marketing skill */}
                    <Box
                        padding={"0px 10px 0px 10px"}
                    >
                        <UnorderedList>
                            <ListItem>
                                <Text
                                    value={item.hobbies}
                                    placeholder="Photography"
                                    customclass={`${style.skillBodyHeading}`}
                                    path={`${path}.${index}.photography`}
                                />
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </>
            }
        />
    );
}
export default DigitalHobbies;
