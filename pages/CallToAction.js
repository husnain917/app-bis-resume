import React from "react";
import styles from "../styles/Index.module.css";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaLeftSec}>
        <h1 className={styles.ctaHeading}>
          Get hired faster with our resume builder!
        </h1>
        <button className={styles.ctaHeroButton}>Build Your Resume</button>
        <p className={styles.ctaText}>
          Some of Our Customers have been hired by:
        </p>
        <div className={styles.heroIconImgs}>
          <Image src="/amazon.png" 
          width={100} height={40}
          style={{marginTop:5}}
          />
          <Image src="/qatar.png"  width={100} height={40} 
         
           />
          <Image src="/netflix.png" width={100} height={50} 
        
           />
        </div>
      </div>
      <div className={styles.ctaRightSec}>
        <Image
          src="/hero.png"
          layout="responsive"
          width={500}
          height={360}
          alt="Picture of the author"
       style={{
      
      }
       }
        />
      </div>
    </div>
  );
}
