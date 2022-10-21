import { Box } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import Graph8Heading from './Graph8Heading';
import Style from './graph8.module.css';
const Graph8Edu = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
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
  return (
    <div>
      <Graph8Heading
        fontSize={20}
        fontWeight={600}
        text="education"
        letterSpacing={'1px'}
        dividerHeight="2px"
        mbTxt={2}
        mb="20px"
      />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box>
            <HybridText
              placeholder="Institute/University"
              value={item.institution}
              customclass={`${Style.institute}`}
              path={`${path}.${index}.institution`}
            />
            <HybridText
              placeholder="Study Program"
              value={item.degree}
              customclass={`${Style.program}`}
              path={`${path}.${index}.degree`}
            />
          </Box>
        )}
      />
    </div>
  );
};

export default Graph8Edu;
