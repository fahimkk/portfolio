import React from 'react'
import SocialIcons from './SocialIcons'

function Footer() {
	return (
		<div className="flex flex-col items-center py-10 dark:bg-[#1A1D24] dark:border-t-0 border-t-2 border-gray-200">
			<SocialIcons
				className="text-3xl text-gray-800 dark:text-white mb-3"
			/>
			 <p
			 	className="text-gray-800 dark:text-white text-sm"
			 >
				 &copy; 2020 Fahim KK
			</p>
		</div>
	)
}

export default Footer
