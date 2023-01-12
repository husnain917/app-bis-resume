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
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer"
import Link from "next/link";
import Layout from "../src/Layout";
import CommonButton from "../src/components/commonButton/CommonButton";
import SideBar from "../src/components/sideBar/SideBar";
import styles from "../styles/sideBar.module.css"

export default function ResumeBuild() {

    return (
        <>
            <div >
                <Box w={["100%", "100%", "100%"]} mt={["2%", "2%", "2%"]} display="flex" flexDirection={["column", "column", "row"]} justifyContent="space-around"    >
                    <Box
                        w={["100%","100%","100%", "40%", "40%"]} mt={["2%", "2%", "2%"]} >


                        <Box fontSize={["40px", "50px", "50px"]} color="black" className={"main-heading"}
                            ml={["11%", "8%", "8%"]} mb={["11%", "5%", "5%"]} mt={["0%", "10%", "10%"]} >
                            <Text style={{ fontWeight: "bold" }} >
                                Free Online Resume Builder
                            </Text>
                            <Box mt={"30px"}>
                                <Link href="/templates">
                                    <CommonButton
                                        title="Build My Resume"
                                        hoverCursor={"pointer"}
                                        backgroundColor={"#2CACD5"}
                                        color={"whitesmoke"}

                                        fontSize={[
                                            "1rem",
                                            "1rem",
                                            "1.1rem",
                                            "1.1rem",
                                            "1.1rem",
                                            "1.5rem",
                                        ]}
                                    // hoverBackgroundColor={"red"}
                                    // className={"hoverEffects"}
                                    />
                                </Link>
                            </Box>


                        </Box>



                    </Box>

                    <Box
                        w={["85%","85%","85%", "50%", "50%"]} mt={["2%", "2%", "2%"]}  ml={["11%", "8%", "8%"]}>


                        <Image

                            src={HeadResume}
                            alt={'Image Not Found'}
                        />
                    </Box>

                </Box>




                <Box display="flex" flexDirection={["column", "row", "row"]} justifyContent={["", "space-around", "space-around"]} ml={["11%", "0%", "0%"]} mb={["11%", "5%", "5%"]} mt="5%" >

                    <Box display="flex" flexDirection={["row", "row", "row"]} mt={["3%", "0%"]}>
                        <Text mt={["0%", "0%", "0%"]}>
                            <AiOutlineEdit size='20px' color='#1c2125' />

                        </Text>

                        <Text className="xsmall-heading" color="black" ml={["5px", "7px", "7px"]} >Easy to create and customize </Text>
                    </Box>

                    <Box display="flex" flexDirection={["row", "row", "row"]} mt={["3%", "0%"]}>
                        <Text mt={["0%", "0%", "0%"]} >
                            <GrTemplate size='20px' color='#1c2125' />
                        </Text>

                        <Text className="xsmall-heading" color="black" ml={["5px", "7px", "7px"]}  >Hundreds of free templates and layouts</Text>
                    </Box>
                    <Box display="flex" flexDirection={["row", "row", "row"]} mt={["3%", "0%"]}>
                        <Text mt={["0%", "0%", "0%"]} >
                            <AiOutlineFileImage size='20px' color='#1c2125' />

                        </Text>

                        <Text className="xsmall-heading" color="black" ml={["5px", "7px", "7px"]}  >Professionally designed and formatted</Text>
                    </Box>
                    <Box display="flex" flexDirection={["row", "row", "row"]} mt={["3%", "0%"]}>
                        <Text mt={["0%", "0%", "0%"]} >
                            <AiOutlineFontColors size='20px' color='#1c2125' />

                        </Text>

                        <Text className="xsmall-heading" color="black" ml={["5px", "7px", "7px"]} >Styles for every industry</Text>
                    </Box>
                </Box>
                <hr></hr>


                <Container
                    maxW={["100%", "100%", "100%", "100%"]}
                    display={"flex"}

                >
                    <Box

                        // padding={'70px 0px 0px 0px'}
                        padding={'40px 0px 0px 0px'}
                        display={["none", "none", "none", "block"]}

                        maxW={["0%", "0%", "0%", "10%"]}
                        marginRight="14%"
                        ml="6%"
                    >
                        <Box
                            className={styles.sideBarContainer}
                        >
                            <SideBar />
                        </Box>
                    </Box>
                    <Box
                        maxW={["100%", "100%", "100%", "60%", "60%"]}>
                        <Box marginTop="10%">
                            <Text className={"only-font-family"}
                                fontSize={"16px"} >With BisResumes free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>

                            <Box mt={["7%", "7%", "7%"]}>
                                <Image

                                    src={contentImage}
                                    alt={'Image Not Found'}
                                />
                            </Box>
                            <Text className={"only-font-family"}
                                fontSize={"16px"} mt={["7%", "5%", "5%"]}>Forget spending hours formatting your resume, or choosing complimentary fonts for your cover letter. Creating a resume online with BisResume’s free resume builder will give you a sleek and attractive resume, without the fuss.
                            </Text>
                            <Text className={"only-font-family"}
                                fontSize={"16px"} mt={["5%", "3%", "3%"]}>With BisResumes free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>
                            <Text className={"only-font-family"}
                                fontSize={"16px"} mt={["5%", "3%", "3%"]}>With BisResumes free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                            </Text>
                        </Box>
                        <Box w={["100%", "100%", "100%"]} p={["0%", "0%", "0%", "5%"]} mt={["2%", "2%", "2%"]} display="flex" backgroundColor="#f8f9f9" flexDirection={["column", "column", "row"]} justifyContent="space-around"    >
                            <Box
                                w={["100%", "100%", "100%"]} mt={["2%", "2%", "2%"]} ml={["3%", "0%", "0%"]} >
                                <Text className="sub-heading" fontSize={["1.9em"]} color="black" mb={["5%"]} >How to Make A Resume</Text>
                                <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle1 size={30} color="red" style={{ marginTop: 3 }} /> </Text><Text className={"medium-heading"} color="black" > Open BisResume</Text></Box>
                                <Text className={"only-font-family"} fontSize={["14px", '16px']} marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]} >Open up BisResume and search for Resume to start designing your own.
                                </Text>
                                <Box marginTop="5%">
                                    <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}   > <TbCircle2 size={30} color="red" style={{ marginTop: 3 }} />
                                    </Text><Text className={"medium-heading"} color="black" >Find the right template</Text></Box>
                                    <Text className={"only-font-family"} fontSize={["14px", "16px"]} marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]} >
                                        Choose from hundreds of professionally-designed resume templates. Take your pick from styles like modern or simple layouts or industries like acting, graphic design or more corporate layouts.
                                    </Text>
                                </Box>
                                <Box marginTop="5%">
                                    <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle3 size={30} color="red" style={{ marginTop: 3 }} /> </Text><Text className={"medium-heading"} color="black" >
                                        Personalize your resume
                                    </Text></Box>
                                    <Text fontSize={["14px", "16px"]} className={"only-font-family"} marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]}>
                                        After picking a template, use BisResumes drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.
                                    </Text>
                                </Box>
                                <Box marginTop="5%">
                                    <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle4 size={30} color="red" style={{ marginTop: 3 }} /> </Text><Text
                                        className={"medium-heading"} color="black"
                                    >
                                        Get creative with more features

                                    </Text></Box>
                                    <Text fontSize={["14px", "16px"]} className={"only-font-family"} marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["2%", "2%", "0%"]}>
                                        After picking a template, use BisResumes drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.


                                    </Text>
                                </Box>

                                <Box marginTop="5%">
                                    <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <TbCircle5 size={30} color="red" style={{ marginTop: 3 }} /> </Text><Text className={"medium-heading"} color="black"  >
                                        Order your prints

                                    </Text></Box>
                                    <Text fontSize={["14px", "16px"]} className={"only-font-family"} marginTop="2%" marginLeft={["11%", "5%", "5%"]} mr={["4%", "2%", "0%"]}>
                                        After picking a template, use BisResumes drag and drop design tools to tweak your resume. Change fonts, text and colors in a few clicks. Upload your own photo and rearrange any and all elements as much as you want.
                                    </Text>
                                </Box>

                                <Box mt={["4%", "4%", "4%"]} mb={["4%", "4%", "4%"]} textAlign="center" >
                                    <Box className="cursor">


                                        <Box mt={"30px"}>
                                            <Link href="/templates">
                                                <CommonButton
                                                    title="Build My Resume"
                                                    hoverCursor={"pointer"}
                                                    backgroundColor={"#2CACD5"}
                                                    color={"whitesmoke"}

                                                    fontSize={[
                                                        "1rem",
                                                        "1rem",
                                                        "1.1rem",
                                                        "1.1rem",
                                                        "1.1rem",
                                                        "1.5rem",
                                                    ]}
                                                // hoverBackgroundColor={"red"}
                                                // className={"hoverEffects"}
                                                />
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>


                            </Box>

                        </Box>
                        <>
                            <Container
                                maxW={['100%', '100%', '100%', '100%', '100%']}
                            >
                                <Box marginTop="10%">
                                    <Text className="sub-heading" fontSize={["1.9em"]} mb={["3%"]} >Save time on formatting and editing</Text>
                                    <Text className={"only-font-family"}
                                        fontSize={"16px"}
                                    >
                                        With BisResumes free resume builder, weve taken the heavy lifting out of designing and formatting your resume. Using our flexible templates will save you hours—all you need to do is add your professional experience and customize the existing design as needed.
                                    </Text>

                                    <Text className={"only-font-family"}
                                        fontSize={"16px"}
                                        mt={["5%", "3%", "3%"]}>
                                        Rest assured that BisResumes templates come designer-approved, so you dont have to worry about how they look—because they already look great!
                                    </Text>
                                    <Text className={"only-font-family"}
                                        fontSize={"16px"}
                                        mt={["5%", "3%", "3%"]}>With BisResumes free resume builder, applying for your dream job is easy and fast. Choose from hundreds of free, designer-made templates and customize them within a few clicks.
                                    </Text>



                                    {/* heading 2 */}
                                    <Box marginTop="5%">
                                        <Text className="sub-heading" fontSize={["1.9em"]} mb={["3%"]} >
                                            Create a resume for every industry

                                        </Text>
                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} textAlign="justify" mt={["5%", "3%", "3%"]}>

                                            Whether youre a lawyer who works in the corporate sector or an interior stylist in the creative industry, BisResume’s graphic designers have created a wide range of templates that are suitable for whatever industry you find yourself in.
                                        </Text>

                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} textAlign="justify" mt={["5%", "3%", "3%"]}>
                                            For creative types, we have colorful templates with artistic, illustrative flourishes. Or, if youre after something more formal, you can explore our collection of minimalist templates, sure to impress the most traditional of hiring managers.


                                        </Text>
                                    </Box>

                                    {/* heading 3 */}
                                    <Box marginTop="5%">
                                        <Text className="sub-heading" fontSize={["1.9em"]} mb={["3%"]} >
                                            Present your skills in a unique way


                                        </Text>
                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} textAlign="justify" mt={["5%", "3%", "3%"]}>
                                            On average, recruiters take six seconds to look at a resume. So, if youre looking for a distinctive way to highlight your skills, BisResume’s templates offer unique designs that will help you stand out.


                                        </Text>

                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} mt={["5%", "3%", "3%"]}>
                                            From infographic timelines to one-page pitch decks, and even pie charts, with a few simple clicks you are able to clearly display all your career highlights so far.
                                        </Text>
                                    </Box>

                                    {/* heading 4 */}
                                    <Box marginTop="5%">

                                        <Text className="sub-heading" fontSize={["1.9em"]} mb={["3%"]} >
                                            Save and edit as many versions as you like
                                        </Text>
                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} mt={["5%", "3%", "3%"]} >
                                            One of the most time-consuming elements of applying for new jobs is customizing your cover letter and resume for each new role that you apply for.
                                        </Text>

                                        <Text className={"only-font-family"}
                                            fontSize={"16px"} mt={["5%", "3%", "3%"]}>

                                            With BisResumes free resume builder, all your cover letter and resume designs are saved automatically within the editor.

                                        </Text>
                                        <Text fontSize="20px" mt={["5%", "3%", "3%"]}>
                                            Create multiple versions of your resume, and make small edits where needed.
                                        </Text>
                                    </Box>
                                </Box>

                            </Container>
                        </>
                    </Box>
                </Container>




                <FaqsSection />

                <Box ml={["3%", "3%", "3%"]} mb={["2%", "2%", "2%"]} >
                    <Box ml={["5%"]}>
                        <Box mt={10} mb={10}>
                            <Text
                                fontSize={["2.7em", "2.9em"]}
                                textAlign={"center"}
                                fontWeight={"700"}
                                className="afterHeading"
                                w={["100%", "100%", "27%"]}
                            >
                                Brower Templates
                            </Text>
                        </Box>
                    </Box>

                    <Templates />
                </Box>

            </div>
        </>
    );
}