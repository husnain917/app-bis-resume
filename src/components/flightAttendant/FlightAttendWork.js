import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Util from '../../../utils/templateUtils';
import DndFash from '../../components/fashionTemp5/DndFash';
import HybridText from '../hybridTemplate/HybridText';
import Style from './flightAttendant.module.css';
import { IoMdJet } from 'react-icons/io';
const FlightAttendWork = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
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
  return (
    <DndFash
      data={data}
      additem={_addNewItem}
      reorder={(e) => onOrderUpdate(e)}
      removeitem={(index) => _removeItem(index)}
      renderItem={(item, index) => (
        <>
          <HStack
            alignItems={'flex-start'}
            mt={5}
            minW={'470px'}
            maxW={'470px'}
          >
            <IoMdJet color="#2A78AB" size={32} />
            <div>
              <HybridText
                placeholder="Title/Position"
                value={item.position}
                customclass={`${Style.programText}`}
                path={`${path}.${index}.position`}
              />
              <HybridText
                placeholder="Workplace/Company"
                value={item.company}
                customclass={`${Style.company}`}
                path={`${path}.${index}.company`}
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
                placeholder="Summary"
                value={item.description}
                customclass={`${Style.description}`}
                path={`${path}.${index}.description`}
              />
            </div>
          </HStack>
        </>
      )}
    />
  );
};

export default FlightAttendWork;
