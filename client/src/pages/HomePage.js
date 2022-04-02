import React, { PureComponent } from 'react';
import About from '../components/home/About';
import RecentBlogs from '../components/home/RecentBlogs';
import Contact from '../components/home/Contact';
import Projects from '../components/home/Projects';

class HomePage extends PureComponent {
	render() {
		return (
			<div className="">
				<About/>
				<Projects/>
				<RecentBlogs/>
				<Contact/>
			</div>
		)
	}
}

export default HomePage;

