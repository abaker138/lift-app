import React from 'react';
import './ExerciseInput.css';

const exerciseInput = () => {
	return (
	<div>
		
		<form>

			<div className='exInput'>
				<h4> Exercise </h4>
				<input type='text' name='name' />
			</div>

			<div className='repsInput'>
				<h4> Reps </h4>
				<input type='number' name='reps' />
			</div>

			<div className='weightInput'>
				<h4> Weight </h4>
				<input type='number' name='weight' />
			</div>

		</form>

	</div>
		)
}

export default exerciseInput;