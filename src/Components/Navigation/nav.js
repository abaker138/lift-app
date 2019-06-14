 import React from 'react';
import './nav.css';

const Nav = () => {
	return (<div className=''>

				<nav>
					
					<h2 className='logo'>The Lift</h2>

					<ul className='nav-list'>
						<li>History</li>
						<li>Track</li>
						<li>Unknown</li>
					</ul>

					<h3 className='sign-out'> Sign Out </h3>
					
				</nav>
			</div> )
};


export default Nav;