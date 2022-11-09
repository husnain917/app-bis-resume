import React from 'react';
import Util from '../../../utils/templateUtils';
import Text from './Text';
import Dnd from './Dnd';
import { Box, HStack, Stack, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
const Education = (props) => {
  const dispatch = useDispatch();
  const path = 'education.items';

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
    textColor,
    fontSize,
    fontWeight,
    textAlign,
    eduContainerStyle,
    degree_placeholder,
    institution_placeholder,
    startDate_placeholder,
    endDate_placeholder,
    summary_placeholder,
    extracurricular_placeholder,
    dateStyle,
    institutionStyle,
    degreeStyle,
    summaryStyle,
    extracurricularStyle,
    degree,
    institution,
    date,
    summary,
    extracurricular,
    direction,
    dateDirection = 'row',
    row1MinW = 160,
    row1MaxW = 160,
    row2MaxW = 230,
    row2MinW = 230,
    DndDirection,
  } = props;

  return (
    <div className={`${eduContainerStyle ? eduContainerStyle : ''}`}>
      <Dnd
        data={data}
        direction={DndDirection ? DndDirection : ''}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <VStack justifyContent={'flex-start'} alignItems="flex-start">
            <Stack direction={direction ? direction : 'column'}>
              {date && (
                <Box
                  minW={direction === 'row' && row1MinW}
                  maxW={direction === 'row' && row1MaxW}
                >
                  <Stack direction={dateDirection ? dateDirection : 'row'}>
                    <Text
                      value={item.startDate}
                      placeholder={
                        startDate_placeholder ? startDate_placeholder : 'From'
                      }
                      path={`${path}.${index}.startDate`}
                      customClass={`${dateStyle ? dateStyle : ''}`}
                      color={textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                    />
                    {dateDirection == 'row' && (
                      <p
                        style={{
                          color: '#000',
                          fontWeight: 'bold',
                        }}
                      >
                        _
                      </p>
                    )}

                    <Text
                      value={item.endDate}
                      placeholder={
                        endDate_placeholder ? endDate_placeholder : 'End'
                      }
                      path={`${path}.${index}.endDate`}
                      customClass={`${dateStyle ? dateStyle : ''}`}
                      color={textColor}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      textAlign={textAlign}
                    />
                  </Stack>
                </Box>
              )}
              {degree && (
                <Box
                  minW={direction === 'row' && row2MinW}
                  maxW={direction === 'row' && row2MaxW}
                >
                  <Text
                    value={item.degree}
                    placeholder={
                      degree_placeholder ? degree_placeholder : 'Degree'
                    }
                    path={`${path}.${index}.degree`}
                    customClass={`${degreeStyle ? degreeStyle : ''}`}
                    color={textColor}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textAlign={textAlign}
                  />
                </Box>
              )}
            </Stack>
            <Stack direction={direction ? direction : 'column'}>
              {institution && (
                <Box
                  minW={direction === 'row' && row1MinW}
                  maxW={direction === 'row' && row1MaxW}
                >
                  <Text
                    value={item.institution}
                    placeholder={
                      institution_placeholder
                        ? institution_placeholder
                        : 'University/Institute'
                    }
                    path={`${path}.${index}.institution`}
                    customClass={`${institutionStyle ? institutionStyle : ''}`}
                    color={textColor}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textAlign={textAlign}
                  />
                </Box>
              )}

              {summary && (
                <Box
                  minW={direction === 'row' && row2MinW}
                  maxW={direction === 'row' && row2MaxW}
                >
                  <Text
                    value={item.summary}
                    placeholder={
                      summary_placeholder
                        ? summary_placeholder
                        : 'Short Description'
                    }
                    path={`${path}.${index}.summary`}
                    customClass={`${summaryStyle ? summaryStyle : ''}`}
                    fontSize={fontSize}
                    color={textColor}
                    textAlign={textAlign}
                  />
                </Box>
              )}
            </Stack>
            {extracurricular && (
              <>
                <Text
                  value={`${item.extracurricular}`}
                  placeholder={
                    extracurricular_placeholder
                      ? extracurricularStyle
                      : 'Extra Curricular'
                  }
                  path={`${path}.${index}.extracurricular`}
                  customClass={`${
                    extracurricularStyle ? extracurricularStyle : ''
                  }`}
                  fontSize={fontSize}
                  color={textColor}
                  textAlign="right"
                />
              </>
            )}
          </VStack>
        )}
      />
    </div>
  );
};
export default Education;
