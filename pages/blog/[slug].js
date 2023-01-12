import React from "react";
import BlogsDetail from "../../src/components/blog/blogsDetail/BlogsDetail";
import { createClient } from "contentful";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
function Blogs({ allBlogs, blogDetail }) {
  if (!blogDetail) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <BlogsDetail allBlogs={allBlogs} blogDetail={blogDetail} />
    </div>
  );
}

export default Blogs;

export async function getStaticProps({ params: { slug } }) {
  const allBlogs = await client.getEntries({
    content_type: "bisResumeBlogs",
  });
  const response = await client.getEntries({
    content_type: "bisResumeBlogs",
    "fields.slug": slug,
  });

  return {
    props: {
      allBlogs: allBlogs.items,
      blogDetail: response.items[0],
    },
  };
}
export async function getStaticPaths() {
  const response = await client.getEntries({ content_type: "bisResumeBlogs" });

  const paths = response.items.map((file) => {
    return { params: { slug: file?.fields.slug } };
  });

  return {
    paths,
    fallback: true, // This shows a 404 page if the page is not found
  };
}
