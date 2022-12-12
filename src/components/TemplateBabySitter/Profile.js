import React from 'react';
import Text from '../template1/Text';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import { Row } from 'antd';
import Profession from '../commonSection/Profession';
import styles from '../../../styles/templates/templatebabysitter.module.css';
import Name from '../commonSection/Name';


export default function Profile({ cId }) {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      {cId === 'babysitter' ?
  
          <Name
            FName={true}
            SName={true}
            direction="column"
            FNameStyle={styles.name}
            SNameStyle={styles.name}

          />

      : null
       
      }

      <div
        className={`manager-template-row manager-template-text-center manager-f-sub-rowA`}
      >
        {cId === 'babysitter' ? (
          <Profession
            margin={'0px 0px 0px 0px'}
            professionStyle={styles.profession}
            professionPlaceholder="Digital Market"
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
