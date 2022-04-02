import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-elastic-carousel';

import Project from '../project/Project'
import { projectsList } from '../project/projectsData'
import SectionTitle from '../SectionTitle'

class Projects extends PureComponent {
	render() {
		console.log("===> projects sesction: ", this.props.windowWidth)
		return (
			<div className="py-10 flex flex-col items-center">
				<SectionTitle title="PROJECTS" className="mb-10 italic"/>
					<Carousel
						showArrows={this.props.windowWidth==="sm"?false:true}
					>
					{projectsList.map((item, index)=>(
						<Project
							key={index}
							to={item.fileName}
							imageName={item.imageName}
							title={item.title}
							description={item.description}
							type={['2xl', 'xl'].includes(this.props.windowWidth) ? "inline":"block"}

						/>
					))}
					</Carousel>
			</div>
		)
	}
}

const mapStateToProps = ({windowWidth}) =>{
	return {windowWidth}
}

export default connect(mapStateToProps)(Projects);

