import React from 'react';
import  Text  from '../template1/Text';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import { Row } from 'antd';

export default function Profile({ cId }) {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <div style={{ display: 'flex', marginTop: 60 }}>
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

        <div
          className={`manager-template-row manager-template-text-center manager-f-sub-rowA`}
        >
          {cId === 'babysitter' ? (
            <Text
              value={resumeData?.profile?.address?.city}
              placeholder="DIGITAL MARKETING "
              path={'profile.address.jobTitle'}
              customclass={'manager-jobtitleBabySitter '}
            />
          ) : (
            <>
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
            </>
          )}
        </div>
    </>
  );
}
