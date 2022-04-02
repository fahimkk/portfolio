import React, { PureComponent } from 'react'
import { MenuItems } from './MenuItems';
import ToggleThemeButton from './ToggleThemeButton';
import  * as FaIcons from 'react-icons/fa';

class Navbar extends PureComponent {
	render(){
		return(
			<nav
				role="navigation"
				className="fixed z-10 w-full flex justify-center items-center h-14 text-black shadow-sm font-mono bg-white dark:bg-[#1A1D24] transition duration-500 " 
			>
				<div
					onClick={this.props.toggleMenuButton}
					className="px-4 cursor-pointer md:hidden fixed left-5"
				>
					{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  						<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg> */}
					{this.props.isMenuOpen ?
						<div className="bg-slate-300 p-1.5 -m-1 rounded-full">
							<FaIcons.FaTimes className="h-5 w-5 fill-slate-800"/>
						</div>
					:
						<FaIcons.FaBars className=" h-5 w-6 dark:fill-white"/>
					}
				</div>
				<div className="md:block hidden text-sm">
					<MenuItems/>	
				</div>
				<ToggleThemeButton/>
			</nav>
		);
	}
}

export default Navbar;