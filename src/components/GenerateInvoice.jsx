import React from 'react';
import InvoiceForm from './InvoiceForm';
import PageTitle from './PageTitle';

export default function GenerateInvoice() {
  return (
    <section>
			<div className="max-w-6xl mx-auto p-4 md:p-4">
				<PageTitle title={"Generate invoice"}/>
				<p className="mt-6 mb-4 text-sm text-grey">Enter invoice info</p>
        <InvoiceForm/>
			</div>
		</section>
  )
}
