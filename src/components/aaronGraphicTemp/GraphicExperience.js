import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { GraphicDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/graphicTemplate.module.css";
import { Box } from "@chakra-ui/react";

function GraphicExperience(props) {
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
            <GraphicDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) => (
                    <>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            padding={'0px 15px'}
                            width={'100%'}
                        >
                            <Box
                                width={'40%'}
                            >
                                <Text
                                    value={item.role}
                                    placeholder="Role"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.role`}
                                />
                                <Text
                                    value={item.position}
                                    placeholder="Position"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.position`}
                                />
                                <Text
                                    value={item.startYear}
                                    placeholder="Year"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.startYear`}
                                />
                            </Box>
                            <Box
                                width={'60%'}
                            >
                                <Text
                                    value={item.summary}
                                    placeholder="Summary"
                                    customclass={`${style.experienceDesBody}`}
                                    path={`${path}.${index}.summary`}
                                />
                            </Box>
                        </Box>
                    </>
                )}
            />
        </div>
    );
}
export default GraphicExperience;
