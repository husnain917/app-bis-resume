import { PopoverBody, PopoverContent } from "@chakra-ui/popover";
import { Select, Text, Checkbox } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../../../store/actions/themeAction";

import { AiFillCaretRight } from "react-icons/ai";

import styles from "../../../styles/SettingModal.module.css";

import { DateFormatter } from "./Handlers";
import { actionTypes } from "../../../constants/actionTypes";

const SettingModal = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const date = resumeData?.date;
  const dispatch = useDispatch();

  return (
    <>
      <PopoverContent bg={"#fff"} w="125px" p={-10}>
        <PopoverBody>
          <div className={styles.generalContaier}>
            <Text
              fontSize={"18px"}
              onClick={() =>
                dispatch(
                  themeMode({
                    backgroundColor: "",
                    color: "",
                  })
                )
              }
            >
              General
            </Text>
            <AiFillCaretRight
              color="black"
              size={20}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.settingSideBarContainer}>
            <div className={styles.settingSideBarInnerContainer}>
              <label className={styles.settingLable}>Date Format</label>
              <Select
                placeholder="Select option"
                variant="filled"
                onChange={(e) => {
                  const res = DateFormatter(
                    e.target.value,
                    date?.dateSeparator
                  );
                  dispatch({
                    type: actionTypes.DATE_HANDLER,
                    payload: {
                      ...date,
                      date: res,
                      format: e.target.value,
                    },
                  });
                  // dispatch(onBlurField(res, "date.date"));
                  // dispatch(onBlurField(e.target.value, "date.format"));
                }}
              >
                <option value="mm-dd-yyyy" selected>
                  mm-dd-yyyy
                </option>
                <option value="dd-mm-yyyy">dd-mm-yyyy</option>
                <option value="yyyy-mm-dd">yyyy-mm-dd</option>
                <option value="dd-month-yyyy">dd-month-yyyy</option>
                <option value="month-dd-yyyy">month-dd-yyyy</option>
              </Select>
              <label className={styles.settingLable}>Date Separator</label>
              <Select
                placeholder="Select option"
                variant="filled"
                onChange={(e) => {
                  const res = DateFormatter(date.format, e.target.value);
                  dispatch({
                    type: actionTypes.DATE_HANDLER,
                    payload: {
                      ...date,
                      date: res,
                      dateSeparator: e.target.value,
                    },
                  });
                  // dispatch(onBlurField(res, "date.date"));
                  // dispatch(onBlurField(e.target.value, "date.dateSeparator"));
                }}
              >
                <option value={" "}>space date separator “ ”</option>
                <option value=",">comma date separator “, ”</option>
                <option value="-" selected>
                  dash date separator “ - ”
                </option>
                <option value="/">slash date separator “ / ”</option>
              </Select>
            </div>
          </div>

          <div className={styles.footerContaier}>
            <Text
              fontSize={"18px"}
              onClick={() =>
                dispatch(
                  themeMode({
                    backgroundColor: "",
                    color: "",
                  })
                )
              }
            >
              Footer
            </Text>
            <AiFillCaretRight
              color="black"
              size={20}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.settingFooterSideBarContainer}>
            <div className={styles.footerInsideContaier}>
              <Checkbox
                onChange={(e) => {
                  dispatch({
                    type: actionTypes.DATE_HANDLER,
                    payload: {
                      ...date,
                      creationDate: e.target.checked,
                    },
                  });
                }}
              >
                Creation Date
              </Checkbox>
            </div>
          </div>
        </PopoverBody>
      </PopoverContent>
    </>
  );
};

export default SettingModal;
