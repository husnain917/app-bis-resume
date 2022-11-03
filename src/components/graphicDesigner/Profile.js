import React from 'react';
import { useSelector } from 'react-redux';
import HybridText from '../hybridTemplate/HybridText';
import Style from './graphicDesigner.module.css';
const Profile = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div style={{backgroundColor: 'transparent'}}>
      <HybridText
        value={resumeData?.profile?.firstName}
        placeholder="I S A B E L"
        customclass={` ${Style.fashionName}`}
        path={'profile.firstName'}
      />
      <HybridText
        value={resumeData?.profile?.lastName}
        placeholder="M E R C A D O"
        customclass={` ${Style.fashionName}`}
        path={'profile.lastName'}
      />

      <HybridText
        placeholder="Graphic Designer"
        customclass={`${Style.ProfessionFashion} ${Style.mt}`}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
    </div>
  );
};

export default Profile;
