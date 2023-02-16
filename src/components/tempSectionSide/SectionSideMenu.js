import { Box } from '@chakra-ui/react';
import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Tooltip } from 'react-tippy';
import {
  visibleAchievementSection,
  visibleCertificatesSection,
  visibleEduSection,
  visibleHobbiesSection,
  visibleLangSection,
  visibleOrganizationSection,
  visibleProjectSection,
  visibleReferenceSection,
  visibleSkillSection,
  visibleWorkSection,
} from '../../../store/actions/builderAction';

import {
  ABOUT,
  CERTIFICATE,
  EDUCATION,
  INTEREST,
  LANGUAGES,
  ORGANIZATION,
  PROJECT,
  REFERENCE,
  SKILL,
  WORK,
  ACHIEVEMENT
} from './SectionSideConstant';
const SectionSideMenu = ({ onDelete, onHide, bg, iconColor }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = () => {
    switch (onDelete) {
      case SKILL:
        dispatch(visibleSkillSection(false));
        break;
      case WORK:
        dispatch(visibleWorkSection(false));
        break;
      case EDUCATION:
        dispatch(visibleEduSection(false));
        break;
      case LANGUAGES:
        dispatch(visibleLangSection(false));
        break;
      case REFERENCE:
        dispatch(visibleReferenceSection(false));
        break;
      case ABOUT:
        dispatch(visibleAchievementSection(false));
        break;
      case ORGANIZATION:
        dispatch(visibleOrganizationSection(false));
        break;
      case PROJECT:
        dispatch(visibleProjectSection(false));
        break;
      case CERTIFICATE:
        dispatch(visibleCertificatesSection(false));
        break;
      case INTEREST:
        dispatch(visibleHobbiesSection(false));
        break;
        case ACHIEVEMENT:
          dispatch(visibleAchievementSection(false));
          break;
      default:
        break;
    }
  };
  return (
    <div>
      <Box
        h={'70px'}
        w={'22px'}
        px={'3px'}
        borderRadius={'13px'}
        bg={bg ? bg : '#2A78AB'}
        display="flex"
        flexDirection={'column'}
        justifyContent={'space-evenly'}
        alignItems="center"
        transition={'0.5s background'}
      >
        <Tooltip title="Back" arrow distance={20}>
          <MdRemoveCircleOutline
            color={iconColor ? iconColor : '#fff'}
            size={16}
            onClick={onHide}
          />
        </Tooltip>
        <Tooltip title="Remove Section" arrow distance={20}>
          <RiDeleteBin6Line
            color={iconColor ? iconColor : '#fff'}
            size={16}
            onClick={onDeleteHandler}
          />
        </Tooltip>
      </Box>
    </div>
  );
};

export default SectionSideMenu;
