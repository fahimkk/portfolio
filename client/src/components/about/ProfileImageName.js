import React, { PureComponent } from 'react'

class ProfileImageName extends PureComponent {
	render() {
		return (
			<div className="flex flex-col items-center">
				<img src={require("../../assets/images/fahim.jpg")}
					alt=""
					className={"rounded-full " + (this.props.small?"w-24": "w-36")}
				/>
				<h4 className={"mt-3 text-slate-700 dark:text-slate-300 " +(this.props.small?"text-md font-semibold":"text-2xl font-bold")}>
					Fahim Asharaf
				</h4>
			</div>
		)
	}
}

export default ProfileImageName;

