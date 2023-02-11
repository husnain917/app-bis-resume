import React, { useEffect } from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";
import FaqRightImage from "./FaqRightImage";
import FaqLeftImage from "./FaqLeftImage";
import AOS from "aos";
import "aos/dist/aos.css";
import FaqRightImageWithList from "./faqRightImageWithList";

const FaqsSection = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin={"0 auto"}
      height={"auto"}
    >
      <Box mt={5}>
        <Text
          fontSize={["2.2em", "2.2em", "2.6em", "2.9em", "2.9em"]}
          textAlign={"center"}
          fontWeight={"700"}
          className="afterHeading"
        >
          {" "}
          Resume Builder FAQ.
        </Text>
      </Box>
      {/* <Box display={"flex"} alignItems={"center"} mb={"30px"}>
        <Box
          bg={"#00C8AA"}
          height={"5px"}
          width={"150px"}
          borderRadius={"10px"}
        ></Box>
      </Box> */}
      <FaqRightImage
        heading={"How does a resume builder benefit me in my job search?"}
        text1={
          "A resume builder not only saves you time and effort in creating a professional-looking resume"
        }
        text2={
          "It also helps you tailor your resume to specific job opportunities by providing pre-written, industry-specific bullet points and matching your resume to the job description."
        }
        text3={`It will also help you present your information in a clear, concise, and visually appealing format, which can make a positive impression on potential employers.`}
        text4={` A resume builder can make it easy to update your resume with new information and experiences as you progress in your career, so you always have a current and up-to-date resume ready to go.`}
        image={"/faq0@2x.png"}
        // height={["auto", "auto", "auto", "250px", "250px", "250px"]}
      />
      <FaqLeftImage
        heading={`            Can I customize my resume to the job I am applying for?    `}
        text1={`  Yes, BisResume allows you to customize your resume to the job by providing a feature to copy and paste a job description and getting a job-specific resume match score. `}
        text2={
          "This feature guides you through tailoring your resume for the job."
        }
        text3={`Use the information from the job description to tailor your resume by highlighting the skills and experiences that are most relevant to the job you're applying for.`}
        text4={`Most importantly Choose a format that matches the type of job you're applying for and the industry you're in. For example, a more creative format might be appropriate for a job in the design industry, while a more straightforward format might be more appropriate for a job in finance.`}
        image={"/faq1@2x.png"}
        // height={["auto", "auto", "auto", "200px", "200px", "180px"]}
      />
      <FaqRightImage
        heading={"Why is it important to have a professional resume?"}
        text1={
          "Having a professional resume is essential in today's job market. "
        }
        text2={
          " It is often the first impression a potential employer has of you, and it should showcase your qualifications and experience in the best possible light. "
        }
        text3={
          "A professional resume demonstrates that you are a serious candidate and that you have put effort into your job search."
        }
        text4={
          "It also helps you stand out among other applicants and increases your chances of getting an interview and getting hired."
        }
        image={"/faq2@2x.png"}
        // height={["auto", "auto", "auto", "380px", "350px", "330px"]}
      />
      <FaqLeftImage
        heading={`   What are the most important elements of a resume?     `}
        text1={` The most important elements of a resume include your contact information, a professional summary or objective, your work experience, and your education.`}
        text2={` Additional elements such as skills, certifications, and volunteer experience can also be included, depending on the job and your personal brand.`}
        text3={
          "It is important to highlight your accomplishments and use keywords relevant to the job you are applying for."
        }
        text4={` Additional sections such as certifications, professional associations, volunteer work, or references, can be included if they are relevant to the job you're applying for and will add value to your resume.`}
        image={"/faq3@2x.png"}
        // height={["auto", "auto", "auto", "330px", "280px", "260px"]}
      />
      <FaqRightImage
        heading={
          "How can I optimize my resume to pass applicant tracking systems (ATS)?        "
        }
        text1={`Our resume builder offers ATS-friendly templates and allows you to customize your resume 
        to match the specific job you are applying for. Additionally, our AI-powered content analyzer
         will check and optimize your resume for keywords and formatting to increase your chances of passing ATS.`}
        text2={
          " In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics."
        }
        text3={`Make sure to include all relevant information, including your work experience, education, and skills. The more complete your resume is, the more likely it is to pass an ATS.`}
        image={"/faq4@2x.png"}
        // height={["auto", "auto", "auto", "350px", "300px", "280px"]}
      />
      <FaqLeftImage
        heading={`           Can I save and edit my resume later?
        `}
        text1={`  Yes, with BisResume you can easily save and access your resume from any device.
        `}
        text2={`Having the ability to save and edit your resume later is important because it allows you to keep your resume up-to-date and relevant to the jobs you're applying for, increasing your chances of landing an interview and securing your dream job.`}
        text4={`  You can also make changes and updates at any time and download it in multiple formats.

        `}
        text3={`With BisResume you can easily make updates and revisions as needed.because your database saving on online cloud service you can access your resume from any device and make updates from anywhere.`}
        image={"/faq5@2x.png"}
        // height={["auto", "auto", "250px", "250px", "250px", "250px"]}
      />
      <FaqRightImageWithList
        heading={
          "How can I stand out from other applicants with my resume?       "
        }
        text1={`Our resume builder offers a wide variety of professional templates to choose from, and also allows you to customize the design and layout to make it unique. `}
        text2={`  Additionally, our expertly crafted phrases and resume score feature will help you to highlight your skills and achievements to stand out to potential employers.
 `}
        item1={`Our resume builder is user-friendly and easy to use, even for those with limited experience creating resumes.`}
        item2={`Our resume builder allows you to download your resume as a PDF, Word document, or other commonly used format, and should also have the option to print your resume.`}
        item3={`Our resume builder allow you to choose from different fonts, sizes, and styles, and offer formatting options such as bullet points, headings, and section dividers to make your resume easy to read and visually appealing.`}
        item4={`Our resume builder make it easy to enter your personal information, work experience, education, skills, and other relevant details, and help you present this information in an attractive and clear format.`}
        image={"/faq6@2x.png"}
        // height={["auto", "auto", "auto", "250px", "220px", "250px"]}
      />
    </Box>
  );
};

export default FaqsSection;

//////////////////////

// import React, { useEffect } from "react";
// import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";
// import FaqRightImage from "./FaqRightImage";
// import FaqLeftImage from "./FaqLeftImage";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import FaqRightImageWithList from "./faqRightImageWithList";

// const FaqsSection = () => {
//   useEffect(() => {
//     AOS.init();
//   });
//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       flexDirection="column"
//       margin={"0 auto"}
//     >
//       <Box mt={5}>
//         <Text
//           fontSize={["2.2em", "2.2em", "2.6em", "2.9em", "2.9em"]}
//           textAlign={"center"}
//           fontWeight={"700"}
//           className="afterHeading"
//         >
//           {" "}
//           Resume Builder FAQ.
//         </Text>
//       </Box>
//       {/* <Box display={"flex"} alignItems={"center"} mb={"30px"}>
//         <Box
//           bg={"#00C8AA"}
//           height={"5px"}
//           width={"150px"}
//           borderRadius={"10px"}
//         ></Box>
//       </Box> */}
//       <FaqRightImage
//         heading={"How does a resume builder benefit me in my job search?"}
//         text1={
//           "A resume builder not only saves you time and effort in creating a professional-looking resume"
//         }
//         text2={
//           "It also helps you tailor your resume to specific job opportunities by providing pre-written, industry-specific bullet points and matching your resume to the job description."
//         }
//         image={"/faq0@2x.png"}
//       />
//       <FaqLeftImage
//         heading={`            Can I customize my resume to the job I am applying for?    `}
//         text1={`  Yes, BisResume allows you to customize your resume to the job by providing a feature to copy and paste a job description and getting a job-specific resume match score. `}
//         text2={"This feature guides you through tailoring your resume for the job."}
//         image={"/faq1@2x.png"}
//       />
//       <FaqRightImage
//         heading={"Why is it important to have a professional resume?"}
//         text1={"Having a professional resume is essential in today's job market. "}
//         text2={
//           " It is often the first impression a potential employer has of you, and it should showcase your qualifications and experience in the best possible light. "
//         }
//         text3={
//           "A professional resume demonstrates that you are a serious candidate and that you have put effort into your job search."
//         }
//         text4={
//           "It also helps you stand out among other applicants and increases your chances of getting an interview and getting hired."
//         }
//         image={"/faq2@2x.png"}
//       />
//       <FaqLeftImage
//         heading={`   What are the most important elements of a resume?     `}
//         text1={` The most important elements of a resume include your contact information, a professional summary or objective, your work experience, and your education.`}
//         text2={` Additional elements such as skills, certifications, and volunteer experience can also be included, depending on the job and your personal brand.`}
//         text3={'It is important to highlight your accomplishments and use keywords relevant to the job you are applying for.'}
//         image={"/faq3@2x.png"}
//       />
//       <FaqRightImage
//         heading={"How can I optimize my resume to pass applicant tracking systems (ATS)?        "}
//         text1={`Our resume builder offers ATS-friendly templates and allows you to customize your resume
//         to match the specific job you are applying for. Additionally, our AI-powered content analyzer
//          will check and optimize your resume for keywords and formatting to increase your chances of passing ATS.`}
//         text2={
//           " In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics."
//         }
//         image={"/faq4@2x.png"}
//       />
//       <FaqLeftImage
//         heading={`           Can I save and edit my resume later?
//         `}
//         text1={`  Yes, with BisResume you can easily save and access your resume from any device.
//         `}
//         text2={`  You can also make changes and updates at any time and download it in multiple formats.

//         `}
//         image={"/faq5@2x.png"}
//       />
//       <FaqRightImage
//         heading={"How can I stand out from other applicants with my resume?       "}
//         text1={`Our resume builder offers a wide variety of professional templates to choose from, and also allows you to customize the design and layout to make it unique. `}
//         text2={`  Additionally, our expertly crafted phrases and resume score feature will help you to highlight your skills and achievements to stand out to potential employers.
//  `}
//         image={"/faq6@2x.png"}

//       />
//     </Box>
//   );
// };

// export default FaqsSection;
