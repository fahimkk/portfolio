import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

export const MenuItems = (props) => {
	return (
		<>
		<Link to="/" className={`-mt-24 dark:text-white ${props.isMenuOpen?"p-6":"p-4"}`}>Home</Link>
		<Link to="/about" className={`dark:text-white ${props.isMenuOpen?"p-6":"p-4"}`}>About</Link>
		<HashLink to="/projects" className={`dark:text-white ${props.isMenuOpen?"p-6":"p-4"}`}>Projects</HashLink>
		<Link to="/blogs" className={`dark:text-white ${props.isMenuOpen?"p-6":"p-4"}`}>Blog</Link>
		</>
	)
}
