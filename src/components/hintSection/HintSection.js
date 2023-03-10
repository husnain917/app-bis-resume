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
    <Box
      margin={[
        "2rem auto",
        "2rem auto",
        "6.4rem auto",
        "6.4rem auto",
        "6.4rem auto",
      ]}
      // position={"relative"}
      width={width > 610 ? ["1000px", "94%", "94%", "90%", "88%"] : "98%"}
    >
      {/* <Box position="absolute">
        <SideBar />
      </Box> */}

      <Box>
        <Box>
          <Text
            fontSize={[
              "1.5rem",
              "2.5rem",
              "2.7rem",
              "2.6rem",
              "2.8rem",
              "3rem",
              "3.5rem",
            ]}
            color="#313B47"
            fontWeight="bold"
            textAlign="center"
            pl={["7%", "7%"]}
            pr={["7%"]}
            // className={"afterHeading"}
            className={"sub-heading"}
            // margin={"0 auto"}
            lineHeight={["30px", "40px", "50px", "50px", "40px"]}
          >
            Create a High-Impact Resume in Seconds.
          </Text>
        </Box>

        <Box className={styles.hrLine} mt={"2%"}>
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
        </Box>
        <Text
          color="#313B47"
          fontSize={["1rem", "1rem", "1.8rem", "1.7rem", "1.5rem", "1.6rem"]}
          fontWeight={["400", "400"]}
          textAlign="center"
          pl={["6%", "6%", "14%", "14%", "14%"]}
          pr={["14%"]}
          mt="3%"
          className="only-font-family"
        >
          BisResume is lightning fast. There is no software to download. No
          multi-part sign-up form. No long-winded tutorials. Just a
          straightforward process.&#34; effectively emphasizes the speed and
          ease of use of your resume builder service. This content clearly
          communicates the benefits of using your service and highlights the
          simplicity of the process, which is likely to appeal to users looking
          to quickly create a professional resume.&#34;
        </Text>
        <Hint
          number="1"
          message="Choose a Resume Template"
          description="Boost your job search with our ATS-friendly, hand-crafted resume templates, designed to make you stand out."
          imgSrc={"./svg-export/svgexport-4.svg"}
          isRight={true}
          paddingBottom="30px"
        />
        <Hint
          number="2"
          message="Customize your Design"
          description="Optimize your resume, Customize the design based on your professional experience."
          imgSrc={"./svg-export/svgexport-5.svg"}
          isRight={false}
          paddingBottom="20px"
        />
        <Hint
          number="3"
          message="Fill in the Blanks with your Career Information"
          description="Streamline Your Resume Building,Fill in your information and watch it come to life with our real-time AI updates."
          imgSrc={"./svg-export/svgexport-6.svg"}
          isRight={true}
          paddingBottom="20px"
        />
        <Hint
          number="4"
          message="Download your Resume"
          description="Say Goodbye to Paywalls and Hidden Costs,Build a Winning Resume for Free with our Basic Account."
          imgSrc={"./svg-export/svgexport-7.svg"}
          isRight={false}
          paddingBottom="5px"
        />
      </Box>
    </Box>
  );
}
