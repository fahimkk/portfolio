import React, { Component } from 'react'
import {blogsList} from '../components/blog/blogsData'
import BlogsPageWrapper from '../components/BlogsPageWrapper';


class BlogsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data:[],
		}
	}
	
	componentDidMount(){
		let data = {}
		blogsList.forEach(item => {
			if(data[item.year]){
				data[item.year].push(item)
			}else{
				data[item.year] = [item]
			}
		})
		const dataList = []
		const sortedKeys =  Object.keys(data).sort((a,b)=> b-a)
		sortedKeys.forEach(year=> {
			dataList.push({year:year, data:data[year]})
		})
		this.setState({data: dataList})
	}

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
			<BlogsPageWrapper
				data={this.state.data}
				title={"BLOG"}
				cardType="blog"
			/>
		)
	}
}

export default BlogsPage
