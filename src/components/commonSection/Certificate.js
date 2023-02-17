import React from "react";
import { connect } from "react-redux";
import Dnd from "./Dnd";
import {
  addNewObj,
  deleteObjInArray,
  onBlurField,
  updateOrder,
} from "../../../store/actions/builderAction";
import { useDispatch } from "react-redux";
import Util from "../../../utils/templateUtils";
import { sampleData } from "../../../constants/sampleData";
import Text from "./Text";
import { Box } from "@chakra-ui/react";
const Certificate = (props) => {
  const dispatch = useDispatch();
  const path = "certifications.items";
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
    certificate,
    issueDate,
    institute,
    certificatePlaceholder,
    issueDatePlaceholder,
    institutePlaceholder,
    certificateStyle,
    issueDateStyle,
    instituteStyle,
    parentContainerStyle,
    childContainerStyle,
    iconShow,
    icon,
    maxWidth,
    textColor,
  } = props;

  const data = resumeData?.certifications?.items?.length
    ? [...resumeData?.certifications?.items]
    : [...sampleData?.data?.certifications?.items];

  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div
            className={`${childContainerStyle ? childContainerStyle : ""}`}
            style={{ display: "flex" }}
          >
            {iconShow && React.createElement(icon)}
            <div>
              {certificate && (
                <Text
                  value={item.title}
                  placeholder={
                    certificatePlaceholder
                      ? certificatePlaceholder
                      : "Certificate Name"
                  }
                  customClass={`${certificateStyle}`}
                  path={`${path}.${index}.title`}
                  maxWidth={maxWidth}
                  color={textColor ? textColor : '#000'}
                />
              )}
              {institute && (
                <Text
                  value={item.issuer}
                  placeholder={
                    institutePlaceholder ? issueDatePlaceholder : "Institute"
                  }
                  customClass={`${instituteStyle}`}
                  path={`${path}.${index}.issuer`}
                  maxWidth={maxWidth}
                  color={textColor ? textColor : '#000'}
                />
              )}
              {issueDate && (
                <Text
                  value={item.endDate}
                  placeholder={
                    issueDatePlaceholder ? issueDatePlaceholder : "Issue Date"
                  }
                  customClass={`${issueDateStyle}`}
                  path={`${path}.${index}.endDate`}
                  maxWidth={maxWidth}
                  color={textColor ? textColor : '#000'}
                />
              )}
            </div>
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
export default connect(mapStateToProps, { onBlurField })(Certificate);
