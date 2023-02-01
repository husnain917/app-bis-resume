import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onBlurField } from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/commonTemplates.module.css";
import { colors } from "../../../constants/colors";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { persistor } from "../../../config/store";

function Text(props) {
  const dispatch = useDispatch();
  const { getResumeBuilderChoice } = useSelector(
    (state) => state.editorReducer
  );
  const { font } = useSelector((state) => state.fontReducer.font);
  const [addBorder, setAddBorder] = React.useState(false);

  const _onBlur = (e) => {
    const data = e.textContent ? e.textContent : "";
    setAddBorder(false);
    dispatch(onBlurField(data, props.path));
  };
  // const onChange = (e) => {
  //   if (e.target.innerText.length <= 12) {
  //     console.log("Set Value Here", e.target.innerText);
  //   }
  //   const data = e.target.innerText ? e.target.innerText : "";
  //   setAddBorder(false);
  //   dispatch(onBlurField(data, props.path));

  //   e.preventDefault();
  // };
  const { value, customClass, tag, path, editable = true } = props;
  const TagName = tag ? tag : "p";

  return (
    <div className={styles.main}>
      <GrammarlyEditorPlugin>
        <TagName
          style={{
            border: "none",
            borderColor: addBorder ? "#4267b2" : "rgba(0, 0, 0, 0.23)",
            fontSize: props.fontSize,
            lineHeight: props.lineHeight,
            color: props.color,
            fontWeight: props.fontWeight,
            textAlign: props.textAlign,
            marginRight: props.marginRight,
            marginTop: props.marginTop,
            fontFamily: font,
            transition: "1s color",
          }}
          // style={{

          // broder: '1px solid',
          // borderColor: addBorder ? colors.blue: colors.grey
          // }}
          id={path}
          contentEditable={editable}
          // onInput={onChange}
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
          className={styles.contentEditableContainer + " " + customClass}
          data-placeholder={props.placeholder}
          {...props}
          onClick={() => {
            setAddBorder(true);
          }}
        />
      </GrammarlyEditorPlugin>
    </div>
  );
}

export default Text;
