import { Box, HStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Style from './hybridStyle.module.css';
import { Dnd } from '../template1';
import HybridText from './HybridText';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import { useDispatch } from 'react-redux';
const EducationHybridTemplate = (props) => {
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
    <Dnd
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <Box mb={5}>
          <HybridText
            placeholder="Study Program"
            value={item.degree}
            customclass={`${Style.programText}`}
            path={`${path}.${index}.degree`}
          />
          <HybridText
            placeholder="Institute/University"
            value={item.institution}
            customclass={`${Style.institute}`}
            path={`${path}.${index}.institution`}
          />
          <HStack>
            <HybridText
              placeholder="From"
              value={item.startDate}
              customclass={`${Style.date}`}
              path={`${path}.${index}.startDate`}
            />
            <div>-</div>
            <HybridText
              placeholder="End"
              value={item.endDate}
              customclass={`${Style.date}`}
              path={`${path}.${index}.endDate`}
            />
          </HStack>
          <HybridText
            placeholder="City,Country"
            value={item.location}
            customclass={`${Style.date}`}
            path={`${path}.${index}.location`}
          />
        </Box>
      )}
    />
  );
};

export default EducationHybridTemplate;
