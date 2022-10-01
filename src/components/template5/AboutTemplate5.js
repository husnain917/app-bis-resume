import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../template1';
const AboutTemplate5 = () => {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  return (
    <div>
      <Text
        placeholder="Description"
        customclass="aboutTextTemplate5"
        path={'objective.body'}
        value={resumeData?.achievements?.items?.Description}
      />
    </div>
  );
};

export default AboutTemplate5;
