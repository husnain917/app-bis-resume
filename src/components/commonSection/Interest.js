import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { sampleData } from "../../../constants/sampleData";
import {
  addNewObj,
  deleteObjInArray,
  onBlurField,
  updateOrder,
} from "../../../store/actions/builderAction";
import Util from "../../../utils/templateUtils";
import Dnd from "./Dnd";
import Text from "./Text";
const Interest = (props) => {
  const data = resumeData?.hobbies?.items?.length
    ? [...resumeData?.hobbies?.items]
    : [...sampleData?.data?.hobbies?.items];
  const dispatch = useDispatch();
  const path = "hobbies.items";
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
    resumeData,
    dndDirection,
    interestPlaceholder,
    interestStyle,
    parentContainerStyle,
    childContainerStyle,
    borderColor,
    maxBoxWidth,
    maxChr,
    maxWidth,
  } = props;
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
