import React, { Component } from 'react'
import  * as FaIcons from 'react-icons/fa';

import AboutText from '../components/about/AboutText'
import ProfileImageName from '../components/about/ProfileImageName'


const SubTitle = (props) =>{
	return(
		<h2 className="text-xl text-center font-bold">
			{props.title}
		</h2>
	);
}

const ExperienceItem = (props) =>{
	return(
		<div className="flex my-3 w-1/2">
			<FaIcons.FaCheckCircle className="mr-4 h-3.5 mt-1.5 text-blue-400"/>
			<div className="">
				<h4 className="text-md font-bold">
					{props.lang}
				</h4>
			<h6 className="text-xs text-gray-400">
				{props.level}
			</h6>
			</div>
		</div>
	);
}

const Experience = (props)=>{
	return(
		<div className="dark:bg-indigo-900 bg-slate-300 px-10 py-8 my-5 rounded-xl">
		<SubTitle title={props.title}/>
			<div className="mt-7 flex flex-wrap w-full">
				{props.data.map((item, index)=>(
					<ExperienceItem
						lang={item.lang}
						level={item.level}
					/>
				))}
			</div>
		</div>
	);
}

const frontEnd = [
	{lang: 'JavaScript', level:'Experienced'},
	{lang: 'HTML', level:'Experienced'},
	{lang: 'React', level:'Experienced'},
	{lang: 'React-Native', level:'Experienced'},
	{lang: 'Redux', level:'Experienced'},
	{lang: 'CSS', level:'Intermediate'},
	{lang: 'Bootstrap', level:'Intermediate'},
	{lang: 'Tailwind', level:'Intermediate'},
]

const backEnd = [
	{lang: 'Python', level:'Experienced'},
	{lang: 'FastApi', level:'Experienced'},
	{lang: 'PostgreSQL', level:'Experienced'},
	{lang: 'Redis', level:'Experienced'},
	{lang: 'Sqlalchemy', level:'Experienced'},
	{lang: 'Docker', level:'Intermediate'},
	{lang: 'Node js', level:'Intermediate'},
	{lang: 'MongoDB', level:'Basic'},
]
class AboutPage extends Component {

	Title = (props)=>{
		return(
			<h1 className="text-3xl font-bold">
				{props.title}
			</h1>
		);
	}

	render() {
		return (
			<div className="pb-20 dark:text-slate-300">
				<div className="py-14">
					<ProfileImageName/>
					<div className="mt-14 mb-14">
						<this.Title title="About"/>
						<AboutText showFullDescription={true} />
					</div>
					<this.Title title="Technologies"/>		
					<p className="mt-3">
						I've worked with a range of technologies in the web and mobile app development world. From Back-end to Desing
					</p>
					<div className="mt-7 mb-14 md:flex gap-20">
						<Experience
							title="Frontend Development"
							data={frontEnd}
						/>
						<Experience
							title="Backend Development"
							data={backEnd}
						/>
					</div>
					<this.Title title="Contact me"/>		
					<p className="mt-5">
						fahimasharafkk@gmail.com
					</p>
				</div>
			</div>
		)
	}
}

export default AboutPage
