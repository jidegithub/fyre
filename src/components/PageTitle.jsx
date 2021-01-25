import React from 'react'

export default function PageTitle({title}) {
	return (
		// <div className='request-info-title'>{title}</div>
		<button className="text-white mt-6 primary-color-bg px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
			<span className="qs-medium">
				{title} 
			</span>
		</button>
	)
}
