import React, { Component } from 'react'
import Blog from '../blog/Blog'
import SectionTitle from '../SectionTitle'
import {blogsList} from '../blog/blogsData';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';

const list = [
	'one','two','three'
] 
class RecentBlogs extends Component {
	render() {
		console.log("window width recent blogs: ", this.props.windowWidth)
		return (
			<div className="flex flex-col items-center py-14 ">
				<SectionTitle
					title="RECENT BLOGS"
					className="md:mb-16 mb-10 italic"
				/>
					<Carousel
						itemsToShow={
							['2xl', 'xl'].includes(this.props.windowWidth) ? 3
							:(this.props.windowWidth==="lg"?2:1)
						}
						showArrows={false}
						enableAutoPlay={true}
					>
					{blogsList.map((item, index)=>(
						<Blog
							key={index}
							to={item.fileName}
							imageName={item.imageName}
							title={item.title}

						/>
					))}
					</Carousel>
			</div>
		)
	}
}

const mapStateToProps = ({windowWidth}) =>{
	return {windowWidth}
}

export default connect(mapStateToProps)(RecentBlogs);

