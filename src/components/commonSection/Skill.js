import { Box, Input, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from "../../../store/actions/builderAction";
import Util from "../../../utils/templateUtils";
import Rating from "../rating/Rating";
import Dnd from "./Dnd";
import Text from "./Text";
import { Line } from "rc-progress";
import { useState } from "react";
import { sampleData } from "../../../constants/sampleData";
import { onBlurField } from "../../../store/actions/builderAction";
const Skill = (props) => {
  const path = "skills.items";
  const { resumeData } = props;
  const data = resumeData?.skills?.items?.length
    ? [...resumeData?.skills?.items]
    : [...sampleData?.data?.skills?.items];
  const dispatch = useDispatch();
  const _addNewItem = () => {
    dispatch(addNewObj(data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };
  const onOrderUpdate = (datas) => {
    const storeReorder = Util.mapOrder(data, datas, "id");
    dispatch(updateOrder(storeReorder, path));
  };
  const [progress, setProgress] = useState([]);
  const validateData = (e, index2) => {
    if ((e.target.value > 0 && e.target.value > 100) || e.target.value <= 0) {
      let newArr2 = progress.map((item, index) => {
        if (index === index2) {
          return null;
        } else {
          return item;
        }
      });
      setProgress(newArr2);
      return;
    }
    let newArr;
    if (progress.length <= 0) {
      newArr = [e.target.value];
    } else if (progress.length === index2) {
      newArr = [...progress, e.target.value];
    } else {
      newArr = progress.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item;
        }
      });
    }
    setProgress(newArr);
  };
  const {
    skillPlaceholder,
    skillStyle,
    percentageStyle,
    minW,
    maxW,
    rating,
    progressBar,
    ratingIconColor,
    strokeColor,
    strokeWidth,
    trailColor,
    trailWidth,
    minWText = "130px",
    maxWText = "130px",
    direction,
    lineStyle,
    parentContainerStyle,
    childContainerStyle,
    DndDirection,
    margin,
    percentStyle,
    maxwidth,
    maxWidth,
    maxChr,
    minWidth,
    textColor,
  } = props;

  return (
    <div
      className={`${parentContainerStyle ? parentContainerStyle : ""}`}
      style={{ margin: margin ? margin : "" }}
    >
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ""}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        reorder={(e) => onOrderUpdate(e)}
        renderItem={(item, index) => (
          <Stack
            maxW={maxW ? maxW : ""}
            minW={minW ? minW : ""}
            direction={direction ? direction : "row"}
            className={`${childContainerStyle ? childContainerStyle : ""}`}
          >
            <Box
              minW={(rating || progressBar) && minWText}
              maxW={(rating || progressBar) && maxWText}
            >
              {rating || progressBar ? (
                <Text
                  value={item.title}
                  placeholder={skillPlaceholder ? skillPlaceholder : "Skill"}
                  customClass={`${skillStyle}`}
                  path={`skills.items.${index}.title`}
                  maxWidth={maxwidth || maxWidth}
                  color={textColor ? textColor : '#000'}
                />
              ) : (
                <UnorderedList>
                  <ListItem className={`${skillStyle}`}>
                    <Text
                      value={item.title}
                      placeholder={
                        skillPlaceholder ? skillPlaceholder : "Skill"
                      }
                      customClass={`${skillStyle}`}
                      path={`skills.items.${index}.title`}
                      maxWidth={maxwidth || maxWidth}
                      color={textColor ? textColor : '#000'}
                    />
                  </ListItem>
                </UnorderedList>
              )}
            </Box>
            {rating && (
              <Rating
                activeColor={ratingIconColor ? ratingIconColor : "#3498DB"}
                size={24}
              />
            )}
            {progressBar && (
              <Box display={"flex"}>
                <Line
                  percent={progress[index]}
                  strokeWidth={strokeWidth ? strokeWidth : "6"}
                  strokeColor={strokeColor ? strokeColor : "#000"}
                  trailColor={trailColor ? trailColor : "gray"}
                  trailWidth={trailWidth ? trailWidth : "2"}
                  className={`${lineStyle ? lineStyle : ""}`}
                />

                <Input
                  maxW={50}
                  maxH={30}
                  borderColor="none"
                  variant="unstyled"
                  placeholder="0"
                  value={`${progress[index]}`}
                  onChange={(e) => validateData(e, index)}
                  type="number"
                  className={`${percentageStyle}`}
                  style={{ marginLeft: "5px" }}
                  maxWidth={maxWidth}
                />
                <div
                  style={{
                    marginLeft: progress[index] > 99 ? "-22px" : "-30px",
                    marginTop: "5px",
                  }}
                  className={`${percentStyle} ${percentageStyle}`}
                >
                  %
                </div>
              </Box>
            )}
          </Stack>
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
export default connect(mapStateToProps, { onBlurField })(Skill);
