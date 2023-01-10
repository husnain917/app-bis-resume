import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from 'next/image'
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import { Button, Container, OrderedList, ListItem, UnorderedList } from '@chakra-ui/react'
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer"
import makeResume from "../public/makeResume.png";
import ResumeHeader from "../public/ResumeHeader.png"
import HelpDesci from "../public/HelpDesci.png"
import ExpImage from "../public/ExpImage.png"
import jobAd from "../public/jobAd.png"
import EducationHelpImage from "../public/EducationHelpImage.png";
import SkillImage from "../public/SkillImage.png"
import ResumeHel from "../public/ResumeHel.png"
import ProfileDescrip from "../public/ProfileDescrip.png"
import SideBar from "../src/components/sideBar/SideBar";
import Layout from "../src/Layout";
import styles from "../styles/sideBarSection.module.css"


export default function Write_resume() {

    return (
        <>

            <>
                <Box bgColor={"#f2f4f6"} h={["100%", "100%"]} display={"flex"}
                    justifyContent={"space-between"}  >


                    <Box
                        maxW={["0%", "0%", "0%", "5%"]}
                        // padding={'70px 0px 0px 0px'}
                        ml={"7%"}
                        display={["none", "none", "none", "block"]}
                    >
                        <Box
                            className={styles.sideBarContainer}
                        >
                            <SideBar />
                        </Box>
                    </Box>


                    <Container
                        maxW={['100%', '100%', '100%', '70%', '70%']}
                        bgColor="white"
                        border="3px"

                    >





                        <Box
                            maxW={["100%", "100%", "100%", "88%"]}

                        >

                            <Box p={["5%", "5%"]} >

                                <Text fontSize={["30px", "40px", "40px"]} className={"main-heading"} mb="3%"  >How to Write a Resume in 2022 | Beginners Guide
                                </Text>

                                <Text fontSize={["20px"]} className={"sub-heading"} fontWeight={"bold"} >How to Write a Resume - Step by step
                                </Text>
                                <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                    For most job-seekers, a good resume is what stands between a dream job and Choice D. Get your resume right, and you’ll be getting replies from every other company you apply to.
                                </Text>

                                <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                    If your resume game is weak, though, you’ll end up sitting around for weeks, maybe even months, before you even get a single response.
                                </Text>

                                <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                    So you’re probably wondering how you can write a resume that leads to HR managers inviting you to interviews daily.
                                </Text>
                                <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                    In this guide, we’re going to teach you everything you need to know about how to make a resume:
                                </Text>

                                {/*  step  */}
                                <Box mt={["3%", "3%", "3%"]}>
                                    <Text fontSize={["22px"]} className={"sub-heading"} >How to Write a Resume - Step by step </Text>
                                    <OrderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Pick the Right Resume Format & Layout</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Mention Your Personal Details & Contact Information</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Use a Resume Summary or Objective</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>List Your Work Experience & Achievements</ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Mention Your Top Soft & Hard Skills</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>(Optional) Include Additional Resume Sections - Languages, Hobbies, etc.</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Tailor Your Information For the Job Ad</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Craft a Convincing Cover Letter</ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Proofread Your Resume and Cover Letter</ListItem>

                                    </OrderedList>



                                </Box>
                                <Image

                                    src={ResumeHel}
                                    alt={'Image Not Found'}
                                />



                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} fontWeight={["bold"]} className={"sub-heading"} > How to Make a Resume (The Right Way!)</Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        Before you even start working on your resume, you need to decide how you’re going to build it.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        For most job-seekers, a good resume is what stands between a dream job and Choice D. Get your resume right, and you’ll be getting replies from every other company you apply to.
                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        Instead of using a text editor, we recommend choosing a resume builder, such as Novorésumé. Our resume builder is fast, easy, and to put the icing on the cake, a Novorésumé looks much better and can fit more information than your average, cookie-cutter resume...
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        To get the most out of this guide, you can head over to the resume builder and start building your resume on-the-go as you read this guide.
                                    </Text>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontWeight={["bold"]} fontSize={["24px"]} className={"sub-heading"}>How to Pick the Right Resume Format?</Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        There are three types of resume formats: reverse chronological, functional or skills-based, and a combination of the two. The choice depends on the type of job you are applying for and your level of experience.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                        The 3 resume formats are:</Text>
                                    <OrderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Reverse chronological resume format:-</b>
                                            This is the most popular resume format and is ideal for people with plenty of work experience that is relevant to the position they’re interested in.
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Functional/skills-based resume format:-</b>
                                            If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.


                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Combination resume format:-</b>
                                            The combination resume is a great choice for job-seekers with a very diverse skill-set. It’s useful if you’re applying for a role that requires expertise in 3-4 different fields, and you want to show all that in your resume. Say, for example, you’re applying for a senior management role, and the requirements are expertise in Management, Sales, and Software Development.
                                            <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                                In 90%+ cases, you’d want to stick to the reverse-chronological resume format. This is the most common one, and most HR managers are used to this. Hence, in this guide, we’re going to focus on this specific format.</Text>

                                        </ListItem>



                                    </OrderedList>
                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >What is the Best Resume Layout?</Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The first thing a job recruiter notices about any resume is the layout.



                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Does it look organized or cluttered? Is it too short or too long? Is it boring and easy to ignore, or does it scream out “Read me!”?


                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Here are some of the best practices when it comes to your resume layout:


                                    </Text>

                                </Box>



                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Layout Must-Haves</Text>


                                    <OrderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>One page in length:-</b>

                                            You should only go for 2 pages if you really, really believe that it’ll add significant value. HR managers in big firms get around 1,000+ resumes per month. They’re not going to spend their valuable time reading your life story!

                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Functional/skills-based resume format:-</b>
                                            If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.


                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Clear section headings:-</b>

                                            Pick a heading (H2, for example) and use it for all the section headers.

                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b> Ample white space:-</b>

                                            especially around the margins.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b> Easy-to-read font:-</b>

                                            We’d recommend sticking to what stands out, but not too much. Do: Ubuntu, Roboto, Overpass, etc. Don’t (ever): Comic Sans
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}><b>  Pick the right font size:-</b>

                                            As a rule of thumb, go for 11 - 12 pt for normal text, and 14 - 16 pt for section titles.

                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>

                                            As a rule of thumb, save your resume as PDF. Word is a popular alternative, but it has a good chance of messing up your resume formatting.


                                            One more thing you need to consider in terms of resume layout is whether you’re going for a traditional-looking free resume template or something a bit more modern:


                                        </ListItem>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            If you’re pursuing a career in a more traditional industry - legal, banking, finance, etc. - you might want to stick to the first.

                                        </Text>
                                    </OrderedList>
                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Content - What to Mention on Your Resume</Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Now that we’ve got the basics out of the way, let’s dive into the essentials of how to write a resume.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The most popular sections for a resume are:
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>Contact Information
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} >Professional Resume Summary or Objective
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} >Work Experience (and Achievements)
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} >Education
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} >Skills
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} >
                                            Optional Sections - Languages, Publications, Hobbies, etc.
                                        </ListItem>
                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Now that we’ve got the basics out of the way, let’s dive into the essentials of how to write a resume.
                                    </Text>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Contact Information</Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The most critical section in your resume is the “contact information.” Even if you get everything else right, you’re not going to go far if the HR manager can’t get in touch with you because you misspelt your email.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Make sure to double-check, and even triple-check your contact information section and make sure everything is correct and up-to-date.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight={["bold"]}>
                                        Contact Information to be Included in a Resume

                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight={["bold"]}>
                                        Must-have Information
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]}>First Name / Last Name.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]} >Phone Number.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]}>Email Address.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} ><b>Location:-</b>
                                            are you located in the area, or will the company have to sponsor relocation?
                                        </ListItem>

                                    </UnorderedList>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Optional Information</Text>

                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>  Title :-</b> Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>  LinkedIn URL:-</b>
                                            If you have an up-to-date profile that can add value to your application, make sure to include the link.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>  Social Media :-</b>
                                            Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> Website / Blog -</b>
                                            Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.
                                        </ListItem>
                                    </UnorderedList>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >What NOT to Include in the Contact Info Section</Text>

                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> Date of Birth</b> Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> Unprofessional Email Address - Do: name.lastname@gmail.com Don’t: player69@gmail.com</b>
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>  Headshot :-</b>

                                            The HR manager doesn’t need to know what you look like in order to evaluate your application, so there’s no real need to include it.                                    </ListItem>
                                    </UnorderedList>

                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Summary or Objective</Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        It’s not a secret for anyone that first impressions matter, whether they’re in your personal life, or your career.



                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        If you leave a bad first impression, chances are, it’s there to stay. After all, it’s very hard to change someone’s opinion of you.



                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        The same applies to your job search - the HR manager spends around 6 seconds scanning each resume. Yep, your carefully-worded, hand-crafted resume only gets 6 seconds of attention. Unless, of course, you manage to leave an amazing first impression.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The way you accomplish this is through either a good resume summary or objective. Both are placed at the top of your resume, right around the contact information section:


                                    </Text>

                                </Box>
                                <Box mt={["2%", "2%", "2%"]} ml={["0%", '10%']}>
                                    <Image

                                        src={ProfileDescrip}
                                        alt={'Image Not Found'}
                                    />
                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        What’s a Resume Summary & When to Use it
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        A resume summary is a 2-3 sentence summary of your career. You should use a resume summary in basically any situation, unless you’re a recent university graduate or switching careers (in that case, you use a resume objective. More on that later!).
                                    </Text>
                                    <OrderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>

                                            Your job and years of experience. E.g.: Customer support representative with 5+ years of experience in the IT industry.
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            1 or 2 top achievements (or core responsibilities). E.g.: Specialized in technical support, customer care, and user retention.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Desired goal (generally, passion for working at a specific company). E.g.: Looking for new opportunities as a support lead for a SaaS company.
                                        </ListItem>
                                    </OrderedList>

                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Formula to Create Your Resume Objective:

                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        (1) [SKILL/EDUCATION/CERTIFICATION RELEVANT TO THE JOB WITH JOB TITLE].
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        Looking to apply my (2) [years/months of EXPERIENCE RELEVANT TO THE JOB DESCRIPTION] at [COMPANY YOU ARE APPLYING TO]
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        to help (3) [TYPE OF RESPONSIBILITIES YOU WILL HELP OUT WITH SUCCESSFULLY].
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]} >
                                        Examples of Resume Objectives

                                    </Text>

                                    <OrderedList>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} > So, here’s how that would look like if you’re a student:</ListItem>
                                        <UnorderedList>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                                “Hard-working recent graduate with a B.A. in Graphic Design from New York State University seeking new opportunities. 3+ years of practical experience working with Adobe Illustrator and Photoshop, creating illustrations & designing UX / UI. Looking to grow as a designer, as well as perfect my art, at the XYZ Design Studio.”
                                            </ListItem>
                                        </UnorderedList>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >Or, on the other hand, if you’re going through a career change:</ListItem>
                                        <UnorderedList>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                                “IT project manager with 5+ years of experience in software development. Managed a team of developers to create products for several industries, such as FinTech and HR tech. Looking to leverage my experience in managing outsourced products as a Product Owner at XYZ.”
                                            </ListItem>
                                        </UnorderedList>
                                    </OrderedList>
                                </Box>
                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Work Experience

                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        This is where you really sell yourself, displaying your past accomplishments and responsibilities.


                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        So you’re probably wondering how you can write a resume that leads to HR managers inviting you to interviews daily.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                        In this guide, we’re going to teach you everything you need to know about how to make a resume:
                                    </Text>

                                    {/*  step  */}
                                    <Box mt={["3%", "3%", "3%"]}>
                                        <Text fontSize={["24px"]} className={"sub-heading"} >How to Write a Resume - Step by step </Text>
                                        <OrderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Pick the Right Resume Format & Layout</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Mention Your Personal Details & Contact Information</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Use a Resume Summary or Objective</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>List Your Work Experience & Achievements</ListItem>

                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Mention Your Top Soft & Hard Skills</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>(Optional) Include Additional Resume Sections - Languages, Hobbies, etc.</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Tailor Your Information For the Job Ad</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Craft a Convincing Cover Letter</ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Proofread Your Resume and Cover Letter</ListItem>

                                        </OrderedList>



                                    </Box>
                                    <Image

                                        src={ResumeHel}
                                        alt={'Image Not Found'}
                                    />


                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} > How to Make a Resume (The Right Way!)</Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                            Before you even start working on your resume, you need to decide how you’re going to build it.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>

                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                            Instead of using a text editor, we recommend choosing a resume builder, such as Novorésumé. Our resume builder is fast, easy, and to put the icing on the cake, a Novorésumé looks much better and can fit more information than your average, cookie-cutter resume...
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                            To get the most out of this guide, you can head over to the resume builder and start building your resume on-the-go as you read this guide.
                                        </Text>
                                    </Box>

                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >How to Pick the Right Resume Format?</Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                            There are three types of resume formats: reverse chronological, functional or skills-based, and a combination of the two. The choice depends on the type of job you are applying for and your level of experience.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["2%", "3%", "3%"]}>
                                            The 3 resume formats are:</Text>
                                        <OrderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Reverse chronological resume format:-</b>
                                                This is the most popular resume format and is ideal for people with plenty of work experience that is relevant to the position they’re interested in.
                                            </ListItem>

                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Functional/skills-based resume format:-</b>
                                                If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.


                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Combination resume format:-</b>
                                                The combination resume is a great choice for job-seekers with a very diverse skill-set. It’s useful if you’re applying for a role that requires expertise in 3-4 different fields, and you want to show all that in your resume. Say, for example, you’re applying for a senior management role, and the requirements are expertise in Management, Sales, and Software Development.
                                                <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                                    In 90%+ cases, you’d want to stick to the reverse-chronological resume format. This is the most common one, and most HR managers are used to this. Hence, in this guide, we’re going to focus on this specific format.</Text>

                                            </ListItem>



                                        </OrderedList>
                                    </Box>


                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >What is the Best Resume Layout?</Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            The first thing a job recruiter notices about any resume is the layout.



                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            Does it look organized or cluttered? Is it too short or too long? Is it boring and easy to ignore, or does it scream out “Read me!”?


                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            Here are some of the best practices when it comes to your resume layout:


                                        </Text>

                                    </Box>



                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Layout Must-Haves</Text>


                                        <OrderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>One page in length:-</b>

                                                You should only go for 2 pages if you really, really believe that it’ll add significant value. HR managers in big firms get around 1,000+ resumes per month. They’re not going to spend their valuable time reading your life story!

                                            </ListItem>

                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Functional/skills-based resume format:-</b>
                                                If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.


                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>Clear section headings:-</b>

                                                Pick a heading (H2, for example) and use it for all the section headers.

                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b> Ample white space:-</b>

                                                especially around the margins.
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b> Easy-to-read font:-</b>

                                                We’d recommend sticking to what stands out, but not too much. Do: Ubuntu, Roboto, Overpass, etc. Don’t (ever): Comic Sans
                                            </ListItem>

                                            <ListItem fontSize={'1rem'} className={"only-font-family"}><b>  Pick the right font size:-</b>

                                                As a rule of thumb, go for 11 - 12 pt for normal text, and 14 - 16 pt for section titles.

                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>

                                                As a rule of thumb, save your resume as PDF. Word is a popular alternative, but it has a good chance of messing up your resume formatting.


                                                One more thing you need to consider in terms of resume layout is whether you’re going for a traditional-looking free resume template or something a bit more modern:


                                            </ListItem>
                                            <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                                If you’re pursuing a career in a more traditional industry - legal, banking, finance, etc. - you might want to stick to the first.

                                            </Text>
                                        </OrderedList>
                                    </Box>


                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Content - What to Mention on Your Resume</Text>

                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            Now that we’ve got the basics out of the way, let’s dive into the essentials of how to write a resume.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            The most popular sections for a resume are:
                                        </Text>
                                        <UnorderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>Contact Information
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} >Professional Resume Summary or Objective
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} >Work Experience (and Achievements)
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} >Education
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} >Skills
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} >
                                                Optional Sections - Languages, Publications, Hobbies, etc.
                                            </ListItem>
                                        </UnorderedList>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            Now that we’ve got the basics out of the way, let’s dive into the essentials of how to write a resume.
                                        </Text>
                                    </Box>

                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Contact Information</Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            The most critical section in your resume is the “contact information.” Even if you get everything else right, you’re not going to go far if the HR manager can’t get in touch with you because you misspelt your email.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            Make sure to double-check, and even triple-check your contact information section and make sure everything is correct and up-to-date.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight={["bold"]}>
                                            Contact Information to be Included in a Resume

                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight={["bold"]}>
                                            Must-have Information
                                        </Text>
                                        <UnorderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]}>First Name / Last Name.
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]} >Phone Number.
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]}>Email Address.
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} ><b>Location:-</b>
                                                are you located in the area, or will the company have to sponsor relocation?
                                            </ListItem>

                                        </UnorderedList>
                                    </Box>

                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Optional Information</Text>

                                        <UnorderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b>  Title :-</b> Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b>  LinkedIn URL:-</b>
                                                If you have an up-to-date profile that can add value to your application, make sure to include the link.
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b>  Social Media :-</b>
                                                Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.
                                            </ListItem>

                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b> Website / Blog -</b>
                                                Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.
                                            </ListItem>
                                        </UnorderedList>
                                    </Box>

                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >What NOT to Include in the Contact Info Section</Text>

                                        <UnorderedList ml={["4%", "5%", "5%"]}>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b> Date of Birth</b> Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b> Unprofessional Email Address - Do: name.lastname@gmail.com Don’t: player69@gmail.com</b>
                                            </ListItem>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                                <b>  Headshot :-</b>

                                                The HR manager doesn’t need to know what you look like in order to evaluate your application, so there’s no real need to include it.                                    </ListItem>
                                        </UnorderedList>

                                    </Box>

                                    <Box mt={["3%", "3%", "3%"]} >
                                        <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >Resume Summary or Objective</Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            It’s not a secret for anyone that first impressions matter, whether they’re in your personal life, or your career.



                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} >
                                            If you leave a bad first impression, chances are, it’s there to stay. After all, it’s very hard to change someone’s opinion of you.



                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} >
                                            The same applies to your job search - the HR manager spends around 6 seconds scanning each resume. Yep, your carefully-worded, hand-crafted resume only gets 6 seconds of attention. Unless, of course, you manage to leave an amazing first impression.
                                        </Text>
                                        <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                            The way you accomplish this is through either a good resume summary or objective. Both are placed at the top of your resume, right around the contact information section:


                                        </Text>

                                    </Box>
                                    <Box mt={["2%", "2%", "2%"]} ml={["0%", '10%']}>
                                        <Image

                                            src={ProfileDescrip}
                                            alt={'Image Not Found'}
                                        />
                                    </Box>
                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        What’s a Resume Summary & When to Use it
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        A resume summary is a 2-3 sentence summary of your career. You should use a resume summary in basically any situation, unless you’re a recent university graduate or switching careers (in that case, you use a resume objective. More on that later!).
                                    </Text>
                                    <OrderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>

                                            Your job and years of experience. E.g.: Customer support representative with 5+ years of experience in the IT industry.
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            1 or 2 top achievements (or core responsibilities). E.g.: Specialized in technical support, customer care, and user retention.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Desired goal (generally, passion for working at a specific company). E.g.: Looking for new opportunities as a support lead for a SaaS company.
                                        </ListItem>
                                    </OrderedList>

                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Formula to Create Your Resume Objective:

                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        (1) [SKILL/EDUCATION/CERTIFICATION RELEVANT TO THE JOB WITH JOB TITLE].
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        Looking to apply my (2) [years/months of EXPERIENCE RELEVANT TO THE JOB DESCRIPTION] at [COMPANY YOU ARE APPLYING TO]
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} >
                                        to help (3) [TYPE OF RESPONSIBILITIES YOU WILL HELP OUT WITH SUCCESSFULLY].
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} fontWeight={["bold"]} >
                                        Examples of Resume Objectives

                                    </Text>

                                    <OrderedList>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} > So, here’s how that would look like if you’re a student:</ListItem>
                                        <UnorderedList>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                                “Hard-working recent graduate with a B.A. in Graphic Design from New York State University seeking new opportunities. 3+ years of practical experience working with Adobe Illustrator and Photoshop, creating illustrations & designing UX / UI. Looking to grow as a designer, as well as perfect my art, at the XYZ Design Studio.”
                                            </ListItem>
                                        </UnorderedList>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >Or, on the other hand, if you’re going through a career change:</ListItem>
                                        <UnorderedList>
                                            <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                                “IT project manager with 5+ years of experience in software development. Managed a team of developers to create products for several industries, such as FinTech and HR tech. Looking to leverage my experience in managing outsourced products as a Product Owner at XYZ.”
                                            </ListItem>
                                        </UnorderedList>
                                    </OrderedList>
                                </Box>
                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Work Experience

                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        This is where you really sell yourself, displaying your past accomplishments and responsibilities.


                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        If you manage to master this section alone, you’ll know 80%+ of all there is to know about how to make a resume.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        There are a lot of best practices for writing your work experience. Before we dive into all the nits and grits, though, let’s start with the basics...
                                    </Text>

                                </Box>
                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        How to List Work Experience in a Resume


                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                            <b> Job Title/Position -</b> Your job title goes on top of each work experience entry. When the HR manager scans your resume, you want them to know, at a glance, that you have relevant work experience for the job.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                            <b> Company Name / Location / Description -</b> Then, you mention the name of the relevant employer, as well as the location of the office you work/have worked in. In some cases, you may also want to briefly describe the company, if the organization is not a famous household name.


                                        </ListItem> <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                            <b>Achievements and Responsibilities -</b> This is the core of each work experience entry. Depending on your field, you want to list either your achievements or responsibilities. Well get more into the how  and why of this in a bit.
                                        </ListItem> <ListItem fontSize={'1rem'} className={"only-font-family"} mt={["2%", "2%", "2%"]} >
                                            <b> Dates Employed -</b> The timeframe of your employment in each company. Not sure about the exact dates you worked somewhere? Don’t worry - you don’t have to be accurate by the day, as long as it’s close. The standard format expected by recruiters and employers is mm/yyyy (this is especially important when your job application will be parsed by an Applicant Tracking System).
                                        </ListItem>
                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Here’s a real-life example:
                                    </Text>

                                </Box>

                                <Image

                                    src={ExpImage}
                                    alt={'Image Not Found'}
                                />


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Tailor Your Resume to the Job



                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                        Did you know that over 70% of resumes submitted to job-boards are never read?



                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Yep, Applicant Tracking Systems (ATS) keep your resume from being read by HR. An ATS (for resume) is software that helps companies filter through hundreds of resumes they receive per day.


                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                        So you’re probably wondering, “What gives?! What’s the point of perfecting your resume, if a robot can just say “No” and single-handedly destroy all the effort you put in?”

                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Well, don’t worry - getting past the Application Tracking System is not hard, as long as you know how to do it.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The key here is to tailor your resume to each job you apply. To do this, you need to mention the right keywords from the job ad in your resume.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>

                                        So, let’s cover a simple example on how to do this. Let’s say that after reading the following job ad for the position of a digital marketer, you discover that the most critical requirements for the job are:

                                    </Text>

                                </Box>

                                <Image

                                    src={jobAd}
                                    alt={'Image Not Found'}
                                />

                                <Box mt={["3%", "3%", "3%"]} >

                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            5+ years of experience in online marketing
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Social media marketing experience, with good knowledge of Facebook advertising
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            B.A. in Marketing or Business Administration
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>

                                            Experience managing 20,000 USD monthly advertising budget on Facebook

                                        </ListItem>
                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        So, let’s cover a simple example on how to do this. Let’s say that after reading the following job ad for the position of a digital marketer, you discover that the most critical requirements for the job are:
                                    </Text>

                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The next section we’re going to cover is your Education. Let’s start with the basics - how to format the education section & what to mention there. Then, we’ll move on to tips & tricks that’ll help you stand out…
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> Program Name.</b> E.g.: “B.A. in Business Administration”
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>University Name.</b> E.g.: “New York State University”
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> Years Attended.</b> E.g.: “08/2008 - 06/2012”
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>    (Optional) GPA.</b> E.g.: “3.9 GPA”
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b> (Optional) Honors.</b> E.g.: Cum Laude, Magna Cum Laude, Summa Cum Laude.


                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>   (Optional) Academic achievements. </b> Any interesting papers you’ve written, courses you’ve excelled in, etc.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            <b>  (Optional) Minor.</b> “Minor in Psychology”
                                        </ListItem>
                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Here an example:
                                    </Text>
                                </Box>

                                <Image

                                    src={EducationHelpImage}
                                    alt={'Image Not Found'}
                                />


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Tips on perfecting your education section:
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            If you don’t have any work experience, mention your education section first.
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Mention your latest educational entry on top.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            If you have a university degree, don’t mention your high school at all.
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            ONLY mention GPA if you had a very impressive academic career (3.5 GPA plus).
                                        </ListItem>
                                    </UnorderedList>
                                </Box>


                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        How to List Skills in Your Resume
                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        When mentioning skills in your resume, there are 3 essential steps to follow:
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b> Step #1 -</b> List Hard Skills with Experience Levels. For each hard skill you list, you want to mention your proficiency level:
                                    </Text>
                                    <Image

                                        src={SkillImage}
                                        alt={'Image Not Found'}
                                    />
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        As a rule of thumb, you can divide them by:
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b> Beginner -</b> You have some experience with the skill, whether it’s from some entry-level practice or classroom education.


                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b> Intermediate -</b> You’ve used the skill in a work environment with a good level of understanding.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b>  Advanced -</b> You’re the go-to person for the skill in your office. You can coach other employees, and understand the skill on a high level.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b> Expert -</b> You’ve applied this skill in more than a handful of different projects & organizations. You’re the go-to person for advice about the skill, not just in your office, but even amongst some of the best professionals in your field.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Make sure to <b>NEVER</b> lie about your skill levels. Otherwise, it’s going to be pretty awkward both for you and your employer.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Imagine your first task at work as an Illustrator - to create a graphic vector to go nicely with an article. If you end up delivering a hastily drawn stick figure colored with a paint bucket tool in Microsoft Paint, you’ll be out of the job before your probation period ends.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        <b>  Step #2 - Tailor Your Skills to the Job.</b> You might have some super rare, awesome skills, but they’re not always going to be useful. For example, it’s awesome that you know accounting, but would you really need it at your new job as a line cook? Exactly!
                                        Take a look at the job ad and list 2-3 essential skills required for the job.

                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight="bold">
                                        For example:
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} fontWeight="bold">
                                        Qualifications
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            University Degree
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Tech-savy, with some background in CMS systems such as WordPress
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Thrives in a stressful environment & manages to juggle multiple tasks and deadlines
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Organizational and time management skills
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Excellent communication skills
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Self-reliant, with the ability to manage their own work
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Can-do attitude and an outside-the-box thinker
                                        </ListItem>
                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >
                                        Systems:
                                    </Text>
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Proficient in Photoshop, InDesign, Illustrator, Keynote and Pages
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Basic understanding of Office software - Word, Excel, Powerpoint, and Outlook
                                        </ListItem>


                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >
                                        As you can see, the must-have skills here are Photoshop, InDesign, Illustrator, Keynote and Pages. A good-to-have is WordPress. You can also mention Word, Excel, Powerpoint, and Outlook, but it’s pretty much assumed that you know how to use them, as they’re required for most office jobs.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >
                                        If you’re qualified, make sure to mention all relevant skills with respective proficiency levels in your “Skills” section.
                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]} >
                                        <b> Step #3 -</b> Include Some Universal Skills - “Universal Skills” are the type of skills useful for almost any job out there. These are both soft skills (leadership, teamwork, critical thinking, etc.) and hard skills (Excel, Powerpoint, Photoshop, writing, etc.). Whatever job you’re applying to, chances are, these skills will in one way or another come in handy, so feel free to include them, even if they’re not specifically required for the position.

                                    </Text>




                                </Box>
                                <Box mt={["3%", "3%", "3%"]} >
                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Other Important Sections
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        The sections we’ve covered so far are must-haves for any resume. They’re the bread-and-butter for any job application, and if you get them right, you’ll land any job you apply to.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        The following sections, though, can really give you a boost here and there.
                                    </Text>

                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]} fontWeight="bold">
                                        Languages
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Are you bi-lingual? Or better, multi-lingual? You should ALWAYS mention that on your resume!
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Even if the position doesn’t require you to know the specific language, it can still come in handy at some point. At the end of the day, it’s always better to know more languages than less.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        To list languages in your resume, simply write them down and assign them the appropriate level:
                                    </Text>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >
                                    <UnorderedList ml={["4%", "5%", "5%"]}>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Native
                                        </ListItem>

                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Fluent
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Proficient (Enough knowledge to pass by in a professional environment)
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Intermediate
                                        </ListItem>
                                        <ListItem fontSize={'1rem'} className={"only-font-family"}>
                                            Basic
                                        </ListItem>


                                    </UnorderedList>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        As a given, you should never lie about your language skills. You never know, your interviewer might turn out to be fluent in the language, or even be a native speaker!
                                    </Text>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >

                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Hobbies & Interests
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Want to add some spice to your resume? The hobbies and interests section, while not a game-changer, can help show who YOU are as an individual. Who knows, maybe you and your interviewee have some hobbies in common?
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        If you end up with some extra space in your resume, don’t hesitate to show off your personality with a hobbies/interests section.
                                    </Text>

                                </Box>



                                <Box mt={["3%", "3%", "3%"]} >

                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Volunteering Experience
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        If you’re the type of person to use your free time helping others, while expecting nothing in return, chances are that you’re the type of employee who’s in it for more than just the money. It leaves the impression that you’re a devoted, loyal employee.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Several studies show that you can boost your chances of getting hired simply by listing your volunteering experience. This holds especially true if you’re a student with next to no work experience.
                                    </Text>

                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >

                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Certifications & Awards
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Do you have any awards that make you stand out in your field? How about certifications from industry experts?
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Whichever the case is, as long as it’s relevant for the position you’re applying for, feel free to add it to your resume.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Let’s say, for example, you’re a Microsoft Cloud Engineer. Assuming you specialize in Microsoft Technologies, you’d definitely want to include all essential certifications, such as the Azure Solutions Architect Expert one.
                                    </Text>

                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >


                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Publications
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Are you a freelance writer? Maybe a distinguished academic?
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        If you have any published works (online, or in an academic journal), you might want to include them in your resume. Make sure to include a URL, so the HR knows where to check your work!
                                    </Text>
                                </Box>

                                <Box mt={["3%", "3%", "3%"]} >

                                    <Text fontSize={["24px"]} className={"sub-heading"} fontWeight={["bold"]} >
                                        Projects
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "2%", "2%"]}>
                                        Working on side projects can really show off your passion for your field. Whether they’re university class projects or part-time entrepreneurial endeavours, they’re both equally relevant.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Let’s say, for example, you worked on a mock software product as part of a competition in university. You went through every step of product creation, from ideation to creating a marketing strategy.
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        You can mention the project in your resume and stand a better chance at landing that business internship!
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Or on the other hand, maybe you manage an Etsy store, selling hand-made arts & crafts to customers online. Mention all of it!
                                    </Text>
                                    <Text fontSize={'1rem'} className={"only-font-family"} mt={["1%", "1%", "1%"]}>
                                        Hiring managers love employees who do cool work in their free time.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Container>

                </Box>
            </>

        </>
    );
}