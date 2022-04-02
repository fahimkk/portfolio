import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Markdown from 'markdown-to-jsx';

import { blogsList } from '../components/blog/blogsData'
import WriterDetails from '../components/WriterDetails';
import BlogWrapper from '../components/BlogWrapper';


const BlogPage = (props) => {
	const {fileName} = useParams() 
	const blogItem = blogsList.filter((item, index)=> item.fileName===fileName)[0]
	const [blog, setBlog] = useState("")
	useEffect(() => {
		import (`../assets/markdownFiles/blogs/${fileName}`)
			.then(res=>{
				fetch(res.default)
				.then(res =>res.text())
				.then(res=> setBlog(res))
				.catch(err=>console.log('converting markdown file error: ',err))
			})
			.catch(err=>{
			console.log("markdown file import and rendor error: ", err)
			})
	}, [fileName]);	


	return (
			<BlogWrapper
				title={blogItem.title}
				writerDetails={
					<WriterDetails
						time={blogItem.time}
						date={blogItem.date}
						categories={blogItem.categories}
						tags={blogItem.tags}
					/>
				}
				content={
					<Markdown>
						{blog}
					</Markdown>
				}
			/>
	)
}

export default BlogPage
