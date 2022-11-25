import React from 'react';
import { Text } from './index';
import { useSelector } from 'react-redux';
import { useWindowSize } from '@react-hook/window-size';
import { Row } from 'antd';
import Name from '../commonSection/Name';
import styles from '../../../styles/templates/templateceo.module.css'
import Profession from '../commonSection/Profession';


export default function Profile({ cId }) {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: cId === 'bs' ? 'left' : 'center', marginLeft: cId === 'bs' && '-50px', marginTop: 20 }}>
        {cId === 'bs' ?
          <Row>
            <Name
              FName={true}
              SName={true}
              direction="row"
              FNameStyle={styles.name}
              SNameStyle={styles.name}

            />

          </Row> :
          <Row style={{ overflow: 'hidden' }} >
            <Name
              FName={true}
              SName={true}
              direction="row"
              FNameStyle={styles.name}
              SNameStyle={styles.name}

            />

          </Row>
        }
      </div>

      <div className={`manager-template-row manager-template-text-center`}>
        <div
          className={`manager-template-row manager-template-text-center manager-f-sub-rowA`}
        >
          {cId === 'ceo' ? (

            <Profession
              margin={'0px 0px 0px 0px'}
              professionStyle={styles.profession}
              professionPlaceholder="CHIEF EXCLUSIVE OFFICER"
            />
          ) : cId === 'bs' ? (
            <div style={{ marginLeft: '-100px' }}>
              <Profession
                margin={'0px 0px 0px 0px'}
                professionStyle={styles.profession}
                professionPlaceholder="BRAND STRATEGIST"
              />


            </div>

          ) :
            (
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
      </div>
    </>
  );
}
