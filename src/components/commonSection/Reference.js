import { Box } from '@chakra-ui/react';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import Dnd from './Dnd';
import Text from './Text';
import { onBlurField } from '../../../store/actions/builderAction';
import { sampleData } from '../../../constants/sampleData';
const Reference = (props) => {
  const path = 'references.items';
  const { resumeData } = props;
  const data = resumeData?.references?.items?.length
    ? [...resumeData?.references?.items]
    : [...sampleData?.data?.references?.items];
  const dispatch = useDispatch();
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
    DndDirection,
    name,
    profession,
    address,
    phone,
    email,
    textColor,
    fontSize,
    fontWeight,
    textAlign,
    namePlaceholder,
    professionPlaceholder,
    addressPlaceholder,
    phonePlaceholder,
    emailPlaceholder,
    nameStyle,
    professionStyle,
    phoneStyle,
    emailStyle,
    addressStyle,
    parentContainerStyle,
    childContainerStyle,
    minW = 180,
    maxW = 180,
    margin,
  } = props;
  return (
    <div
      className={`${parentContainerStyle ? parentContainerStyle : ''}`}
      style={{ margin: margin ? margin : '' }}
    >
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ''}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box
            minW={DndDirection == 'horizontal' && minW}
            maxW={DndDirection == 'horizontal' && maxW}
            className={`${childContainerStyle ? childContainerStyle : ''}`}
          >
            {name && (
              <Text
                placeholder={namePlaceholder ? namePlaceholder : 'Name'}
                value={item.name}
                customClass={`${nameStyle}`}
                path={`${path}.${index}.name`}
                color={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            )}
            {profession && (
              <Text
                placeholder={
                  professionPlaceholder ? professionPlaceholder : 'Profession'
                }
                value={item.profession}
                customClass={`${professionStyle}`}
                path={`${path}.${index}.profession`}
                color={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            )}
            {address && (
              <Text
                placeholder={
                  addressPlaceholder ? addressPlaceholder : 'Address'
                }
                value={item.address}
                customClass={`${addressStyle}`}
                path={`${path}.${index}.address`}
                color={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            )}
            {phone && (
              <Text
                placeholder={phonePlaceholder ? phonePlaceholder : 'Phone'}
                value={item.phone}
                customClass={`${phoneStyle}`}
                path={`${path}.${index}.phone`}
                color={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            )}
            {email && (
              <Text
                placeholder={emailPlaceholder ? emailPlaceholder : 'E-mail'}
                value={item.email}
                customClass={`${emailStyle}`}
                path={`${path}.${index}.email`}
                color={textColor}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textAlign={textAlign}
              />
            )}
          </Box>
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
export default connect(mapStateToProps, { onBlurField })(Reference);
