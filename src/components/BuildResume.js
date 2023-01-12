import styles from "../../styles/build.module.css";
import { Button, Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ImageBuild from "../../public/mainImageBuild.webp";
import CommonButton from "./commonButton/CommonButton";
import Link from "next/link";

export default function BuildResume() {
  return (
    <>
      <div className={styles.ctsMain}>
        <Box id="svg-section" mt={10}></Box>
        <Text
          className={"sub-heading"}
          fontSize={["24px", "24px", "30px", "36px", "36px"]}
          lineHeight={["26px", "26px", "36px", "48px", "48px"]}
        >
          Ready to Jump-Start Your Career
        </Text>

        <Box className={styles.ctaHr} mt={3} mb={4}></Box>

        <div>
          <Box mb={3}>
            <Link href="/templates">
              <CommonButton
                fontSize={[
                  "1rem",
                  "1rem",
                  "1.1rem",
                  "1.1rem",
                  "1.1rem",
                  "1.5rem",
                ]}
                title="Build My Resume"
                hoverCursor={"pointer"}
                backgroundColor={"#2CACD5"}
                color={"whitesmoke"}
                rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
              />
            </Link>
          </Box>
        </div>
        <div></div>
      </div>

      <div className={styles.ctaImageDiv}>
        <Image src={ImageBuild} alt="will load soon" />
        <div className={styles.ctaWaveBlind}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="	#e5e5e5"
              fillOpacity={1}
              d="M0,224L80,240C160,256,320,288,480,261.3C640,235,800,149,960,149.3C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
