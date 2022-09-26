import React, { useEffect } from "react";
import { Grid, GridItem, Box, Image, Text } from "@chakra-ui/react";
import FaqRightImage from "./FaqRightImage";
import FaqLeftImage from "./FaqLeftImage";
import AOS from "aos";
import "aos/dist/aos.css";

const PracticingGrid = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <FaqRightImage
        heading={"Why should I use a resume builder?"}
        text1={
          "Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word?"
        }
        text2={
          " The whole process is a huge pain - you make a TINY change to your resume, and the entire resume layout gets completely messed up."
        }
        text3={
          "`With a resume builder, you don&#39;t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc.`"
        }
        text4={` All you have to do is pick a resume template, fill it in, and then you're ready to start applying for jobs! `}
        image={"/faq0@2x.png"}
      />
      <FaqLeftImage
        heading={`            What is the best resume builder?      `}
        text1={`  Over the past 7 years, we’ve been working hard to make Novorésumé the best resume builder out there.`}
        text2={`  And we’d say we succeeded! Here’s what sets us apart from the rest of the competition:`}
        item1h={`                Easy to Use        `}
        item1={`- Our builder is very easy to use, even if you're not too tech-friendly.`}
        item2h={`                Get Started in under 5 Minutes`}
        item2={`- Just pick one of our resume templates, and you're good to go!`}
        item3h={`                It's 100% free`}
        item3={`- Some resume builders out there pretend to be free… and then they hit you with a paywall once you’re done writing your resume! We don’t do that. Our builder will instantly notify you if you’re using any of our premium features.`}
        item4h={`Cover Letter Builder`}
        item4={`- If you’re using Novorésumé Premium, you gain access to our cover letter builder for free (including matching cover letter templates).`}
        item5h={`Tons of Customization and Design Options`}
        item5={`- Our builder offers a ton of customization. You can make changes to the layout, color schemes, and much more.`}
        item6={` - Our resume templates are built on top of some of the most popular applicant tracking systems out there. Meaning, your resume won't automatically get rejected by any ATS.`}
        item6h={`ATS-Friendly Resume Templates`}
        image={"/faq1@2x.png"}
      />
      <FaqRightImage
        heading={"Is this a completely free resume builder?"}
        text1={"Yes, Novorésumé is a 100% free resume builder.          "}
        text2={
          " If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume."
        }
        text3={
          "`If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!          `"
        }
        image={"/faq2@2x.png"}
      />
      <FaqLeftImage
        heading={`            What is a resume?     `}
        text1={`  A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.`}
        text2={`  It usually includes information about the following:`}
        item1={`Your work history`}
        item2={`Educational background`}
        item3={`Achievements`}
        item4={`Contact information`}
        item5={`Resume summary or resume objective
`}
        image={"/faq3@2x.png"}
      />
      <FaqRightImage
        heading={"What's the difference between a CV and a resume?        "}
        text1={`In the EU, the words "CV" and "resume" are used interchangeably`}
        text2={
          " TIn the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics."
        }
        text3={
          "`Want to learn more? Check out our article on the differences between CVs and resumes.`"
        }
        image={"/faq4@2x.png"}
      />
      <FaqLeftImage
        heading={`            How can I create my resume?
        `}
        text01={`  Making a resume with Novorésumé is very straightforward.

        `}
        text2={`  Just pick one of our professional resume templates.

        `}
        text3={`  Then, you’ll be forwarded to our resume builder, where all you have to do is fill in your resume content!

        `}
        image={"/faq5@2x.png"}
      />
      <FaqRightImage
        heading={"What should a resume include?        "}
        text1={`The must-have contents in your resume include the following sections:

        `}
        text2={" The optional ones are:          "}
        image={"/faq6@2x.png"}
      />
    </Box>
  );
};

export default PracticingGrid;
