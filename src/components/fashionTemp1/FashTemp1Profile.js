import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './fashionTemp1.module.css';
const FashTemp1sProfile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div>
      <HybridText
        value={resumeData?.profile?.firstName}
        placeholder="First Name"
        customclass={` ${Style.fashionName}`}
        path={'profile.firstName'}
      />
      <HybridText
        value={resumeData?.profile?.lastName}
        placeholder="Last Name"
        customclass={` ${Style.fashionName}`}
        path={'profile.lastName'}
      />

      <HybridText
        placeholder="Profession"
        customclass={`${Style.ProfessionFashion} ${Style.mt}`}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
    </div>
  );
};

export default FashTemp1sProfile;
