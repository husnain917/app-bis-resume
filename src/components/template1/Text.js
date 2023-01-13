import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onBlurField } from '../../../store/actions/builderAction';
import styles from '../../../styles/templates/commonTemplates.module.css';
import { colors } from '../../../constants/colors';

function Text(props) {
  const dispatch = useDispatch();
  const { getResumeBuilderChoice } = useSelector(
    (state) => state.editorReducer
  );
  const [addBorder, setAddBorder] = React.useState(false);

  const _onBlur = (e) => {
    const data = e.textContent ? e.textContent : '';
    setAddBorder(false);
    dispatch(onBlurField(data, props.path));
  };

  const { value, customclass, tag, path, editable = true } = props;
  const TagName = tag ? tag : 'p';

  return (
    <div className={styles.main}>
      <TagName
        style={{
          border: 'none',
          borderColor: addBorder ? '#4267b2' : 'rgba(0, 0, 0, 0.23)',
          fontSize: props.fontSize,
          lineHeight: props.lineHeight,
          color: props.color,
         marginTop:props.marginTop
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
          ).getData('Text');
          e.preventDefault();
          document.execCommand('insertText', false, bufferText);
        }}
        suppressContentEditableWarning="true"
        onBlur={(e) => _onBlur(e.currentTarget)}
        dangerouslySetInnerHTML={{ __html: value }}
        className={styles.contentEditableContainer + ' ' + customclass}
        data-placeholder={props.placeholder}
        {...props}
        onClick={() => {
          setAddBorder(true);
        }}
      />
    </div>
  );
}

export default Text;
