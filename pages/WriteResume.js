
import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import styles from "../styles/writeResume.module.css"
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import Footer from "../src/components/footer/Footer";
import Navbar from "../src/components/navbar/Navbar";
import { Button, Container } from '@chakra-ui/react'
import { GrMail } from "react-icons/gr";
import { Si1Password } from "react-icons/si";
import { AiOutlineEdit, AiOutlineFileImage, AiOutlineFontColors } from "react-icons/ai";
import WriteImage from "../public/WriteImage.png";
import HeaderWrite from "../public/HeaderWrite.png"
import HeaderResume from "../public/HeaderResume.png"
import laptop from "../public/laptop.png";
import Advantages from "../src/components/advantages/Advantages";




export default function WriteResume() {

    return (
        <>
            <Navbar />
            <div >
                {/* <Box
                    w={["100%", "100%", "80%",]}

                    display="flex"
                    flexDirection={["column", "column", "row"]}
                    m={["2%", "auto", "auto"]}>
                    <Box w={["100%", "100%", "30%",]}
                        m={["0px", "auto", "auto"]}
                        mb={["5%", "5%", "5%"]}
                        className={styles.firstBox} >
                        <h2 className={styles.basicHeading}>Basic</h2>
                        <div style={{ textAlign: "center", marginTop: "20%" }}>
                            <h3 style={{ fontSize: "30px", marginTop: "20%", fontWeight: "bold", color: "white" }}>Free</h3>
                            <h3 style={{ fontSize: "20px", marginTop: "20%", color: "white" }}>One Page Resume</h3>
                            <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}>Predefined Layouts</h3>
                            <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}>One Resume</h3>
                            <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}><del>Cover letter</del></h3>
                        </div>
                    </Box>

                </Box> */}






                {/* frequently asked qu */}
                <Box w={["100%", "100%", "100%"]} mt={["2%", "2%", "2%"]} display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-around"    >
                    <Box
                        w={["100%", "50%", "50%"]} mt={["2%", "2%", "2%"]} >


                        <Box fontSize={["40px", "60px", "60px"]} ml={["11%", "8%", "8%"]} mb={["11%", "5%", "5%"]} mt={["0%", "10%", "10%"]} >
                            <Text style={{ fontWeight: "bold" }} >
                                Free Online Resume Builder


                            </Text>
                            <Button backgroundColor='#006772' color="white" _hover="red" >Build my Resume</Button>


                        </Box>



                    </Box>

                    <Box
                        w={["100%", "50%", "50%"]} mt={["2%", "2%", "2%"]} >


                        <Image

                            src={HeaderResume}
                            alt={'Image Not Found'}
                        />




                    </Box>

                </Box>




                <Box display="flex" flexDirection={["column", "row", "row"]} justifyContent={["", "space-around", "space-around"]} ml={["11%", "0%", "0%"]} mb={["11%", "5%", "5%"]} mt="5%" >

                    <Box display="flex" flexDirection={["row", "row", "row"]}>
                        <Text mt={["2%", "2%", "2%"]}>
                            <AiOutlineEdit size='20px' color='#1c2125' />

                        </Text>

                        <Text fontSize="20px" ml={["5px", "7px", "7px"]} >Easy to create and customize </Text>
                    </Box>

                    <Box display="flex" flexDirection={["row", "row", "row"]}>
                        <Text mt={["2%", "2%", "2%"]} >
                            <AiOutlineEdit size='20px' color='#1c2125' />
                        </Text>

                        <Text fontSize="20px" ml={["5px", "7px", "7px"]}  >Hundreds of free templates and layouts</Text>
                    </Box>
                    <Box display="flex" flexDirection={["row", "row", "row"]}>
                        <Text mt={["2%", "2%", "2%"]} >
                            <AiOutlineFileImage size='20px' color='#1c2125' />

                        </Text>

                        <Text fontSize="20px" ml={["5px", "7px", "7px"]}  >Professionally designed and formatted</Text>
                    </Box>
                    <Box display="flex" flexDirection={["row", "row", "row"]}>
                        <Text mt={["2%", "2%", "2%"]} >
                            <AiOutlineFontColors size='20px' color='#1c2125' />

                        </Text>

                        <Text fontSize="20px" ml={["5px", "7px", "7px"]} >Styles for every industry</Text>
                    </Box>


                </Box>
                <hr></hr>

                <>
                    <Container
                        maxW={['100%', '100%', '100%', '80%', '60%']}
                    >
                        <Box marginTop="10%">
                            <Text fontSize="20px">With Canva’s free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.

                            </Text>

                            <Box mt={["7%", "7%", "7%"]}>
                                <Image

                                    src={WriteImage}
                                    alt={'Image Not Found'}
                                />
                            </Box>
                            <Text fontSize="20px" mt={["7%", "7%", "7%"]}>Forget spending hours formatting your resume, or choosing complimentary fonts for your cover letter. Creating a resume online with Canva’s free resume builder will give you a sleek and attractive resume, without the fuss.
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canva’s free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canva’s free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>







                        </Box>
                    </Container>
                </>


                <Box w={["100%", "100%", "100%"]} mt={["2%", "2%", "2%"]} display="flex" backgroundColor="#f8f9f9" flexDirection={["column", "column", "row"]} justifyContent="space-around"    >
                    <Box
                        w={["100%", "40%", "40%"]} mt={["2%", "2%", "2%"]} >


                        <Box fontSize={["40px", "60px", "60px"]} ml={["11%", "8%", "8%"]} mb={["11%", "5%", "5%"]} mt={["0%", "10%", "10%"]} position="relative">

                            <Box >
                                <Image

                                    src={laptop}
                                    alt={'Image Not Found'}
                                />
                            </Box>

                            <Box position="absolute" top="0%" justifyContent={["center", "", ""]} height="380" width="fit-content">
                                {/* <iframe src="https://www.youtube.com/embed/xNRJwmlRBNU" title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                            </Box>

                        </Box>



                    </Box>

                    <Box
                        w={["100%", "50%", "50%"]} mt={["2%", "2%", "2%"]}  >


                        <Text fontSize="24" fontWeight="bold" color="black" mb={["5%"]} >How to Make A Resume</Text>

                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  > Open Canva</Text></Box>
                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]}>Open up Canva and search for "Resume" to start designing your own.
                        </Text>



                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}   > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >Find the right template</Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} >
                                Choose from hundreds of professionally-designed resume templates. Take your pick from styles like modern or simple layouts or industries like acting, graphic design or more corporate layouts.


                            </Text>
                        </Box>


                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Personalize your resume
                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]}>
                                After picking a template, use Canva’s drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.


                            </Text>
                        </Box>

                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Personalize your resume
                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]}>
                                After picking a template, use Canva’s drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.


                            </Text>
                        </Box>
                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Personalize your resume
                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]}>
                                After picking a template, use Canva’s drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.
                            </Text>
                        </Box>

                    </Box>
                </Box>




                <>
                    <Container
                        maxW={['100%', '100%', '100%', '80%', '60%']}
                    >
                        <Box marginTop="10%">
                            <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >Save time on formatting and editing</Text>
                            <Text fontSize="20px">
                                With Canva’s free resume builder, we’ve taken the heavy lifting out of designing and formatting your resume. Using our flexible templates will save you hours—all you need to do is add your professional experience and customize the existing design as needed.
                            </Text>

                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>
                                Rest assured that Canva’s templates come designer-approved, so you don’t have to worry about how they look—because they already look great!
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canva’s free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>



                            {/* heading 2 */}
                            <Box marginTop="8%">
                                <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >
                                    Create a resume for every industry

                                </Text>
                                <Text fontSize="20px">

                                    Whether you’re a lawyer who works in the corporate sector or an interior stylist in the creative industry, Canva’s graphic designers have created a wide range of templates that are suitable for whatever industry you find yourself in.
                                </Text>

                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>
                                    For creative types, we have colorful templates with artistic, illustrative flourishes. Or, if you’re after something more formal, you can explore our collection of minimalist templates, sure to impress the most traditional of hiring managers.


                                </Text>
                            </Box>

                            {/* heading 3 */}
                            <Box marginTop="8%">
                                <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >
                                    Present your skills in a unique way


                                </Text>
                                <Text fontSize="20px">
                                    On average, recruiters take six seconds to look at a resume. So, if you’re looking for a distinctive way to highlight your skills, Canva’s templates offer unique designs that will help you stand out.


                                </Text>

                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>
                                    From infographic timelines to one-page pitch decks, and even pie charts, with a few simple clicks you are able to clearly display all your career highlights so far.
                                </Text>
                            </Box>

                            {/* heading 4 */}
                            <Box marginTop="8%">

                                <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >
                                    Save and edit as many versions as you like



                                </Text>
                                <Text fontSize="20px">
                                    One of the most time-consuming elements of applying for new jobs is customizing your cover letter and resume for each new role that you apply for.



                                </Text>

                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>

                                    With Canva’s free resume builder, all your cover letter and resume designs are saved automatically within the editor.

                                </Text>
                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>

                                    Create multiple versions of your resume, and make small edits where needed.


                                </Text>
                            </Box>








                        </Box>
                    </Container>
                </>








                {/* 
                <Box backgroundColor="#E8E8E8"
                    mt={["8%", "8%", "8%"]}
                    display="flex" flexDirection={["column", "row", "row"]}
                    p={["2%", "0%", "0%"]} >
                    <Box ml={["3%", "3%", "15%"]} w={["100%", "50%", "30%"]} >
                        <Text fontSize={["26px", "40px", '40px']} pt={["5%", '5%', "10%"]} fontWeight={["bold", "bold", "bold"]} >Have a particular question?</Text>
                        <Text fontSize="18px" marginTop={["5%", "5%", "8%"]} >No, our pricing model is not subscription based. Therefore, you will not be charged automatically without your consent.</Text>
                        <Box display="flex" flexDirection="row" mt={["5%", "5%", '8%']}><Text marginRight="5px"  > <AiOutlineMail size={25} color="red" /> </Text><Text fontSize="18px"  >contact@bisresume.com</Text></Box>
                    </Box>
                    <Box ml={["2px", "2px", "15%"]} w={["100%", "50%", "70%"]} mt={["8%", "8%", "8%"]}  >
                    </Box>
                </Box> */}
            </div>
        </>
    );
}
