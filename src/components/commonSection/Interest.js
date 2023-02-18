import { Box, UnorderedList, ListItem, Text as ChakraText } from "@chakra-ui/react";
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
const Interest = (props) => {
  const {
    resumeData,
    parentContainerStyle,
    childContainerStyle,
    maxChr,
    maxWidth,
    textColor,
    dndDirection,
    interestPlaceholder,
    interestStyle,
    borderColor,
    maxBoxWidth,
  } = props;
  const data = resumeData?.hobbies?.items?.length
    ? [...resumeData?.hobbies?.items]
    : [...sampleData?.data?.hobbies?.items];
  const path = "hobbies.items";
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
  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        direction={dndDirection ? dndDirection : ""}
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div className={`${childContainerStyle ? childContainerStyle : ""}`}>
            {dndDirection == "horizontal" ? (
              <Box
                borderWidth={2}
                borderColor={borderColor ? borderColor : "blackAlpha.400"}
                borderRadius={6}
                m={0.5}
                maxW={maxBoxWidth}
              >
                <Text
                  value={item.title}
                  placeholder={
                    interestPlaceholder ? interestPlaceholder : "Interest"
                  }
                  customClass={`${interestStyle ? interestStyle : ""}`}
                  path={`${path}.${index}.title`}
                  maxWidth={props.maxwidth}
                  maxChr={maxChr}
                  color={textColor ? textColor : '#000'}
                />
              </Box>
            ) : (
              <UnorderedList>
                <ListItem maxW={maxWidth}>
                  <Text
                    value={item.title}
                    placeholder={
                      interestPlaceholder ? interestPlaceholder : "Interest"
                    }
                    customClass={`${interestStyle ? interestStyle : ""}`}
                    path={`${path}.${index}.title`}
                    maxWidth={props.maxwidth}
                    color={textColor ? textColor : '#000'}
                  />
                </ListItem>
              </UnorderedList>
            )}
          </div>
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
export default connect(mapStateToProps, { onBlurField })(Interest);
