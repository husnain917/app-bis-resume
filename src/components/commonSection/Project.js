import { Box } from "@chakra-ui/react";
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
const Project = (props) => {
  const {
    resumeData,
    project,
    summary,
    duration,
    projectPlaceholder,
    summaryPlaceholder,
    durationPlaceholder,
    projectStyle,
    summaryStyle,
    durationStyle,
    childContainerStyle,
    parentContainerStyle,
    maxWidth,
  } = props;
  const dispatch = useDispatch();
  const data = resumeData?.projects?.items?.length
    ? [...resumeData?.projects?.items]
    : [...sampleData?.data?.projects?.items];
  const path = "projects.items";
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
          <>``
            <Box
              className={`${childContainerStyle ? childContainerStyle : ""}`}
            >
              {project && (
                <Text
                  value={item.Title}
                  placeholder={
                    projectPlaceholder ? projectPlaceholder : "Project"
                  }
                  customClass={`${projectStyle ? projectStyle : ""}`}
                  path={`projects.items.${index}.Title`}
                  maxWidth={maxWidth}
                />
              )}
              {duration && (
                <Text
                  value={item.Duration}
                  placeholder={
                    durationPlaceholder ? durationPlaceholder : "Duration"
                  }
                  customclass={`${durationStyle ? durationStyle : ""}`}
                  path={`projects.items.${index}.Duration`}
                  maxWidth={maxWidth}
                />
              )}
              {summary && (
                <Text
                  value={item.Summary}
                  placeholder={
                    summaryPlaceholder ? summaryPlaceholder : "Summary"
                  }
                  customclass={`${summaryStyle ? summaryPlaceholder : ""}`}
                  path={`projects.items.${index}.Summary`}
                  maxWidth={maxWidth}
                />
              )}
            </Box>
          </>
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
export default connect(mapStateToProps, { onBlurField })(Project);
