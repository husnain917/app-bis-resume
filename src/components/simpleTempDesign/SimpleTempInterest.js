import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { SimpleTempDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/simpleTempDesign.module.css";
import {
    Box, ListItem, UnorderedList,
} from "@chakra-ui/react";

function SimpleTempInterest(props) {
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
        <SimpleTempDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <>
                    <Box
                        borderWidth={2}
                        borderColor={'blackAlpha.400'}
                        borderRadius={6}
                        padding={"4px 10px"}
                    >
                        <UnorderedList>
                            <ListItem>
                                <Text
                                    value={item.title}
                                    placeholder="Interest"
                                    customclass={`${style.skillText}`}
                                    path={`hobbies.items.title`}
                                />
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </>
            }
        />
    );
}
export default SimpleTempInterest;
