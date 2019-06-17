import React, { Component } from 'react';
import './track.css';
import ExerciseInput from '../ExerciseInput/ExerciseInput.js';


class Track extends Component {
	constructor() {
    super();
    this.state = {
    	exercises: 0
      }
  	}


	render() {
		return (
		<div>
			<h2 className='title'> Track your Exercises Below! </h2>
			<div className='trackBody'>

				<div className='leftSide'>
					<p>This is the left side!</p>
					<ExerciseInput />
					

				</div>
				<div className='rightSide'>
					<p>This is the right side!</p>

				</div>

			</div>

		</div>
		);
	}





}


export default Track;