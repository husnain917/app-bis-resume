import {
    Box,
    Container,
    Link,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
    Image,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react"
import React, { useState } from "react"
import {
    RESUME_FORMATS,
    RESUME_EXAMPLES,
    PASS_SCAN_FORMATS,
} from "./CustomData";
import ResumeHeading from "./ResumeHeading";
import ResumeTable from "./ResumeTable";
import styles from "../../../styles/resumeFormats.module.css";
import CommonButton from "../commonButton/CommonButton";
export default function FormatsTables() {
    // state
    const [over, setOver] = useState(false)
    return (
        <>
            {/* resume table */}
            <ResumeTable />
            {/* ist table heading explain */}
            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    id={"b1"}
                >
                    <ResumeHeading text={"1"} />
                    {/* title */}
                    <Text
                        textAlign={"center"}
                        fontSize={"30px"}
                        fontWeight={"medium"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        paddingBottom={"25px"}
                    >
                        Resume Formatting
                    </Text>
                    {/* description */}
                    {
                        RESUME_FORMATS?.istTitle?.map((item, index) => (
                            <>
                                <Text
                                    key={index}
                                    fontSize={"16px"}
                                    paddingBottom={"25px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    {item?.text}
                                </Text>
                            </>
                        ))
                    }
                    <Text
                        fontSize={"16px"}
                        paddingBottom={"25px"}
                        fontWeight={"medium"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {RESUME_FORMATS?.secTitle}
                    </Text>

                    <Text
                        fontSize={"26px"}
                        fontWeight={"medium"}
                        paddingBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {RESUME_FORMATS?.thirdTitle}
                    </Text>

                    {/* list items */}
                    <OrderedList
                        fontSize={"16px"}
                        padding={"0px 30px"}
                        lineHeight={8}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        <ListItem>
                            <strong>Set</strong>&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                one-inch margins
                            </Link>
                            &nbsp;<strong>on all four sides.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Pick a 11 or 12pt</strong>&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                resume font
                            </Link>
                            &nbsp;<strong>and stick to it.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Create a proper</strong>&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                resume header format
                            </Link>
                            &nbsp;<strong>for your contact details.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Divide your resume into legible</strong> &nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                resume sections:
                            </Link>
                            &nbsp;
                            Contact Information, Resume Summary, Work Experience, Education, Skills.
                        </ListItem>
                        <ListItem>
                            <strong>Use</strong>&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                bullet points
                            </Link>
                            &nbsp;<strong>to talk about past jobs.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Be consistent with your resume formatting</strong>&nbsp;
                            (stick to the same date format: for example 11–2018, or November 2018.)
                        </ListItem>
                        <ListItem>
                            <strong>Use single or 1.15 line spacing.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Add an extra space before and after each section heading.</strong>
                        </ListItem>
                        <ListItem>
                            <strong>Make your</strong>&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                resume as long as it needs to be.
                            </Link>
                        </ListItem>
                        <ListItem>
                            <strong>Dont use</strong> &nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                photos on your resume
                            </Link>
                            .&nbsp;
                            Unless the job description specifically asks for them. You re looking for a job, not a date!
                        </ListItem>
                    </OrderedList>

                    <Text
                        fontSize={"16px"}
                        padding={"30px 0px 15px 0px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {RESUME_FORMATS?.fileFormat?.title}
                    </Text>

                    <UnorderedList
                        padding={"0px 30px"}
                    >
                        {
                            RESUME_FORMATS?.fileFormat?.data?.map((item, index) => (
                                <>
                                    <ListItem
                                        key={index}
                                        fontSize={"16px"}
                                        lineHeight={8}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        {item.text}
                                    </ListItem>
                                </>
                            ))
                        }
                    </UnorderedList>

                    <Text
                        fontSize={"16px"}
                        padding={"30px 0px 15px 0px"}
                        lineHeight={8}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {RESUME_FORMATS?.idealFormat}
                        <Link
                            color={"#3983fa"}
                        >
                            {RESUME_FORMATS?.idealFormatPDF}
                        </Link>
                    </Text>

                    <Text
                        fontSize={"16px"}
                        padding={"10px 0px 20px 0px"}
                        lineHeight={8}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {RESUME_FORMATS?.enoughTheory}
                    </Text>
                </Box>
                <Box
                    margin={"20px 0px 40px 0px"}
                >
                    <Image
                        src={"/resumeTipsImg.jpg"}
                        alt={"Image Not Found"}
                    />
                </Box>
            </Container>
            {/* ist table heading explain */}

            {/* 2nd table heading explain */}
            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    id={"b2"}
                >
                    <ResumeHeading text={"2"} />
                    {/* title */}
                    <Text
                        textAlign={"center"}
                        fontSize={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        fontWeight={"medium"}
                        paddingBottom={"20px"}
                    >
                        Examples of Well-Formatted Resumes You <br />
                        Can Use
                    </Text>
                    {/* description */}
                    <Box>
                        {
                            RESUME_EXAMPLES?.titleDes?.map((item, index) => (
                                <>
                                    <Text
                                        key={index}
                                        fontSize={"16px"}
                                        lineHeight={8}
                                        marginBottom={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        {item.text}
                                    </Text>
                                </>
                            ))
                        }
                    </Box>
                    {/* Examples */}
                    <Box>
                        {
                            RESUME_EXAMPLES?.examplesContent?.map((item, index) => (
                                <>
                                    <Box
                                        key={index}
                                    >
                                        <Text
                                            fontSize={"24px"}
                                            fontWeight={"medium"}
                                            padding={"0px 0px 20px 0px"}
                                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                        >
                                            {index + 1}.&nbsp;{item?.title}
                                        </Text>
                                        {/* Image */}
                                        <Box
                                            position={"relative"}
                                            onMouseEnter={() => setOver(true)}
                                            onMouseLeave={() => setOver(false)}
                                        >
                                            <Image
                                                src={item?.img}
                                                alt={"Image Not Found"}
                                                onMouseEnter={() => setOver(true)}
                                                onMouseLeave={() => setOver(false)}
                                            />
                                            {
                                                over ?
                                                    <>
                                                        <Box
                                                            margin={"40px 0px 0px 0px"}
                                                            className={styles.resumeTemplateDiv}
                                                            width={["70%", "70%", "50%", "50%", "50%"]}
                                                            onMouseEnter={() => setOver(true)}
                                                            onMouseLeave={() => setOver(false)}
                                                        >
                                                            <Link
                                                                href={"/templates"}
                                                                textDecoration={"none"}
                                                                _hover={{
                                                                    textDecoration: "none",
                                                                }}
                                                            >

                                                                <CommonButton
                                                                    title={'CREATE MY RESUME NOW'}
                                                                    fontSize={["13px", "16px", "16px", "16px", "16px"]}
                                                                    hoverCursor={"pointer"}
                                                                    backgroundColor={'#2CACD5'}
                                                                    color={'white'}
                                                                    hoverColor={"white"}
                                                                    hoverBackgroundColor={"#2CACD5"}
                                                                    padding={'25px 30px'}
                                                                />
                                                            </Link>
                                                        </Box>
                                                    </>
                                                    :
                                                    <></>
                                            }
                                        </Box>
                                        <Box>
                                            <Text
                                                fontSize={"16px"}
                                                lineHeight={8}
                                                padding={"30px 0px"}
                                                fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                            >
                                                {item?.description}
                                            </Text>
                                        </Box>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>
                    {/* Example end */}
                </Box>
            </Container>
            {/* 2nd table heading explain */}

            {/* 3rd table heading explain */}
            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    id={"b3"}
                >
                    <ResumeHeading text={"3"} />
                    {/* title */}
                    <Text
                        textAlign={"center"}
                        fontSize={"30px"}
                        fontWeight={"medium"}
                        paddingBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        The Three Main Resume Formats
                    </Text>
                    {/* description */}
                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        There are three main resume formats
                        <strong>—reverse-chronological, functional,</strong>
                        &nbsp; and<strong> combination</strong>.
                        The first one is the most popular and useful in 2022,
                        as it presents relevant information in the ideal order: from the most recent job to the oldest.
                        While we strongly recommending this one,
                        you can pick the &nbsp;
                        <Link color={"#3983fa"}>type of resume</Link>
                        &nbsp; that best fits your career.
                    </Text>

                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontWeight={"bold"}
                    >
                        Those 3 common resume formats can also be named:
                    </Text>

                    <UnorderedList
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {
                            RESUME_EXAMPLES?.commonResFormats?.map((item, index) => (
                                <>

                                    <ListItem
                                        key={index}
                                    >
                                        {item?.text}
                                    </ListItem>

                                </>
                            ))
                        }
                    </UnorderedList>

                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        The main difference between them is the chief focus.
                    </Text>

                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        What does it mean for you?
                    </Text>

                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontWeight={"bold"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        That you have to know the correct order of sections on each of the standard resume formats.
                    </Text>

                    <Text
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        Have a look:
                    </Text>

                    <Text
                        fontSize={"26px"}
                        fontWeight={"medium"}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        3 Resume Format Examples
                    </Text>
                </Box>
            </Container>

            {/* main image */}
            <Container
                maxW={"100%"}
                p={0}
            >
                {/* Image */}
                <Box>
                    <Image
                        src={"/resume_formats_main.jpg"}
                        alt={"Image Not Found"}
                    />
                </Box>
            </Container>

            <Container
                maxW={"100%"}
                p={0}
            >
                <Box>
                    {/* content */}
                    <Box
                        backgroundColor={"#fafafa"}
                        background={"#f2f2f2"}
                        border={"1px solid #e3e7eb"}
                        borderRadius={"4px 4px"}
                        margin={"10px 0px 30px 0px"}
                    >
                        <Text
                            padding={"20px 10px"}
                            textAlign={"center"}
                            fontSize={"16px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The Three Standard Resume Formats: Resume Structure
                        </Text>
                    </Box>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        As you can see:
                    </Text>

                    <UnorderedList
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {
                            RESUME_EXAMPLES?.bestFormats?.map((item, index) => (
                                <>
                                    <ListItem
                                        key={index}
                                    >
                                        {item?.text}
                                    </ListItem>
                                </>
                            ))
                        }
                    </UnorderedList>

                    {/* Image */}
                    <Box
                        marginBottom={"30px"}
                    >
                        <Image
                            src={"/best_format_resume.jpg"}
                            alt={"Image Not Found"}
                        />
                    </Box>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        That depends on your career path so far.
                    </Text>

                    <UnorderedList
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {
                            RESUME_EXAMPLES?.careerFormats?.map((item, index) => (
                                <>
                                    <ListItem
                                        key={index}
                                    >
                                        {item?.text}
                                    </ListItem>
                                </>
                            ))
                        }
                    </UnorderedList>

                    {/* Examples */}
                    <Box
                        id={"b3i"}
                    >
                        <Text
                            fontSize={"26px"}
                            fontWeight={"medium"}
                            padding={"0px 0px 30px 0px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            1.&nbsp;Reverse-Chronological
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            For starters, here s a sample reverse-chronological resume format created in our builder.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Reverse-Chronological Resume Example
                        </Text>

                        {/* Image */}
                        <Box
                            marginBottom={"30px"}
                        >
                            <Image
                                src={"/resume_format_temp1.jpg"}
                                alt={"Image Not Found"}
                            />
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            <strong>Want to save time and have your reverse-chronological resume ready in 5 minutes?</strong>
                            &nbsp;
                            <Link
                                color={"#3983fa"}
                                href={"/templates"}
                            >
                                Pick from 20+ resume templates
                            </Link>
                            , adjust, customize, and have a stunning chronological resume in no time.
                        </Text>

                        {/* button */}
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            margin={"40px 0px 30px 0px"}
                        >
                            <Link
                                href={"/templates"}
                                textDecoration={"none"}
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <CommonButton
                                    title={'CREATE YOUR RESUME NOW'}
                                    fontSize={["13px", "16px", "16px", "16px", "16px"]}
                                    hoverCursor={"pointer"}
                                    backgroundColor={'#2CACD5'}
                                    color={'white'}
                                    hoverColor={"white"}
                                    hoverBackgroundColor={"#2CACD5"}
                                    padding={'25px 30px'}
                                />
                            </Link>
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The reverse chronological resume format is useful to virtually all job seekers. That s why this is the most popular US resume format.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Recruiters are familiar with it so it makes their job easier: helps them spot all relevant information in a flash. It s also a really simple resume format to use.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Here s how to structure a resume in reverse-chronological order.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"20px"}
                            lineHeight={8}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Reverse-Chronological Resume Order of Sections
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.resumeOrderSection?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            <Link
                                                color={"#3983fa"}
                                            >
                                                {item?.text}
                                            </Link>
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The reverse chronological resume format puts emphasis on your work history because that s what s most relevant for hiring managers. Its considered the&nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                traditional resume template
                            </Link>.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Its key part is the work experience section. Here s how to write it:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"20px"}
                            lineHeight={8}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Reverse-Chronological Resume: Work Experience
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.reverseResume?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"20px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Like Frank, the candidate from our example did:
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Chronological Resume Format Pros and Cons
                        </Text>

                        {/* table */}
                        <Box
                            width={"100%"}
                            display={"flex"}
                            marginBottom={"30px"}
                        >
                            {/* left box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        PROS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    Recruiters are familiar with it. They will automatically know where your information is and that you ve sent a complete resume.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It s guaranteed to go through an Applicant Tracking Software (ATS) resume test.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    The reverse chronological resume format highlights the peak of your career.
                                </Text>
                            </Box>

                            {/* right box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        CONS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It will require tweaking. You will need to make some extra effort to catch the recruiter s eye.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    If you have large gaps in your work history, the recruiters will notice them immediately.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It s not an ideal format of a resume for career changers.
                                </Text>
                            </Box>
                        </Box>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            <strong>Pro Tip:</strong> You should also know the difference between a &nbsp;
                            <Link color={"#3983fa"} href={"/templates"}>CV vs a resume</Link>, depending on what part of the
                            world you live in they can have a format thats much the same, or completely different. So make sure you choose the right one.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            For more information on how to make the most of the standard reverse-chronological format of a resume, go here: &nbsp;
                            <br />
                            <Link color={"#3983fa"}>Reverse-Chronological Resume Examples That Get Jobs</Link>
                        </Text>
                    </Box>
                    {/* example 1 end */}


                    {/* example 2 */}
                    <Box
                        id={"b3ii"}
                    >
                        {/* title */}
                        <Text
                            fontSize={"26px"}
                            fontWeight={"medium"}
                            padding={"0px 0px 30px 0px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            2.&nbsp;Skills-Based / Functional
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Here s a functional resume example created in our resume builder.
                        </Text>

                        <Text
                            fontSize={"18px"}
                            fontWeight={"medium"}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Functional Resume Example
                        </Text>

                        {/* Image */}
                        <Box
                            marginBottom={"30px"}
                        >
                            <Image
                                src={"/resume_format_skill1.jpg"}
                                alt={"Image Not Found"}
                            />
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            <strong>Want to save time and have your skills-based (functional) resume ready in 5 minutes?</strong>
                            &nbsp;
                            <Link
                                color={"#3983fa"}
                                href={"/templates"}
                            >
                                Pick from 20+ resume templates
                            </Link>
                            , adjust, customize, and have a stunning skills-based resume in no time.
                        </Text>

                        {/* button */}
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            margin={"40px 0px 30px 0px"}
                        >
                            <Link
                                href="/templates"
                                textDecoration={"none"}
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <CommonButton
                                    title={'CREATE YOUR RESUME NOW'}
                                    fontSize={["13px", "16px", "16px", "16px", "16px"]}
                                    hoverCursor={"pointer"}
                                    backgroundColor={'#2CACD5'}
                                    color={'white'}
                                    hoverColor={"white"}
                                    hoverBackgroundColor={"#2CACD5"}
                                    padding={'25px 30px'}
                                />
                            </Link>
                        </Box>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            A functional resume format focuses on your skills and abilities. That s why its also called the skills-based resume format.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            It lets you emphasize what you re good at and takes the pressure off of your work experience.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Here s how to structure a functional resume:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {RESUME_EXAMPLES?.skillResumeFormats?.istContent?.title}
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            padding={"0px 20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.skillResumeFormats?.istContent?.data?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {RESUME_EXAMPLES?.skillResumeFormats?.istContent?.description}
                        </Text>

                        <Text
                            fontSize={"18px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {RESUME_EXAMPLES?.skillResumeFormats?.secContent?.title}
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            padding={"0px 20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.skillResumeFormats?.secContent?.data?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {RESUME_EXAMPLES?.skillResumeFormats?.secContent?.description}
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            To recap, then:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"30px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Pros and Cons of a Functional Resume Format
                        </Text>

                        {/* table */}
                        <Box
                            width={"100%"}
                            display={"flex"}
                            marginBottom={"30px"}
                        >
                            {/* left box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        PROS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It takes the focus off of your work history and places it on your skills. If you ve gained your skills through various freelance projects, not full-time employment, this format will let you emphasize those skills.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It s a good <Link color={"#3983fa"}>creative resume</Link> format for non-traditional industries.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It can be used by military transitioners whose detailed job descriptions might be too difficult to understand for non-military recruiters.
                                </Text>
                            </Box>

                            {/* right box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        CONS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    Most recruiters hate the functional resume format because it s not easy to scan in quickly.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It s an instant red flag—suggesting that you re trying to hide something.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    It s very likely to fail the ATS resume scan.
                                </Text>
                            </Box>
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            For more information on the only strategy to make the functional resume work for you, see: &nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                Functional Resume Template and Writing Tips
                            </Link>
                        </Text>
                    </Box>
                    {/* example 2 end */}


                    {/* example 3 */}
                    <Box
                        id={"b3iii"}
                    >
                        {/* title */}
                        <Text
                            fontSize={"26px"}
                            fontWeight={"medium"}
                            padding={"0px 0px 30px 0px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            3.&nbsp;Hybrid / Combination
                        </Text>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Here s a combination resume example created in our resume builder.
                        </Text>

                        <Text
                            fontSize={"18px"}
                            fontWeight={"medium"}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Hybrid / Combination Resume Example
                        </Text>

                        {/* Image */}
                        <Box
                            marginBottom={"30px"}
                        >
                            <Image
                                src={"/resume_format_hybird1.jpg"}
                                alt={"Image Not Found"}
                            />
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            <strong>Want to save time and have your hybrid / combination resume ready in 5 minutes?</strong>
                            &nbsp;
                            <Link
                                color={"#3983fa"}
                                href={"/templates"}
                            >
                                Pick from 20+ resume templates
                            </Link>
                            , adjust, customize, and have a hybrid resume in no time.
                        </Text>

                        {/* button */}
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            margin={"40px 0px 30px 0px"}
                        >
                            <Link
                                href={"/templates"}
                                textDecoration={"none"}
                                _hover={{
                                    textDecoration: "none",
                                }}
                            >
                                <CommonButton
                                    title={'CREATE YOUR RESUME NOW'}
                                    fontSize={["13px", "16px", "16px", "16px", "16px"]}
                                    hoverCursor={"pointer"}
                                    backgroundColor={'#2CACD5'}
                                    color={'white'}
                                    hoverColor={"white"}
                                    hoverBackgroundColor={"#2CACD5"}
                                    padding={'25px 30px'}
                                />
                            </Link>
                        </Box>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The combination resume format combines the &nbsp;
                            <Link
                                color={"#3983fa"}
                            >
                                resume elements
                            </Link>
                            &nbsp; of a chronological resume and a skills-based resume.
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"20px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Here s how to structure a hybrid resume:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"30px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Hybrid (Combination) Resume Order of Sections
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            padding={"0px 15px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.hybridFormats?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The focal point is your skills summary. This section comes at the top of a hybrid resume, just below your contact information.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            The skills summary lists skills relevant to the job and validates them by providing examples of past achievements and professional experience in bullet points.
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            This is how to write it:
                        </Text>

                        <UnorderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            padding={"0px 15px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.hybridFormatsSection?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </UnorderedList>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"20px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Remember our candidate, Christian?
                        </Text>

                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            In his skills summary, he needs to prove that he is:
                        </Text>

                        <OrderedList
                            fontSize={"16px"}
                            lineHeight={8}
                            marginBottom={"30px"}
                            padding={"0px 15px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            {
                                RESUME_EXAMPLES?.hybridFormatsSkill?.map((item, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                        >
                                            {item?.text}
                                        </ListItem>
                                    </>
                                ))
                            }
                        </OrderedList>

                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            In a nutshell:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"40px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Pros and Cons of a Combination Resume Format
                        </Text>

                        {/* table */}
                        <Box
                            width={"100%"}
                            display={"flex"}
                            marginBottom={"30px"}
                        >
                            {/* left box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        PROS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    Showcases your most important skills and validates them with examples related to your work experience.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    A good  format for people with <Link color={"#3983fa"}>gaps in their resume</Link> who, nonetheless, have many years of relevant work experience.
                                </Text>
                            </Box>

                            {/* right box */}
                            <Box
                                width={"50%"}
                            >
                                <Box
                                    backgroundColor={"#fafafa"}
                                >
                                    <Text
                                        fontSize={"16px"}
                                        fontWeight={"medium"}
                                        padding={"20px"}
                                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                    >
                                        CONS
                                    </Text>
                                </Box>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    Its suitable for very few candidates: only people with a lot of work experience targeting a very specific position.
                                </Text>
                                <Text
                                    fontSize={"16px"}
                                    lineHeight={8}
                                    padding={"20px"}
                                    fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                                >
                                    Its the most difficult resume format to create properly.
                                </Text>
                            </Box>
                        </Box>


                        <Text
                            fontSize={"16px"}
                            marginBottom={"30px"}
                            lineHeight={8}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            As you can see, this is the hardest resume format to make. Learn all you need to know about it here: &nbsp;
                            <br />
                            <Link
                                color={"#3983fa"}
                            >
                                Combination Resume Template and Writing Tips
                            </Link>
                        </Text>
                    </Box>
                    {/* example 3 end */}


                    {/* example 4 */}
                    <Box
                        id={"b3iv"}
                    >
                        {/* title */}
                        <Text
                            fontSize={"26px"}
                            fontWeight={"medium"}
                            padding={"0px 0px 30px 0px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            4.&nbsp;Recap: How to Pick the Best Resume Format for You
                        </Text>

                        <Text
                            fontSize={"16px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                            marginBottom={"25px"}
                        >
                            So—
                        </Text>

                        <Text
                            fontSize={"16px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                            marginBottom={"25px"}
                        >
                            What format should your resume be in?
                        </Text>

                        <Text
                            fontSize={"16px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                            marginBottom={"25px"}
                        >
                            Here s a recap of what you ve learned so far:
                        </Text>

                        <Text
                            fontSize={"18px"}
                            marginBottom={"30px"}
                            fontWeight={"medium"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            Chronological vs Functional vs Combination Resume
                        </Text>

                        {/* table */}
                        <TableContainer>
                            <Table
                                size="lg"
                                fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                            >
                                <Thead
                                    backgroundColor={"#fafafa"}
                                >
                                    <Tr>
                                        {
                                            RESUME_EXAMPLES?.recapFormatsTable?.tableHeadings?.map((item, index) => (
                                                <>
                                                    <Th
                                                        key={index}
                                                    >
                                                        {item?.text}
                                                    </Th>
                                                </>
                                            ))
                                        }
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        RESUME_EXAMPLES?.recapFormatsTable?.tableBodyData?.map((item, index) => (
                                            <>
                                                <Tr
                                                    key={index}
                                                >
                                                    {
                                                        item?.rowData?.map((item, index) => (
                                                            <>
                                                                <Td
                                                                    key={index}
                                                                    fontWeight={
                                                                        index === 0 ?
                                                                            "medium"
                                                                            :
                                                                            "normal"
                                                                    }
                                                                    fontSize={
                                                                        index === 0 ?
                                                                            "16px"
                                                                            :
                                                                            "14px"
                                                                    }
                                                                >
                                                                    {item?.text}
                                                                </Td>
                                                            </>
                                                        ))
                                                    }
                                                </Tr>
                                            </>
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>


                        <Text
                            fontSize={"16px"}
                            lineHeight={8}
                            margin={"30px 0px 40px 0px"}
                            fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                        >
                            When making a resume in our builder, drag & drop bullet points, skills, and auto-fill the boring stuff. Spell check? Check. Start building a &nbsp;
                            <Link
                                color={"#3983fa"}
                                href={"/templates"}
                            >
                                professional resume template here for free
                            </Link>.
                        </Text>

                        {/* Image */}
                    </Box>
                    {/* example 4 end */}
                </Box>
            </Container>

            {/* resume templates container */}
            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    position={"relative"}
                    onMouseEnter={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                >
                    <Image
                        src={"/resume_tips1.jpg"}
                        alt={"Image Not Found"}
                        onMouseEnter={() => setOver(true)}
                        onMouseLeave={() => setOver(false)}
                    />
                    {
                        over ?
                            <>
                                <Box
                                    margin={"40px 0px 0px 0px"}
                                    className={styles.resumeTemplateDiv}
                                    width={["70%", "70%", "50%", "50%", "50%"]}
                                    onMouseEnter={() => setOver(true)}
                                    onMouseLeave={() => setOver(false)}
                                >
                                    <Link
                                        href="/templates"
                                        textDecoration={"none"}
                                        _hover={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        <CommonButton
                                            title={'CREATE MY RESUME NOW'}
                                            fontSize={["13px", "16px", "16px", "16px", "16px"]}
                                            hoverCursor={"pointer"}
                                            backgroundColor={'#2CACD5'}
                                            color={'white'}
                                            hoverColor={"white"}
                                            hoverBackgroundColor={"#2CACD5"}
                                            padding={'25px 30px'}
                                        />
                                    </Link>
                                </Box>
                            </>
                            :
                            <></>
                    }
                </Box>
            </Container>
            {/* resume template container end */}

            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    backgroundColor={"#838fa0"}
                    background={"#f2f2f2"}
                    border={"1px solid #000"}
                    borderRadius={"4px 4px"}
                    margin={"30px 0px 50px 0px"}
                >
                    <Text
                        padding={"20px 10px"}
                        textAlign={"center"}
                        fontSize={"16px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        When you re done,&nbsp;
                        <Link
                            color={"#3983fa"}
                            href={"/templates"}
                        >
                            BisResume resume builder
                        </Link>
                        &nbsp;
                        will score your resume and tell you exactly how to make it better.
                    </Text>
                </Box>
            </Container>
            {/* 3rd table heading explain */}


            {/* 4th table heading explain */}
            <Container
                maxW={"100%"}
                p={0}
            >
                <Box
                    id={"b4"}
                >
                    <ResumeHeading text={"4"} />
                    {/* title */}
                    <Text
                        textAlign={"center"}
                        fontSize={"30px"}
                        fontWeight={"medium"}
                        paddingBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        Make Sure Your Resume Format Beats <br />
                        the ATS Resume Test
                    </Text>
                    {/* description */}
                    <Text
                        fontSize={"16px"}
                        marginBottom={"20px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        A disturbing thought:
                    </Text>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"20px"}
                        lineHeight={8}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        According to &nbsp;
                        <Link
                            color={"#3983fa"}
                        >
                            research
                        </Link>
                        , 70% of resumes never reach a human eye.
                    </Text>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        Why s that?
                    </Text>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        Because as many as 7 out of 10 large companies use the ATS resume checker (short for “Applicant Tracking Software”).
                    </Text>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        So—
                    </Text>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"25px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        Make sure your
                        <Link
                            color={"#3983fa"}
                        >
                            resume format is ATS-friendly
                        </Link>.
                    </Text>

                    <Text
                        fontSize={"24px"}
                        fontWeight={"medium"}
                        marginBottom={"30px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {PASS_SCAN_FORMATS?.title}
                    </Text>

                    <UnorderedList
                        fontSize={"16px"}
                        lineHeight={8}
                        marginBottom={"30px"}
                        padding={"0px 15px"}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {
                            PASS_SCAN_FORMATS?.data.map((item, index) => (
                                <>
                                    <ListItem
                                        key={index}
                                    >
                                        {item?.text}
                                    </ListItem>
                                </>
                            ))
                        }
                    </UnorderedList>

                    <Text
                        fontSize={"16px"}
                        marginBottom={"30px"}
                        lineHeight={8}
                        fontFamily={`'EuclidCircularB-Medium', sans-serif`}
                    >
                        {PASS_SCAN_FORMATS?.description} &nbsp;
                        <Link
                            color={"#3983fa"}
                        >
                            {PASS_SCAN_FORMATS?.link}
                        </Link>
                    </Text>
                </Box>
            </Container>
            {/* 4th table heading explain */}
        </>
    )
}
