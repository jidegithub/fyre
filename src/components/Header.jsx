import React,{useState} from 'react';

export default function NavBar() {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header className={` w-full z-30 md:bg-whitetransition duration-300 ease-in-out`}>
      <div className="max-w-full mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-4">

          {/* Site branding */}
          <div className="mr-4">
            {/* Logo */}
            <a href="/" className="block" aria-label="fyre">
              logo
            </a>
          </div>

          <button
            className="block md:hidden border border-blue flex items-center px-3 py-2 rounded text-blue"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* Site navigation */}
          <nav className={`${isExpanded ? `block` : `hidden`} md:block md:flex md:items-center w-full md:w-auto qs-regular`}>
            <ul className="flex flex-grow justify-end flex-wrap items-center font-bold">
              <li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>DASHBOARD</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>CUSTOMERS</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>ASSOCIATES</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm primary-color-txt text-sm ml-8">
                  <span>REQUEST</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>SCHEDULE</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>PAYMENT</span>
                </a>
              </li>
							<li>
                <a href="/" className="btn-sm text-grey text-sm ml-8">
                  <span>SETTINGS</span>
                </a>
              </li>
            </ul>
          </nav>

					<div className="px-4">
						<div className="flex items-center">
							<img className="h-8 w-8 border-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Your avatar"/>
							<span className="ml-3 font-semibold text-white">Jane Doe</span>
						</div>
					</div>

        </div>
      </div>
    </header>
	)
};
