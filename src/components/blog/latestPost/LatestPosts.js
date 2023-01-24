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
import ReadMoreReact from "read-more-react";

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
  console.log("FILTERED BLOGS", filteredBlogs);

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
      <Box
        lg={12}
        md={12}
        sm={6}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text as="h1" className={"title"} mt={["10px"]}>
          All Articles
        </Text>
      </Box>

      <Box
        maxW={["100%", "100%", "94%", "94%", "94%"]}
        style={{
          borderBottom: "1px solid",
          borderColor: "#C6C6C6",
          marginTop: "2%",
        }}
        ml={["", "", "5%", "5%", "5%"]}
      ></Box>
      <Text
        fontStyle={"italic"}
        ml={["5px", "5px", "40px", "50px", "60px"]}
        mb={"20px"}
      >
        Featured
      </Text>
      <SimpleGrid
        className={style.centerblogs}
        columns={[1, 1, 2, 2, 3]}
        ml={["", "", "5%", "5%", "5%", "5%"]}
        spacing={[0, 0, 6, 6, 6]}
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
            readingTime,
          } = item.fields;
          const minimumLength = 20;
          const idealLength = 40;
          const maxLength = 60;
          return (
            <Box key={index}>
              <Box
                style={{
                  margin: "0 5px 5px 5px",
                  borderBottom: "2px solid",
                  borderColor: "#C6C6C6",
                  paddingBottom: "5%",
                }}
                className={style.mainContainer}
              >
                <Box
                  className={style.imageContainer}
                  style={{ height: 300, borderRadius: 50 }}
                >
                  <Image
                    className={style.coverImage}
                    layout="fill"
                    objectFit="cover"
                    alt="image"
                    src={"https:" + featuredImage.fields.file.url}
                  />
                </Box>
                <Text as={"h3"} className={`${style.Cardtitle} subTitle`}>
                  {title}
                </Text>
                <Box
                  className={style.dateHeading}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text as={"span"} className={"xsmall-heading"} mr={"3px"}>
                    Today |{" "}
                  </Text>
                  <Image
                    src={"/clock.png"}
                    fill
                    alt="will load soon"
                    width="15px"
                    height="15px"
                  />
                  <Text as={"span"} className={"xsmall-heading"} ml={"3px"}>
                    {readingTime} min read
                  </Text>
                </Box>
                <Text
                  as={"p"}
                  className={`${style.cardHeadingFeat} paragraph`}
                  padding={"4px"}
                >
                  {/* <ReadMoreReact
                    text={description}
                    min={minimumLength}
                    ideal={idealLength}
                    max={maxLength}
                    readMoreText={"Read More"}
                  /> */}
                  <ReadMore text={description} />
                </Text>
              </Box>
              <Box>
                {/* <Box m="3% 1%">
                  <Text m="2% 0%" className={"subTitle"}>
                    Share Within your Network
                  </Text>
                  <SocialIcons />
                </Box> */}
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
      <Box
        maxW={["100%", "100%", "96%", "96%", "96%"]}
        style={{ borderBottom: "1px solid", borderColor: "#C6C6C6" }}
        ml={["", "", "5%", "5%", "5%"]}
        marginBottom={"20px"}
        marginTop={"20px"}
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
            <Text as={"h3"} className={`${style.notFound} title`}>
              No Blogs Found
            </Text>
          </div>
        ) : (
          // article show
          <SimpleGrid
            className={style.centerblogs}
            columns={{ sm: 1, md: 2, lg: 3 }}
            spacing={[1, 1, 2, 3, 3]}
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
                <Box
                  key={index}
                  marginBottom={"40px"}
                  className={style.blogContainer}
                >
                  <Link href={`blog/[slug]`} as={`blog/${slug}`}>
                    <Box className={style.imageContainer}>
                      <Image
                        className={style.coverImage}
                        layout="fill"
                        objectFit="cover"
                        src={"https:" + featuredImage.fields.file.url}
                        alt="image"
                      />
                    </Box>
                  </Link>
                  <h3 className={`${style.Cardtitle} subTitle`}>{title}</h3>
                  <Box
                    className={style.dateHeading}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text as={"span"} className={"xsmall-heading"} mr={"4px"}>
                      Today |{" "}
                    </Text>
                    <Image
                      src={"/clock.png"}
                      fill
                      alt="will load soon"
                      width="15px"
                      height="15px"
                    />
                    <Text as={"span"} className={"xsmall-heading"} ml={"4px"}>
                      25 min read
                    </Text>
                  </Box>
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

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text as={"p"} className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <Text
        as={"span"}
        onClick={toggleReadMore}
        color={"blue"}
        _hover={{
          cursor: "pointer",
        }}
      >
        {isReadMore ? "...read more" : " show less"}
      </Text>
    </Text>
  );
};
