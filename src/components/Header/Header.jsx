import React,{useState} from 'react';
import { LogoIcon, UserIcon, CaretDownIcon, NotificationIcon } from '../../assets/svg';
import styles from './profile_notif.module.css';
import './navbar.css';


export default function NavBar() {
	const [isExpanded, toggleExpansion] = useState(false);

	return (
		<header className={` w-full z-30 md:bg-whitetransition duration-300 ease-in-out`}>
      <div className="max-w-full mx-auto px-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4 p-stab">

          {/* Site branding */}
          <div className="mr-4">
            {/* Logo */}
            <a href="/" className="block" aria-label="fyre">
              <LogoIcon/>
            </a>
          </div>

          {/* Site navigation */}
          <div className={`${ isExpanded ? `block` : `hidden`} md:block links_container text-sm qs-medium`}>
            <a href="/"> DASHBOARD</a>
            <a href="/">CUSTOMERS</a>
            <a href="/">ASSOCIATES</a>
            <a id="active"href="/">REQUESTS</a>
            <a href="/">SCHEDULES</a>
            <a href="/">PAYMENTS</a>
            <a href="/">SETTINGS</a>
          </div>

          {/* profile-notification */}
          <div className={styles.action}>
            <div className={styles.actionNotify}>
              <NotificationIcon />
            </div>
            <div className={styles.actionUser}>
              <UserIcon />
              <CaretDownIcon />
            </div>
            <button className="hide flex items-center border border-blue ml-2 px-3 py-2 rounded text-blue"
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
          </div>

        </div>
      </div>
    </header>
	)
};
