import React, { useState, useEffect } from "react";
import style from "../../../../styles/blog/latestPosts.module.css";
import Image from "next/image";
import SearchIcon from "../../../../public/searchIcon.webp";
// import { Row, Col } from 'react-bootstrap'
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { SimpleGrid, Box } from "@chakra-ui/react";

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
    <div className={style.bgColor}>
      <div className="mainContainer">
        <SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={10}>
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
        </SimpleGrid>
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
            <SimpleGrid
              className={style.centerblogs}
              columns={{ sm: 1, md: 2, lg: 3 }}
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
                  <Box key={index} style={{ margin: 10 }}>
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
    </div>
  );
}
