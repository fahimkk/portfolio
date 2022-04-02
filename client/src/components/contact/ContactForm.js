import React, { Component } from 'react'
import axios from 'axios'

const FormWrapper = ({children})=>{
	return(
		<div className="my-2">
			{children}
		</div>
	);
}

const FormLabel = (props)=>{
	return(
		<>
		<label className="font-mono">
			{props.text}
		</label>
		<br/>
		</>
	);
}

const FormInput = (props)=>{
	return(
		<>
			<input
				type="text"
				value={props.value}
				onChange={props.onChange}
				className="border-2 border-[#BDBDBD] rounded-sm bg-[#BDBDBD] w-full mt-1"
			/>
			<br/>
		</>
	);
}

class ContactForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",	 
			email: "",
			message: "",
		}
	}
	onChangeName = (event)=>this.setState({name: event.target.value})
	onChangeEmail = (event)=>this.setState({email: event.target.value})
	onChangeMessage = (event)=>this.setState({message: event.target.value})
	
	onSubmit = async (event) =>{
		event.preventDefault();
		console.log("contact name: ", this.state.name)
		console.log("contact email: ", this.state.email)
		console.log("contact message: ", this.state.message)
		let data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message,
		}
		const res = await axios.post('http://localhost:5000/contact',data) 		
		console.log("response: ", res.data)
	}

	render() {
		return (
		<form
			onSubmit={this.onSubmit}
			className="bg-slate-50 p-5 rounded-md shadow-2xl"
		>
			<FormWrapper>
				<FormLabel text={"Name"}/>	
				<FormInput
					value={this.state.name}
					onChange={this.onChangeName}
				/>
			</FormWrapper>
			

			<FormWrapper>
				<FormLabel text={"Email"}/>	
				<FormInput
					value={this.state.email}
					onChange={this.onChangeEmail}
				/>
			</FormWrapper>

			<FormWrapper>
				<FormLabel text={"Message"}/>	
				<textarea
					type="text"
					value={this.state.message}
					onChange={this.onChangeMessage}
					className="border-2 border-[#BDBDBD] rounded-sm bg-[#BDBDBD] w-full mt-1"
				/>
			</FormWrapper>
			
			<input
				type="submit"
				value="Submit"
				className="bg-blue-500 dark:bg-black py-1 px-4 rounded-md mt-3 text-white"
			/>
		</form>		
		)
	}
}

export default ContactForm
