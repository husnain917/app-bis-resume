

import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import { Button, Container } from '@chakra-ui/react'
import { GrMail } from "react-icons/gr";
import { Si1Password } from "react-icons/si";
import { AiOutlineEdit, AiOutlineFileImage, AiOutlineFontColors } from "react-icons/ai";
import contentImage from "../public/contentImage.png"
import HeadResume from "../public/HeaderResume.png"
import FaqsSection from "../src/components/faqsComponent/FaqsSection";
import Templates from "./templates";
import { GrTemplate } from "react-icons/gr"
import { TbCircle1, TbCircle2, TbCircle3, TbCircle4, TbCircle5 } from "react-icons/tb"

export default function ResumeBuild() {

    return (
        <>
            <div >
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

                            src={HeadResume}
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
                            <GrTemplate size='20px' color='#1c2125' />
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
                            <Text fontSize="20px">With Canvas free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.

                            </Text>

                            <Box mt={["7%", "7%", "7%"]}>
                                <Image

                                    src={contentImage}
                                    alt={'Image Not Found'}
                                />
                            </Box>
                            <Text fontSize="20px" mt={["7%", "7%", "7%"]}>Forget spending hours formatting your resume, or choosing complimentary fonts for your cover letter. Creating a resume online with Canva’s free resume builder will give you a sleek and attractive resume, without the fuss.
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canvas free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canvas free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>
                        </Box>
                    </Container>
                </>


                <Box w={["100%", "100%", "100%"]} mt={["2%", "2%", "2%"]} display="flex" backgroundColor="#f8f9f9" flexDirection={["column", "column", "row"]} justifyContent="space-around"    >



                    <Box
                        w={["100%", "50%", "50%"]} mt={["2%", "2%", "2%"]} ml={["3%", "0%", "0%"]} >


                        <Text fontSize="28px" fontWeight="bold" color="black" mb={["5%"]} >How to Make A Resume</Text>

                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle1 size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  > Open Canva</Text></Box>
                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]} >Open up Canva and search for Resume to start designing your own.
                        </Text>



                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}   > <TbCircle2 size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >Find the right template</Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]} >
                                Choose from hundreds of professionally-designed resume templates. Take your pick from styles like modern or simple layouts or industries like acting, graphic design or more corporate layouts.


                            </Text>
                        </Box>


                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle3 size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Personalize your resume
                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]}>
                                After picking a template, use Canvas drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.


                            </Text>
                        </Box>

                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle4 size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Get creative with more features

                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]}>
                                After picking a template, use Canvas drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.


                            </Text>
                        </Box>
                        <Box marginTop="5%">
                            <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle5 size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >
                                Order your prints

                            </Text></Box>
                            <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]}>
                                After picking a template, use Canvas drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.
                            </Text>
                        </Box>
                        <Box mt={["3%", "3%", "3%"]} mb={["3%", "3%", "3%"]} marginLeft={["11%", "5%", "5%"]}>
                            <Button backgroundColor='red' color="white" _hover="red" >Build my Resume</Button>

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
                                With Canvas free resume builder, weve taken the heavy lifting out of designing and formatting your resume. Using our flexible templates will save you hours—all you need to do is add your professional experience and customize the existing design as needed.
                            </Text>

                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>
                                Rest assured that Canvas templates come designer-approved, so you dont have to worry about how they look—because they already look great!
                            </Text>
                            <Text fontSize="20px" mt={["5%", "5%", "5%"]}>With Canvas free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>



                            {/* heading 2 */}
                            <Box marginTop="8%">
                                <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >
                                    Create a resume for every industry

                                </Text>
                                <Text fontSize="20px">

                                    Whether youre a lawyer who works in the corporate sector or an interior stylist in the creative industry, Canva’s graphic designers have created a wide range of templates that are suitable for whatever industry you find yourself in.
                                </Text>

                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>
                                    For creative types, we have colorful templates with artistic, illustrative flourishes. Or, if youre after something more formal, you can explore our collection of minimalist templates, sure to impress the most traditional of hiring managers.


                                </Text>
                            </Box>

                            {/* heading 3 */}
                            <Box marginTop="8%">
                                <Text fontSize="26px" fontWeight="bold" mb={["5%"]} >
                                    Present your skills in a unique way


                                </Text>
                                <Text fontSize="20px">
                                    On average, recruiters take six seconds to look at a resume. So, if youre looking for a distinctive way to highlight your skills, Canva’s templates offer unique designs that will help you stand out.


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

                                    With Canvas free resume builder, all your cover letter and resume designs are saved automatically within the editor.

                                </Text>
                                <Text fontSize="20px" mt={["5%", "5%", "5%"]}>

                                    Create multiple versions of your resume, and make small edits where needed.


                                </Text>
                            </Box>
                        </Box>
                    </Container>
                </>
                <Box style={{ borderBottom: "1px solid black" }} >
                    <Text style={{ fontWeight: "bold", textAlign: "center" }} fontSize={["30px", "45px", "45px",]} w={["100%",]} marginTop={["8%", "10%", "10%"]} mb={["5%", "8%", "8%"]}  >
                        Frequently Asked Questions
                    </Text>


                    <FaqsSection />


                </Box>
                <Box ml={["3%", "3%", "3%"]}>
                    <Text style={{ fontWeight: "bold", }} fontSize={["30px", "45px", "45px",]} w={["100%",]} marginTop={["5%", "5%", "5%"]} mb={["4%", "5%", "5%"]}  >
                        Browse Templates

                    </Text>

                    <Templates />
                </Box>
            </div>
        </>
    );
}