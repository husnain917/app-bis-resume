import React from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import {
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import styles from "../../../styles/templates/Graphic2.module.css";
import { Box } from "@chakra-ui/react";
function WorkExperience(props) {
  const dispatch = useDispatch();
  const path = "work.items";

  const onOrderUpdate = (data) => {
    const storeReorder = Util.mapOrder(props.data, data, "id");
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
      <Dnd
        data={data}
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <Box mt="3%">
            <div className="manager-template-row">
              <Text
                value={item.startDate}
                placeholder="2002"
                path={`${path}.${index}.startDate`}
                color="black"
                fontSize="1.5rem"
                fontWeight="bold"
                textAlign="left"
                textTransform="uppercase"
                lineHeight="15px"
              />

              <Text
                value={item.company}
                placeholder="Company"
                path={`${path}.${index}.company`}
                color="black"
                fontSize="1.5rem"
                marginleft="20px"
                fontWeight="bold"
                textAlign="left"
                textTransform="uppercase"
                lineHeight="15px"

              />
            </div>
            <UnorderedList ml="100px">
              <ListItem>
                <Text
                  value={item.summary}
                  placeholder="Write Short About Your Work Experience"
                  path={`${path}.${index}.summary`}
                  color="black"
                lineHeight="20px"

                  fontSize="1.2rem"
                />
                
              </ListItem>
            </UnorderedList>
             <UnorderedList ml="100px">
              <ListItem>
                <Text
                  value={item.description}
                  placeholder="Write Short About Your Achievements"
                  path={`${path}.${index}.description`}
                  color="black"
                  fontSize="1.2rem"
                lineHeight="20px"

                />
                
              </ListItem>
            </UnorderedList>
            <UnorderedList ml="100px">
              <ListItem>
                <Text
                  value={item.title}
                  placeholder="Write Short About Your Feild Work"
                  path={`${path}.${index}.title`}
                  color="black"
                  fontSize="1.2rem"
                lineHeight="20px"

                />
                
              </ListItem>
            </UnorderedList>
          </Box>
        )}
      />
    </div>
  );
}
export default WorkExperience;
