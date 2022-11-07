import { HStack } from '@chakra-ui/react';
import React from 'react';
import HybridText from '../hybridTemplate/HybridText';
import { BsFillLayersFill } from 'react-icons/bs';
import DndFash from '../fashionTemp5/DndFash';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import Style from './flightAttendant.module.css';
import { useDispatch } from 'react-redux';
import FlightAttendHeading from './FlightAttendHeading';
const FlightAttendEdu = (props) => {
  const { data } = props;
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
  return (
    <>
      <FlightAttendHeading text={'education history'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HStack alignItems={'flex-start'} mt={5}>
              <BsFillLayersFill color="#2A78AB" size={32} />
              <div>
                <HybridText
                  placeholder="Study Program"
                  value={item.degree}
                  customclass={`${Style.programText}`}
                  path={`${path}.${index}.degree`}
                />
                <HybridText
                  placeholder="Institute/University"
                  value={item.institution}
                  customclass={`${Style.company}`}
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
    </>
  );
};
export default FlightAttendEdu;
