import React from 'react'
import { Link } from 'react-router-dom'

function ReadMore() {
	return (
		<Link
			to="/about"
			className="text-[#033d3f] border-2 border-teal-900 dark:text-slate-400 dark:border-slate-400 py-1 px-3 rounded-md"
		>
			Read More	
		</Link>
	)
}

export default ReadMore
