import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Blog extends Component {
	render() {
		return (
			<Link to={`/blog/${this.props.to}`}>
			<div className="md:w-80 2xl:w-96 m-5 text-gray-600 hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-700  hover:scale-105 transition duration-500 ">
				<img 
					src={require('../../assets/images/blogs/'+this.props.imageName)}
					alt=""
					className="h-40 2xl:h-52 w-fit rounded-lg dark:rounded-lg border-4 hover:border-teal-700 shadow-md"
				/>
				<h1 className="text-2xl  mt-3 mb-2 font-bold ml-2 ">
					{this.props.title}
				</h1>
			</div>
			</Link>
		)
	}
}

export default Blog
