import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { LanguageDnd } from "../fashionTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/fashionTemp.module.css";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react";


function FashionLanguage(props) {
    const dispatch = useDispatch();
    const path = "languages.items";

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
        <LanguageDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <div style={{ padding: '0px 10px' }}>
                    <Text
                        value={item.languages}
                        placeholder="English"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.english`}
                    />
                    <Slider aria-label='slider-ex-1' defaultValue={35}>
                        <SliderTrack>
                            <SliderFilledTrack bg={'#000000'} />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Text
                        value={item.languages}
                        placeholder="Russian"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.russian`}
                    />
                    <Slider aria-label='slider-ex-1' defaultValue={35}>
                        <SliderTrack>
                            <SliderFilledTrack bg={'#000000'} />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Text
                        value={item.languages}
                        placeholder="Dutch"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.dutch`}
                    />
                    <Slider aria-label='slider-ex-1' defaultValue={35}>
                        <SliderTrack>
                            <SliderFilledTrack bg={'#000000'} />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Text
                        value={item.languages}
                        placeholder="German"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.german`}
                    />
                    <Slider aria-label='slider-ex-1' defaultValue={35}>
                        <SliderTrack>
                            <SliderFilledTrack bg={'#000000'}  />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>
            }
        />
    );
}
export default FashionLanguage;
