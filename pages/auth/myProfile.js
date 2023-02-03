import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../src/components/footer/Footer";
import Navbar from "../../src/components/navbar/Navbar";
import Style from "../../styles/profile.module.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import { CgProfile, CgNotes } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFolder2 } from "react-icons/bs";
import { TbArrowBack } from "react-icons/tb";
import url from "../../config/endpoint";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { EmailIcon } from "@chakra-ui/icons";
import { MdOutlineEmail } from "react-icons/md";
import ImageSelector from "../../src/components/imageSelector";
import ImageCrop from "../../src/components/Crop/ImageCrop";
import UseProfileImage from "./useProfileImage";
import { useEffect, useRef } from "react";
import { onBlurField } from "../../store/actions/builderAction";
import { useDispatch } from "react-redux";
import { canvasPreview } from "../../src/components/canvasPreview";
import UseModal from "./useModal";
import CommonButton from "../../src/components/commonButton/CommonButton";
// import { UseModal } from "./useModal";

const Profile = () => {
  const userData = useSelector((store) => store.AuthReducer.user);
  console.log(userData);
  const [isOpen, setisOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [crop, setCrop] = useState();
  const imgRef = useRef(null);
  const uploadedImage = React.useRef(null);
  const isUserLoggedIn = useSelector(
    (store) => store.AuthReducer.isUserLoggedIn
  );
  const router = useRouter();
  if (!isUserLoggedIn) {
    router.push("/");
  }
  // const [preview, setPreview] = useState(userData?.picture);

  const imageChange = (e) => {
    // setPreview(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length !== 0) {
      setPicture(URL.createObjectURL(e.target.files[0]));
      setisOpen(true);
    } else {
      setPicture("");
    }
  };
  const onDone = async () => {
    setisOpen(false);
    const result = await canvasPreview(imgRef.current, crop, scale, rotate);
    const { current } = uploadedImage;
    current.src = result;
    dispatch(onBlurField(result, "profile.profileImage"));
  };

  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [picture, setPicture] = useState(userData?.picture || "");
  const [family_name, setFamilyName] = useState(userData.family_name || "");
  const [given_name, setGivenName] = useState(userData?.given_name || "");
  const [changeImage, setChangeImage] = useState(true);
  const [updateEmail, setUpdateEmail] = useState(false);
  console.log("CHANGE IMAGE", changeImage);
  const [verified_email, setVerifiedEmail] = useState(
    userData?.verified_email || ""
  );
  const removeSelectedImage = () => {
    setPicture("/uploadpic1.png");
  };

  // useEffect(() => {
  //   setName(userData?.name);
  //   setEmail(userData?.email);
  //   setPicture(userData?.picture);
  //   setFamilyName(userData?.family_name);
  //   setGivenName(userData?.given_name);
  //   setVerifiedEmail(userData?.verified_email);
  // }, []);

  return (
    <>
      {/* ~~~~~~~~~~~~~~ User Profile Page ~~~~~~~~~~~~~~ */}
      <VStack transition={"10sec"}>
        {/* =============== User Name =============== */}
        <Text
          color={"#313B47"}
          fontSize={{ base: "20px", md: "30px" }}
          fontWeight={700}
        >
          {name && name}
        </Text>
        {/* ________________ Upload and Delete Image Section ________________ */}
        <Box
          h={"30px"}
          w={"132px"}
          className={`${Style.uploadPhoto}`}
          display="flex"
          flexDir={"row"}
        >
          {isOpen && (
            <ImageCrop
              isOpen={isOpen}
              onClose={() => setisOpen(false)}
              crop={crop}
              setCrop={setCrop}
              src={picture}
              onDone={onDone}
              imgRef={imgRef}
            />
          )}
          <FormLabel
            className={`${Style.photo}`}
            fontSize={13}
            fontWeight="400"
            h="full"
            borderLeftRadius={"5px"}
          >
            <Text position={"absolute"} top="50%" ml={"5px"} mt="-11px">
              Upload Photo
            </Text>

            <Input
              type={"file"}
              display="none"
              accept="image/*"
              onChange={imageChange}
            />
          </FormLabel>
          <Box
            className={`${Style.del}`}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            borderRightRadius={"3.5px"}
          >
            <RiDeleteBin6Fill
              size={20}
              color="white"
              onClick={removeSelectedImage}
            />
          </Box>
        </Box>
        {/* =============== Avatar Section =============== */}
        <UseProfileImage
          image={picture ? picture : "/uploadpic1.png"}
          className={`${Style.avatar}`}
          borderWidth={"1px"}
          minWidth={"120px"}
          minHeight={"120px"}
          maxWidth={"120px"}
          maxHeight={"120px"}
          changeImage={changeImage}
        />
      </VStack>
      {/* =============== Account Type =============== */}

      <Box bg="#1f262e" py={"60px"} mt={"-60px"} className={`${Style.rotate}`}>
        <Box className={`${Style.rotate1}`}>
          <VStack w={"full"} p={"20px 0px"} justifyContent="stretch">
            <HStack>
              <Box>
                <Text
                  color={"#9B9B9B"}
                  textAlign="right"
                  fontSize={{ base: "12px", md: "14px" }}
                  m={"3px 3px"}
                >
                  Account Type
                </Text>
                <Text
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight={"700"}
                  textAlign="right"
                  m={"3px 3px"}
                >
                  Basic
                </Text>
              </Box>
              <Box w={"0.5px"} bg={"#9B9B9B"} h="40px"></Box>
              <Box>
                <Text
                  color={"#9B9B9B"}
                  textAlign="left"
                  fontSize={{ base: "12px", md: "14px" }}
                  m={"3px 3px"}
                >
                  Valid until
                </Text>
                <Text
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px" }}
                  fontWeight={"700"}
                  textAlign="left"
                  m={"3px 3px"}
                >
                  Unlimited
                </Text>
              </Box>
            </HStack>
            {/* _______________ Upgrade Now Section ________________ */}
            <HStack
              p={"20px"}
              w={{ base: "85vw", md: "600px", lg: "800px" }}
              bg="#313B47"
              borderRadius={4}
              h={{ sm: "160px", md: "80px" }}
              position={"relative"}
            >
              {/* =============== Rocket Image =============== */}
              <Image
                src="https://d.novoresume.com/images/account/rocket.png"
                alt="Rocket Image"
                className={`${Style.rocket}`}
              />
              <Stack
                direction={{ base: "column", md: "row" }}
                alignItems="center"
              >
                <Box>
                  <Text color={"#fff"} fontWeight="700" fontSize={[16, 21]}>
                    Skyrocket your Career!
                  </Text>
                  <Text color={"#fff"} fontSize={[11, 15]}>
                    11 extra features at your disposal.
                  </Text>
                </Box>
                <Link href={"/page/pricing-resume"}>
                  <Button
                    bg="#00C8AA"
                    size="lg"
                    position={{ base: "static", md: "absolute" }}
                    right={4}
                    borderRadius="20px"
                    h={"40px"}
                    color={"#fff"}
                    fontSize={{ sm: "14px", md: "16px" }}
                    className={`${Style.btn}`}
                    _hover={{ bg: "#00C8AA" }}
                  >
                    Upgrade Now
                  </Button>
                </Link>
              </Stack>
            </HStack>
            {/* _______________ Tab Section _______________ */}
            <Stack direction={"column"} pt={{ base: "5vh", md: "10vh" }}>
              <Stack direction={{ base: "column", md: "row" }} gap="1vw">
                {/* =============== Account Section =============== */}
                <Box
                  h={{ base: "260px", md: "200px" }}
                  bg="#313B47"
                  w={{ base: "85vw", md: "40vw" }}
                  borderRadius={4}
                  p={"20px"}
                  mt={{ base: "4px", md: "0px" }}
                >
                  <HStack>
                    <CgProfile size={34} color="#fff" />
                    <Text
                      fontSize={{ base: 18, md: 24 }}
                      fontWeight="700"
                      color="#fff"
                      letterSpacing={"0.5px"}
                    >
                      Account
                    </Text>

                    <Text
                      fontSize={{ base: 14, md: 16 }}
                      fontWeight="600"
                      color={"#00c8aa"}
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      <UseModal
                        margin={"6px 0 0 0"}
                        onOpen={updateEmail}
                        title={"Edit"}
                      />
                    </Text>
                  </HStack>
                  <Stack direction={{ base: "column", md: "row" }} mt={2}>
                    <Box w={"50%"}>
                      <Text color={"#9B9B9B"} fontSize={"18px"} mt={4}>
                        Given Name
                      </Text>
                      <Text color="#fff" fontSize={14} fontWeight="500">
                        {family_name}
                      </Text>
                    </Box>
                    <Box w={{ base: "100%", md: "50%" }}>
                      <Text color={"#9B9B9B"} fontSize={"18px"} mt={4}>
                        Family Name
                      </Text>
                      <Text color="#fff" fontSize={14} fontWeight="500">
                        {given_name}
                      </Text>
                    </Box>
                  </Stack>
                  <Box mt={2}>
                    <Text color={"#9B9B9B"} fontSize={"18px"}>
                      Birthday
                    </Text>
                    <Text color="#fff" fontSize={14} fontWeight="500">
                      Not Given
                    </Text>
                  </Box>
                </Box>
                {/* =============== Security Section =============== */}
                <Box
                  h={"200px"}
                  bg="#313B47"
                  w={{ base: "85vw", md: "40vw" }}
                  borderRadius={4}
                  p={"15px"}
                >
                  <HStack>
                    <BiLock size={34} color="#fff" />
                    <Text
                      fontSize={{ base: 18, md: 24 }}
                      fontWeight="700"
                      color="#fff"
                      letterSpacing={"0.5px"}
                    >
                      Security
                    </Text>
                  </HStack>
                  <Text color={"#9B9B9B"} mt={4} fontSize={"18px"}>
                    Password
                  </Text>
                  {verified_email ? (
                    <Text color="#fff" fontSize={14} fontWeight="500">
                      Google Account
                    </Text>
                  ) : (
                    <>
                      <Link href={"#"}>
                        <Text
                          fontSize={15}
                          fontWeight="500"
                          color={"#00c8aa"}
                          _hover={{
                            textDecoration: "underline",
                            cursor: "pointer",
                          }}
                        >
                          Request Password Change
                        </Text>
                      </Link>
                    </>
                  )}
                </Box>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} gap="1vw">
                {/* =============== Email Section =============== */}
                <Box
                  h={"140"}
                  bg="#313B47"
                  w={{ base: "85vw", md: "40vw" }}
                  borderRadius={4}
                  p={"15px"}
                  mb={{ base: "60px", md: "0px" }}
                  mt={{ base: "4px", md: "0px" }}
                >
                  <HStack>
                    <MdOutlineEmail size={34} color="#fff" />
                    {/* <EmailIcon /> */}
                    <Text
                      fontSize={{ base: 18, md: 24 }}
                      fontWeight="700"
                      color="#fff"
                      letterSpacing={"0.5px"}
                    >
                      Email
                    </Text>

                    <Box marginTop={"20px"}>
                      <UseModal
                        margin={"5px 0 0 0"}
                        onOpen={updateEmail}
                        title={"Change"}
                      />
                    </Box>
                  </HStack>

                  <Box mt={2}>
                    <Text fontSize={"18px"} color={"#9B9B9B"} mt={4}>
                      Account Email
                    </Text>
                    <Text color="#fff" fontSize={14} fontWeight="500">
                      {userData?.email}
                    </Text>
                  </Box>
                </Box>
                {/* =============== Preference Section =============== */}
                <Box
                  h={"140px"}
                  bg="#313B47"
                  w={{ base: "85vw", md: "40vw" }}
                  borderRadius={4}
                  p={"15px"}
                  // className={`${Style.mt}`}
                >
                  <HStack>
                    <CgNotes size={34} color="#fff" />
                    <Text
                      fontSize={{ base: 18, md: 24 }}
                      fontWeight="700"
                      color="#fff"
                      letterSpacing={"0.5px"}
                    >
                      Preferences
                    </Text>
                  </HStack>
                  <Text color={"#9B9B9B"} fontSize={"18px"} mt={"2"}>
                    Notifications
                  </Text>
                  <HStack mt={2}>
                    <Checkbox value="naruto" color="white" />
                    <Text color={"#fff"} fontSize={16}>
                      I want to receive valuable Career tips and special offers
                      on Email.
                    </Text>
                  </HStack>
                </Box>
              </Stack>
            </Stack>
          </VStack>
          <Box px={"9vw"} mt={"5vh"}>
            {/* =============== Personal Data  =============== */}
            <HStack>
              <BsFolder2 size={24} color="#fff" />
              <Text
                fontSize={{ base: 16, md: 20 }}
                fontWeight="700"
                color="#fff"
                letterSpacing={"0.5px"}
              >
                Personal Data
              </Text>
            </HStack>
            <Link href={"/auth/personalData"}>
              <Text
                as={"span"}
                _hover={{
                  cursor: "pointer",
                }}
                fontSize={{ base: 11, md: 14 }}
                fontWeight="400"
                className={`${Style.spn}`}
                mr={2}
              >
                Here
              </Text>
            </Link>
            <Text
              as={"span"}
              color="#fff"
              fontSize={{ base: 11, md: 14 }}
              fontWeight="400"
            >
              you can get a detailed view of your personal data.
            </Text>
            {/* =============== Leave Section =============== */}
            <HStack mt={4}>
              <TbArrowBack size={24} color="#fff" />
              <Link href={"#"}>
                <Text
                  fontSize={{ base: 16, md: 20 }}
                  fontWeight="700"
                  color="#fff"
                  letterSpacing={"0.5px"}
                  _hover={{ color: "#00c8aa", cursor: "pointer" }}
                >
                  Want to leave us ?
                </Text>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Profile;
