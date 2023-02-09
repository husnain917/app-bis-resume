
import { Box, Container, Toast } from '@chakra-ui/react'
import React from 'react'
import {
    Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    ChangeEmail,
} from "../../store/actions/AuthAction";
import CommonButton from '../../src/components/commonButton/CommonButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateEmailAddress() {
    const [err, setErr] = useState();
    const [email, setEmail] = useState("");
    const [resetLoading, setResetLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const notify = () => toast("Wow so easy!");
    const validateEmail = (email) => {
        var re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z  A-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const resetEmail = () => {

        if (email === "") {
            setErr(toast.error("Please Fill Email"));
        } else if (validateEmail(email) === false) {
            setErr(toast.error("This Email is not Valid"));
        } else {
            dispatch(ChangeEmail(setLoading, setErr, email));
            setResetLoading(true);
            setTimeout(() => {
                setResetLoading(false);
                setEmail("")
            }, 3000);
        }
    };
    
    return (

        <div>

            <Box minW={["100%", "100%", "100%", "100%"]} display={"flex"} justifyContent={["center"]} backgroundColor="#1F262E" >

                <Box h="50%" w={["90%", "90%", "70%", "70%", "50%", "50%"]} backgroundColor="#313B47" mt="5%" mb="5%"  >
                    <Box w={["100%", "100%", "100%", "100%"]} display={"flex"} justifyContent={["center"]} >

                        <Input
                            variant="outline"
                            focusBorderColor="#00C8AA"
                            placeholder="Enter a New Email"
                            bgColor="#E1E1E1"
                            mt={"100px"}
                            w={["90%", "90%", "70%", "70%", "50%", "50%"]}

                            h="50px"
                            pt="10px"
                            pb="10px"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Box>
                    {/* Next Buttons */}
                    <Box display={"flex"} alignItems={["center", "center", 'center', "center"]} flexDirection={"column"}>
                        <Box mt="3%" mb="10%" objectFit={"cover"} w={["60%", "60%", "30%", "30%", "30%", "30%"]} >
                            <CommonButton
                                title={resetLoading ? "loading...." : "Change Email"}
                                backgroundColor="   #00C8AA"
                                color="white"
                                mt="5%"
                                onClick={resetEmail}
                            />
                            <ToastContainer />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}