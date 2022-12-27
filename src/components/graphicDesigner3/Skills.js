import React, { useState } from "react";
import Util from "../../../utils/templateUtils";
import Text from "./Text";
import Dnd from "./Dnd";
import { useDispatch } from "react-redux";
import {
  updateOrder,
  addNewObj,
  deleteObjInArray,
} from "../../../store/actions/builderAction";
import { Box, Input } from "@chakra-ui/react";
import styles from "../../../styles/templates/Graphic3.module.css";
import { Line } from "rc-progress";
import Skill from "../commonSection/Skill";
import useShow from "../tempSectionSide/useShow";
import SectionSideMenu from "../tempSectionSide/SectionSideMenu";
import { Tooltip, Image, HStack } from "@chakra-ui/react";

import {
  EDUCATION,
  LANGUAGES,
  SKILL,
  WORK,
  INTEREST
} from "../../components/tempSectionSide/SectionSideConstant";
import useStoreData from "../../components/useStoreData";
import Heading from "../commonSection/Heading";




function Skills(props) {
  const {
    resumeData,
    theme,
    updater
  } = useStoreData();
  const [show, setShow] = useShow();
  console.log(resumeData);


 
   

  return (
    <div className={styles.skillMainContainer}>
      {/* <Dnd
        data={data}
        direction="horizontall"
        reorder={(e) => onOrderUpdate(e)}
        additem={_addNewItem}
        removeitem={(index) => _removeItem(index)}
        renderItem={(item, index) => (
          <div className={styles.skillContainer}>
            <Text
              value={item.name}
              placeholder="Graphic Designer"
              path={`${path}.${index}.name`}
              color="black"
              fontSize="1rem"
              fontWeight="400"
            />
            <Box display="flex" alignItems="center">
              <Line
                percent={value[index]}
                strokeWidth={4}
                strokeColor={"#56C8EA"}
                className={styles.skillLineBar}
              />

              <Input
                maxW={50}
                maxH={30}
                borderColor="none"
                variant="unstyled"
                placeholder="0"
                className={styles.skillsInput}
                value={`${value[index]}`}
                onChange={(e) => skillHandler(e, index)}
                type="number"
              />
              {value[index] ? (
                <span
                  style={{
                    color: "black",
                    alignSelf: "right",
                    position: "relative",
                    right: 25,
                  }}
                >
                  %
                </span>
              ) : null}
            </Box>
          </div>
        )}
      /> */}
       <div>
                {resumeData?.skills?.visible && (
                  <>
                    <HStack alignItems={'flex-start'} mt={5}>
                      <Box w="30px">
                        {show.skills && (
                          <SectionSideMenu
                            onHide={() => setShow({ ...show, skills: false })}
                            bg="#2A78AB"
                            iconColor={'#E0EFFA'}
                            onDelete={SKILL}
                          />
                        )}
                      </Box>
                      <div className={styles.contactHeadingTitle}>
                        <Heading

                          font-size={30}
                          font-weight={900}
                          color={"white"}

                          title="SKILLS"
                          line={true}
                          lineBg={"black"}
                          fontSize={30}
                          fontWeight={900}

                          onSideSectionShow={() =>
                            setShow({ ...show, skills: true })
                          }
                        />
                      </div>
                    </HStack>
                    <Box mr={"10%"} ml={"15%"} mt="5%">

                      <Skill skillStyle={styles.skillText}
                        parentContainerStyle={styles.mt}
                        minW={"220px"}
                        maxW={"220px"}


                      />
                    </Box>
                  </>
                )}
              </div>

    </div>
  );
}
export default Skills;
