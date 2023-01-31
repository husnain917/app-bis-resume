import React, { useState } from "react";
import style from "../../../../styles/blog/latestPosts.module.css";
import Image from "next/image";
import Link from "next/link";
import { SimpleGrid, Box, Container, Text } from "@chakra-ui/react";
import SocialIcons from "../../Social/SocialIcons";
import ReadMoreReact from "read-more-react";
import CommonButton from "../../commonButton/CommonButton";
import moment from 'moment';
import {
  AiOutlineClockCircle,
} from "react-icons/ai";

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
        columns={[1, 1, 2, 2, 2]}
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
            featured,
          } = item.fields;
          return (
            <>
              {featured === true ? (
                <>
                  <Box key={index} minHeight={"420px"}>
                    <Box
                    
                      margin={"0 5px 5px 5px"}
                      borderBottom={"2px solid"}
                      borderColor={"#C6C6C6"}
                      paddingBottom={"5%"}
                      className={style.mainContainer}
                      height={"auto"}
                      minHeight={"420px"}
                    >
                      <Link href={`blog/[slug]`} as={`blog/${slug}`}>
                        <Box
                          className={style.imageContainer}
                          style={{ height: 240, borderRadius: "5%" }}
                        >
                          <Image
                            className={style.coverImage}
                            style={{border:"2px solid black"}}
                            layout="fill"
                            objectFit="cover"
                            alt="image"
                            src={"https:" + featuredImage.fields.file.url}
                          />
                        </Box>
                      </Link>
                      <Text as={"h3"} className={`${style.Cardtitle} subTitle`}>
                        {title}
                      </Text>
                      <Box
                        className={style.dateHeading}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <Text
                          as={"span"}
                          className={"xsmall-heading"}
                          mr={"3px"}
                        >
                          {publishDate ? moment(publishDate).format('Do MMMM') : null} |{" "}
                        </Text>
                        <AiOutlineClockCircle
                          color={"#00C8AA"}
                          size={18}
                          style={{ marginLeft: "3px" }}
                        />
                        <Text
                          as={"span"}
                          className={"xsmall-heading"}
                          ml={"6px"}

                        >
                          {readingTime} min read
                        </Text>
                      </Box>
                      <Text
                        as={"p"}
                        className={`${style.cardHeadingFeat} paragraph`}
                        padding={"2px"}
                      >
                        <ReadMore text={description} />
                      </Text>
                    </Box>
                    <Box></Box>
                  </Box>
                </>
              ) : (
                ""
              )}
            </>
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
              layout="fill"
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
            spacing={[1, 1, 2, 5, 5]}
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
                featured,
                readingTime,
              } = item.fields;
              return (
                <>
                  {featured === true ? "" : ""}
                  <Box
                    key={index}
                    marginBottom={"40px"}
                    className={style.blogContainer}
                  >
                    <Link href={`blog/[slug]`} as={`blog/${slug}`}>
                      <Box className={style.imageContainer}
                      >
                        <Image
                          className={style.coverImage}
                          layout="fill"
                          objectFit="cover"
                          src={"https:" + featuredImage.fields.file.url}
                          alt="image"
                          width={"80px"}
                          height={"60px"}
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
                        {publishDate ? moment(publishDate).format('Do MMMM') : null} |{" "}

                      </Text>
                      <AiOutlineClockCircle
                        color={"#00C8AA"}
                        size={18}
                        style={{ marginLeft: "3px" }}
                      />
                      <Text as={"span"} className={"xsmall-heading"} ml={"6px"}>
                        {readingTime} min read
                      </Text>
                    </Box>
                    <p className={`${style.cardHeading} paragraph`}>
                      <ReadMore text={description} />
                    </p>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        )}
      </div>

      <Box
        mt={"30px"}
        mb={"30px"}
        display="flex"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"center"}
      >

        <CommonButton
          title="Load More"
          hoverCursor={"pointer"}
          backgroundColor={"#00C8AA"}
          color={"whitesmoke"}
          // rightIcon={<FaArrowRight color="white" fontWeight="bold" />}

          fontSize={[
            "0.9rem",
            "0.9rem",
            "1.1rem",
            "1.1rem",
            "1.1rem",
            "1.5rem",
          ]}
        />
      </Box>
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
