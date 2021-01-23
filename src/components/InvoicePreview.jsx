import React from 'react'
import PageTitle from './PageTitle'

export default function InvoicePreview() {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-4 md:p-4">
        <PageTitle title={"Generate invoice"}/>
        <p className="mt-6 mb-4">PREVIEW YOUR INVOICE</p>

        <div className="max-w-xl bg-white px-6 py-4 rounded">
          <div className="flex items-center justify-between mb-8">
            <div className="text-right">
              <img src="https://www.stenvdb.be/assets/img/email-signature.png" alt="logo"/>
            </div>
            <div>
              <span className="">INVOICE</span>
            </div>
          </div>

          <div className="flex justify-between mb-8 px-3">
            <div>
              FROM<br />
              <br />
              finance@fichaya.com<br />
              +2348177141611
            </div>
            <div className="text-right">
              STATUS<br />
              <span>UNPAID</span><br />
              <br />
              CREATED <br/>
              OCTOBER 08, 2020<br />
            </div>
          </div>

          <div className="flex justify-between mb-8 px-3">
            <div>
              BILL TO<br />
              Spleet Nigeria Limited<br />
              info@speet.ng<br />
              51, Iwaya Road, Onike Yaba<br />
              +2348177141611
            </div>
            <div className="text-right">
              DUE<br />
              OCTOBER 11, 2020<br />
              <br/>
              AMOUNT<br/>
              NGN 48, 375
            </div>
          </div>

          <div className="flex flex-wrap -mx-1 border-b py-2 items-start">
            <div className="flex-1 px-1">
              <p className="text-gray-600 uppercase tracking-wide text-xs font-bold">Description</p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="text-gray-600 uppercase tracking-wide text-xs font-bold">Qty</p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-xs font-bold text-gray-600">Unit Price</span>
              </p>
            </div>
      
            <div className="px-1 w-32 text-right">
              <p className="leading-none">
                <span className="block uppercase tracking-wide text-xs font-bold text-gray-600">Amount</span>
              </p>
            </div>
          </div>

          <div className="border border-t-0 border-gray-200 mb-2 px-1"></div>
            
          <div className="flex flex-wrap -mx-1 py-2">
            <div className="flex-1 px-1">
              <p className="text-gray-800">5 bedroom duplex post-con cleaning</p>
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

          <div className="py-2 ml-auto mt-5 w-full flex flex-col items-end">
            <div className="flex justify-between py-4 border-t w-44 w-full">
              <div className="text-sm text-gray-800 flex-1">SUB-TOTAL</div>
              <div className="text-right w-40">
                <div className="text-gray-800 font-medium">NGN 45,000</div>
              </div>
            </div>

            <div className="flex justify-between py-4 border-t w-44 w-full">
              <div className="text-sm text-gray-800 flex-1">VAT(7.5%)</div>
              <div className="text-right w-40">
                <div className="text-gray-800 font-medium">NGN 45,000</div>
              </div>
            </div>

            <div className="flex justify-between py-4 border-t border-b w-44 w-full">
              <div className="text-sm text-gray-800 flex-1">TOTAL</div>
              <div className="text-right w-40">
                <div className="text-gray-800 font-medium">NGN 45,000</div>
              </div>
            </div>

          </div>
        </div>
        <div className="max-w-xl mt-4 flex justify-between md:items-center">
          <div className="w-1/2 pr-3">
            <button className=" w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                GO BACK
            </button>
          </div>
          <div className="w-1/2 pl-3">
            <button className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              SEND TO CUSTOMER
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
