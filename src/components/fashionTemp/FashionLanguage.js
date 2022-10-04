import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { LanguageDnd } from "../fashionTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/fashionTemp.module.css";
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";

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
                <div style={{padding:'0px 10px'}}>
                    <Text
                        value={item.languages}
                        placeholder="English"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.english`}
                    />
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 70]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg={'#000000'} />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Text
                        value={item.languages}
                        placeholder="Russian"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.russian`}
                    />
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 55]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg={'#000000'} />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Text
                        value={item.languages}
                        placeholder="Dutch"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.dutch`}
                    />
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 45]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg={'#000000'} />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Text
                        value={item.languages}
                        placeholder="German"
                        customclass={`${style.languageBodyHeadings} ${style.fashionContentEditableContainer}`}
                        path={`${path}.${index}.german`}
                    />
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 35]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg={'#000000'} />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </div>
            }
        />
    );
}
export default FashionLanguage;
