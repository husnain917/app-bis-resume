import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { HarumiGraphicDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/harumiGraphicTemp.module.css";
import { Box } from "@chakra-ui/react";

function HarumiGraphicExperience(props) {
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
            <HarumiGraphicDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) => (
                    <>
                        <Box
                            padding={'0px 15px'}
                        >
                            <Box>
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
                                <Box
                                    display={'flex'}
                                    alignItems={'center'}
                                >
                                    <Text
                                        value={item.company}
                                        placeholder="Company Name"
                                        customclass={`${style.experienceDesHeadings}`}
                                        path={`${path}.${index}.company`}
                                    />

                                    <p style={{ color: '#fff' }}>&nbsp;|&nbsp;</p>
                                    <Text
                                        value={item.startYear}
                                        placeholder="Year"
                                        customclass={`${style.experienceDesHeadings}`}
                                        path={`${path}.${index}.startYear`}
                                    />
                                </Box>
                            </Box>
                            <Box>
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
export default HarumiGraphicExperience;
