import React, { Component } from 'react'
import ContactForm from '../contact/ContactForm'
import SectionTitle from '../SectionTitle'
import SocialIcons from '../SocialIcons'

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	
	render() {
		return (
			<div className="py-16 flex flex-col items-center mx-5">
				<SectionTitle title="CONTACT" className="mb-16 italic"/>	
				<div className="bg-gradient-to-r from-slate-400 to-slate-500 dark:from-gray-700 dark:to-gray-500 p-5 md:p-10 grid lg:grid-cols-2 2xl:p-24 grid-cols-1 md:gap-20 gap-10 rounded-lg w-full">
					<div className="block lg:mr-36 text-white md:mt-16 mt-7 ">
						<h1 className="md:text-5xl text-3xl font-mono mb-2">
							Get In Touch
						</h1>
						<SocialIcons/>
					</div>
					<ContactForm/>
				</div>
			</div>
		)
	}
}

export default Contact
