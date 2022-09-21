import React from 'react'
import styles from '../../../styles/compProResume.module.css'
import Image from 'next/image'
import { SimpleGrid, Box, Text } from '@chakra-ui/react'
import Circle from './compComponents/Circle'
import RightCard from './compComponents/RightCard'
import { circleData, cardData } from './ConstantData'
import CardSlider from './compComponents/CardSlider'
import useWindowDimensions from '../../../customHooks/useWindowDimensions'

export default function CompProfessionalResume() {
    const { height, width } = useWindowDimensions()
    const carouselWidth = width - 100;
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} p={{ base: 5, sm: 8, md: 16 }} bg='#f6f5f0'>
            <Box>
                <Text fontSize={{ base: "2.0rem", sm: "2.8rem" }} textAlign={{ base: "center", sm: "left" }} className={styles.headingComp}>The components of a professional resume</Text >
                <div className={styles.resumeImgDiv}>
                    <Image
                        src='/lawyer-resume-example.svg'
                        width={612}
                        height={792}
                        alt='Lawyer Resume Example'
                    />
                    {circleData.map((item, index) => {
                        return (
                            <Circle data={item} key={index} />
                        )
                    })
                    }
                </div>
            </Box>
            <Box pt={8} display= {width >= 767 ?null  : "flex"}  justifyContent = {width >= 767 ? null : "center"}>
                {width >= 767 ?
                        cardData.map((item, index) => {
                            return (
                                <RightCard cardData={item} key={index} />
                            )
                        })
                    : <CardSlider width = {carouselWidth} />
                    }
            </Box >
        </SimpleGrid>
    )
}
