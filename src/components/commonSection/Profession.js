import React from 'react';
import { useSelector } from 'react-redux';
import Text from './Text';

const Profession = (props) => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  const { professionPlaceholder, professionStyle } = props;
  return (
    <div>
      <Text
        placeholder={
          professionPlaceholder ? professionPlaceholder : 'Profession'
        }
        customClass={`${professionStyle}`}
        path={'profile.profession'}
        value={resumeData?.profile?.profession}
      />
    </div>
  );
};

export default Profession;
