import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onBlurField } from "../../../store/actions/builderAction";
import styles from "../../../styles/templates/commonTemplates.module.css";
import { colors } from "../../../constants/colors";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { persistor } from "../../../config/store";
import { Text as TextField } from "@chakra-ui/react";

import { useState } from "react";


function Text(props) {
  React.useEffect(() => {
    const myPara = document.getElementById(path);
    console.log("myPara", myPara?.innerText);
    if (myPara) {
      myPara.addEventListener("input", function () {

        console.log("TEXT >>>> ", document.getElementById(path).innerText);

        const text = document.getElementById(path).innerText;
        if (text.length <= 10) {
          console.log("TEXT >>>> ", document.getElementById(path).innerText);
        } else {
          // return alert("Maximum text length reached.");
        }

      });
    }
  });
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

  const { value, customClass, tag, path, editable = true } = props;
  console.log("MAXCHR", props?.maxChr);
  const maxChr = props?.maxChr;
  console.log("maxChr", maxChr);
  const onChangeName = (e) => {
    const textValue = e.target.textContent;
    if (textValue.length === maxChr && e.keyCode !== 8) {
      e.preventDefault();
      return;
    }
    // dispatch(onBlurField(data, props.path));
  };

  const TagName = tag ? tag : "p";
  return (
    <div className={styles.main}>
      <GrammarlyEditorPlugin>
        {/* <Text as={"p"} id={"para"} contentEditable={"true"}>
          hello world
        </Text> */}
        <TextField
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
          as={"p"}
          id={path}
          contentEditable={editable}
          onKeyDown={onChangeName}
          onPaste={(e) => {
            var bufferText = (
              (e.originalEvent || e).clipboardData || window.clipboardData
            ).getData("Text");
            e.preventDefault();
            document.execCommand("insertText", false, bufferText);
          }}
          maxWidth={props.maxWidth}
          minWidth={props.minWidth}
          suppressContentEditableWarning="true"
          onBlur={(e) => _onBlur(e.currentTarget)}
          className={styles.contentEditableContainer + " " + customClass}
          data-placeholder={props.placeholder}
          {...props}
          onClick={() => {
            setAddBorder(true);
          }}
        ></TextField>
      </GrammarlyEditorPlugin>
    </div>
  );
}

export default Text;
