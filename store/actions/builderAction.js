import { actionTypes } from '../../constants/actionTypes';
import {
  updateObject,
  insertObj,
  deleteObj,
} from '../../utils/updateResumeObj';
import axios from 'axios';
import url from '../../config/endpoint';
import uniqid from 'uniqid';
import objectPath from 'object-path';
import { sampleData } from '../../constants/sampleData';

const randomId = () => {
  const currentTime = new Date().getTime();
  const randomNumber = Math.random() * 3;
  return `${currentTime}-${randomNumber}`;
};

export const updateUserData = (data) => {
  return {
    type: actionTypes.UPDATE_USER_DATA,
    payload: data,
  };
};

export const updateTheme = (data) => {
  return {
    type: actionTypes.UPDATE_THEME,
    payload: data,
  };
};

export const updateItemStatus = (data) => {
  return {
    type: actionTypes.UPDATE_ITEM_STATUS,
    payload: data,
  };
};

export const updateWorkExperience = (data) => {
  return {
    type: actionTypes.UPDATE_WORK_EXPERIENCE,
    payload: data,
  };
};

export const addNewWorkExperience = () => {
  const id = randomId();
  const data = {
    id,
    date: '',
    jobTitle: '',
    companyName: '',
    companyText: '',
    experienceText: '',
  };

  return {
    type: actionTypes.ADD_NEW_WORK_EXPERIENCE,
    payload: data,
  };
};

export const updateWorkExperienceData = (id, data) => {
  return {
    type: actionTypes.UPDATE_WORK_EXPERIENCE_DATA,
    payloadId: id,
    payload: data,
  };
};

export const deleteWorkExperienceData = (id) => {
  return {
    type: actionTypes.DELETE_WORK_EXPERIENCE_DATA,
    payload: id,
  };
};

export const addDeletedWorkExperienceItem = (data) => {
  return {
    type: actionTypes.ADD_DELETED_WORK_EXPERIENCE_ITEM,
    payload: data,
  };
};

export const addEducation = () => {
  const id = randomId();
  const data = {
    id,
    date: '',
    title: '',
  };

  return {
    type: actionTypes.ADD_NEW_EDUCATION,
    payload: data,
  };
};

export const updateEducation = (data) => {
  return {
    type: actionTypes.UPDATE_EDUCATION,
    payload: data,
  };
};

export const updateEducationData = (id, data) => {
  return {
    type: actionTypes.UPDATE_EDUCATION_DATA,
    payloadId: id,
    payload: data,
  };
};

export const deleteEducationData = (id) => {
  return {
    type: actionTypes.DELETE_EDUCATION_DATA,
    payload: id,
  };
};

export const addDeletedEducationItem = (data) => {
  return {
    type: actionTypes.ADD_DELETED_WORK_EDUCATION_ITEM,
    payload: data,
  };
};

export const addSkill = () => {
  const id = randomId();
  const data = {
    id,
    title: '',
  };

  return {
    type: actionTypes.ADD_NEW_SKILL,
    payload: data,
  };
};

export const updateSkill = (data) => {
  return {
    type: actionTypes.UPDATE_SKILL,
    payload: data,
  };
};

export const updateSkillData = (id, data) => {
  return {
    type: actionTypes.UPDATE_SKILL_DATA,
    payloadId: id,
    payload: data,
  };
};

export const deleteSkillData = (id) => {
  return {
    type: actionTypes.DELETE_SKILL_DATA,
    payload: id,
  };
};

export const addDeletedSkillItem = (data) => {
  return {
    type: actionTypes.ADD_DELETED_WORK_SKILL_ITEM,
    payload: data,
  };
};

export const exportUserData = () => {
  return (dispatch, getState) => {
    const userData = getState().userData;
    const workExperience = getState().workExperience;
    const education = getState().education;
    const skills = getState().skills;
    const theme = getState().theme;
    const itemStatus = getState().itemStatus;

    let data = [];
    data = {
      userData,
      workExperience,
      education,
      skills,
      theme,
      itemStatus,
    };

    return data;
  };
};

export const uploadImageAction = (image) => {
  return () =>
    new Promise(() => {
      const formData = new FormData();
      formData.append('image', image);
    });
};

export const onBlurField = (data, path) => (dispatch, getState) => {
  let resumeObj = getState().editorReducer.resumeData;

  let newObject = updateObject(resumeObj, path, data);

  dispatch({
    type: actionTypes.ON_BLUR_FILED,
    payload: newObject,
  });
};
export const updateOrder = (data, path) => (dispatch, getState) => {
  let resumeObj = getState().editorReducer.resumeData;
  let newObject = updateObject(resumeObj, path, data);

  dispatch({
    type: actionTypes.ON_UPDATE_ORDER,
    payload: newObject,
  });
};
export const addNewObj = (old_data, path) => (dispatch, getState) => {
  let resumeObj = getState().editorReducer.resumeData;
  const index_value = objectPath.get(resumeObj, path)?.length;

  const data = { ...objectPath.get(sampleData.data, path)[0] };

  let newObject = insertObj(resumeObj, path, data, index_value);
  dispatch({
    type: actionTypes.ON_ADD_OBJECT,
    payload: newObject,
  });
};

export const addNewSkillObj = (data, path) => (dispatch, getState) => {
  let resumeObj = getState().editorReducer.resumeData;
  const index_value = objectPath.get(resumeObj, path).length;
  let newObject = insertObj(resumeObj, path, data, index_value);
  dispatch({
    type: actionTypes.ON_ADD_OBJECT,
    payload: newObject,
  });
};
export const deleteObjInArray = (path) => (dispatch, getState) => {
  let resumeObj = getState().editorReducer.resumeData;

  let newObject = deleteObj(resumeObj, path);

  dispatch({
    type: actionTypes.DELETE_OBJECT,
    payload: newObject,
  });
};

export const clearStyles = () => {
  return {
    type: actionTypes.CLEAR_STYLES,
  };
};

export const changeTheme = (name) => {
  return {
    type: actionTypes.CHANGE_THEME,
    payload: name,
  };
};

export const changeNameHandler = (name) => {
  return {
    type: actionTypes.GET_RESUME_NAME,
    payload: name,
  };
};

export const getResumeScan = (data) => async (dispatch) => {
  try {
    let getToken = localStorage.getItem('clientAccessToken');

    if (getToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${getToken}`;
    }
    const res = await axios.post(`${url}/get-resume-scan`, data);
    if (res.data.status === 200) {
      let res_data = {};
      if (!data.is_resume) {
        res_data = res.data.data.resume.data;
        res_data['skills']['items'] = res_data['skills']['items'].map((n) => ({
          id: uniqid(),
          name: n,
        }));
      } else {
        if (res.data.data) {
          res_data = res.data.data.data;
          res_data['skills']['items'] = res_data['skills']['items'].map(
            (n) => ({
              id: uniqid(),
              name: n,
            })
          );
          if (data?.builderResume && res.data?.oid) {
            localStorage.setItem('builderResumeOid', res.data.oid);
          }
        } else {
          if (data?.builderResume) {
            localStorage.removeItem('builderResumeOid');
          }
          res_data = sampleData.data;
        }
      }
      dispatch({
        type: 'GET_RESUME_SCAN_STATUS',
        payload: 'done',
      });
      dispatch({
        type: 'GET_RESUME_SCAN',
        payload: res_data,
      });
      dispatch({
        type: 'GET_BUILDER_RESUME_DATA',
        payload: res.data,
      });
      if (res.data.data.resumeName) {
        dispatch({
          type: actionTypes.GET_RESUME_NAME,
          payload: res.data.data.resumeName,
        });
      }
    } else {
      dispatch({
        type: 'GET_RESUME_SCAN_STATUS',
        payload: 'not-done',
      });
    }
  } catch (error) {
    dispatch({
      type: 'GET_RESUME_SCAN_STATUS',
      payload: 'not-done',
    });
  }
};
export const visibleWorkSection = (data) => {
  return {
    type: actionTypes.VISIBLE_WORK_SECTION,
    payload: data,
  };
};
export const visibleEduSection = (data) => {
  return {
    type: actionTypes.VISIBLE_EDU_SECTION,
    payload: data,
  };
};
export const visibleCertificatesSection = (data) => {
  return {
    type: actionTypes.VISIBLE_CERTIFICATES_SECTION,
    payload: data,
  };
};
export const visibleSkillSection = (data) => {
  return {
    type: actionTypes.VISIBLE_SKILL_SECTION,
    payload: data,
  };
};
export const visibleLangSection = (data) => {
  return {
    type: actionTypes.VISIBLE_LANG_SECTION,
    payload: data,
  };
};
export const visibleReferenceSection = (data) => {
  return {
    type: actionTypes.VISIBLE_REFERENCE_SECTION,
    payload: data,
  };
};
export const visibleOrganizationSection = (data) => {
  return {
    type: actionTypes.VISIBLE_ORGANIZATION_SECTION,
    payload: data,
  };
};
export const visibleProjectSection = (data) => {
  return {
    type: actionTypes.VISIBLE_PROJECT_SECTION,
    payload: data,
  };
};
export const visibleHobbiesSection = (data) => {
  return {
    type: actionTypes.VISIBLE_HOBBIES_SECTION,
    payload: data,
  };
};
export const visibleExpertiseSection = (data) => {
  return {
    type: actionTypes.VISIBLE_EXPERTISE_SECTION,
    payload: data,
  };
};
export const visibleAwardSection = (data) => {
  return {
    type: actionTypes.VISIBLE_AWARDS_SECTION,
    payload: data,
  };
};
export const visibleAchievementSection = (data) => {
  return {
    type: actionTypes.VISIBLE_ACHIEVEMENT_SECTION,
    payload: data,
  };
};
