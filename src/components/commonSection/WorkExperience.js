import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { Box, Stack, VStack } from "@chakra-ui/react";
import { useDispatch, connect } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { onBlurField } from "../../../store/actions/builderAction";
import { sampleData } from "../../../constants/sampleData";
const WorkExperience = (props) => {
  const { resumeData } = props;
  const data = resumeData?.work?.items?.length
    ? [...resumeData?.work?.items]
    : [...sampleData?.data?.work?.items];
  const dispatch = useDispatch();
  const path = "work.items";

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
    position_placeholder,
    company_placeholder,
    startDate_placeholder,
    endDate_placeholder,
    summary_placeholder,
    location_placeholder,
    dateStyle,
    companyStyle,
    positionStyle,
    summaryStyle,
    locationStyle,
    position,
    company,
    date,
    summary,
    location,
    direction,
    dateDirection = "row",
    row1MinW = 160,
    row1MaxW = 160,
    row2MaxW = 230,
    row2MinW = 230,
    DndDirection,
    icon,
    iconShow,
    sideLine,
    lineColor,
    margin,
    maxwidth,
    minwidth,
    datewidthmax,
  } = props;

  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ""}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box
            className={`${childContainerStyle ? childContainerStyle : ""}`}
            style={{ display: "flex", alignItems: sideLine && "stretch" }}
            m={margin ? margin : ""}
          >
            {iconShow && React.createElement(icon)}
            {sideLine && (
              <Box w={1} bg={lineColor ? lineColor : "#06213D"} ml={-3} mr={4}>
                <Box
                  h={4}
                  w={4}
                  bg={lineColor ? lineColor : "#06213D"}
                  borderRadius="full"
                  mr={4}
                  ml={-1.5}
                  mt={-1}
                ></Box>
              </Box>
            )}
            <VStack justifyContent={"flex-start"} alignItems="flex-start">
              <Stack direction={direction ? direction : "column"}>
                {position && (
                  <Box
                    minW={direction === "row" && row1MinW}
                    maxW={direction === "row" && row1MaxW}
                  >
                    <Text
                      value={item.position}
                      placeholder={
                        position_placeholder
                          ? position_placeholder
                          : "Title/Position"
                      }
                      path={`${path}.${index}.position`}
                      customClass={`${positionStyle ? positionStyle : ""}`}
                      color={textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                      maxWidth={maxwidth}
                      minWidth={minwidth}
                    />
                  </Box>
                )}
                {company && (
                  <Box
                    minW={direction === "row" && row2MinW}
                    maxW={direction === "row" && row2MaxW}
                  >
                    <Text
                      value={item.company}
                      placeholder={
                        company_placeholder
                          ? company_placeholder
                          : "Workplace/Company"
                      }
                      path={`${path}.${index}.company`}
                      customClass={`${companyStyle ? companyStyle : ""}`}
                      color={textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                      maxWidth={maxwidth}
                      minWidth={minwidth}
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
                        maxChr={props.maxchr}
                        path={`${path}.${index}.startDate`}
                        customClass={`${dateStyle ? dateStyle : ""}`}
                        color={textColor}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        textAlign={textAlign}
                        maxWidth={datewidthmax}
                      />
                      {dateDirection == "row" && (
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                          className={dateStyle}
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
                        maxChr={props.maxchr}
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
                      path={`${path}.${index}.description`}
                      customClass={`${summaryStyle ? summaryStyle : ""}`}
                      fontSize={fontSize}
                      color={textColor}
                      textAlign={textAlign}
                      maxWidth={maxwidth}
                      minWidth={minwidth}
                    />
                  </Box>
                )}
              </Stack>
              {location && (
                <>
                  <Text
                    value={`${item.location}`}
                    placeholder={
                      location_placeholder ? location_placeholder : "Location"
                    }
                    path={`${path}.${index}.location`}
                    customClass={`${locationStyle ? locationStyle : ""}`}
                    fontSize={fontSize}
                    color={textColor}
                    textAlign={textAlign}
                    maxWidth={maxwidth}
                    minWidth={minwidth}
                  />
                </>
              )}
            </VStack>
          </Box>
        )}
      />
    </div>
  );
};
const mapStateToProps = (store) => ({
  theme: store.editorReducer.theme,
  resumeData: store.editorReducer.resumeData,
  updater: store.editorReducer.updater,
});
export default connect(mapStateToProps, { onBlurField })(WorkExperience);
