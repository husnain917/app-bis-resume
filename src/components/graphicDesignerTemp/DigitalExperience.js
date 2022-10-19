import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { GraphicDesignerDnd } from "../graphicDesignerTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/graphicDesignerTemp.module.css";
import { Box } from "@chakra-ui/react";

function DigitalExperience(props) {
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
            <GraphicDesignerDnd
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
                                    placeholder="Graphic Designer"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.role`}
                                />
                                <Text
                                    value={item.title}
                                    placeholder="Borcelle Studios"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.title`}
                                />
                                <Text
                                    value={item.startYear}
                                    placeholder="2014 - 2016"
                                    customclass={`${style.experienceDesHeadings}`}
                                    path={`${path}.${index}.startYear`}
                                />
                            </Box>
                            <Box
                                width={'60%'}
                            >
                                <Text
                                    value={item.description}
                                    placeholder="Working as graphic designer for 1
                                    year, Academic Excellence in Web
                                    Design & English."
                                    customclass={`${style.experienceDesBody}`}
                                    path={`${path}.${index}.description`}
                                />
                            </Box>
                        </Box>
                    </>
                )}
            />
        </div>
    );
}
export default DigitalExperience;
