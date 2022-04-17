import React from 'react'
import  * as FaIcons from 'react-icons/fa';

function SocialIcons(props) {
	const iconStyle = `mx-1.5 hover:scale-125 transition duration-500 hover:text-teal-700`
	return (
		<div className={"flex "+(props.className?props.className:"")}>
			<a href="https://github.com/fahimkk" target="_blank">
				<FaIcons.FaGithubSquare className={iconStyle}/>
			</a>
			<a href="https://www.linkedin.com/in/fahim-asharaf-b10433a2/" target="_blank">
				<FaIcons.FaLinkedin className={iconStyle}/>
			</a>
			<a href="https://www.instagram.com/fahimasharaf/" target="_blank">
				<FaIcons.FaInstagramSquare className={iconStyle}/>
			</a>
		</div>
	)
}

export default SocialIcons
