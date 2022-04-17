import React from 'react'
import { Link } from 'react-router-dom'

function ReadMore() {
	return (
		<Link
			to="/about"
			className="md:text-base text-sm text-teal-900 border-2 border-teal-900 dark:text-slate-400 dark:border-slate-400 py-1 px-3 rounded-md dark:hover:text-slate-300 dark:hover:border-slate-300 hover:text-teal-700 hover:border-teal-700"
		>
			Read More	
		</Link>
	)
}

export default ReadMore
