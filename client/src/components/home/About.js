import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import  * as FaIcons from 'react-icons/fa';

import AboutText from '../about/AboutText'
import AboutWrapper from '../about/AboutWrapper'
import ProfileImageName from '../about/ProfileImageName'
import ReadMore from './ReadMore'

class About extends PureComponent {
	render() {
		return (
			<AboutWrapper>
				<ProfileImageName/>	
				<AboutText/>	
				<div className="flex items-center mt-4 gap-3">
					<ReadMore/>
					<div className="flex md:text-base text-sm items-center text-teal-900 border-2 border-teal-900 dark:text-slate-400 dark:border-slate-400 py-1 px-3 rounded-md dark:hover:text-slate-300 dark:hover:border-slate-300 hover:text-teal-700 hover:border-teal-700">
					<Link 
						to="/files/fahim_resume.pdf"
						download
						target="_blank"
					>
						Resume
					</Link>
					<FaIcons.FaArrowCircleDown className="ml-2 h-3.5"/>
					</div>
				</div>
			</AboutWrapper>
		)
	}
}

export default About;
