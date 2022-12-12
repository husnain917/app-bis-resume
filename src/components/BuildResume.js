import styles from "../../styles/build.module.css"
import { Button, Box } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'
import ImageBuild from "../../public/mainImageBuild.webp"
import Link from "next/link";


export default function BuildResume() {
    return (
        <>
            <div className={styles.ctsMain}>
                <h1 className={styles.ctaHeading}>Ready to Jump-Start Your Career</h1>

                <Box className={styles.ctaHr} mt={2} mb={3}></Box>

                <div >
                    <Box className="cursor">
                        <Link href="/templates">

                            <Button className={styles.ctaBtn} bg="#2CACD5" colorScheme="#2CACD5" borderRadius="20px" fontWeight="bold" color="white" rightIcon={<FaArrowRight color="white" fontWeight="bold" />} mt={5} mb={1}>
                                Build Your Resume
                            </Button>
                        </Link>
                    </Box>
                    <p>No credit card required</p>


                </div>
                <div>

                </div>

            </div>

            <div className={styles.ctaImageDiv}>
                <Image src={ImageBuild} />
                <div className={styles.ctaWaveBlind}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="	#e5e5e5" fill-opacity="1" d="M0,224L80,240C160,256,320,288,480,261.3C640,235,800,149,960,149.3C1120,149,1280,235,1360,277.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>

            </div>

        </>
    )
}

