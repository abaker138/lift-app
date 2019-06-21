import React from 'react';

const Set =({setKey}) => {
	return (
		<div className='sets'>
			<h4> {setKey+1} </h4>
			<input id='reps' type="number" defaultValue='reps' />
			<input id='weight' type="number" defaultValue='weight' />
			
		</div>
		)
}

export default Set;