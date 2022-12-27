import styles from "../../styles/build.module.css";
import { Button, Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ImageBuild from "../../public/mainImageBuild.webp";
import CommonButton from "./commonButton/CommonButton";
import Link from "next/link";

export default function BuildResume() {
  return (
    <>
      <Box className={styles.ctsMain} mt={5}>
        <Box id="svg-section"></Box>
        <h1 className={"sub-heading"}>Ready to Jump-Start Your Career</h1>

        <Box className={styles.ctaHr} mt={3} mb={4}></Box>

        <Box>
          <Box mb={2}>
            <Link href="/templates">
              {/* <Button
                className={styles.ctaBtn}
                bg="#2CACD5"
                colorScheme="#2CACD5"
                borderRadius="20px"
                fontWeight="bold"
                color="white"
                rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
                mt={5}
                mb={1}
              >
                Build Your Resume
              </Button> */}
              <CommonButton
                title="Build Your Resume"
                hoverCursor={"pointer"}
                backgroundColor={"#2CACD5"}
                color={"whitesmoke"}
                rightIcon={<FaArrowRight color="white" fontWeight="bold" />}
                // hoverBackgroundColor={"red"}
                // className={"hoverEffects"}
              />
            </Link>
          </Box>
          <p className={"small-text"}>No credit card required</p>
        </Box>
        <Box></Box>
      </Box>

      <Box className={styles.ctaImageBox}>
        <Image src={ImageBuild} />
        <Box className={styles.ctaWaveBlind}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="	#e5e5e5"
              fillOpacity={1}
              d="M0,224L80,240C160,256,320,288,480,261.3C640,235,800,149,960,149.3C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </>
  );
}
