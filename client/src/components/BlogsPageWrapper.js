import React, { Component } from 'react'
import  * as FaIcons from 'react-icons/fa';
import Blog from './blog/Blog'
import Project from './project/Project';
import SectionTitle from './SectionTitle'


class BlogsPageWrapper extends Component {

	scrollToTop = ()=>{
		window.scrollTo(0,0)
	}

	BlogYear = (props)=>{
		return(
			<h1 className="dark:text-white text-3xl font-semibold ml-5">
				{props.year}
			</h1>
		);
	}

	render() {
		return (
			<div className="py-10 ">
				<SectionTitle title={this.props.title} className="mb-10"/>
					{this.props.data.map((item, index)=>(
						<>
						<this.BlogYear year={item.year}/>
						<div className="flex flex-row flex-wrap mt-1 mb-5 ">
							{item.data.map((data, data_index)=>(
								<>
								{this.props.cardType==="blog" ?
									<Blog
										key={data_index}
										to={data.fileName}
										imageName={data.imageName}
										title={data.title}
									/>
								:(this.props.cardType==="project" ?
									<Project
										key={data_index}
										to={data.fileName}
										imageName={data.imageName}
										title={data.title}
										description={data.description}
									/>
								:null)}
								</>
							))}
						</div>
						<div
							onClick={this.scrollToTop}
							className={`mx-5 dark:hover:text-teal-700 hover:text-teal-700 dark:text-white font-thin mb-10 flex pb-3 items-center justify-end ${index < this.props.data.length-1?"border-b-2":""}`}
						>
							<p className="self-end">Back To Top</p>
							<FaIcons.FaArrowUp className="ml-2 h-3"/>
						</div>
						
						</>
					))}
			</div>
		
		)
	}
}

export default BlogsPageWrapper
