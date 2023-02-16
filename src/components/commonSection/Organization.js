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
const Organization = (props) => {
  const {
    resumeData,
    parentContainerStyle,
    childContainerStyle,
    organization,
    date,
    role,
    organizationPlaceholder,
    startDatePlaceholder,
    endDatePlaceholder,
    rolePlaceholder,
    organizationStyle,
    dateStyle,
    roleStyle,
    datewidthmax,
    maxwidth,roleColor,dateColor,nameColor
  } = props;
  const data = resumeData?.organization?.items?.length
    ? [...resumeData?.organization?.items]
    : [...sampleData?.data?.organization?.items];
  const dispatch = useDispatch();
  const path = "organization.items";
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
    <div className={`${parentContainerStyle ? parentContainerStyle : ""}`}>
      <Dnd
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div className={`${childContainerStyle ? childContainerStyle : ""}`}>
            {organization && (
              <Box maxWidth={props.maxWidth}>
                <Text
                  value={item.name}
                  placeholder={
                    organizationPlaceholder
                      ? organizationPlaceholder
                      : "Organization Name"
                  }
                  customClass={`${organizationStyle ? organizationStyle : ""}`}
                  path={`${path}.${index}.name`}
                  maxWidth={maxwidth}
                  color={nameColor}
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
                  color={dateColor}
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
                  color={dateColor}
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
                  color={roleColor}
                />
              </Box>
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
export default connect(mapStateToProps, { onBlurField })(Organization);
