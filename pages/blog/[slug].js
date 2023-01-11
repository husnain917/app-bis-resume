import fs from "fs";
import matter from "gray-matter";
import React from "react";
import BlogsDetail from "../../src/components/blog/blogsDetail/BlogsDetail";
function Blogs({ data, allBlogs }) {
  const allData = JSON.parse(allBlogs);
  const mdData = JSON.parse(data);

  return (
    <div>
      <BlogsDetail allBlogs={allData} mdData={mdData} />
    </div>
  );
}

export default Blogs;

export async function getStaticProps({ params: { slug } }) {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./_posts/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./_posts/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });
  const allBlogs = JSON.stringify(blogs);

  const fileContent = matter(
    fs.readFileSync(`./_posts/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;
  const data = JSON.stringify({ frontmatter, markdown });

  return {
    props: {
      allBlogs,
      data,
    },
  };
}
export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./_posts/blogs");

  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}
