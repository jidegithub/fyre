import React from 'react'
import { Link } from 'react-router-dom';

export default function InvoiceForm() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="m-0 lg:mr-4">
        <form className="w-full flex-col bg-white rounded px-6 py-4 mt-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3"> 
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="client-name">
                Customer/Company name
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="client-name" type="text" placeholder="Spleet Limited"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="email">
                Email address
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Info@spleet.ng"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="phone">
                Phone number
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="08563255555"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="address">
                Home/ Building Address
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="text" placeholder="51,Iwaya Road,Onike, Iwaya"/>
            </div>
          </div>
        </form>
      </div>

      <div className=" m-0 lg:ml-4">
        <form className="w-full flex-col bg-white rounded px-6 py-4 mt-4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="issue-date">
                Issue date
              </label>
              <div className="relative">
                <select className="block appearance-none border-yellow-500 w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:bg-white focus:border-yellow-700" id="issue-date">
                  <option>08-10-2020</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="due-date">
                Due date
              </label>
              <div className="relative">
                <select className="block appearance-none border-yellow-500 w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:bg-white focus:border-yellow-700" id="due-date">
                  <option>08-10-2020</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="invoice">
                Invoice number
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="invoice" type="text" placeholder="000000001"/>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="vat">
                V.A.T %
              </label>
              <div className="relative">
                <select className="block appearance-none border-yellow-500 w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:bg-white focus:border-yellow-700" id="vat">
                  <option>7.5%</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="description">
                Service description
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="5 Bedroom Duplex post-con cleaning"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="serv-amount">
                Service amount
              </label>
              <input className="appearance-none border-yellow-500 block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="serv-amount" type="text" placeholder="NGN 45,000"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block tracking-wide text-grey text-xs mb-2" htmlFor="tot-amount">
                Total amount
              </label>
              <div className="select-none appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight">
                NGN 48,375
              </div>
              {/* <input className="disabled appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" id="tot-amount" type="text" placeholder="NGN 48,375"/> */}
            </div>
          </div>
        </form>
        <div className="mt-4 flex justify-between md:items-center qs-regular">
          <div className="w-1/2 pr-3">
            <button className=" w-full shadow primary-color-txt border border-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              <span className="text-xs">CANCEL</span>
            </button>
          </div>
          <div className="w-1/2 pl-3">
            <Link to="/invoicepreview">
              <button className="w-full shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                <span className="text-xs">CREATE INVOICE</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
