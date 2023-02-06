import { Box, HStack, Text as ChakraText } from "@chakra-ui/react";
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
const RowSkill = (props) => {
  const {
    resumeData,
    height,
    borderRadius,
    margin,
    bg,
    skillStyle,
    skillPlaceholder,
    parentContainerStyle,
    childContainerStyle,
  } = props;
  const data = resumeData?.skills?.items?.length
    ? [...resumeData?.skills?.items]
    : [...sampleData?.data?.skills?.items];
  const path = "skills.items";
  const dispatch = useDispatch();
  const _addNewItem = () => {
    console.log(data);
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
  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        data={data}
        direction="horizontal"
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        reorder={(e) => onOrderUpdate(e)}
        renderItem={(item, index) => (
          <Box
            h={height ? height : "32px"}
            m={margin ? margin : 0.4}
            bg={bg ? bg : "blackAlpha.400"}
            borderRadius={borderRadius ? borderRadius : 6}
            className={`${childContainerStyle ? childContainerStyle : ""}`}
          >
            <Text
              value={item.title}
              placeholder={skillPlaceholder ? skillPlaceholder : "Skill"}
              customClass={`${skillStyle}`}
              path={`${path}.${index}.title`}
              maxWidth={props.maxWidth}
              maxChr={props.maxchr}
            />
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
export default connect(mapStateToProps, { onBlurField })(RowSkill);
