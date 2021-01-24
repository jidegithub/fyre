import React from 'react';
import PageTitle from '../PageTitle';
import RequestCard from './RequestCard';


export default function REQUESTINFO() {
	return (
		<section>
			<div className="max-w-6xl mx-auto p-4 md:p-4">
				<PageTitle title={"Request Information"}/>
				<RequestCard/>
			</div>
		</section>
	)
}
