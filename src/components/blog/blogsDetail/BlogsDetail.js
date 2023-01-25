import React, { useState, useRef } from "react";
import style from "../../../../styles/blog/blogsDetail.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import SearchIcon from "../../../../public/searchIcon.webp";

import { Grid, GridItem, Box } from "@chakra-ui/react";
import Image from "next/image";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function BlogsDetail({ blogDetail, allBlogs }) {
  const {
    author,
    category,
    description,
    body,
    featuredImage,
    publishDate,
    slug,
    title,
  } = blogDetail.fields;
  const [searchKey, setSearchKey] = useState("");

  var searchBlog = allBlogs?.filter(function (item) {
    return (
      item?.fields.description
        ?.toLowerCase()
        ?.includes(searchKey.toLowerCase()) ||
      item?.fields.title?.toLowerCase()?.includes(searchKey.toLowerCase())
    );
  });
  const filterData = searchBlog?.filter(
    (item) => item.category === category && item.slug !== slug
  );

  return (
    <div>
      <Box>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          style={{
            marginBottom: "10px",
          }}
          alt="will load soon"
          // layout="fill"
          height={"450px"}
          width={"1450px"}
        />
      </Box>

      <div className={style.mainContainer}>
        {/* <Box position={"sticky"}> Ahsan Ali</Box> */}
        {/* <Box>
          <Image
            src={"https:" + featuredImage.fields.file.url}
            style={{
              marginBottom: "50px",
            }}
            alt="will load soon"
            layout="fill"
          />
        </Box> */}
        <Grid
          gap={4}
          templateColumns="repeat(1fr 3fr 1fr)"
          templateAreas={[`"leftbar textArea sidebar"`]}
          gridTemplateRows={"1,1fr"}
          position={"relative"}
        >
          {/* <Box position={"sticky"}> Ahsan Ali</Box> */}
          {/* <Image
                src={"https:" + featuredImage.fields.file.url}
                style={{
                  marginBottom: "50px",
                }}
                alt="will load soon"
                layout="fill"
              /> */}
          <GridItem colSpan={3} area={"text"}>
            {/* <Box position={"sticky"}> Ahsan Ali</Box> */}
            <div className={style.blogData}>
              <h1 className={style.blogTitle}>{title}</h1>
              <br />
              <br />

              {/* <Image
                src={"https:" + featuredImage.fields.file.url}
                style={{
                  marginBottom: "50px",
                }}
                alt="will load soon"
                layout="fill"
              /> */}
              {/* <Box> Ahsan Ali</Box> */}
              {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
              <div className={style.bodyContent}>
                {documentToReactComponents(body)}
              </div>
            </div>
          </GridItem>
          <GridItem colSpan={1} area={"rightbar"}>
            <div
              className={style.fixed}
              // className={scrollY > 367 && scrollY < height - 180 ? style.fixed : scrollY > height - 180 && scrollY > 367 ? style.fixed : ''}
            >
              <div className={style.sidebarData}>
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
                <div>
                  {filterData?.length < 1 ? (
                    <p className={`${style.postTxt} subTitle`}>
                      No related post fonud
                    </p>
                  ) : (
                    <div>
                      <p className={`${style.postTxt} subTitle`}>Related</p>
                      {filterData?.slice(0, 3).map((item, index) => {
                        return (
                          <div key={index} className={style.sideTxtContainer}>
                            <div
                              onClick={() => alert("working")}
                              className={style.sideImage}
                            >
                              <Image
                                className={style.postsImage}
                                src={item?.thumbnail}
                                alt="Image1"
                                width="30px"
                                height="30px"
                              />
                            </div>
                            <div className={style.imageText}>
                              <p className={`${style.sideTxt} subTitle`}>
                                {item.title}
                              </p>
                              <p className={`${style.sideDate} subTitle`}>
                                {item.date}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem
            area={"leftbar"}
            position={"sticky"}
            height={"50px"}
            width={"50px"}
          >
            <div
              className={style.iconsMainFix}

              // className={scrollY > 367 && scrollY < height - 180 ? style.iconsMainFix : scrollY > height - 180 && scrollY > 367 ? style.iconsMainFix : ''}
            >
              <ul className={style.IconsContainer}>
                <li>
                  <a
                    className={style.iconMain}
                    href="https://www.github.com/techloset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className={style.icon} />
                  </a>
                </li>
                <li>
                  <a
                    className={style.iconMain}
                    href="https://www.instagram.com/techlosetsolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineInstagram className={style.icon} />
                  </a>
                </li>
                <li>
                  <a
                    className={style.iconMain}
                    href="https://www.facebook.com/techloset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className={style.icon} />
                  </a>
                </li>
                <li>
                  <a
                    className={style.iconMain}
                    href="https://www.linkedin.com/company/techloset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className={style.icon} />
                  </a>
                </li>
              </ul>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
}
