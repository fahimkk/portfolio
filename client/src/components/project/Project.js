import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Project extends Component {
	render() {
		return (
			<Link to={`/project/${this.props.to}`}>
			<div className={`bg-slate-300 rounded-xl shadow-lg  transition duration-500 
					${this.props.type==='inline'?"flex 2xl:mx-64 mx-16 my-5"
					:"md:w-80 m-5 pb-5 hover:scale-105"
					}
				`}
			>
				<img 
					src={require('../../assets/images/projects/'+this.props.imageName)}
					alt=""
					className={`${this.props.type==='inline'? "w-2/5 rounded-l-xl"
						: "w-full h-44 rounded-t-xl"}`
					}
				/>
				<div
					className={`${this.props.type==='inline' ? "my-16 mx-12"
						:"mt-4 mx-4"}`
					}
				>
					<h1
						className={`font-mono font-bold  
							${this.props.type==='inline' ? "text-2xl mb-3"
							:"text-xl text-center mb-2"}
						`}
					>
						{this.props.title}
					</h1>
					<p className={`${this.props.type==='inline' ? "":"text-sm"}`}>
						{this.props.description}
					</p>
				</div>
			</div>
			</Link>
		)
	}
}

export default Project


/* 
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Project extends Component {
	render() {
		return (
			<Link to={`/project/${this.props.to}`}>
			<div className="mx-64 w-80 lg:w-auto lg:flex bg-slate-200 rounded-xl my-5">
				<img 
					src={require('../../assets/images/projects/'+this.props.imageName)}
					alt=""
					className="lg:w-2/5 lg:rounded-l-xl rounded-t-xl h-44 lg:h-auto"
				/>
				<div className="lg:py-16 py-5  lg:px-12 px-4">
					<h1 className="lg:text-2xl text-xl text-center font-mono font-bold mb-3">
						{this.props.title}
					</h1>
					<p className='lg:text-base text-sm'>
						{this.props.description}
					</p>
				</div>
			</div>
			</Link>
		)
	}
}

export default Project
 */