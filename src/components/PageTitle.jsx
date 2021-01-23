import React from 'react'

export default function PageTitle({title}) {
	return (
		<button className="text-white mt-6 primary-color-bg py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
			<span className="qs-medium">
				{title} 
			</span>
		</button>
	)
}
