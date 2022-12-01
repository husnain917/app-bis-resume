import React, { useEffect } from "react";
import { Box, Text, Button, Image, calc } from "@chakra-ui/react";
import YouTube from "react-youtube";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const BlogPost = () => {
  const opts = {
    height: "390",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Box className={"blog-post blog-post--lazy  blog-post--with-single-aside"}>
      <Box className="blog-post__content">
        <Box className="blog-post__content-inner">
          <Box className="blog-post__content-main">
            <Box className="blog-post__content-main-wrapper">
              <YouTube videoId="sTnm5jvjgjM" opts={opts} />
              <Text className={"headline"}>Resume Samples</Text>
              <p>
                A great resume is a key that opens doors to a better future.
                Exceptional formatting is one way to stand out, but precise,
                professional writing is equally important. That’s why we’ve
                created more than 300 resume samples to get you started on
                drafting the perfect resume no matter your industry or job
                title. Each sample has been expertly crafted to reflect the best
                practices of your field and walk you through every aspect of
                resume creation, from the profile summary to the layout. And the
                best part? Every single one is completely free.
              </p>
              <p>
                We understand that resume writing can feel daunting. That’s why
                our resume and{" "}
                <Link href="/" mr={2}>
                  <a>cover letter examples </a>
                </Link>
                guide you through the process and break down the anatomy of a
                great resumes, section by section. We dive deep into the
                realities of today’s job market and hiring practices to help you
                overcome 22st century challenges like Applicant Tracking Systems
                and the best file formats. What’s more, our resume samples
                address common obstacles and choices you may face and help you
                troubleshoot any issues.
              </p>
              <p>
                When you’re on the job hunt, competition can be fierce. That’s
                why our samples are chock full of practical tips to equip you
                with the specific tools needed to create a resume that catches a
                hiring manager’s attention and lands you your dream job. So go
                ahead and get started! Search our ever-expanding collection of
                resume samples and templates to level up your career in no time.
              </p>
              <Text className={"headline"}>Examples to get you hired fast</Text>
              <p>
                Sometimes, a resume just won’t cut it. That’s why we’ve got you
                covered when it comes to creating a flawless Curriculum Vitae
                (CV). Our comprehensive CV examples are expertly designed to
                simplify the process of creating a robust document that brings
                your experience to life.
              </p>
              <p>
                Whereas most American employers tend to request resumes,
                international companies often deal with CVs. These documents
                often contain multiple pages for a more thorough examination of
                the candidate’s academic and professional history. In some
                countries, a photo and information about the candidate’s family
                and personal life are also commonplace.
              </p>
              <p>
                When writing a CV, it’s important to understand the position
                you’re applying for and the qualifications an employer is
                seeking. Our field-tested CV examples help you get hired faster
                with industry-specific tips and inside knowledge to{" "}
                <Link href="/" mr={2}>
                  <a>cover letter examples </a>
                </Link>
                a cut above the rest.
              </p>
              <p>
                When it comes to making your resume, you’ve got options. That’s
                great news because no candidate is alike. However, there are
                some basic rules to help you pick the correct sample that best
                suits the hiring manager’s needs.
              </p>
              <Box className={"compare-resumes js-wide-element"}>
                <Box
                  className={
                    "compare-resumes__view compare-resumes__view--intro compare-resumes__view--ready"
                  }
                >
                  <a
                    data-lazy-bg="https://s3.resume.io/cdn-cgi/image/width=770,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=770,dpr=2,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 2x"
                    href="/app/create-resume"
                    className="compare-resumes__resume compare-resumes__resume--good is-image-loaded"
                    style={{
                      backgroundImage: `url(${"/FashTemp4.png"})`,
                      backgroundSize: "cover",
                      backgroundRepeat: false,
                    }}
                  >
                    <Box
                      className={"compare-resumes__mark"}
                      width={"20px"}
                      height={"20px"}
                      style={{
                        backgroundImage: `url(${"/correct.png"})`,
                        backgroundSize: "cover",
                        backgroundRepeat: false,
                      }}
                    >
                      <Box className={"compare-resumes__mark-icon"}></Box>
                    </Box>
                  </a>
                  <Box
                    className="compare-resumes__resume compare-resumes__resume--bad"
                    style={{
                      backgroundImage: `url(${"/FashTemp4.png"})`,
                      backgroundSize: "cover",
                      backgroundRepeat: false,
                    }}
                  >
                    <Box
                      className="compare-resumes__mark"
                      style={{
                        backgroundImage: `url(${"/wrong.png"})`,
                        backgroundSize: "cover",
                        backgroundRepeat: false,
                      }}
                    >
                      <Box className="compare-resumes__mark-icon"></Box>
                    </Box>
                  </Box>
                  <Box className="compare-resumes__create-resume button">
                    Use This Template{" "}
                  </Box>
                </Box>
                :&nbsp;
              </Box>
            </Box>
            <Box className="post-banner-cta post-banner-cta--wide">
              <Box className="post-banner-cta__main">
                <Box className="post-banner-cta__title post-banner-cta__title--top">
                  Build your resume in 15 minutes
                </Box>
                <Box
                  className="post-banner-cta__image is-image-loaded"
                  data-lazy-bg="/FashTemp4.png"
                  style={{
                    backgroundImage: `url(${"/planet.webp"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: false,
                  }}
                ></Box>
                <Box className="post-banner-cta__text">
                  <Box className="post-banner-cta__title">
                    Build your resume in 15 minutes
                  </Box>
                  <Box class="post-banner-cta__caption">
                    Use professional field-tested resume templates that follow
                    the exact ‘resume rules’ employers look for.
                  </Box>
                </Box>
              </Box>
              <Box
                className="post-banner-cta__button"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text mr={4}>Create my resume</Text>
                <ArrowForwardIcon color={"white"} h={5} w={5} />
              </Box>
            </Box>
          </Box>
          <Box className="blog-post__content-aside blog-post__content-aside--right">
            <Box className="blog-aside" opacity={["1"]}>
              <Box className="blog-aside__item show" position="static">
                <Box className="post-banner-cta">
                  <Box className="post-banner-cta__main">
                    <Box className="post-banner-cta__title post-banner-cta__title--top">
                      Build your resume in 15 minutes
                    </Box>
                    <Box className="post-banner-cta__animation">
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                    </Box>
                    <Box className="post-banner-cta__text">
                      <Box className="post-banner-cta__title">
                        Build your resume in 15 minutes
                      </Box>
                      <Box className="post-banner-cta__caption">
                        Use professional field-tested resume templates that
                        follow the exact ‘resume rules’ employers look for.
                      </Box>
                    </Box>
                  </Box>
                  <Box className="post-banner-cta__button">
                    <Link href="/" mr={2}>
                      <a>Cover letter examples </a>
                    </Link>
                    <ArrowForwardIcon w={6} h={6} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
