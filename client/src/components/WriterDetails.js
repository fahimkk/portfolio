import React from 'react'
import ProfileImageName from './about/ProfileImageName'
import SocialIcons from './SocialIcons'

function WriterDetails(props) {
	return (
		<div className="flex flex-col items-center">
			<ProfileImageName small/>
			<SocialIcons
				className="text-lg text-gray-600 mt-2"
			/>
			<div className="mt-7 text-xs italic font-thin flex flex-col items-center">
				<p>
					{`${props.time ? props.time:0} min read`}
				</p>
				<p className="mt-1">
					{props.date}
				</p>
			</div>

			<div className="mt-7 text-xs font-light flex flex-col items-center">
				<p className="text-xs">
					CATEGORIES
				</p>
				<p className="mt-1">
					{props.categories ? props.categories:". . ."}
				</p>

				<p className="mt-7">
					TAGS	
				</p>
				<p className="mt-1">
					{props.tags ? props.tags:". . ."}
				</p>
			</div>


		</div>
	)
}

export default WriterDetails
