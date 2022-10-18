import { HStack } from '@chakra-ui/react';
import React from 'react';
import FlightAttendHeading from './FlightAttendHeading';
import { FaAward } from 'react-icons/fa';
import DndFash from '../fashionTemp5/DndFash';
import { useDispatch } from 'react-redux';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
import HybridText from '../hybridTemplate/HybridText';
import Style from './flightAttendant.module.css';
const FlightAttendCertificate = (props) => {
  const dispatch = useDispatch();
  const path = 'certifications.items';
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
  const { data } = props;
  return (
    <div>
      <FlightAttendHeading text={'certifications'} />
      <DndFash
        data={data}
        additem={_addNewItem}
        reorder={(e) => onOrderUpdate(e)}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <>
            <HStack alignItems={'flex-start'}>
              <FaAward color="#2A78AB" size={32} />
              <div>
                <HybridText
                  placeholder="Certificate"
                  value={item.title}
                  customclass={`${Style.programText}`}
                  path={`${path}.${index}.title`}
                />
                <HybridText
                  placeholder="Institute"
                  value={item.issuer}
                  customclass={`${Style.company}`}
                  path={`${path}.${index}.issuer`}
                />

                <HybridText
                  placeholder="End Date"
                  value={item.endDate}
                  customclass={`${Style.date}`}
                  path={`${path}.${index}.endDate`}
                />
              </div>
            </HStack>
          </>
        )}
      />
    </div>
  );
};

export default FlightAttendCertificate;
