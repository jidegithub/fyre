import React from 'react'
import ActionButton from './ActionButton'

export default function RequestCard() {
	return (
		<section className="my-6">
				<div className="w-full max-w-2xl bg-white rounded px-6 py-4">
					<div className="flex flex-wrap -mx-3 mb-2 qs-medium">
						<div className="w-auto md:w-1/3 px-3 mb-6 md:mb-0 font-bold">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								request type
							</label>
							<p className="primary-color-txt">POST-CON</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								customer name
							</label>
							<p className="primary-color-txt">PETER ABU-EKPESHIE</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								cleaning date
							</label>
							<p className="primary-color-txt">09&bull;10&bull;2019</p>
						</div>
					</div>
				</div>

				<div className="w-full max-w-2xl bg-white rounded px-6 py-2">
					<div className="flex flex-wrap -mx-3 mb-2 qs-medium">
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								invoice status
							</label>
							<p className="primary-color-txt">
							<span className="inline-block bg-pink-100 text-yellow-500 text-xs px-2 py-2 rounded uppercase font-semibold tracking-wide">ungenerated</span>
							</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								request date
							</label>
							<p className="primary-color-txt">06&bull;10&bull;2016</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-1">
								request time
							</label>
							<p className="primary-color-txt">8:00 A.M</p>
						</div>
					</div>
				</div>

				<div className="w-full max-w-2xl bg-white rounded px-6 py-2">
					<div className="flex flex-wrap -mx-3 mb-2 qs-medium">
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-2">
								location
							</label>
							<p className="primary-color-txt">
								8, YOVI STREET, IWAYA ONIKE, YABA.
							</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-2">
								house type
							</label>
							<p className="primary-color-txt">5 BEDROOM DUPLEX</p>
						</div>
						<div className="w-auto md:w-1/3 px-3 mb-6 font-bold md:mb-0">
							<label className="block uppercase tracking-wide text-grey text-xs mb-2">
								others
							</label>
							<p className="primary-color-txt">09&bull;10&bull;2019</p>
						</div>
					</div>
					<hr className="mt-4"/>	
					<ActionButton/>
				</div>
		</section>
	)
}
