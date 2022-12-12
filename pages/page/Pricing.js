import { Text, Box, Container } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/pricing.module.css";
import basic from "../../public/basic.png";
import Image from 'next/image'
import SliderComponent from "../../src/components/sliderComponent/SliderComponent"
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import bottomprice from '../../public/bottomPrice.png';
import Sidebar from "../../src/components/blog/Sidebar"

export default function Pricing() {

    return (
        <>

            <Box
                maxW={["100%", "100%", "100%", "100%"]}
                display={"flex"}
            >
                <Box
                    maxW={["0%", "0%", "0%", "10%"]}
                >
                    <Sidebar />
                </Box>
                <Box
                    maxW={["100%", "100%", "100%", "100%"]}
                >
                    <div style={{ marginTop: "5%", }}>
                        <Box
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
                                    <Image src={basic} height='150px' width='200px' style={{ alignSelf: "center", flexDirection: "row" }} />
                                    <h3 style={{ fontSize: "30px", marginTop: "20%", fontWeight: "bold", color: "white" }}>Free</h3>
                                    <h3 style={{ fontSize: "20px", marginTop: "20%", color: "white" }}>One Page Resume</h3>
                                    <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}>Predefined Layouts</h3>
                                    <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}>One Resume</h3>
                                    <h3 style={{ fontSize: "20px", marginTop: "5%", color: "white" }}><del>Cover letter</del></h3>
                                </div>
                            </Box>

                        </Box>



                        <Box m={["0% 10%"]}  >
                            <SliderComponent />
                        </Box>

                        {/* frequently asked qu */}

                        <Box
                            w={["100%", "100%", "100%"]} mt={["3%", "3%", "6%"]} >

                            <Text style={{ fontWeight: "bold" }} fontSize={["30px", "30px", "40px"]} ml={["11%", "15%", "15%"]}
                            >Frequently asked questions
                            </Text>


                            <Box display="flex" flexDirection={["column", "column", "row"]} ml={["1%", "1%", "15%"]} w={["100%", "100%", "70%"]}>
                                <Box w={["100%", "100%", "50%"]} >


                                    <Box marginTop="5%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  > Will my Premium account renew automatically?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]}>No, our pricing model is not subscription based. Therefore, you will not be charged automatically without your consent.
                                        </Text>
                                    </Box>


                                    <Box marginTop="5%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}   > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >Are there any hidden costs?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]} >
                                            There are no hidden costs. After selecting the period, the total price that you will be charged can be seen before introducing any payment details.
                                        </Text>
                                    </Box>


                                    <Box marginTop="5%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  > Can I try before I buy?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]}>Most of the Premium features (they have a White star next to them) can be tested in the Basic account.
                                        </Text>
                                    </Box>

                                </Box>


                                <Box ml={["2px", "2px", "5%"]} mr={["8px", "8px", "5%"]} w={["100%", "100%", "50%"]}  >
                                    <Box marginTop="5%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]} > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >Will my information be saved after the Premium period expires?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]} >All the information will be saved in your account, even when the Premium period expires.
                                        </Text>
                                    </Box>

                                    <Box marginTop="10%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}   > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >Is my payment information secure?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]}>All transactions are 100% secure, with the option to pay through stripe.com and paypal.com, both having the highest levels of security measures that are available.
                                        </Text>
                                    </Box>
                                    <Box marginTop="5%">
                                        <Box display="flex" flexDirection="row"><Text marginRight={["12px", "5px", "5px"]}  > <AiOutlineQuestionCircle size={30} color="red" /> </Text><Text fontSize="20px" fontWeight="800"  >What format will the documents be saved as?</Text></Box>
                                        <Text fontSize="18px" marginTop="2%" marginLeft={["11%", "7%", "7%"]} >For increased security, readability and overall visual aspect, all the documents are saved as PDFs - which is a format that looks the same on all devices.
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>





                    </div>
                </Box>
            </Box>

            <Box backgroundColor="#E8E8E8"

                mt={["8%", "8%", "8%"]}
                display="flex" flexDirection={["column", "row", "row"]}
            >
                <Box ml={["3%", "3%", "15%"]} w={["100%", "50%", "30%"]} >
                    <Text fontSize={["26px", "40px", '40px']} pt={["5%", '5%', "10%"]} fontWeight={["bold", "bold", "bold"]} >Have a particular question?</Text>
                    <Text fontSize={["16px", "18px", "18px"]} marginTop={["5%", "5%", "8%"]} >No, our pricing model is not subscription based. Therefore, you will not be charged automatically without your consent.</Text>
                    <Box display="flex" flexDirection="row" mt={["5%", "5%", '8%']} mb={["5%"]}
                    ><Text marginRight="5px"  > <AiOutlineMail size={25} color="red" /> </Text><Text fontSize="18px"  >contact@bisresume.com</Text></Box>
                </Box>
                <Box ml={["2px", "2px", "15%"]} w={["100%", "50%", "70%"]} mt={["8%", "8%", "8%"]}  >
                    <Image src={bottomprice} height='250px' width='400px' />
                </Box>
            </Box>
        </>
    );
}
