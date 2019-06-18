import React from 'react';
import './ExerciseInput.css';
// import Set from '../Set/Set.js';

const exerciseInput = ({exercise}) => {
	return (
	<div>
		
		<form>

			<div className='exDiv'>
				<h4>{exercise.name}</h4>
				<div className='sets'>
					<h5>{exercise.reps}</h5>
					<h5>{exercise.weight}</h5>
				</div>
				
				{console.log(exercise)}
			</div>


		</form>

	</div>
		)
}

export default exerciseInput;