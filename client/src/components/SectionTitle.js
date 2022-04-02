import React from 'react'

function SectionTitle(props) {
	return (
		<h1 className={"text-5xl text-center font-normal dark:text-white " + (props.className?props.className:"")}>
			{props.title}
		</h1>
	)
}

export default SectionTitle
