import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Markdown from 'markdown-to-jsx';

import { projectsList } from '../components/project/projectsData';
import BlogWrapper from '../components/BlogWrapper';
import WriterDetails from '../components/WriterDetails';


const ProjectPage = (props) => {
	const {fileName} = useParams() 
	const projectItem = projectsList.filter((item, index)=> item.fileName===fileName)[0]
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

	const Content = ()=>{
		return(
			<Markdown>
				{blog}
			</Markdown>
	
		);
	}

	return (
		<BlogWrapper
			title={projectItem.title}
			writerDetails={
				<WriterDetails
					time={projectItem.time}
					date={projectItem.date}
					categories={projectItem.categories}
					tags={projectItem.tags}
				/>
			}
			content={
				<Content/>
			}
		/>
	)
}

export default ProjectPage
