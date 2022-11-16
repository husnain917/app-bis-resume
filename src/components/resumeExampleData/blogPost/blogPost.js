import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import YouTube from "react-youtube";

const BlogPost = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <Box className={"blog-post--lazy blog-post .blog-post--with-single-aside"}>
      <Box className="blog-post__content">
        <Box className="blog-post__content-inner">
          <Box className="blog-post__content-main">
            <Box className="blog-post__content-main-wrapper">
              <YouTube videoId="sTnm5jvjgjM" opts={opts} />
            </Box>
            <Box
              maxWidth={["375px", "100%", "100%", "100%", "100%"]}
              marginTop={["0px", "0px", "0px", "40px", "40px"]}
              style={{
                width: "100%",
                margin: "24px auto 48px",
              }}
            ></Box>
          </Box>
          <Box
            style={{
              width: "var(--blog-column-with-gutter-3)",
              marginLeft: "var(--blog-column-1)",
              flexShrink: 0,
              position: "relative",
            }}
          >
            Side Content
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
