import React from 'react';

const Set =({ setNumber, reps, weight}) => {
	return (
		<div className='set'>
			<h5> {setNumber} </h5>
			<h5> {reps} </h5>
			<h5> { weight } </h5>
		</div>
		)
}

export default Set;