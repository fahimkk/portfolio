import React, { useState, useEffect } from 'react'
import Blog from './blog/Blog';
import { blogsList } from './blog/blogsData'
import { projectsList } from './project/projectsData'

let currentIndex = 0;
const Carousel = (props) => {
	const [ data, setData ] = useState(props.fullData.slice(0,props.items))

	useEffect(() => {
		startSlider();
	}, [])

	const startSlider = () => {
		setInterval(() => {
			handleOnNextClick();	
		}, 2000);	
	}

	const handleOnNextClick = () => {
		const dataLen = props.fullData.length
		currentIndex = (currentIndex+1) % dataLen
		let lastIndex = currentIndex + props.items >=
		console.log('setting data: ', currentIndex)
		setData(props.fullData.slice(currentIndex, currentIndex+props.items))
	}

	const handleOnPrevClick = ()=> {
		const dataLen = props.data.length
		currentIndex = (currentIndex+dataLen-1)%dataLen
	}

	return (
		<div className="bg-red-300 flex flex-wrap">
			{data.map((item, index)=>(
						<Blog
							key={index}
							to={item.fileName}
							imageName={item.imageName}
							title={item.title}

						/>
			))}
		</div>
	)
}
Carousel.defaultProps = {
	fullData: [],
	items: 1,
}
export default Carousel
