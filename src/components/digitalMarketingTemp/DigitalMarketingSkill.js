import React from "react";
import Util from "../../../utils/templateUtils";
import { Text } from "../template1/index";
import { DigitalDnd } from "../digitalMarketingTemp/index";
import { useDispatch } from "react-redux";
import { updateOrder, addNewObj, deleteObjInArray } from "../../../store/actions/builderAction";
// import { styles } from "../componentStyles/template1Style";
import style from "../../../styles/digitalMarketingTemp.module.css";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react";


function DigitalMarketingSkill(props) {
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
    return (
        <DigitalDnd
            data={data}
            reorder={(e) => onOrderUpdate(e)}
            additem={_addNewItem}
            removeitem={(index) => _removeItem(index)}
            renderItem={(item, index) =>
                <>
                    <div>
                        {/* Digital Marketing skill */}
                        <div className={style.skillDiv}>
                            <Text
                                value={item.skills}
                                placeholder="Digital Marketing"
                                customclass={`${style.skillBodyHeading} ${style.digitalContentEditableContainer}`}
                                path={`${path}.${index}.digitalMarketing`}
                            />
                            <Slider aria-label='slider-ex-1' defaultValue={35} width={'40%'}>
                                <SliderTrack bg={'#adb5bd'}>
                                    <SliderFilledTrack bg={'#fff'} />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </div>

                        {/* Social Media Ads skill */}
                        <div className={style.skillDiv}>
                            <Text
                                value={item.skills}
                                placeholder="Social Media Ads"
                                customclass={`${style.skillBodyHeading} ${style.digitalContentEditableContainer}`}
                                path={`${path}.${index}.socialMediaAds`}
                            />
                            <Slider aria-label='slider-ex-1' defaultValue={35} width={'40%'}>
                                <SliderTrack bg={'#adb5bd'}>
                                    <SliderFilledTrack bg={'#fff'} />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </div>

                        {/* Email Marketing skill */}
                        <div className={style.skillDiv}>
                            <Text
                                value={item.skills}
                                placeholder="Email Marketing"
                                customclass={`${style.skillBodyHeading} ${style.digitalContentEditableContainer}`}
                                path={`${path}.${index}.emailMarketing`}
                            />
                            <Slider aria-label='slider-ex-1' defaultValue={35} width={'40%'}>
                                <SliderTrack bg={'#adb5bd'}>
                                    <SliderFilledTrack bg={'#fff'} />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </div>

                        {/* Google Analytic skill */}
                        <div className={style.skillDiv}>
                            <Text
                                value={item.skills}
                                placeholder="Google Analytic"
                                customclass={`${style.skillBodyHeading} ${style.digitalContentEditableContainer}`}
                                path={`${path}.${index}.googleAnalytic`}
                            />
                            <Slider aria-label='slider-ex-1' defaultValue={35} width={'40%'}>
                                <SliderTrack bg={'#adb5bd'}>
                                    <SliderFilledTrack bg={'#fff'} />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </div>

                        {/* Google Ads skill */}
                        <div className={style.skillDiv}>
                            <Text
                                value={item.skills}
                                placeholder="Google Ads"
                                customclass={`${style.skillBodyHeading} ${style.digitalContentEditableContainer}`}
                                path={`${path}.${index}.googleAds`}
                            />
                            <Slider aria-label='slider-ex-1' defaultValue={35} width={'40%'}>
                                <SliderTrack bg={'#adb5bd'}>
                                    <SliderFilledTrack bg={'#fff'} />
                                </SliderTrack>
                                <SliderThumb />
                            </Slider>
                        </div>
                    </div>
                </>
            }
        />
    );
}
export default DigitalMarketingSkill;
