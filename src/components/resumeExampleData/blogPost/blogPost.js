import React, { useEffect, useState } from "react";
import { Box, Text, Button, Image, calc, Link } from "@chakra-ui/react";
import YouTube from "react-youtube";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Fade from "react-reveal/Fade";

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
            <Box
              className="blog-post__content-main-wrapper"
              textAlign={["center", "center", "start", "start", "start"]}
            >
              <YouTube videoId="Who2Xax1GX8" opts={opts} />
              <Text
                className={"medium-heading"}
                textAlign={["center", "center", "start", "start", "start"]}
              >
                Resume Samples
              </Text>
              <Text
                margin={[" 20px 0px", "20px 0px", "0px", "0px", "0px"]}
                className={"small-text"}
              >
                Explore our professional resume examples and find the perfect
                template to help you stand out from the competition. Our
                collection includes resumes for various industries, such as
                finance, healthcare, technology, and more. Each sample is
                expertly crafted to reflect the best practices of your field,
                and includes tips and tricks to make your resume shine. Whether
                you are a recent graduate or a seasoned professional, our resume
                examples will help you land your dream job. Browse now and start
                creating the perfect resume today.
              </Text>

              <Text
                className={"small-text"}
                margin={[" 20px 0px", "20px 0px", "0px", "0px", "0px"]}
              ></Text>
              <Text className={"medium-heading"} marginY={"3"}>
                Elevate Your Hiring Potential,Discover Our Proven Resume
                Examples
              </Text>
              <Text
                className={"small-text"}
                margin={[" 20px 0px", "20px 0px", "0px", "0px", "0px"]}
              >
                Our professional resume builder offers a variety of customizable
                templates, designed by certified resume writers to help you land
                your dream job. With easy-to-use features and step-by-step
                guidance, creating a polished, professional resume has never
                been easier. Say goodbye to writers block and formatting
                headaches and hello to a resume that stands out and gets
                results. Upgrade to our premium plan for even more features and
                support, including cover letter and LinkedIn profile building.
                Try it now and take the first step towards landing your dream
                job.
              </Text>
              <Text
                className={"small-text"}
                margin={[" 20px 0px", "20px 0px", "0px", "0px", "0px"]}
              >
                <Link href="/" mr={2}>
                  <a>cover letter examples </a>
                </Link>
                a cut above the rest.
              </Text>

              <Box className={"compare-resumes js-wide-element"}>
                <Box
                  className={
                    "compare-resumes__view compare-resumes__view--intro compare-resumes__view--ready"
                  }
                >
                  <a
                    data-lazy-bg="https://s3.resume.io/cdn-cgi/image/width=770,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=770,dpr=2,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 2x"
                    href="templates/sBpVCiYIojHRtGlh"
                    className="compare-resumes__resume compare-resumes__resume--good is-image-loaded"
                    style={{
                      backgroundImage: `url(${"/realTemp37.png"})`,
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
                      backgroundImage: `url(${"/realTemp27.png"})`,
                      backgroundSize: "cover",
                      backgroundRepeat: false,
                    }}
                  >
                    <Box
                      className="compare-resumes__mark"
                      ml={"-8%"}
                      cursor="pointer"
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
                  Build your resume in 15 seconds
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
                  <Box className="medium-heading">
                    Build your resume in 15 seconds
                  </Box>
                  <Box className="small-text">
                    Elevate Your Career with Our Stunning Resume Templates
                  </Box>
                </Box>
              </Box>
              <Link
                href={"/templates"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Box
                  className="post-banner-cta__button"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  cursor="pointer"
                >
                  <Text mr={4}>Create my Resume</Text>
                  <ArrowForwardIcon color={"white"} h={5} w={5} />
                </Box>
              </Link>
            </Box>
          </Box>

          <Box className="blog-post__content-aside blog-post__content-aside--right">
            <Box>
              <Box
                className="blog-aside__item show"
                position="static"
                mt={"14%"}
              >
                <Box className="post-banner-cta">
                  <Box className="post-banner-cta__main">
                    <Box className="post-banner-cta__title post-banner-cta__title--top">
                      Build your resume in 15 seconds
                    </Box>
                    <Box className="post-banner-cta__animation">
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                      <Box className="post-banner-cta__animation-frame"></Box>
                    </Box>
                    <Box className="post-banner-cta__text">
                      <Box className="small-heading">
                        Build your resume in 15 seconds
                      </Box>
                      <Box className="xsmall-text">
                        Use professional field-tested resume templates that
                        follow the exact ‘resume rules’ employers look for.
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className="post-banner-cta__button small-heading"
                    cursor="pointer"
                  >
                    <Link href="/ComingSoon" mr={2} cursor="pointer">
                      <a cursor="pointer">Cover letter examples </a>
                    </Link>
                    <ArrowForwardIcon w={6} h={6} />
                  </Box>
                </Box>

                <Box height={"400px"}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
