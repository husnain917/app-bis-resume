import { Text, Box } from "@chakra-ui/react";
import React from "react";
import { FaMinus } from "react-icons/fa";
import Hint from "./Hint";
import styles from "../../../styles/Index.module.css";
import SideBar from "../sideBar/SideBar";
import { useWindowSizing } from "../../../customHooks/useWindowSizing";
export default function HintSection() {
  const size = useWindowSizing();
  const width = size.width;
  return (
    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Box position="absolute">
      <SideBar />
      </Box>
      <Box ml={["18%", "5%", "0%", "0&", "0%", "0%"]}>
        <Text
          fontSize={["1.5rem", "2.5rem", "3rem", "3rem", "3rem", "4.5rem"]}
          color="#313B47"
          fontWeight="bold"
          textAlign="center"
          pl={["7%", "14%"]}
          pr={["14%"]}
        >
          Build Your Resume Fast and Easy.
        </Text>
        <div className={styles.hrLine}>
          <FaMinus
            style={{
              color: "#1dbfaf",
              fontSize: "30px",
              backgroundColor: "#1dbfaf",
              paddingLeft: "2.5%",
              paddingRight: "2.7%",
              borderRadius: 50,
              height: 5,
              textAlign: "center",
              marginLeft: "47.5%",
              marginTop: "0%",
            }}
          />
        </div>
        <Text
          color="#313B47"
          fontSize={["1.2rem", "1.5rem", "1.8", "1.7rem", "1.5rem", "2.5rem"]}
          fontWeight={["400", "400"]}
          align="center"
          pl={["7%", "14%"]}
          pr={["14%"]}
          mt="3%"
        >
          ` Novoresume is lightning fast. There is no software to download. No
          multi-part sign-up form. No long-winded tutorials. Just a
          straightforward process.`
        </Text>
        <Hint
          number="1"
          message="Pick a Template"
          description="`Dont sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates`"
          imgSrc="/one.png"
          isRight={true}
          paddingBottom="30px"
        />
        <Hint
          number="2"
          message="Customize Your Layout"
          description="`Make the resume template truly your own. Customize the layout based on your experience level.`"
          imgSrc="/two.png"
          isRight={false}
          paddingBottom="20px"
        />
        <Hint
          number="3"
          message="Fill in the Blanks"
          description="`Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.`"
          imgSrc="/three.png"
          isRight={true}
          paddingBottom="20px"
        />
        <Hint
          number="4"
          message="Hit Download!'"
          description="`And yes, its free! We dont hit you with a paywall once you have completed your resume in the Basic Account. If you use any of our premium features, the software will let you know about it`."
          imgSrc="/four.jpg"
          isRight={false}
          paddingBottom="5px"
        />
      </Box>
    </div>
  );
}
