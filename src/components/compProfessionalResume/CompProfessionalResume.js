import React from 'react'
import styles from '../../../styles/compProResume.module.css'
import Image from 'next/image'
import { SimpleGrid, Box,Text } from '@chakra-ui/react'
import Circle from './compComponents/Circle'

export default function CompProfessionalResume() {
    return (
        <SimpleGrid columns={{base:1,md:2}} spacing={5} p={{base:5,md:16}}  bg='#f6f5f0'>
            <Box border='1px'>
                <Text fontSize={{base:"2.0rem",sm:"3rem"}} textAlign={{base:"center",sm:"left"}} className={styles.headingComp}>The components of a professional resume</Text >
                <div className={styles.resumeImgDiv}>
                    <Image
                        src='/lawyer-resume-example.svg'
                        width={612}
                        height={792}
                        alt='Lawyer Resume Example'
                    />
                    <Circle customStyle={{bgColor:"#abd5dc", top: "12%", color:"black"}} text="1"/>
                    <Circle customStyle={{bgColor:"#efc778", top: "24%", color:"black"}} text="2"/>
                    <Circle customStyle={{bgColor:"#ff8873", top: "45%", color:"black"}} text="3"/>
                    <Circle customStyle={{bgColor:"#394d6b", top: "60%", color:"white"}} text="4"/>
                    <Circle customStyle={{bgColor:"#6bb6c2", top: "88%",color:"black"}} text="5"/>
                </div>
            </Box>
            <Box border='1px' >container12</Box >
        </SimpleGrid>
    )
}
