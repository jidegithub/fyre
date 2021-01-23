import React from 'react'

export default function ActionButton() {
  return (
    <section className="py-8 flex justify-end">
      <div className="group inline-block relative">
        <button className="primary-color-bg text-white qs-medium py-2 px-4 rounded inline-flex items-center">
          <span className="mr-20 font-bold">Actions</span>
          <svg className="fill-current h-4 w-4 option-blue rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul className="absolute w-full bg-white shadow-lg option-position hidden text-grey text-sm pt-1 group-hover:block">
          <li className="">
            <a
              className="rounded-t hover:bg-blue-100 py-4 pl-6 pr-8 text-xs block whitespace-no-wrap"
              href="/"
              >Contact customer</a
            >
            <hr/>
          </li>
          <li className="">
            <a
              className="hover:bg-blue-100 py-4 pl-6 pr-8 text-xs block whitespace-no-wrap"
              href="/"
              >Generate invoice</a
            >
            <hr/>
          </li>
          <li className="">
            <a
              className="rounded-b hover:bg-blue-100 py-4 pl-6 pr-8 text-xs block whitespace-no-wrap"
              href="/"
              >Reject request</a
            >
          </li>
          <div className="absolute tooltip-position w-3 h-3 -mt-2 transform rotate-45 bg-white"></div>
        </ul>
      </div>
    </section>
  )
}