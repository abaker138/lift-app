import React from 'react';
import './nav.css';

const Nav = () => {
	return (<div className=''>

				<nav>
					
					<h2 className='logo'>The Lift</h2>

					<ul className='nav-list'>
						<li className='navItem' >History</li>
						<li className='navItem' >Track</li>
						<li className='navItem'>Growth</li>
					</ul>

					<h3 className='sign-out'> Sign Out </h3>
					
				</nav>
			</div> )
};


export default Nav;