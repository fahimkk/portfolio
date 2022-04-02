import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

export default function ToggleThemeButton() {
	const [colorTheme, setTheme] = useDarkMode();
	return (
		<div 
			onClick={()=>setTheme(colorTheme)}
			className="fixed md:right-10 right-7 top-3.5 px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-400"
		>
			{colorTheme==="dark" ?
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
			</svg>
			:
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  				<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg>
			}	
		</div>
	)
}
