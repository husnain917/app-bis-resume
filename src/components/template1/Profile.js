import React from 'react';
import { Text } from './index';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import { Row } from 'antd';

export default function Profile({ cId }) {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <Row>
          <Text
            value={resumeData?.profile?.firstName}
            placeholder="First Name"
            customclass={'fullName'}
            path={'profile.firstName'}
          />
          &nbsp;
          <Text
            value={resumeData?.profile?.lastName}
            placeholder="Last Name"
            customclass={'fullName'}
            path={'profile.lastName'}
          />
        </Row>
      </div>

      <div className={`manager-template-row manager-template-text-center`}>
        <div
<<<<<<< HEAD
<<<<<<< HEAD
          className={`manager-template-row manager-template-text-center manager-f-sub-rowA`}
        >
          <Text
            value={resumeData?.profile?.address?.city}
            placeholder="City"
            path={'profile.address.city'}
            customclass={'manager-f-name'}
          />
          <Text
            value={resumeData?.profile?.address?.state}
            placeholder="State"
            path={'profile.address.state'}
            customclass={'manager-f-name'}
          />
          <Text
            value={resumeData?.profile?.address?.zipcode}
            placeholder="Zip"
            customclass={'manager-f-name'}
            path={'profile.address.zipcode'}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>
          <Text
            value={resumeData?.profile?.phone}
            placeholder="Phone"
            customclass={'manager-f-name'}
            path={'profile.phone'}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>

          <Text
            value={resumeData?.profile?.email}
            placeholder="Email"
            customclass={'manager-f-name'}
            path={'profile.email'}
          />
          <p className="aPadding">&nbsp;|&nbsp;</p>
          <Text
            value={resumeData?.profile?.linkedinURL}
            placeholder="LinkedIn"
            customclass={'manager-f-name'}
            path={'profile.linkedinURL'}
          />
=======
          className={
            `manager-template-row manager-template-text-center manager-f-sub-rowA`
          }
        >
          {
            cId === 'ceo' ?
=======
          className={`manager-template-row manager-template-text-center manager-f-sub-rowA`}
        >
          {cId === 'ceo' ? (
            <Text
              value={resumeData?.profile?.address?.city}
              placeholder="CHIEF EXLUSIVE OFFICER"
              path={'profile.address.jobTitle'}
              customclass={'manager-jobtitle '}
            />
          ) : (
            <>
>>>>>>> 26d93fd5ea827d3d048e1274b7cf6d3b1c18e575
              <Text
                value={resumeData?.profile?.address?.city}
                placeholder="City"
                path={'profile.address.city'}
                customclass={'manager-f-name'}
              />
              <Text
                value={resumeData?.profile?.address?.state}
                placeholder="State"
                path={'profile.address.state'}
                customclass={'manager-f-name'}
              />
              <Text
                value={resumeData?.profile?.address?.zipcode}
                placeholder="Zip"
                customclass={'manager-f-name'}
                path={'profile.address.zipcode'}
              />
              <p className="aPadding">&nbsp;|&nbsp;</p>
              <Text
                value={resumeData?.profile?.phone}
                placeholder="Phone"
                customclass={'manager-f-name'}
                path={'profile.phone'}
              />
              <p className="aPadding">&nbsp;|&nbsp;</p>

<<<<<<< HEAD
                <Text
                  value={resumeData?.profile?.email}
                  placeholder="Email"
                  customclass={"manager-f-name"}
                  path={"profile.email"}
                />
                <p className="aPadding">&nbsp;|&nbsp;</p>
                <Text
                  value={resumeData?.profile?.linkedinURL}
                  placeholder="LinkedIn"
                  customclass={"manager-f-name"}
                  path={"profile.linkedinURL"}
                />
              </>
          }
>>>>>>> f2c0ac28396ebeea968d0902c8c289ba1d98d278
=======
              <Text
                value={resumeData?.profile?.email}
                placeholder="Email"
                customclass={'manager-f-name'}
                path={'profile.email'}
              />
              <p className="aPadding">&nbsp;|&nbsp;</p>
              <Text
                value={resumeData?.profile?.linkedinURL}
                placeholder="LinkedIn"
                customclass={'manager-f-name'}
                path={'profile.linkedinURL'}
              />
            </>
          )}
>>>>>>> 26d93fd5ea827d3d048e1274b7cf6d3b1c18e575
        </div>
      </div>
    </>
  );
}
