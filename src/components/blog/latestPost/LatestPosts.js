import React, { useState, useEffect } from "react";
import style from "../../../../styles/blog/latestPosts.module.css";
import Image from "next/image";
import SearchIcon from "../../../../public/searchIcon.webp";
// import { Row, Col } from 'react-bootstrap'
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { SimpleGrid, Box, Container, Text } from "@chakra-ui/react";
import SocialIcons from "../../Social/SocialIcons";
import { PostData } from "./PostData";


export default function LatestPosts({ blogs }) {
  console.log("blogs", blogs);
  const [searchKey, setSearchKey] = useState("");
  var filterBlog = blogs?.filter(function (item) {
    return (
      item?.fields?.description
        ?.toLowerCase()
        ?.includes(searchKey.toLowerCase()) ||
      item?.fields?.title?.toLowerCase()?.includes(searchKey.toLowerCase())
    );
  });
  const filteredBlogs = filterBlog?.filter((item) => item?.slug !== "test");

  return (

    <div className="mainContainer">
      {/* <SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={10}>
          <Box className={style.titleContainer} lg={6} md={6} sm={6} xs={12}>
            <h1 className={`${style.title} title`}>Latest Posts</h1>
          </Box>
          <Box className={style.titleContainer} lg={6} md={6} sm={6} xs={12}>
            <div className={style.searchIconContainer}>
              <div className={style.searchIcon}>
                <Image
                  width="30px"
                  height="30px"
                  src={SearchIcon}
                  alt="SearchIcon"
                />
              </div>
              <input
                onChange={(e) => setSearchKey(e.target.value)}
                className={style.input}
                placeholder="Search"
              />
            </div>
          </Box>
        </SimpleGrid> */}
      <Box lg={12} md={12} sm={6} xs={12} style={{ display: "flex", flexDirection: 'row', justifyContent: "center" }}>
        <h1 className={`${style.title} title`}>All Articles</h1>
      </Box>

      <Box maxW={["100%", "100%", "94%", "94%", "94%"]} style={{ borderBottom: "1px solid", borderColor: "#C6C6C6", marginTop: "2%" }} ml={["", "", "5%", "5%", "5%"]}
      ></Box>

      <SimpleGrid
        className={style.centerblogs}
        columns={{ sm: 1, md: 2, lg: 2 }}
        ml={["", "", "5%", "5%", "5%", "5%"]}
        spacing={[0, 0, 20, 20, 20]}
      >
        {PostData?.map((item, index) => {
          return (
            <>
              <Box key={index} style={{ margin: 5, borderBottom: "2px solid", borderColor: "#C6C6C6", paddingBottom: "5%" }}>
                <Box className={style.imageContainer} style={{ height: 300, borderRadius: 50 }}>

                  <Image
                    className={style.coverImage}
                    layout="fill"
                    objectFit="cover"
                    alt="image"
                    src={`${item.im}`}

                  />
                </Box>
                <h3 className={`${style.Cardtitle} subTitle`}>{item.text}</h3>
                <div className={style.dateHeading}>
                  <span className={"xsmall-heading"}>Today | </span>
                  <span className={"xsmall-heading"}>25 min read</span>
                </div>
                <p className={`${style.cardHeadingFeat} paragraph`}>
                  {item.des}
                </p>
              </Box>
              <Box>
                <Box m="3% 1%" >
                  <Text m="2% 0%" className={"subTitle"}>Share Within your Network</Text>
                  <SocialIcons />
                </Box>
              </Box>
            </>
          );

        })}
      </SimpleGrid>
      <Box maxW={["100%", "100%", "96%", "96%", "96%"]} style={{ borderBottom: "1px solid", borderColor: "#C6C6C6" }} ml={["", "", "5%", "5%", "5%"]}
      ></Box>

      <div>
        {filteredBlogs?.length == 0 ? (
          <div className={style.imageContainerE}>
            <Image
              src="/images/career/no-data-found.svg"
              width="400px"
              height="400px"
              alt="No data found"

            />
            <h3 className={`${style.notFound} title`}>No Blogs Found</h3>
          </div>
        ) : (
          // article show
          <SimpleGrid
            className={style.centerblogs}
            columns={{ sm: 1, md: 2, lg: 3 }}
            ml={["", "", "5%", "5%", "5%", "5%"]}
          >
            {filteredBlogs?.map((item, index) => {
              const {
                author,
                category,
                description,
                body,
                featuredImage,
                publishDate,
                slug,
                title,
              } = item.fields;
              return (
                <Box key={index} style={{ margin: 5 }}>
                  <Link href={`blog/[slug]`} as={`blog/${slug}`}>
                    <div className={style.imageContainer}>

                      <Image
                        className={style.coverImage}
                        layout="fill"
                        objectFit="cover"
                        src={"https:" + featuredImage.fields.file.url}
                        alt="image"
                      />
                    </div>
                  </Link>
                  <h3 className={`${style.Cardtitle} subTitle`}>{title}</h3>
                  <div className={style.dateHeading}>
                    <span className={"xsmall-heading"}>Today | </span>
                    <span className={"xsmall-heading"}>25 min read</span>
                  </div>
                  <p className={`${style.cardHeading} paragraph`}>
                    {description}
                  </p>
                </Box>
              );
            })}
          </SimpleGrid>
        )}
      </div>
    </div>

  );
}
