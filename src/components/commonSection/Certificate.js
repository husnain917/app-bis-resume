import React from 'react';
import { connect } from 'react-redux';
import Dnd from './Dnd';
import {
  addNewObj,
  deleteObjInArray,
  onBlurField,
  updateOrder,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
import Util from '../../../utils/templateUtils';
import { sampleData } from '../../../constants/sampleData';
import Text from './Text';

const Certificate = (props) => {
  const dispatch = useDispatch();
  const path = 'certifications.items';
  const onOrderUpdate = (datas) => {
    const storeReorder = Util.mapOrder(data, datas, 'id');
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
  } = props;
  const data = resumeData?.certifications?.items?.length
    ? [...resumeData?.certifications?.items]
    : [...sampleData?.data?.certifications?.items];

  return (
    <div className={`${parentContainerStyle ? parentContainerStyle : ''}`}>
      <Dnd
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div className={`${childContainerStyle ? childContainerStyle : ''}`}>
            {certificate && (
              <Text
                value={item.title}
                placeholder={
                  certificatePlaceholder
                    ? certificatePlaceholder
                    : 'Certificate Name'
                }
                customClass={`${certificateStyle}`}
                path={`${path}.${index}.title`}
              />
            )}
            {issueDate && (
              <Text
                value={item.endDate}
                placeholder={
                  issueDatePlaceholder ? issueDatePlaceholder : 'Issue Date'
                }
                customClass={`${issueDateStyle}`}
                path={`${path}.${index}.endDate`}
              />
            )}
            {institute && (
              <Text
                value={item.issuer}
                placeholder={
                  institutePlaceholder ? issueDatePlaceholder : 'Institute'
                }
                customClass={`${instituteStyle}`}
                path={`${path}.${index}.issuer`}
              />
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
export default connect(mapStateToProps, { onBlurField })(Certificate);
