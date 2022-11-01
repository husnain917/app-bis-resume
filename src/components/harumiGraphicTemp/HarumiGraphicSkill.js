import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { HarumiGraphicDnd } from "./index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/harumiGraphicTemp.module.css";
import {
    Box,
    Input,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";
import { Line } from 'rc-progress';


function HarumiGraphicSkill(props) {
    const dispatch = useDispatch();
    const path = "skills.items";

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
        <HarumiGraphicDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <>
                    {/* Digital Marketing skill */}
                    <Box
                        padding={"10px"}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        width={'100%'}
                    >
                        <Box
                            width={'50%'}
                        >
                            <UnorderedList
                                color={'#fff'}
                            >
                                <ListItem>
                                    <Text
                                        value={item.skills}
                                        placeholder="Content Design"
                                        customclass={`${style.skillBodyHeading}`}
                                        path={`${path}.${index}.contentdesign`}
                                    />
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            width={'48%'}
                        >
                            <Box w={'80%'} borderRadius={6}>
                                <Line
                                    percent={progress[index]}
                                    strokeWidth={10}
                                    strokeColor={'#fff'}
                                />
                            </Box>
                            <Input
                                maxW={10}
                                maxH={30}
                                borderColor="none"
                                variant="unstyled"
                                placeholder="0"
                                value={`${progress[index]}`}
                                className={`${style.inputData}`}
                                onChange={(e) => validateData(e, index)}
                                type="number"
                            />
                            {

                                progress[index] ?
                                    <span className={`${style.perD}`}>%</span>
                                    :
                                    null
                            }
                        </Box>
                    </Box>
                </>
            }
        />
    );
}
export default HarumiGraphicSkill;
