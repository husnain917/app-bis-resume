import React from "react";
import styles from "../../styles/Index.module.css";
import { Image ,Box} from '@chakra-ui/react'
import Link from "next/link";


export default function CallToAction() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaLeftSec} >
        <h1 className={styles.ctaHeading}>
          Get hired faster with our resume builder!
        </h1>
        <Box className="cursor">
          <Link href="/templates">
            <button className={styles.ctaHeroButton}>Build Your Resume</button>
          </Link>
        </Box>
        <p className={styles.ctaText}>
          Some of Our Customers have been hired by:
        </p>
        <div className={styles.heroIconImgs}>
          <Image
            src="/amazon.png"
            w="25%"
            h="auto"
            mt="5px"
          />
          <Image src="/qatar.png" w="25%" h="auto" />
          <Image src="/netflix.png" w="25%" h="auto" />
        </div>
      </div>
      <div className={styles.ctaRightSec}>
        <Image src="/hero.png" w="100%" h="98%" />
      </div>
    </div>
  );
}
