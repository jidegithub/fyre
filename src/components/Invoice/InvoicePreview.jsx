import React from 'react'
import PageTitle from '../PageTitle';
import {LogoIcon} from '../../assets/svg';

export default function InvoicePreview() {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-4 md:p-4">
        <PageTitle title={"Generate invoice"}/>
        <p className="mt-6 mb-4 text-sm text-grey">PREVIEW YOUR INVOICE</p>

        <div className="max-w-xl bg-white px-6 py-4 rounded qs-medium">
          <div className="flex items-center justify-between mb-8">
            <div className="text-right">
              <LogoIcon/>
            </div>
            <div>
            <label className="block uppercase tracking-wide text-grey text-sm font-bold mb-1">INVOICE</label>
            </div>
          </div>

          <div className="flex justify-between mb-8 px-3">
            <div>
            <h3 className="uppercase tracking-wide text-grey text-sm font-bold mb-3">FROM</h3>
              <p className="font-bold">FICHAYA</p>
              <p className="py-2">finance@fichaya.com</p>
              <p>+2348177141611</p>
            </div>
            <div className="text-right">
            <h3 className="uppercase tracking-wide text-grey text-sm font-bold mb-1">STATUS</h3>
              <p className="text-red-700 font-bold text-sm">UNPAID</p>
              <h3 className="uppercase tracking-wide text-grey text-sm font-bold mt-8 mb-4">CREATED</h3>
              October 08, 2020<br />
            </div>
          </div>

          <div className="flex justify-between mb-8 px-3">
            <div>
            <h3 className="uppercase tracking-wide text-grey text-sm font-bold mb-1">BILL TO</h3>
              <p className="font-bold">Spleet Nigeria Limited</p>
              <p>info@speet.ng</p>
              <p className="py-1">51, Iwaya Road, Onike Yaba</p>
              <p>+2348177141611</p>
            </div>
            <div className="text-right">
            <h3 className="uppercase tracking-wide text-grey text-sm font-bold mb-1">DUE</h3>
              <p>October 11, 2020</p>
              <br/>
              <h3 className="uppercase tracking-wide text-grey text-sm font-bold mb-1">AMOUNT</h3>
              <p>NGN 48,375</p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-1 border-b py-2 items-start">
            <div className="flex-1 px-1">
              <p className="text-grey uppercase tracking-wide text-xs font-bold">Description</p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="text-grey uppercase tracking-wide text-xs font-bold">Qty</p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-xs font-bold text-grey">Unit Price</span>
              </p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-xs font-bold text-grey">Amount</span>
              </p>
            </div>
          </div>

          <div className="border border-t-0 border-gray-200 mb-2 px-1"></div>
            
          <div className="flex flex-wrap -mx-1 py-2 text-sm font-bold text-p">
            <div className="flex-1 px-1">
              <p className="text-gray-800">5 bedroom Duplex post-con cleaning</p>
            </div>
    
            <div className="px-1 w-32 text-right">
              <p className="text-gray-800">1</p>
            </div>
    
            <div className="px-1 w-32 text-right">
              <p className="text-gray-800">NGN 45,000</p>
            </div>
    
            <div className="px-1 w-32 text-right">
              <p className="text-gray-800">NGN 45,000</p>
            </div>
          </div>

          <div className="py-2 ml-auto mt-5 w-full flex flex-col items-end text-sm">
            <div className="flex justify-between py-4 border-t w-44 w-full">
              <div className="text-grey flex-1">SUB-TOTAL</div>
              <div className="text-right w-40">
                <div className="text-gray-800">NGN 45,000</div>
              </div>
            </div>

            <div className="flex justify-between py-4 border-t w-44 w-full">
              <div className="text-grey flex-1">VAT(7.5%)</div>
              <div className="text-right w-40">
                <div className="text-gray-800">NGN 45,000</div>
              </div>
            </div>

            <div className="flex justify-between py-4 border-t border-b w-44 w-full">
              <div className="text-grey flex-1">TOTAL</div>
              <div className="text-right w-40">
                <div className="primary-color-txt font-bold">NGN 45,000</div>
              </div>
            </div>

          </div>
        </div>
        <div className="max-w-xl mt-4 flex justify-between md:items-center qs-regular">
          <div className="w-1/2 pr-3">
            <button className=" w-full shadow primary-color-txt border border-blue-700 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="button">
                <span className="text-xs">GO BACK</span>
            </button>
          </div>
          <div className="w-1/2 pl-3">
            <button className="w-full shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              <span className="text-xs">SEND TO CUSTOMER</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
