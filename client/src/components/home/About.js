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
					<div className="border-2 py-1 px-3 rounded-md flex items-center dark:text-slate-300">
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
