import React from 'react'

function AboutText(props) {
	return (
		<p
			className={`mt-5 dark:text-slate-300 
				${props.showFullDescription ? ""
				:"md:mx-14 lg:mx-80 mx-5 text-center"}
			`}
		>

			{"Mechanical Engineer by profession, But highly passionate and curious about the IT industries."
			+ (props.showFullDescription ? "\n\nI worked in MEP feild for the past 3 years both in Qatar and India. During the Covid-19 lockdown I learned more about programming. Now I'm trying to switch into a software developer."
			:"")
			}
		</p>
	)
}

AboutText.defaultProps = {
	showFullDescription: false
}

export default AboutText
