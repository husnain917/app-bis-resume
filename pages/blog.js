import React from 'react'
import LatestPosts from '../src/components/blog/latestPost/LatestPosts'
import fs from 'fs'
import matter from 'gray-matter'

export default function Blog({ allBlogs }) {
  // console.log('blogs', JSON.parse(allBlogs))
  const blogs = JSON.parse(allBlogs)
 

  return (
    <div>
      <LatestPosts blogs={blogs} />
    </div>
  )
}

export async function getStaticProps() {
  // List of files in blgos folder

  const filesInBlogs = fs.readdirSync('./_posts/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./_posts/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })
  const allBlogs = JSON.stringify(blogs)
  return {
    props: {
      allBlogs
    }
  }

}