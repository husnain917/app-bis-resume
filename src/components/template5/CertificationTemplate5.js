import { HStack, Stack, VStack } from '@chakra-ui/react';
import { Text } from '../template1';
import DndTemplate5 from './DndTemplate5';
import { styles } from '../componentStyles/template1Style';
import { useDispatch } from 'react-redux';
import Util from '../../../utils/templateUtils';
import {
  addNewObj,
  deleteObjInArray,
  updateOrder,
} from '../../../store/actions/builderAction';
const CertificationTemplate5 = (props) => {
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
    <DndTemplate5
      data={data}
      additem={_addNewItem}
      removeitem={(index) => _removeItem(index)}
      reorder={(e) => onOrderUpdate(e)}
      renderItem={(item, index) => (
        <VStack p={5}>
          <HStack gap={4} pl={24}>
            <Stack w={190} justifyContent="flex-end">
              <Text
                placeholder="Certificate"
                value={item.title}
                customclass={'companyTemplate5'}
                path={`${path}.${index}.title`}
              />
              <div
                className="manager-template-row"
                style={{ marginTop: '-5px' }}
              >
                <p style={styles.paraStyles(true)}>From</p>
                <Text
                  value={item.startDate}
                  placeholder="Start Date "
                  customclass={'manager-fName'}
                  path={`${path}.${index}.startDate`}
                />
                <p style={styles.paraStyles(true)}>to</p>
                <Text
                  value={item.endDate}
                  placeholder="End Date "
                  customclass={'manager-fName'}
                  path={`${path}.${index}.endDate`}
                  max="9999-12-31"
                />
              </div>
            </Stack>
            <Stack w={300} justifyContent="flex-end">
              <Text
                placeholder="Summary"
                value={item.summary}
                customclass={'companyDescriptionTemplate5'}
                style={styles.mb_10}
                path={`${path}.${index}.summary`}
              />
            </Stack>
          </HStack>
        </VStack>
      )}
    />
  );
};

export default CertificationTemplate5;
