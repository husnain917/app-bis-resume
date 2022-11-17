import { Box, Input, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import Rating from '../rating/Rating';
import Dnd from './Dnd';
import Text from './Text';
import { Line } from 'rc-progress';
import { onBlurField } from '../../../store/actions/builderAction';
import { sampleData } from '../../../constants/sampleData';
const Language = (props) => {
  const dispatch = useDispatch();
  const { resumeData } = props;
  const data = resumeData?.languages?.items?.length
    ? [...resumeData?.languages?.items]
    : [...sampleData?.data?.languages?.items];
  const path = 'languages.items';
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
  const [progress, setProgress] = useState([]);
  const validateData = (e, index2) => {
    if ((e.target.value > 0 && e.target.value > 100) || e.target.value <= 0) {
      let newArr2 = progress.map((item, index) => {
        if (index === index2) {
          return null;
        } else {
          return item;
        }
      });
      setProgress(newArr2);
      return;
    }
    let newArr;
    if (progress.length <= 0) {
      newArr = [e.target.value];
    } else if (progress.length === index2) {
      newArr = [...progress, e.target.value];
      console.log(newArr);
    } else {
      newArr = progress.map((item, index) => {
        if (index === index2) {
          return e.target.value;
        } else {
          return item;
        }
      });
    }
    setProgress(newArr);
  };
  const {
    langPlaceholder,
    langStyle,
    percentageStyle,
    langContainerStyle,
    minW,
    maxW,
    rating,
    progressBar,
    ratingIconColor,
    strokeColor,
    strokeWidth,
    trailColor,
    trailWidth,
    minWText = '130px',
    maxWText = '130px',
    direction,
    lineStyle,
  } = props;

  return (
    <div className={`${langContainerStyle ? langContainerStyle : ''}`}>
      <Dnd
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Stack
            direction={direction ? direction : 'row'}
            minW={minW ? minW : ''}
            maxW={maxW ? maxW : ''}
          >
            <Box
              minW={(rating || progressBar) && minWText}
              maxW={(rating || progressBar) && maxWText}
            >
              {rating || progressBar ? (
                <Text
                  value={item.title}
                  placeholder={langPlaceholder ? langPlaceholder : 'Language'}
                  customClass={`${langStyle}`}
                  path={`languages.items.${index}.title`}
                />
              ) : (
                <UnorderedList>
                  <ListItem>
                    <Text
                      value={item.title}
                      placeholder={
                        langPlaceholder ? langPlaceholder : 'Language'
                      }
                      customClass={`${langStyle}`}
                      path={`languages.items.${index}.title`}
                    />
                  </ListItem>
                </UnorderedList>
              )}
            </Box>
            {rating && (
              <Rating
                activeColor={ratingIconColor ? ratingIconColor : '#3498DB'}
                size={24}
              />
            )}
            {progressBar && (
              <>
                <Line
                  percent={progress[index]}
                  strokeWidth={strokeWidth ? strokeWidth : '6'}
                  strokeColor={strokeColor ? strokeColor : '#000'}
                  trailColor={trailColor ? trailColor : 'gray'}
                  trailWidth={trailWidth ? trailWidth : '2px'}
                  className={`${lineStyle ? lineStyle : ''}`}
                />

                <Input
                  maxW={50}
                  maxH={30}
                  borderColor="none"
                  variant="unstyled"
                  placeholder="%"
                  value={`${progress[index]}`}
                  onChange={(e) => validateData(e, index)}
                  type="number"
                  className={`${percentageStyle}`}
                />
              </>
            )}
          </Stack>
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
export default connect(mapStateToProps, { onBlurField })(Language);
