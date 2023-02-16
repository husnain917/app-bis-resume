import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { Box, Stack, VStack } from "@chakra-ui/react";
import { connect, useDispatch } from "react-redux";
import { onBlurField } from "../../../store/actions/builderAction";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { sampleData } from "../../../constants/sampleData";
const Education = (props) => {
  const { resumeData } = props;
  const data = resumeData?.education?.items?.length
    ? [...resumeData?.education?.items]
    : [...sampleData?.data?.education?.items];

  const dispatch = useDispatch();
  const path = "education.items";

  const onOrderUpdate = (datas) => {
    const storeReorder = Util.mapOrder(data, datas, "id");
    dispatch(updateOrder(storeReorder, path));
  };

  const _addNewItem = () => {
    dispatch(addNewObj(data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };
  const {
    textColor,
    fontSize,
    fontWeight,
    textAlign,
    parentContainerStyle,
    childContainerStyle,
    degree_placeholder,
    institution_placeholder,
    startDate_placeholder,
    endDate_placeholder,
    summary_placeholder,
    extracurricular_placeholder,
    location_placeholder,
    dateStyle,
    institutionStyle,
    degreeStyle,
    summaryStyle,
    extracurricularStyle,
    locationStyle,
    degree,
    institution,
    date,
    summary,
    location,
    extracurricular,
    direction,
    dateDirection = "row",
    row1MinW = 160,
    row1MaxW = 160,
    row2MaxW = 230,
    row2MinW = 230,
    DndDirection,
    icon,
    iconShow,
    margin,
    maxWidth,
    minWidth,
    datewidthmax,
    datewidthmin,
    maxChr,companFontColor,
    bgColor,
  } = props;

  return (
    <Box
      className={`${parentContainerStyle ? parentContainerStyle : ""}`}
      style={{
        margin: margin ? margin : "",
        backgroundColor: bgColor ? bgColor : "",
      }}
    >
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ""}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div
            className={`${childContainerStyle ? childContainerStyle : ""}`}
            style={{
              display: "flex",
              backgroundColor: props.bgColor ? props.bgColor : "",
            }}
          >
            {iconShow && React.createElement(icon)}
            <VStack justifyContent={"flex-start"} alignItems="flex-start">
              <Stack direction={direction ? direction : "column"}>
                {degree && (
                  <Box
                    minW={direction === "row" && row1MinW}
                    maxW={direction === "row" && row1MaxW}
                  >
                    <Text
                      value={item.degree}
                      placeholder={
                        degree_placeholder ? degree_placeholder : "Degree"
                      }
                      path={`${path}.${index}.degree`}
                      customClass={`${degreeStyle ? degreeStyle : ""}`}
                      color={textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                      maxWidth={maxWidth}
                      minWidth={minWidth}
                    />
                  </Box>
                )}
                {institution && (
                  <Box
                    minW={direction === "row" && row2MinW}
                    maxW={direction === "row" && row2MaxW}
                  >
                    <Text
                      value={item.institution}
                      placeholder={
                        institution_placeholder
                          ? institution_placeholder
                          : "University/Institute"
                      }
                      path={`${path}.${index}.institution`}
                      customClass={`${
                        institutionStyle ? institutionStyle : ""
                      }`}
                      color={companFontColor?companFontColor:textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                      maxWidth={maxWidth}
                      minWidth={minWidth}
                    />
                  </Box>
                )}
              </Stack>
              <Stack direction={direction ? direction : "column"}>
                {date && (
                  <Box
                    minW={direction === "row" && row1MinW}
                    maxW={direction === "row" && row1MaxW}
                  >
                    <Stack direction={dateDirection ? dateDirection : "row"}>
                      <Text
                        value={item.startDate}
                        placeholder={
                          startDate_placeholder ? startDate_placeholder : "From"
                        }
                        path={`${path}.${index}.startDate`}
                        customClass={`${dateStyle ? dateStyle : ""}`}
                        color={textColor}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        textAlign={textAlign}
                        maxWidth={datewidthmax}
                        minWidth={datewidthmin}
                        maxChr={maxChr}
                      />
                      {dateDirection == "row" && (
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                          className={`${dateStyle}`}
                        >
                          _
                        </p>
                      )}

                      <Text
                        value={item.endDate}
                        placeholder={
                          endDate_placeholder ? endDate_placeholder : "End"
                        }
                        path={`${path}.${index}.endDate`}
                        customClass={`${dateStyle ? dateStyle : ""}`}
                        color={textColor}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        textAlign={textAlign}
                        maxWidth={datewidthmax}
                        minWidth={datewidthmin}
                        maxChr={maxChr}
                      />
                    </Stack>
                  </Box>
                )}

                {summary && (
                  <Box
                    minW={direction === "row" && row2MinW}
                    maxW={direction === "row" && row2MaxW}
                  >
                    <Text
                      value={item.summary}
                      placeholder={
                        summary_placeholder
                          ? summary_placeholder
                          : "Short Description"
                      }
                      path={`${path}.${index}.summary`}
                      customClass={`${summaryStyle ? summaryStyle : ""}`}
                      fontSize={fontSize}
                      color={textColor}
                      textAlign={textAlign}
                      maxWidth={maxWidth}
                      minWidth={minWidth}
                    />
                  </Box>
                )}
              </Stack>
              {extracurricular && (
                <>
                  <Text
                    value={`${item.extracurricular}`}
                    placeholder={
                      extracurricular_placeholder
                        ? extracurricularStyle
                        : "Extra Curricular"
                    }
                    path={`${path}.${index}.extracurricular`}
                    customClass={`${
                      extracurricularStyle ? extracurricularStyle : ""
                    }`}
                    fontSize={fontSize}
                    color={textColor}
                    textAlign={textAlign}
                  />
                </>
              )}
              {location && (
                <>
                  <Text
                    placeholder={
                      location_placeholder ? location_placeholder : "Location"
                    }
                    path={`${path}.${index}.location`}
                    value={`${item.location}`}
                    customClass={`${locationStyle ? locationStyle : ""}`}
                    fontSize={fontSize}
                    color={textColor}
                    textAlign={textAlign}
                    maxWidth={maxWidth}
                    minWidth={minWidth}
                  />
                </>
              )}
            </VStack>
          </div>
        )}
      />
    </Box>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});
export default connect(mapStateToProps, { onBlurField })(Education);
