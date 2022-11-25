import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { SimpleTempDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/simpleTempDesign.module.css";
import { Box } from "@chakra-ui/react";

function SimpleTempEducation(props) {
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
            <SimpleTempDnd
                data={data}
                reorder={(e) => onOrderUpdate(e)}
                additem={_addNewItem}
                removeitem={(index) => _removeItem(index)}
                renderItem={(item, index) => (
                    <>
                        <Box
                            padding={'0px 15px'}
                        >
                            <Text
                                value={item.degree}
                                placeholder="Study Program"
                                customclass={`${style.educationDesHeading}`}
                                path={`${path}.${index}.degree`}
                            />
                            <Text
                                placeholder="Institute/University"
                                value={item.institution}
                                customclass={`${style.educationDesHeading}`}
                                path={`${path}.${index}.institution`}
                            />
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Text
                                    placeholder="From"
                                    value={item.startDate}
                                    customclass={`${style.educationDesTxt}`}
                                    path={`${path}.${index}.startDate`}
                                />
                                <p>&nbsp;-&nbsp;</p>
                                <Text
                                    placeholder="End"
                                    value={item.endDate}
                                    customclass={`${style.educationDesTxt}`}
                                    path={`${path}.${index}.endDate`}
                                />
                            </Box>
                            <Text
                                placeholder="City , Country"
                                value={item.location}
                                customclass={`${style.educationDesTxt}`}
                                path={`${path}.${index}.location`}
                            />
                        </Box>
                    </>
                )}
            />
        </div>
    );
}
export default SimpleTempEducation;
