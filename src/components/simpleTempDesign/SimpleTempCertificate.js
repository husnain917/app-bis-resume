import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { SimpleTempDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/simpleTempDesign.module.css";
import {
    Box,
} from "@chakra-ui/react";

function SimpleTempCertificate(props) {
    const dispatch = useDispatch();
    const path = "certifications.items";

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
                        padding={'0px 15px'}
                    >
                        <Text
                            value={item.title}
                            placeholder="Certificate Name"
                            customclass={`${style.projectTitleText}`}
                            path={`certifications.items.title`}
                        />
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                        >
                            <Text
                                value={item.startDate}
                                placeholder="Start Date"
                                customclass={`${style.description}`}
                                path={`certifications.items.startDate`}
                            />
                            <p>&nbsp;-&nbsp;</p>
                            <Text
                                value={item.endDate}
                                placeholder="End Date"
                                customclass={`${style.description}`}
                                path={`certifications.items.endDate`}
                            />
                        </Box>
                        <Text
                            value={item.summary}
                            placeholder="Description(Optional)"
                            customclass={`${style.description}`}
                            path={`certifications.items.summary`}
                        />
                    </Box>
                </>
            }
        />
    );
}
export default SimpleTempCertificate;