import React from "react";
import { Text } from "./index";
import { useSelector } from "react-redux";
import { useWindowSize } from "@react-hook/window-size";
import { Row } from "antd";

export default function Profile() {
  const [width] = useWindowSize();
  let resumeData = useSelector((state) => state.editorReducer.resumeData);

  return (
    <>
      <div style={{ display: "flex", marginTop: 20 }}>
        <Row style={{ width: '50%', }}>
          <p>test </p>
        </Row>
        <Row style={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            value={resumeData?.profile?.firstName}
            placeholder="First Name"
            customclass={"fullName"}
            path={"profile.firstName"}
          />
          &nbsp;
          <Text
            value={resumeData?.profile?.lastName}
            placeholder="Last Name"
            customclass={"fullName"}
            path={"profile.lastName"}
          />

          <div>
            <Text
              value={resumeData?.profile?.phone}
              placeholder="Phone"
              customclass={"manager-f-name"}
              path={"profile.phone"}
            />

            <Text
              value={resumeData?.profile?.email}
              placeholder="Email"
              customclass={"manager-f-name"}
              path={"profile.email"}
            />
            <Text
              value={resumeData?.profile?.linkedinURL}
              placeholder="LinkedIn"
              customclass={"manager-f-name"}
              path={"profile.linkedinURL"}
            />

            <div
              className={
                `manager-template-row manager-template-text-center manager-f-sub-rowA`
              }
            >
              <Text
                value={resumeData?.profile?.address?.city}
                placeholder="City"
                path={"profile.address.city"}
                customclass={"manager-f-name"}
              />

              <Text
                value={resumeData?.profile?.address?.state}
                placeholder="State"
                path={"profile.address.state"}
                customclass={"manager-f-name"}
              />
              <Text
                value={resumeData?.profile?.address?.zipcode}
                placeholder="Zip"
                customclass={"manager-f-name"}
                path={"profile.address.zipcode"}
              />
            </div>
          </div>
        </Row>
      </div>
     
    </>
  );
}
