import { actionTypes } from "../../constants/actionTypes";
import { sampleData } from "../../constants/sampleData";

const initialState = {
  resumeData: JSON.parse(JSON.stringify({ ...sampleData.data })),
  theme: {
    color: "#03A9F4",
    fontFamily: "Source Sans Pro",
  },
  updater: new Date(),
  // serverUpdater: new Date(),
  resumeName: "Resumas",
  currentTemplate: "chonological",
  getScanResultStatus: "loading",
  getResumeBuilderChoice: "form",
  builderResumeData: {},
  myTemplates: [],
};

export default function resumeEditor(state = initialState, action) {
  console.log("Resume Data", action.payload);
  console.log("Resume Data in BuilderReducer", action.payload);
  switch (action.type) {
    case actionTypes.USER_TEMP_DATA:
      if (action?.payload) {
        return {
          ...state,
          resumeData: action?.payload?.resumeData,
          myTemplates: action?.payload?.myTemplates,
        };
      } else {
        return {
          ...state,
          resumeData: state?.resumeData,
        };
      }
      return;
    ///////// custom Cases ///////////////////////
    case actionTypes.ON_BLUR_FILED:
    case actionTypes.ON_UPDATE_ORDER:
    case actionTypes.ON_ADD_OBJECT:
    case actionTypes.DELETE_OBJECT:

      return {
        ...state,

        resumeData: action.payload,
        updater: new Date(),
        serverUpdater: new Date(),
      };
    case actionTypes.DATE_HANDLER:
      return {
        ...state,

        resumeData: {
          ...state.resumeData,
          date: action.payload,
        },
      };
    ///////////// end Custom Cases /////////////////////////////////////

    case actionTypes.UPDATE_USER_DATA:
      if (!action.payload) return state;

      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    case actionTypes.CLEAR_STYLES:
      let newData = JSON.parse(JSON.stringify({ ...sampleData.data }));
      return {
        ...state,
        resumeData: newData,
        updater: new Date(),
      };

    case actionTypes.UPDATE_THEME:
      if (!action.payload) return state;

      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload,
        },
      };
    case actionTypes.UPDATE_ITEM_STATUS:
      if (!action.payload) return state;

      return {
        ...state,
        itemStatus: {
          ...state.itemStatus,
          ...action.payload,
        },
      };

    case actionTypes.ADD_NEW_WORK_EXPERIENCE:
      if (!action.payload) return state;

      return {
        ...state,
        workExperience: [
          ...state.workExperience,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_WORK_EXPERIENCE:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        workExperience: action.payload,
      });

    case actionTypes.UPDATE_WORK_EXPERIENCE_DATA:
      if (!action.payload || !action.payloadId) return state;

      const newWorkExperience = JSON.parse(
        JSON.stringify(state.workExperience)
      );
      const index = state.workExperience
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (index > -1) {
        Object.keys(action.payload).forEach(function (key) {
          newWorkExperience[index][key] = action.payload[key];
        });
      }
      return {
        ...state,
        workExperience: [...newWorkExperience],
      };

    case actionTypes.DELETE_WORK_EXPERIENCE_DATA:
      if (!action.payload) return state;

      let newWkE = JSON.parse(JSON.stringify(state.workExperience));
      newWkE = state.workExperience.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        workExperience: [...newWkE],
      };

    case actionTypes.ADD_DELETED_WORK_EXPERIENCE_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        workExperience: [...state.workExperience, ...action.payload],
      };

    case actionTypes.ADD_NEW_EDUCATION:
      if (!action.payload) return state;

      return {
        ...state,
        education: [
          ...state.education,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_EDUCATION:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        education: action.payload,
      });

    case actionTypes.UPDATE_EDUCATION_DATA:
      if (!action.payload || !action.payloadId) return state;

      const neweducation = JSON.parse(JSON.stringify(state.education));
      const ejuIndex = state.education
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (ejuIndex > -1) {
        Object.keys(action.payload).forEach(function (key) {
          neweducation[ejuIndex][key] = action.payload[key];
        });
      }
      return {
        ...state,
        education: [...neweducation],
      };

    case actionTypes.DELETE_EDUCATION_DATA:
      if (!action.payload) return state;

      let newE = JSON.parse(JSON.stringify(state.education));
      newE = state.education.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        education: [...newE],
      };

    case actionTypes.ADD_DELETED_WORK_EDUCATION_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        education: [...state.education, ...action.payload],
      };

    case actionTypes.ADD_NEW_SKILL:
      if (!action.payload) return state;

      return {
        ...state,
        skills: [
          ...state.skills,
          {
            ...action.payload,
          },
        ],
      };

    case actionTypes.UPDATE_SKILL:
      if (!action.payload) return state;

      return Object.assign({}, state, {
        skills: action.payload,
      });

    case actionTypes.UPDATE_SKILL_DATA:
      if (!action.payload || !action.payloadId) return state;

      const newSkills = JSON.parse(JSON.stringify(state.skills));
      const skillsIndex = state.skills
        .map((itm) => {
          return itm.id;
        })
        .indexOf(action.payloadId);
      if (skillsIndex > -1) {
        Object.keys(action.payload).forEach(function (key) {
          newSkills[skillsIndex][key] = action.payload[key];
        });
      }
      return {
        ...state,
        skills: [...newSkills],
      };

    case actionTypes.DELETE_SKILL_DATA:
      if (!action.payload) return state;

      let newS = JSON.parse(JSON.stringify(state.skills));
      newS = state.skills.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        skills: [...newS],
      };

    case actionTypes.ADD_DELETED_WORK_SKILL_ITEM:
      if (!action.payload) return state;

      return {
        ...state,
        skills: [...state.skills, ...action.payload],
      };

    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        currentTemplate: action.payload,
      };

    case actionTypes.GET_RESUME_SCAN:
      return {
        ...state,
        resumeData: action.payload,
        updater: new Date(),
      };
    case actionTypes.GET_BUILDER_RESUME_DATA:
      return {
        ...state,
        builderResumeData: action.payload,
        updater: new Date(),
      };
    case actionTypes.GET_RESUME_SCAN_STATUS:
      return {
        ...state,
        getScanResultStatus: action.payload,
        updater: new Date(),
      };

    case actionTypes.GET_RESUME_BUILDER_CHOICE:
      return {
        ...state,
        getResumeBuilderChoice: action.payload,
        updater: new Date(),
      };
    case actionTypes.GET_RESUME_NAME:
      return {
        ...state,
        resumeName: action.payload,
      };
    case actionTypes.VISIBLE_WORK_SECTION:
      let newWork = { ...state.work, visible: action.payload };
      return {
        ...state,
        resumeData: { ...state.resumeData, work: newWork },
      };
    case actionTypes.VISIBLE_EDU_SECTION:
      let newEdu = { ...state.education, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          education: newEdu,
        },
      };

    case actionTypes.VISIBLE_CERTIFICATES_SECTION:
      let newCertificates = {
        ...state.certifications,
        visible: action.payload,
      };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          certifications: newCertificates,
        },
      };
    case actionTypes.VISIBLE_SKILL_SECTION:
      let newSkill = { ...state.skills, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          skills: newSkill,
        },
      };
    case actionTypes.VISIBLE_LANG_SECTION:
      let newLang = { ...state.languages, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          languages: newLang,
        },
      };
    case actionTypes.VISIBLE_REFERENCE_SECTION:
      let newRef = { ...state.references, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          references: newRef,
        },
      };
    case actionTypes.VISIBLE_ORGANIZATION_SECTION:
      let newOrgan = { ...state.organization, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          organization: newOrgan,
        },
      };
    case actionTypes.VISIBLE_PROJECT_SECTION:
      let newProject = { ...state.projects, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          projects: newProject,
        },
      };
    case actionTypes.VISIBLE_HOBBIES_SECTION:
      let newHobbies = { ...state.hobbies, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          hobbies: newHobbies,
        },
      };
    case actionTypes.VISIBLE_EXPERTISE_SECTION:
      let newExpertise = { ...state.expertise, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          expertise: newExpertise,
        },
      };
    case actionTypes.VISIBLE_AWARDS_SECTION:
      let newAward = { ...state.awards, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          awards: newAward,
        },
      };
    case actionTypes.VISIBLE_ACHIEVEMENT_SECTION:
      let newAchieve = { ...state.achievements, visible: action.payload };
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          achievements: newAchieve,
        },
      };
    default:
      return { ...state };
  }
}
