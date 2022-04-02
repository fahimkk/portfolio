import React from 'react';
import { MenuItems } from './MenuItems';

const NavDropdown = (props) => {
	return (
		<div className={props.isMenuOpen?"bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#1A1D24] dark:to-gray-500 flex flex-col h-full justify-center text-center items-center fixed w-full z-10 -mt-1 text-2xl":"hidden"}
			onClick={props.toggleMenuButton}
		>
			<MenuItems isMenuOpen={props.isMenuOpen}/>		
		</div>
	)
}

export default NavDropdown;
