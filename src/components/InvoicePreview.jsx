import React from 'react'
import PageTitle from './PageTitle'

export default function InvoicePreview() {
  return (
    <section>
      <div className="max-w-6xl mx-auto p-4 md:p-4">
        <PageTitle title={"Generate invoice"}/>
        <p className="mt-6 mb-4">PREVIEW YOUR INVOICE</p>


        <div className="max-w-lg">
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

          <div class="flex flex-wrap -mx-1 border-b py-2 items-start">
            <div class="flex-1 px-1">
              <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Description</p>
            </div>
      
            <div class="px-1 w-32 text-right">
              <p class="text-gray-600 uppercase tracking-wide text-xs font-bold">Qty</p>
            </div>
      
            <div class="px-1 w-32 text-right">
              <p class="leading-none">
                <span class="block uppercase tracking-wide text-xs font-bold text-gray-600">Unit Price</span>
              </p>
            </div>
      
            <div class="px-1 w-32 text-right">
              <p class="leading-none">
                <span class="block uppercase tracking-wide text-xs font-bold text-gray-600">Amount</span>
              </p>
            </div>
          </div>

          <div className="border border-t-0 border-gray-200 mb-8 px-1"></div>


          <div class="py-2 ml-auto mt-5 w-full flex items-end">
            <div class="flex justify-between mb-3">
              <div class="text-gray-800 text-right flex-1">SUB-TOTAL</div>
              <div class="text-right w-40">
                <div class="text-gray-800 font-medium" x-html="netTotal">NGN 45, 000</div>
              </div>
            </div>
            <div class="flex justify-between mb-4">
              <div class="text-sm text-gray-600 text-right flex-1">VAT(7.5%)</div>
              <div class="text-right w-40">
                <div class="text-sm text-gray-600" x-html="totalGST">NGN 3,375</div>
              </div>
            </div>
          
            <div class="py-2 border-t border-b">
              <div class="flex justify-between">
                <div class="text-xl text-gray-600 text-right flex-1">TOTAL</div>
                <div class="text-right w-40">
                  <div class="text-xl text-gray-800 font-bold" x-html="netTotal">NGN 48, 375</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
