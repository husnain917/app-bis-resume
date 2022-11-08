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
import styles from '../../../styles/templates/Graphic.module.css';
const Education1 = (props) => {
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
    rowMinW,
    rowMaxW,
  } = props;

  return (
    <div>
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <VStack justifyContent={'flex-start'} alignItems="flex-start">
            <Stack direction={direction ? direction : 'column'}>
              {date && (
                <Box
                  minW={direction == 'row' && rowMinW ? rowMinW : 160}
                  maxW={direction == 'row' && rowMaxW ? rowMaxW : 160}
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
                  minW={direction == 'row' && rowMinW ? rowMinW : 160}
                  maxW={direction == 'row' && rowMaxW ? rowMaxW : 160}
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
                  minW={direction == 'row' && rowMinW ? rowMinW : 160}
                  maxW={direction == 'row' && rowMaxW ? rowMaxW : 160}
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
                  minW={direction == 'row' && rowMinW ? rowMinW : 160}
                  maxW={direction == 'row' && rowMaxW ? rowMaxW : 160}
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
                    extracurricular_placeholder ? extracurricularStyle : ''
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
export default Education1;
