import React from "react";
import LatestPosts from "../src/components/blog/latestPost/LatestPosts";
import { createClient } from "contentful";
export default function Blog({ allBlogs }) {
  return (
    <div>
      <LatestPosts blogs={allBlogs} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response = await client.getEntries({ content_type: "bisResumeBlogs" });
  return {
    props: {
      allBlogs: response.items,
    },
    revalidate: 1,
  };
}
