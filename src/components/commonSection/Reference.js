import { Box } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import Dnd from './Dnd';
import Text from './Text';

const Reference = (props) => {
  const path = 'references.items';
  const dispatch = useDispatch();
  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, 'id');
    dispatch(updateOrder(storeReorder, path));
  };
  const _addNewItem = () => {
    dispatch(addNewObj(props.data[0], path));
  };

  const _removeItem = (index) => {
    let deletedPath = `${path}.${index}`;
    dispatch(deleteObjInArray(deletedPath));
  };
  const {
    data,
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
    referenceContainerStyle,
    minW = 180,
    maxW = 180,
  } = props;
  return (
    <div
      className={`${referenceContainerStyle ? referenceContainerStyle : ''}`}
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

export default Reference;
