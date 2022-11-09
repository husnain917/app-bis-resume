import React from 'react';
import Util from '../../../utils/templateUtils';
import Text from './Text';
import Dnd from './Dnd';
import { Box, Stack, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from '../../../store/actions/builderAction';
const WorkExperience = (props) => {
  const dispatch = useDispatch();
  const path = 'work.items';

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
    workContainerStyle,
    position_placeholder,
    company_placeholder,
    startDate_placeholder,
    endDate_placeholder,
    summary_placeholder,
    location_placeholder,
    dateStyle,
    companyStyle,
    positionStyle,
    summaryStyle,
    locationStyle,
    position,
    company,
    date,
    summary,
    location,
    direction,
    dateDirection = 'row',
    row1MinW = 160,
    row1MaxW = 160,
    row2MaxW = 230,
    row2MinW = 230,
    DndDirection,
  } = props;

  return (
    <div className={`${workContainerStyle ? workContainerStyle : ''}`}>
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
              {position && (
                <Box
                  minW={direction === 'row' && row2MinW}
                  maxW={direction === 'row' && row2MaxW}
                >
                  <Text
                    value={item.position}
                    placeholder={
                      position_placeholder
                        ? position_placeholder
                        : 'Title/Position'
                    }
                    path={`${path}.${index}.position`}
                    customClass={`${positionStyle ? positionStyle : ''}`}
                    color={textColor}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textAlign={textAlign}
                  />
                </Box>
              )}
            </Stack>
            <Stack direction={direction ? direction : 'column'}>
              {company && (
                <Box
                  minW={direction === 'row' && row1MinW}
                  maxW={direction === 'row' && row1MaxW}
                >
                  <Text
                    value={item.company}
                    placeholder={
                      company_placeholder
                        ? company_placeholder
                        : 'University/Institute'
                    }
                    path={`${path}.${index}.company`}
                    customClass={`${companyStyle ? companyStyle : ''}`}
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
                    path={`${path}.${index}.description`}
                    customClass={`${summaryStyle ? summaryStyle : ''}`}
                    fontSize={fontSize}
                    color={textColor}
                    textAlign={textAlign}
                  />
                </Box>
              )}
            </Stack>
            {location && (
              <>
                <Text
                  value={`${item.location}`}
                  placeholder={
                    location_placeholder ? locationStyle : 'Location'
                  }
                  path={`${path}.${index}.location`}
                  customClass={`${locationStyle ? locationStyle : ''}`}
                  fontSize={fontSize}
                  color={textColor}
                  textAlign={textAlign}
                />
              </>
            )}
          </VStack>
        )}
      />
    </div>
  );
};
export default WorkExperience;
