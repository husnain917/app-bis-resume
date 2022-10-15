import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onBlurField } from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/financial.module.scss";
import { colors } from "../../../constants/colors";
import { Box, Image } from "@chakra-ui/react";

function Text(props) {
  const dispatch = useDispatch();
  const { getResumeBuilderChoice } = useSelector(
    (state) => state.editorReducer
  );
  const [addBorder, setAddBorder] = React.useState(false);

  const _onBlur = (e) => {
    const data = e.textContent ? e.textContent : "";
    setAddBorder(false);
    dispatch(onBlurField(data, props.path));
  };

  const { value, customclass, tag, path, editable = true } = props;
  const TagName = tag ? tag : "p";

  return (
    <Box className={styles.main}>
      <TagName
        style={{
          border: "none",
          borderColor: addBorder ? "#4267b2" : "rgba(0, 0, 0, 0.23)",
          fontSize: props.fontSize || "36px",
          color: props.color,
          margin: props.margin,
          marginLeft: props.marginLeft || "auto",
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
        }}
        // style={{

        // broder: '1px solid',
        // borderColor: addBorder ? colors.blue: colors.grey
        // }}
        id={path}
        contentEditable={editable}
        onPaste={(e) => {
          var bufferText = (
            (e.originalEvent || e).clipboardData || window.clipboardData
          ).getData("Text");
          e.preventDefault();
          document.execCommand("insertText", false, bufferText);
        }}
        suppressContentEditableWarning="true"
        onBlur={(e) => _onBlur(e.currentTarget)}
        dangerouslySetInnerHTML={{ __html: value }}
        className={styles.contentEditableContainer + " " + customclass}
        data-placeholder={props.placeholder}
        {...props}
        onClick={() => {
          setAddBorder(true);
        }}
      />
    </Box>
  );
}

export default Text;
