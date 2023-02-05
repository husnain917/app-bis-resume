import { Box, Container, Toast } from '@chakra-ui/react'
import React from 'react'
import {
    Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    passwordReset,
} from "../../store/actions/AuthAction";
import CommonButton from '../../src/components/commonButton/CommonButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateProfileDatai } from '../../store/actions/AuthAction';




export default function EditAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [resetLoading, setResetLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const notify = () => toast("Wow so easy!");


    const updateUserAccount = () => {
        dispatch(UpdateProfileDatai(firstName, lastName))
    }




    return (
        <div>

            <Box minW={["100%", "100%", "100%", "100%"]} display={"flex"} justifyContent={["center"]} backgroundColor="#1F262E" >

                <Box h="50%" w={["90%", "90%", "70%", "70%", "50%", "50%"]} backgroundColor="#313B47" mt="5%" mb="5%"  >
                    <Box w={["100%", "100%", "100%", "100%"]} display={"flex"} justifyContent={["center"]} flexDirection="column" >
                        <Box display={"flex"} flexDirection="column" justifyContent={"center"} alignItems="center">
                            <Input
                                variant="outline"
                                focusBorderColor="#00C8AA"
                                placeholder="first Name"
                                bgColor="#E1E1E1"
                                mt={"100px"}
                                w={["90%", "90%", "70%", "70%", "50%", "50%"]}

                                h="50px"

                                pt="10px"
                                pb="10px"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <Input
                                variant="outline"
                                focusBorderColor="#00C8AA"
                                placeholder="last Name"
                                bgColor="#E1E1E1"
                                mt={"30px"}
                                w={["90%", "90%", "70%", "70%", "50%", "50%"]}

                                h="50px"

                                pt="10px"
                                pb="10px"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />



                        </Box>
                        {/* Next Buttons */}
                        <Box display={"flex"} alignItems={["center", "center", 'center', "center"]} flexDirection={"column"}>
                            <Box mt="3%" mb="10%" objectFit={"cover"} w={["60%", "60%", "30%", "30%", "30%", "30%"]} >
                                <CommonButton
                                    title={resetLoading ? "loading...." : "Update Data"}
                                    backgroundColor="   #00C8AA"
                                    color="white"
                                    mt="5%"
                                    onClick={updateUserAccount}
                                />
                                <ToastContainer />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}