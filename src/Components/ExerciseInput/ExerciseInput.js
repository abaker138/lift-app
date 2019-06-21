import React from 'react';
import './ExerciseInput.css';
import Set from '../Set/Set.js';

const exerciseInput = ({exKey, exercise, addSet}) => {
	return (
	<div>
		
		<form>

			<div className='exDiv'>
				<h4>{exercise.name} {exKey+1}</h4>
				<div >
					{exercise.numSets.map((user, i) => {
						return (<Set key={i} setKey={i}/>)
					})}
					<button type='button' onClick={addSet}>Add Set</button>
				</div>
				
			</div>


		</form>

	</div>
		)
}

export default exerciseInput;