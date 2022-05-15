import React from 'react'

function AboutText(props) {
	return (
		<p
			className={`mt-5 dark:text-slate-300 
				${props.showFullDescription ? ""
				:"md:mx-14 lg:mx-80 mx-5 text-center"}
			`}
		>
			Hello!! I am Fahim. I have been developing mobile and web applications for over 1 year. I'm Full-Stack Developer.

			{props.showFullDescription ? 
				<p className="mt-3">
					I create responsive websites that are displayed on all devices desktop and smartphones.
					And also developed Android App and released on Google Play Store.
				</p>
			:null}
			
		</p>
	)
}

AboutText.defaultProps = {
	showFullDescription: false
}

export default AboutText
