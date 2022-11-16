import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { GraphicDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/graphicTemplate.module.css";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

function GraphicEducation(props) {
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
            <GraphicDnd
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
                                placeholder="Degree"
                                customclass={`${style.educationDesHeading}`}
                                path={`${path}.${index}.degree`}
                            />
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Text
                                    value={item.institution}
                                    placeholder="Institution Name"
                                    customclass={`${style.educationDesHeading}`}
                                    path={`${path}.${index}.institution`}
                                />

                                <p style={{ color: '#fff' }}>&nbsp;|&nbsp;</p>
                                <Text
                                    value={item.year}
                                    placeholder="Year"
                                    customclass={`${style.educationDesHeading}`}
                                    path={`${path}.${index}.year`}
                                />
                            </Box>
                            <UnorderedList
                                padding={'0px 15px'}
                                color={'#fff'}
                            >
                                <ListItem>
                                    <Text
                                        value={item.summary}
                                        placeholder="Summary"
                                        customclass={`${style.educationDesTxt}`}
                                        path={`${path}.${index}.summary`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <Text
                                        value={item.location}
                                        placeholder="Location"
                                        customclass={`${style.educationDesTxt}`}
                                        path={`${path}.${index}.location`}
                                    />
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </>
                )}
            />
        </div>
    );
}
export default GraphicEducation;
