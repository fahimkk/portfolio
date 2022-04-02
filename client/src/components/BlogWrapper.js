import React from 'react'
import SectionTitle from './SectionTitle'

function BlogWrapper({title, writerDetails, content}) {
	return (
		<div className="pt-10 flex flex-col items-center dark:text-white dark:bg-[#252A34] transition duration-500">
			<SectionTitle title={title}/>
			<div className="grid grid-cols-5 mb-10 md:px-16 px-7 w-full ">
				<div className="md:block hidden col-span-1 mt-8">
					{writerDetails}	
				</div>
				<div className="col-span-5 md:col-span-4 md:mx-10 prose dark:prose-invert max-w-none overflow-hidden">
					{content}
				</div>
			</div>
		</div>
	)
}

export default BlogWrapper
