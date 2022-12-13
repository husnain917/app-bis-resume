import React from "react";
import styles from "../../styles/templates/Graphic3.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Box, Tooltip, Image } from "@chakra-ui/react";
import Text from "../../src/components/graphicDesigner3/Text";
import Title from "../../src/components/graphicDesigner3/Title";
import { Icon } from "@chakra-ui/react";
import {
  FaUserCircle,
  FaUser,
  FaBriefcase,
  FaBookOpen,
  FaGlobe,
  FaCloudscale,
  FaAddressBook,
} from "react-icons/fa";
import WorkExperience from "../../src/components/graphicDesigner3/WorkExperience";
import Education from "../../src/components/graphicDesigner3/Education";
import Language from "../../src/components/graphicDesigner3/Language";
import Reference from "../../src/components/graphicDesigner3/Reference";
import Skills from "../../src/components/graphicDesigner3/Skills";
import Name from "../../src/components/commonSection/Name";
import Profession from '../../src/components/commonSection/Profession';
import Contact from '../../src/components/commonSection/Contact';





export default function GraphicDesigner3() {
  let resumeData = useSelector((state) => state.editorReducer.resumeData);
  let updater = useSelector((state) => state.editorReducer.updater);
  let color = useSelector((state) => state.editorReducer.color);
  console.log(resumeData);
  return (
    <div className={styles.main}>
      <Link href={"/templates"}>
        <div className={styles.swapCont}>
          <Tooltip title="Change Template" arrow distance={20}>
            <div className={styles.swap}>
              <img src="/icons/swap.png" />
            </div>
          </Tooltip>
        </div>
      </Link>
      <Box
        w="100%"
        mt="5%"
        mb="3%"
        overflow="auto"
        h="auto"
        ml={["", , , "8%", "15%", "23%"]}
      >
        <Box w="100%" display="flex" flexDir="row" maxW="930px" minW="930px">
          <Box w="30%" h="auto" display="flex" flexDir="column">
            <Box bgColor="#56C8EA" pb="30px">
              <Image src="/gdMan2.png" w="75%" mt="12%" ml="12%" />
              {/* <Text
                value={resumeData?.profile?.firstName}
                placeholder="YOUR"
                path={"profile.firstName"}
                fontSize="31px"
                fontWeight="bold"
                color="#3C4240"
                textAlign="center"
                textTransform="uppercase"
              />
              <Text
                value={resumeData?.profile?.lastName}
                placeholder="NAME"
                path={"profile.lastName"}
                fontSize="31px"
                fontWeight="bold"
                color="#3C4240"
                textAlign="center"
                textTransform="uppercase"
                lineHeight="20px"
              /> */}



              <Name
                FName={true}
                SName={true}
                direction="column"
                FNameStyle={styles.name}
                SNameStyle={styles.name}

              />

              {/* <Text
                value={resumeData?.objective?.title}
                placeholder="Profession"
                path={"profile.objective.heading"}
                fontSize="1.2rem"
                color="#3C4240"
                marginTop="2%"
                textAlign="center"
                fontWeight="600"
                lineHeight="30px"
              /> */}
              <Profession
                margin={'0px 0px 0px 0px'}
                professionStyle={styles.profession}
                professionPlaceholder="PROFESSION"
              />
            </Box>
            <Box bgColor="#3C4240" h="100%" pb="100px">
              <div style={{ marginLeft: "30px", marginTop: "30px" }}>
                <Box display="flex">
                  <Icon as={FaUser} w={6} h={6} color="#56C8EA" />
                  <Title
                    text="CONTACT"
                    color="white"
                    marginLeft="20px"
                    icon="FaUser"
                    letterSpacing="2px"
                  />
                </Box>
                <Box bgColor="white" h="3px" w="80%"></Box>
              </div>
              <Box ml="8%">
                <Contact
                  phone={true}
                  email={true}
                  linkedinURL={true}
                  website={true}
                  circleIcon={true}
                  circleBg="#fff"
                  circleSize="35px"
                  iconColor="#1C2125"
                  margin={'10px 0px 0px 0px'}
                  style={styles.profileText}
                />
              </Box>
              <div style={{ marginLeft: "30px", marginTop: "20px" }}>
                <Box display="flex">
                  <Icon as={FaBookOpen} w={6} h={6} color="#56C8EA" />
                  <Title
                    text="EDUCATION"
                    color="white"
                    marginLeft="20px"
                    icon="FaUser"
                    letterSpacing="2px"
                  />
                </Box>
                <Box bgColor="white" h="3px" w="80%"></Box>
                <Education
                  data={
                    resumeData?.education?.items?.length
                      ? [...resumeData?.education?.items]
                      : [...sampleData?.data?.education?.items]
                  }
                  color={color}
                  updater={updater}
                />
              </div>
              <div
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <Box display="flex">
                  <Icon as={FaGlobe} w={6} h={6} color="#56C8EA" />
                  <Title
                    text="LANGUAGE"
                    color="white"
                    marginLeft="20px"
                    icon="FaUser"
                    letterSpacing="2px"
                  />
                </Box>
                <Box bgColor="white" h="3px" w="80%"></Box>
              </div>
              <Language
                data={
                  resumeData?.certifications?.items?.length
                    ? [...resumeData?.certifications?.items]
                    : [...sampleData?.data?.certifications?.items]
                }
                color={color}
                updater={updater}
              />
            </Box>
          </Box>
          <Box w="70%" pl="50px" pr="50px" pb="50px">
            <div style={{ marginTop: "30px" }}>
              <Box display="flex" alignItems="center" mb="5px">
                <Icon as={FaUserCircle} w={8} h={8} color="#56C8EA" />
                <Title
                  text="PROFILE INFO"
                  color="#3C4240"
                  marginLeft="20px"
                  letterSpacing="2px"
                />
              </Box>
              <Box bgColor="#3C4240" h="3px" w="100%"></Box>
            </div>

            {/* <Text
              value={resumeData?.objective?.body}
              placeholder="Write Short Description About Your Self"
              path={"profile.objective.body"}
              fontSize="1rem"
              color="#161619"
              marginTop="4%"
              textAlign="left"
              fontWeight="400"
              marginRight="50px"
            /> */}
            <div style={{ marginTop: "50px" }}>
              <Box display="flex" alignItems="center" mb="5px">
                <Icon as={FaBriefcase} w={8} h={8} color="#56C8EA" />
                <Title
                  text="WORK EXPERIENCE"
                  color="#3C4240"
                  marginLeft="20px"
                  letterSpacing="2px"
                />
              </Box>
              <Box bgColor="#3C4240" h="3px" w="100%"></Box>
            </div>
            <WorkExperience
              data={
                resumeData?.work?.items?.length
                  ? [...resumeData?.work?.items]
                  : [...sampleData?.data?.work?.items]
              }
              color={color}
              updater={updater}
            />
            <div style={{ marginTop: "50px" }}>
              <Box display="flex" alignItems="center" mb="5px">
                <Icon as={FaCloudscale} w={9} h={9} color="#56C8EA" />
                <Title
                  text="MY SKILLS & EXPERTISE"
                  color="#3C4240"
                  marginLeft="20px"
                  letterSpacing="2px"
                />
              </Box>
              <Box bgColor="#3C4240" h="3px" w="100%"></Box>
            </div>
            <Skills
              data={
                resumeData?.skills?.items?.length
                  ? [...resumeData?.skills?.items]
                  : [...sampleData?.data?.skills?.items]
              }
              color={color}
              updater={updater}
            />
            <div style={{ marginTop: "50px" }}>
              <Box display="flex" alignItems="center" mb="5px">
                <Icon as={FaAddressBook} w={8} h={8} color="#56C8EA" />
                <Title
                  text="MY REFERENCE"
                  color="#3C4240"
                  marginLeft="20px"
                  letterSpacing="2px"
                />
              </Box>
              <Box bgColor="#3C4240" h="3px" w="100%"></Box>
            </div>
            <Reference
              data={
                resumeData?.references?.items?.length
                  ? [...resumeData?.references?.items]
                  : [...sampleData?.data?.references?.items]
              }
              color={color}
              updater={updater}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
