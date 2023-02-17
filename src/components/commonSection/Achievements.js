import React from "react";
import { connect } from "react-redux";
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from "../../../store/actions/builderAction";
import Util from "../../../utils/templateUtils";
import Dnd from "./Dnd";
import { onBlurField } from "../../../store/actions/builderAction";
import { sampleData } from "../../../constants/sampleData";
import Text from "./Text";
import { HStack, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
const Achievements = (props) => {
  const {
    resumeData,
    parentContainerStyle,
    childContainerStyle,
    achievement,
    date,
    role,
    achievementPlaceholder,
    startDatePlaceholder,
    endDatePlaceholder,
    rolePlaceholder,
    achievementStyle,
    dateStyle,
    roleStyle,
    datewidthmax,
    maxwidth,
    dndDirection,
    textColor
  } = props;
  const data = resumeData?.achievements?.items?.length
    ? [...resumeData?.achievements?.items]
    : [...sampleData?.data?.achievements?.items];
  console.log(resumeData);
  const dispatch = useDispatch();
  const path = "achievements.items";
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
  return (
    <Box
      className={`${parentContainerStyle ? parentContainerStyle : ""}`}

    >
      <Dnd
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box className={`${childContainerStyle ? childContainerStyle : ""}`} bg={props.bgColor ? props.bgColor : ""}>
            {achievement && (
              <Box maxWidth={props.maxWidth}>
                <Text
                  value={item.name}
                  placeholder={
                    achievementPlaceholder
                      ? achievementPlaceholder
                      : "achievement Name"
                  }
                  customClass={`${achievementStyle ? achievementStyle : ""}`}
                  path={`${path}.${index}.name`}
                  maxWidth={maxwidth}
                  color={textColor}
                />
              </Box>
            )}
            {date && (
              <HStack>
                <Text
                  value={item.startDate}
                  placeholder={
                    startDatePlaceholder ? startDatePlaceholder : "startDate"
                  }
                  customClass={`${dateStyle ? dateStyle : ""}`}
                  path={`${path}.${index}.startDate`}
                  maxWidth={datewidthmax}
                  maxChr={props.maxChr}
                  color={textColor}
                />
                <div className={`${dateStyle ? dateStyle : ""}`}>-</div>
                <Text
                  value={item.endDate}
                  placeholder={
                    endDatePlaceholder ? endDatePlaceholder : "endDate"
                  }
                  customClass={`${dateStyle ? dateStyle : ""}`}
                  path={`${path}.${index}.endDate`}
                  maxWidth={datewidthmax}
                  maxChr={props.maxChr}
                  color={textColor}
                />
              </HStack>
            )}
            {role && (
              <Box maxWidth={props.maxWidth}>
                <Text
                  value={item.role}
                  placeholder={rolePlaceholder ? rolePlaceholder : "Role"}
                  customClass={`${roleStyle ? roleStyle : ""}`}
                  path={`${path}.${index}.role`}
                  maxWidth={props.maxwidth}
                  color={textColor}
                />
              </Box>
            )}
          </Box>
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
export default connect(mapStateToProps, { onBlurField })(Achievements);