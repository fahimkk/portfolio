import {useEffect, useState} from 'react';

export default function useWindowWidth() {
	const innerWidth = window.innerWidth;
	const [windowWidth, setWidth] = useState(setWindowWidth(innerWidth));
	const setWindowWidth = (width)=>{
		switch (width){
			case width < 640:
				setWidth('sm')
			case width < 768:
				setWidth('md')
			case width < 1024:
				setWidth('lg')
			case width < 1280:
				setWidth('xl')
			case width < 1536:
				setWidth('2xl')
		}
	}
	return [windowWidth, setWindowWidth];
}

