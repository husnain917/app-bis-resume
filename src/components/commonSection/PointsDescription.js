import { Box, Stack, Text as ChakraText } from "@chakra-ui/react";
import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from "../../../store/actions/builderAction";
import Util from "../../../utils/templateUtils";

import Dnd from "./Dnd";
import { onBlurField } from "../../../store/actions/builderAction";
import Text from "./Text";
import { sampleData } from "../../../constants/sampleData";
const PointsDescription = (props) => {
  const {
    resumeData,
    height,
    borderRadius,
    margin,
    bg,
    PointsDescriptionStyle,
    PointsDescriptionPlaceholder,
    parentContainerStyle,
    childContainerStyle,
    maxChr,
    maxWidth,
    data,
    addPoint,
    deletePoint,
    parentIndex,
    DndDirection,
    BulletIcon,
    BulletContainerStyle,
  } = props;
  console.log("items======>", data);
  const path = "work.items";
  const dispatch = useDispatch();

  const onOrderUpdate = (datas) => {
    const storeReorder = Util.mapOrder(data, datas, "id");
    dispatch(updateOrder(storeReorder, path));
  };
  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ""}
        additem={addPoint}
        removeitem={(index) => deletePoint(index)}
        reorder={(e) => onOrderUpdate(e)}
        renderItem={(item, index) => (
          <Box className={`${childContainerStyle ? childContainerStyle : ""}`}>
            <Stack
              direction="row"
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
            >
              <Box className={BulletContainerStyle}>
                <BulletIcon />
              </Box>
              <Box flexGrow={1} width={"100%"}>
                <Text
                  value={item.title}
                  placeholder={
                    PointsDescriptionPlaceholder
                      ? PointsDescriptionPlaceholder
                      : "Description"
                  }
                  customClass={`${PointsDescriptionStyle}`}
                  path={`${path}.${parentIndex}.pointsItems.${index}.title`}
                  maxWidth={maxWidth}
                  maxChr={maxChr}
                />
              </Box>
            </Stack>
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
export default connect(mapStateToProps, { onBlurField })(PointsDescription);
