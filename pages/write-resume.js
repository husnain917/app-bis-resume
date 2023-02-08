import { Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { AiOutlineQuestionCircle, AiOutlineMail } from "react-icons/ai";
import {
  Button,
  Container,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import makeResume from "../public/makeResume.png";
import ResumeHeader from "../public/ResumeHeader.png";
import HelpDesci from "../public/HelpDesci.png";
import ExpImage from "../public/ExpImage.png";
import jobAd from "../public/jobAd.png";
import EducationHelpImage from "../public/EducationHelpImage.png";
import SkillImage from "../public/SkillImage.png";
import ResumeHel from "../public/ResumeHel.png";
import ProfileDescrip from "../public/ProfileDescrip.png";
import SideBar from "../src/components/sideBar/SideBar";
import Layout from "../src/Layout";
import styles from "../styles/sideBarSection.module.css";

export default function Write_resume() {
  return (
    <>
      <>
        <Box
          bgColor={"#f2f4f6"}
          h={["100%", "100%"]}
          display={"flex"}
          maxW={["100%", "100%", "100%", "100%"]}
          justifyContent={"space-between"}
        >
          <Box padding={"40px 0px"} zIndex={"1049"} pl={["", "", "5%"]}>
            <Box className={styles.sideBarContainer}>
              <SideBar />
            </Box>
          </Box>
          <Container
            maxW={["100%", "100%", "70%", "70%", "70%"]}
            bgColor="white"
            border="3px"
          >
            <Box maxW={["100%", "100%", "100%", "100%"]}>
              <Box p={["5%", "5%"]}>
                <Text
                  fontSize={["30px", "40px", "40px"]}
                  className={"main-heading"}
                  mb="3%"
                >
                  {" "}
                  {
                    "Unleash Your Potential: A Comprehensive Guide to Writing a Winning Resume in 2023"
                  }
                </Text>

                <Text
                  fontSize={["20px"]}
                  className={"sub-heading"}
                  fontWeight={"bold"}
                >
                  {"How to Write a Resume - Step by step "}
                </Text>
                <Text
                  fontSize={"1rem"}
                  className={"only-font-family"}
                  mt={["2%", "3%", "3%"]}
                >
                  {`For job seekers, crafting a strong resume is the key to unlocking the doors of opportunity. A well-written resume can lead to multiple job offers and a fulfilling career, while a weak one can leave you stuck in a job search limbo.`}
                </Text>

                <Text
                  fontSize={"1rem"}
                  className={"only-font-family"}
                  mt={["2%", "3%", "3%"]}
                >
                  {`In this guide, we'll teach you everything you need to know about how to create a winning resume that will get the attention of HR managers and lead to a steady stream of job interviews. `}
                </Text>

                <Text
                  fontSize={"1rem"}
                  className={"only-font-family"}
                  mt={["1%", "2%", "2%"]}
                >
                  {` From understanding the latest trends and best practices, to identifying the right format and language to use, this guide will give you the tools and knowledge you need to succeed in today's competitive job market.`}
                </Text>
                {/*  step  */}
                <Box mt={["3%", "3%", "3%"]}>
                  <Text fontSize={["22px"]} className={"sub-heading"}>
                    How to Write a Resume{" "}
                  </Text>
                  <OrderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Choose a resume format that highlights your strengths and experiences in the most effective way.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Include your personal details and contact information prominently in your resume.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Use a resume summary or objective to grab the attention of hiring managers and give them a snapshot of your qualifications and experiences.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`List your work experience and achievements in a clear and organized manner, highlighting your relevant skills and accomplishments.`}{" "}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Mention your top soft and hard skills to demonstrate your qualifications and capabilities.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Consider including additional resume sections such as languages, hobbies, and certifications to showcase your unique skills and experiences.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Tailor your resume to the specific job ad by including relevant keywords and phrases and highlighting your qualifications that match the job requirements.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Create a compelling cover letter that explains why you are the best candidate for the job and how your skills and experiences align with the position.`}{" "}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`Proofread your resume and cover letter multiple times to ensure they are error-free and easy to read.`}{" "}
                    </ListItem>
                  </OrderedList>
                </Box>
                <Image src={ResumeHel} alt={"Image Not Found"} />
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    fontWeight={["bold"]}
                    className={"sub-heading"}
                  >
                    {" "}
                    How to Make a Resume{" "}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Choose a resume format that highlights your strengths and experiences in the most effective way.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Include your personal details and contact information prominently in your resume.`}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Use a resume summary or objective to grab the attention of hiring managers and give them a snapshot of your qualifications and experiences.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`List your work experience and achievements in a clear and organized manner, highlighting your relevant skills and accomplishments.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Mention your top soft and hard skills to demonstrate your qualifications and capabilities.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Consider including additional resume sections such as languages, hobbies, and certifications to showcase your unique skills and experiences.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Tailor your resume to the specific job ad by including relevant keywords and phrases and highlighting your qualifications that match the job requirements.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Create a compelling cover letter that explains why you are the best candidate for the job and how your skills and experiences align with the position.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "1%", "1%"]}
                  >
                    {`Proofread your resume and cover letter multiple times to ensure they are error-free and easy to read.`}
                  </Text>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontWeight={["bold"]}
                    fontSize={["24px"]}
                    className={"sub-heading"}
                  >
                    {" "}
                    {`Creating a Winning Resume: A Proven Guide for Success`}{" "}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "3%", "3%"]}
                  >
                    {` In today's competitive job market, having a resume that stands out is crucial to landing your dream job. But creating a resume that showcases your qualifications
                                     and experiences in the most compelling way can be a daunting task. 
                                    That's where a resume builder comes in. Instead of using traditional text editors, a resume builder like Bisresme can revolutionize the way you create your resume. Our builder is user-friendly, efficient, and most importantly, it produces a visually appealing and professional resume that can fit more information than a traditional cookie-cutter resume. By using our guide and our resume builder, you can unlock the potential of your resume and increase your chances of getting the job you want.`}
                  </Text>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontWeight={["bold"]}
                    fontSize={["24px"]}
                    className={"sub-heading"}
                  >
                    {" "}
                    {`Maximize Your Job Search: The Ultimate Guide to Choosing the Right Resume Format`}{" "}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["2%", "3%", "3%"]}
                  >
                    {`Your resume format is the first impression an employer will have of your professional experience and
                                     qualifications. Picking the right format can help you highlight your strengths and make a lasting impact.
                                      Whether you are a recent graduate, a seasoned professional or someone looking to make a career change,
                                       our guide will walk you through the pros and cons of the three main types of resume formats - reverse
                                        chronological, functional or skills-based, and combination. With our expert tips, you'll be able to 
                                        select the perfect format that will showcase your abilities and help you unlock your job potential.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {" "}
                    {`Creating a Winning Resume Layout`}{" "}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`The layout of your resume is just as important as the information it contains. 
                                    It's the first thing a recruiter will notice, and a well-designed layout can make all the difference 
                                    in catching their attention. In this guide, we will share some of the best practices when it comes to 
                                    creating a winning resume layout. `}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`From choosing the right font and formatting to organizing your sections and making it easy to read,
                                     we'll show you how to make your resume stand out and leave a lasting impression.`}
                  </Text>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {" "}
                    {`The Ultimate Resume Layout Checklist: How to Create a Professional and Organized Resume`}{" "}
                  </Text>
                  <OrderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Consider using a functional or skills-based format if you lack relevant work experience or are looking to make a career change.`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Use clear section headings, such as H2, to make it easy for recruiters to navigate your resume.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Use ample white space to make your resume easy on the eyes and visually pleasing.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Choose an easy-to-read font such as Ubuntu, Roboto or Overpass, and avoid any fonts that may be too flashy or hard to read.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Use the right font size, with normal text at 11-12pt and section titles at 14-16pt.`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Save your resume as a PDF to ensure that the formatting stays intact.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Consider the industry you are applying to and choose a resume layout that is appropriate, traditional industries may prefer a more traditional looking template.`}
                    </ListItem>
                  </OrderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {" "}
                    {`Creating a Winning Resume: A Guide to What to Include`}{" "}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`The most popular sections for a resume are:`}
                  </Text>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Tailor your contact information to include your name, professional email address, phone number, and location.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Use a resume summary or objective statement to provide a brief overview of your qualifications and career goals.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Detail your relevant work experience, including job titles, companies, and key responsibilities and achievements.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Highlight your education, including degrees and certifications earned.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`List your top skills, both hard and soft, that are relevant to the position you're applying for.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Optional Sections - Languages, Publications, Hobbies, etc.`}
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Contact Information
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` You're correct that the "Contact Information" section of a resume is crucial, as it allows the hiring manager to easily get in touch with you. Some other information that should be included in this section include:`}
                  </Text>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`A professional-sounding email address (avoid using personal or unprofessional email addresses)`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`A phone number where you can be reached during business hours`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Your current city and state (or country if applying for an international job)`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {`A personal website or portfolio, if applicable. It is also important to make sure that your contact information is up-to-date and that your voicemail message and email address are professional.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`A LinkedIn profile, if you have one`}
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text fontSize={["24px"]} className={"sub-heading"}>
                    Optional Information
                  </Text>

                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`LinkedIn URL:-`} </b>{" "}
                      {`Yes, including a link to an up-to-date professional profile such as LinkedIn can add value to a job application by providing the employer with additional information about your skills, experience, and professional network.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`Title:-`} </b>
                      {`It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist”.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`Social Media :-`} </b>
                      {`This would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`Website / Blog -`} </b>
                      {`This would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.`}
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {" "}
                    {`There are a few things you should not include in the contact information section of a job application or resume:`}{" "}
                  </Text>

                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> Date of Birth</b>{" "}
                      {`It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist”.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b>
                        {" "}
                        {`Unprofessional Email Address - Do: name.lastname@gmail.com Don’t: player69@gmail.com`}{" "}
                      </b>
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`Headshot :-`} </b>
                      {`The HR manager's main focus is to evaluate the candidate's qualifications, skills, and experience for the job. A photograph is not necessary for this evaluation, and it's also important to consider that adding a photo to your application may create a bias, regardless of whether it's intentional or not.`}
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Resume Summary or Objective
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` Yes, it is true that first impressions are crucial in both personal and professional settings. This is particularly important in a job search as the HR manager often has a large number of resumes to review and may only spend a short amount of time on each one.`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`Having a well-crafted resume summary or objective can help you make a great first impression by clearly highlighting your relevant skills, qualifications, and experience. This section should be placed at the top of your resume, near the contact information section, so it is easy for the HR manager to find and quickly scan. This section should be brief, specific, and relevant to the job you are applying for.`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`It's important to make sure that your resume stands out from the competition, and by focusing on your strengths and making sure that your summary or objective is clear, concise, and relevant to the job you are applying for can make a great first impression.`}
                  </Text>
                </Box>
                <Box mt={["2%", "2%", "2%"]} ml={["0%", "10%"]}>
                  <Image src={ProfileDescrip} alt={"Image Not Found"} />
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {`What’s a Resume Summary & When to Use it`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`Yes, that is correct. A resume summary is a 2-3 sentence summary of your career that highlights your most relevant qualifications, skills, and experience. It is typically placed at the top of the resume, near the contact information section. It is a great way to give the HR manager a quick overview of your qualifications and to show how they align with the requirements of the job you are applying for.`}
                  </Text>
                  <OrderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {` Your job title and years of experience in the field, such as "Customer support representative with 5+ years of experience in the IT industry."`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {` 1 or 2 top achievements or core responsibilities, such as "Specialized in technical support, customer care, and user retention".`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Desired goal or interest in working at a specific company, such as "Looking for new opportunities as a support lead for a SaaS company".`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`It's a good idea to use a resume summary in most situations, especially if you have some experience in the field, unless you are a recent university graduate or switching careers. In that case, a resume objective might be more appropriate as it will focus more on your goals and objectives for the job you are applying for.`}
                    </ListItem>
                  </OrderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {`Formula to Create Your Resume Objective:`}
                  </Text>

                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`(1) 	State the position you are applying for, such as "Seeking a position as a [JOB TITLE]."`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`(2) 	Indicate your relevant qualifications, skills, and experience, such as "With [X years/months] of experience in [Y INDUSTRY/FIELD], and a [DEGREE/CERTIFICATION] in [Z]."`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`to help (3) 	Highlight your specific goals and objectives for the position, such as "I am eager to use my skills and experience to [ACHIEVE SPECIFIC GOALS OR RESPONSIBILITIES RELATED TO THE JOB]."`}
                  </Text>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Work Experience
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` The Work Experience section of your resume is one of the most important sections as it allows you to showcase your past accomplishments and responsibilities.`}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`It's where you can demonstrate your qualifications and skills that are relevant to the job you are applying for.`}
                  </Text>
                  {/*  step  */}
                  <Box mt={["3%", "3%", "3%"]}>
                    <Text fontSize={["24px"]} className={"sub-heading"}>
                      {" "}
                      How to List Work Experience in a Resume{" "}
                    </Text>
                    <OrderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`List your work experience in reverse chronological order, starting with your most recent position.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Use clear and concise language to describe your job title, company, and job responsibilities.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Use bullet points to make your work experience easy to read and navigate.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`	Use action verbs and quantifiable metrics to demonstrate the impact of your work. For example, "managed a team of 10 employees and increased sales by 15%.".`}{" "}
                      </ListItem>

                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Include any relevant volunteer or extracurricular experiences that demonstrate your relevant skills and experience.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Tailor your work experience to the specific job you are applying for by highlighting the skills, qualifications, and experience that are most relevant to the position.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Be honest and accurate when describing your work experience, and don't exaggerate your responsibilities or accomplishments.`}{" "}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {" "}
                        {`Make sure to proofread your resume to ensure that there are no typos or grammatical errors.`}{" "}
                      </ListItem>
                    </OrderedList>
                  </Box>
                  <Image src={ResumeHel} alt={"Image Not Found"} />

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      {" "}
                      {`Creating a Winning Resume: A Proven Guide for Success`}{" "}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    >
                      {`In today's competitive job market, having a resume that stands out is crucial to landing your dream job.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    ></Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    >
                      {`But creating a resume that showcases your qualifications and experiences in the most compelling way can be a daunting task. That's where a resume builder comes in.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    >
                      {`Instead of using traditional text editors, a resume builder like Bisresume can revolutionize the way you create your resume.`}
                    </Text>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      {" "}
                      {`How to Pick the Right Resume Format?`}{" "}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    >
                      {`Our builder is user-friendly, efficient, and most importantly, it produces a visually appealing and professional resume that can fit more information than a traditional cookie-cutter resume.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "3%", "3%"]}
                    >
                      {` By using our guide and our resume builder, you can unlock the potential of your resume and increase your chances of getting the job you want.`}
                    </Text>
                    <OrderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Reverse chronological resume format:-`} </b>
                        {`This is the most popular resume format and is ideal for people with plenty of work experience that is relevant to the position they’re interested in.`}
                      </ListItem>

                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Functional/skills-based resume format:-`} </b>
                        {` If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Combination resume format:-`} </b>
                        {`The combination resume is a great choice for job-seekers with a very diverse skill-set. It’s useful if you’re applying for a role that requires expertise in 3-4 different fields, and you want to show all that in your resume. Say, for example, you’re applying for a senior management role, and the requirements are expertise in Management, Sales, and Software Development.`}
                        <Text
                          fontSize={"1rem"}
                          className={"only-font-family"}
                          mt={["1%", "2%", "2%"]}
                        >
                          {`In 90%+ cases, you’d want to stick to the reverse-chronological resume format. This is the most common one, and most HR managers are used to this. Hence, in this guide, we’re going to focus on this specific format.`}
                        </Text>
                      </ListItem>
                    </OrderedList>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      Creating a Winning Resume Layout
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`The layout of your resume is just as important as the information it contains. It's the first thing a recruiter will notice, and a well-designed layout can make all the difference in catching their attention.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`In this guide, we will share some of the best practices when it comes to creating a winning resume layout. From choosing the right font and formatting to organizing your sections and making it easy to read, we'll show you how to make your resume stand out and leave a lasting impression.`}
                    </Text>
                  </Box>
                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      {" "}
                      {`Resume Layout Must-Haves`}{" "}
                    </Text>

                    <OrderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`One page in length:-`} </b>

                        {`You should only go for 2 pages if you really, really believe that it’ll add significant value. HR managers in big firms get around 1,000+ resumes per month. They’re not going to spend their valuable time reading your life story!`}
                      </ListItem>

                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Functional/skills-based resume format:-`} </b>
                        {`If you lack relevant work experience because you are a student/recent graduate, or you are looking to make a career change, the skills-based format is a better choice.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Clear section headings:-`} </b>

                        {`Pick a heading (H2, for example) and use it for all the section headers.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Ample white space:-`} </b>

                        {`especially around the margins.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {` Easy-to-read font:-`} </b>

                        {`We’d recommend sticking to what stands out, but not too much. Do: Ubuntu, Roboto, Overpass, etc. Don’t (ever): Comic Sans`}
                      </ListItem>

                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Pick the right font size:-`} </b>

                        {`As a rule of thumb, go for 11 - 12 pt for normal text, and 14 - 16 pt for section titles.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`As a rule of thumb, save your resume as PDF. Word is a popular alternative, but it has a good chance of messing up your resume formatting.`}

                        {`One more thing you need to consider in terms of resume layout is whether you’re going for a traditional-looking free resume template or something a bit more modern:`}
                      </ListItem>
                      <Text
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        mt={["1%", "2%", "2%"]}
                      >
                        {` If you’re pursuing a career in a more traditional industry - legal, banking, finance, etc. - you might want to stick to the first.`}
                      </Text>
                    </OrderedList>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      {" "}
                      {`Creating a Winning Resume: A Guide to What to Include`}{" "}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`The most popular sections for a resume are:`}
                    </Text>
                    <UnorderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`Tailor your contact information to include your name, professional email address, phone number, and location.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`Use a resume summary or objective statement to provide a brief overview of your qualifications and career goals.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`Detail your relevant work experience, including job titles, companies, and key responsibilities and achievements.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`Highlight your education, including degrees and certifications earned.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`List your top skills, both hard and soft, that are relevant to the position you're applying for.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        {`Include any additional sections that may be relevant to the job or showcase your unique qualifications, such as languages spoken or publications authored.`}
                      </ListItem>
                    </UnorderedList>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {` Now that we’ve got the basics out of the way, let’s dive into the essentials of how to write a resume.`}
                    </Text>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      Contact Information
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`The most critical section in your resume is the “contact information.” Even if you get everything else right, you’re not going to go far if the HR manager can’t get in touch with you because you misspelt your email.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`Make sure to double-check, and even triple-check your contact information section and make sure everything is correct and up-to-date.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                      fontWeight={["bold"]}
                    >
                      Contact Information to be Included in a Resume
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                      fontWeight={["bold"]}
                    >
                      {`Must-have Information`}
                    </Text>
                    <UnorderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        fontWeight={["bold"]}
                      >
                        {`First Name / Last Name.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        fontWeight={["bold"]}
                      >
                        Phone Number.
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        fontWeight={["bold"]}
                      >
                        Email Address.
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Location:-`} </b>
                        {`are you located in the area, or will the company have to sponsor relocation?`}
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      Optional Information
                    </Text>

                    <UnorderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Title :-`} </b>{" "}
                        {`Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`LinkedIn URL:-`} </b>
                        {`If you have an up-to-date profile that can add value to your application, make sure to include the link.`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Social Media :-`} </b>
                        {`Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.`}
                      </ListItem>

                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Website / Blog -`} </b>
                        {` Do you have a published portfolio online? For developers, this would be your GitHub, for a designer Behance or Dribble and for a writer, it could be your personal blog.`}
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      What NOT to Include in the Contact Info Section
                    </Text>

                    <UnorderedList ml={["4%", "5%", "5%"]}>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> Date of Birth</b>{" "}
                        {`Your professional title. It can be your position, word-for-word, or your desired job. Think “Digital Marketing Specialist” or “Junior Data Scientist.”`}
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b>
                          {" "}
                          {`Unprofessional Email Address - Do: name.lastname@gmail.com Don’t: player69@gmail.com`}{" "}
                        </b>
                      </ListItem>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                      >
                        <b> {`Headshot :-`} </b>
                        {`The HR manager doesn’t need to know what you look like in order to evaluate your application, so there’s no real need to include it.`}
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  <Box mt={["3%", "3%", "3%"]}>
                    <Text
                      fontSize={["24px"]}
                      className={"sub-heading"}
                      fontWeight={["bold"]}
                    >
                      Resume Summary or Objective
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`It’s not a secret for anyone that first impressions matter, whether they’re in your personal life, or your career.`}
                    </Text>
                    <Text fontSize={"1rem"} className={"only-font-family"}>
                      {`If you leave a bad first impression, chances are, it’s there to stay. After all, it’s very hard to change someone’s opinion of you.`}
                    </Text>
                    <Text fontSize={"1rem"} className={"only-font-family"}>
                      {` The same applies to your job search - the HR manager spends around 6 seconds scanning each resume. Yep, your carefully-worded, hand-crafted resume only gets 6 seconds of attention. Unless, of course, you manage to leave an amazing first impression.`}
                    </Text>
                    <Text
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {`The way you accomplish this is through either a good resume summary or objective. Both are placed at the top of your resume, right around the contact information section:`}
                    </Text>
                  </Box>
                  <Box mt={["2%", "2%", "2%"]} ml={["0%", "10%"]}>
                    <Image src={ProfileDescrip} alt={"Image Not Found"} />
                  </Box>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {`What’s a Resume Summary & When to Use it`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`A resume summary is a 2-3 sentence summary of your career. You should use a resume summary in basically any situation, unless you’re a recent university graduate or switching careers (in that case, you use a resume objective. More on that later!).`}
                  </Text>
                  <OrderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Your job and years of experience. E.g.: Customer support representative with 5+ years of experience in the IT industry.`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`1 or 2 top achievements (or core responsibilities). E.g.: Specialized in technical support, customer care, and user retention.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Desired goal (generally, passion for working at a specific company). E.g.: Looking for new opportunities as a support lead for a SaaS company.`}
                    </ListItem>
                  </OrderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {`Formula to Create Your Resume Objective:`}
                  </Text>

                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {` (1) [SKILL/EDUCATION/CERTIFICATION RELEVANT TO THE JOB WITH JOB TITLE].`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`Looking to apply my (2) [years/months of EXPERIENCE RELEVANT TO THE JOB DESCRIPTION] at [COMPANY YOU ARE APPLYING TO]`}
                  </Text>
                  <Text fontSize={"1rem"} className={"only-font-family"}>
                    {`to help (3) [TYPE OF RESPONSIBILITIES YOU WILL HELP OUT WITH SUCCESSFULLY].`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    fontWeight={["bold"]}
                  >
                    Examples of Resume Objectives
                  </Text>

                  <OrderedList>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {" "}
                      {` So, here’s how that would look like if you’re a student:`}{" "}
                    </ListItem>
                    <UnorderedList>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        mt={["2%", "2%", "2%"]}
                      >
                        {`“Hard-working recent graduate with a B.A. in Graphic Design from New York State University seeking new opportunities. 3+ years of practical experience working with Adobe Illustrator and Photoshop, creating illustrations & designing UX / UI. Looking to grow as a designer, as well as perfect my art, at the XYZ Design Studio.”`}
                      </ListItem>
                    </UnorderedList>

                    <ListItem
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["1%", "2%", "2%"]}
                    >
                      {" "}
                      {`Or, on the other hand, if you’re going through a career change:`}{" "}
                    </ListItem>
                    <UnorderedList>
                      <ListItem
                        fontSize={"1rem"}
                        className={"only-font-family"}
                        mt={["2%", "2%", "2%"]}
                      >
                        {`“IT project manager with 5+ years of experience in software development. Managed a team of developers to create products for several industries, such as FinTech and HR tech. Looking to leverage my experience in managing outsourced products as a Product Owner at XYZ.”`}
                      </ListItem>
                    </UnorderedList>
                  </OrderedList>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Work Experience
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`The Work Experience section of your resume is one of the most important sections as it allows you to showcase your past accomplishments and responsibilities.`}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`It's where you can demonstrate your qualifications and skills that are relevant to the job you are applying for.`}
                  </Text>
                </Box>
                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    How to List Work Experience in a Resume
                  </Text>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "2%", "2%"]}
                    >
                      {`List your work experience in reverse chronological order, starting with your most recent position.`}
                    </ListItem>
                    <ListItem
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "2%", "2%"]}
                    >
                      {`Use clear and concise language to describe your job title, company, and job responsibilities.`}
                    </ListItem>{" "}
                    <ListItem
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "2%", "2%"]}
                    >
                      Use bullet points to make your work experience easy to
                      read and navigate.
                    </ListItem>{" "}
                    <ListItem
                      fontSize={"1rem"}
                      className={"only-font-family"}
                      mt={["2%", "2%", "2%"]}
                    >
                      {`Use action verbs and quantifiable metrics to demonstrate the impact of your work. For example, "managed a team of 10 employees and increased sales by 15%"`}
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` Here’s a real-life example:`}
                  </Text>
                </Box>

                <Image src={ExpImage} alt={"Image Not Found"} />

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Tailor Your Resume to the Job
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` One way to tailor your resume to each job you apply for is to use specific industry jargon and terminology that is relevant to the position.
                                        For example, if you are applying for a position as a software engineer, it would be beneficial to include keywords such as "JavaScript," "Python," "Agile development," and "Git" in your resume. This will demonstrate to the ATS and the hiring manager that you have a strong understanding of the technologies and processes used in the software engineering field.`}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`Another way to tailor your resume is to highlight specific accomplishments and achievements that align with the requirements listed in the job ad. This can be done by using action verbs and quantifiable metrics to demonstrate the impact of your work. For example, "Led a team of 5 developers and successfully delivered a project ahead of schedule and under budget".`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`By tailoring your resume to each job you apply for, you can increase the chances of the ATS recognizing your qualifications and experience as relevant to the position, and your resume being passed on to the HR manager for further review.
                                        The Education section of your resume is where you can showcase your educational background and academic achievements. It's important to format this section correctly and include all relevant information to demonstrate your qualifications and skills to potential employers.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    Here are the basic elements you should include in the
                    Education section of your resume:
                  </Text>
                </Box>

                <Image src={jobAd} alt={"Image Not Found"} />

                <Box mt={["3%", "3%", "3%"]}>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {` 5+ years of experience in online marketing`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Social media marketing experience, with good knowledge of Facebook advertising`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`B.A. in Marketing or Business Administration`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Experience managing 20,000 USD monthly advertising budget on Facebook`}
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`So, let’s cover a simple example on how to do this. Let’s say that after reading the following job ad for the position of a digital marketer, you discover that the most critical requirements for the job are:`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {` The next section we’re going to cover is your Education. Let’s start with the basics - how to format the education section & what to mention there. Then, we’ll move on to tips & tricks that’ll help you stand out…`}
                  </Text>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> Program Name.</b>{" "}
                      {`The full name of the degree or program you completed, such as "B.A. in Business Administration"`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b>University Name.</b>{" "}
                      {`The full name of the university or institution you attended, such as "New York State University"`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> Years Attended.</b>
                      {`The dates you attended the program or institution, such as "08/2008 - 06/2012"`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`(Optional) GPA.`} </b>{" "}
                      {`Your grade point average, such as "3.9 GPA"`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`(Optional) Honors.`} </b>{" "}
                      {`Any academic honors or distinctions you received, such as "Cum Laude" or "Magna Cum Laude"`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`(Optional) Academic achievements.`} </b>{" "}
                      {`Any papers you've written, courses you've excelled in, or other academic achievements that demonstrate your knowledge and skills.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      <b> {`(Optional) Minor.`} </b>
                      {`: Any minor or additional program you completed, such as "Minor in Psychology."
                                            By including all relevant information in the Education section of your resume and formatting it correctly, you can showcase your qualifications and skills to potential employers, and increase your chances of landing an interview.`}
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    Here an example:
                  </Text>
                </Box>

                <Image src={EducationHelpImage} alt={"Image Not Found"} />

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`Tips on perfecting your education section:`}
                  </Text>
                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {` If you don’t have any work experience, mention your education section first.`}
                    </ListItem>

                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      Mention your latest educational entry on top.
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`If you have a university degree, don’t mention your high school at all.`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {` ONLY mention GPA if you had a very impressive academic career (3.5 GPA plus).`}
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    How to List Skills in Your Resume
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`When mentioning skills in your resume, it's important to follow three essential steps:`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> Step #1 -</b>{" "}
                    {`- List Hard Skills with Experience Levels: Clearly state your proficiency level for each hard skill you list. This can be done by dividing them into beginner, intermediate, advanced, and expert levels. Be honest about your skill levels, as lying could lead to negative consequences.`}
                  </Text>
                  <Image src={SkillImage} alt={"Image Not Found"} />
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {`As a rule of thumb, you can divide them by:`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> {`Beginner -`} </b>{" "}
                    {`You have some experience with the skill, whether it’s from some entry-level practice or classroom education.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> {`Intermediate -`} </b>{" "}
                    {`You’ve used the skill in a work environment with a good level of understanding.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> {`Advanced -`} </b>{" "}
                    {`You’re the go-to person for the skill in your office. You can coach other employees, and understand the skill on a high level.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> {` Expert -`} </b>{" "}
                    {`You’ve applied this skill in more than a handful of different projects & organizations. You’re the go-to person for advice about the skill, not just in your office, but even amongst some of the best professionals in your field.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    Make sure to <b>NEVER</b>{" "}
                    {`lie about your skill levels. Otherwise, it’s going to be pretty awkward both for you and your employer.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {`Imagine your first task at work as an Illustrator - to create a graphic vector to go nicely with an article. If you end up delivering a hastily drawn stick figure colored with a paint bucket tool in Microsoft Paint, you’ll be out of the job before your probation period ends.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    <b> {`Step #2 - Tailor Your Skills to the Job.`} </b>{" "}
                    {`Tailor Your Skills to the Job: Make sure to mention 2-3 essential skills required for the job as stated in the job ad. This will show the employer that you are a good fit for the position.`}
                  </Text>

                  <UnorderedList ml={["4%", "5%", "5%"]}>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Proficient in Photoshop, InDesign, Illustrator, Keynote and Pages`}
                    </ListItem>
                    <ListItem fontSize={"1rem"} className={"only-font-family"}>
                      {`Basic understanding of Office software - Word, Excel, Powerpoint, and Outlook`}
                    </ListItem>
                  </UnorderedList>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`As you can see, the must-have skills here are Photoshop, InDesign, Illustrator, Keynote and Pages. A good-to-have is WordPress. You can also mention Word, Excel, Powerpoint, and Outlook, but it’s pretty much assumed that you know how to use them, as they’re required for most office jobs.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`If you’re qualified, make sure to mention all relevant skills with respective proficiency levels in your “Skills” section.`}
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    <b> {`Step #3 -`} </b>{" "}
                    {`Include Some Universal Skills: Universal skills, such as leadership, teamwork, critical thinking, and common software skills, are useful for almost any job. Even if they are not specifically required for the position, it's still beneficial to mention them in your resume.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    {`Hobbies & Interests`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`When listing your hobbies and interests, make sure they are relevant to the job you're applying for. For example, if you're applying for a job in marketing, listing that you enjoy creating graphics or videos in your free time can show that you have an interest in visual design. On the other hand, listing that you enjoy playing video games may not be as relevant.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {` Also, try to avoid listing hobbies that may be perceived negatively, such as heavy drinking or partying. Instead, focus on hobbies that showcase your positive qualities and skills, such as volunteer work, fitness, or creative pursuits.
                                        Keep in mind that the hobbies and interests section is not a must-have, so if you're running out of space on your resume, feel free to omit this section.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Volunteering Experience
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`So, how do you list your volunteering experience on your resume?
                                        First, start by listing the name of the organization, your role, and the dates you were involved. Just like with work experience, you want to make sure to use action verbs to describe your responsibilities.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {`Next, mention the impact you had while volunteering. For example, if you were a mentor for a youth organization, you can mention how many youth you helped and any success stories.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {`It’s also a good idea to mention any specific skills or accomplishments you gained while volunteering. For example, if you helped organize a fundraising event, you can mention that you gained experience in event planning and budget management.
                                        Finally, don’t forget to mention any awards or recognition you received for your volunteer work. This can be anything from a certificate of appreciation to a letter of recommendation.`}
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "1%", "1%"]}
                  >
                    {`Remember, while volunteering experience may not be directly related to the job you’re applying for, it shows that you’re a dedicated, hardworking individual who’s passionate about making a difference in the world.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Certifications & Awards
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`This shows your potential employer that you have the necessary skills and knowledge to excel in the position, and that you are dedicated to staying up-to-date with the latest industry trends and advancements. Additionally, including awards or certifications can also demonstrate that you are highly respected and recognized by your peers in the field. Overall, including this information can add value to your resume and help set you apart from other candidates.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Publications
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`Including your publications not only showcases your writing or research skills but also demonstrates your expertise in your field. It can also be a great conversation starter during an interview, as it gives the interviewer a deeper understanding of your work and interests.`}
                  </Text>
                </Box>

                <Box mt={["3%", "3%", "3%"]}>
                  <Text
                    fontSize={["24px"]}
                    className={"sub-heading"}
                    fontWeight={["bold"]}
                  >
                    Projects
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    className={"only-font-family"}
                    mt={["1%", "2%", "2%"]}
                  >
                    {`It shows that you're passionate about your field and that you're constantly looking for ways to improve your skills and knowledge. Also, it can be a great conversation starter during an interview, and give the hiring manager a better understanding of your personality and interests, which can help them decide if you're a good fit for the company culture.`}
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
