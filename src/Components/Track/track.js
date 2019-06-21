import React, { Component } from 'react';
import './track.css';
import ExerciseInput from '../ExerciseInput/ExerciseInput.js';
import ExerciseList from '../ExerciseList/ExerciseList.js';


class Track extends Component {
	constructor() {
    super();
    this.state = {
    	exercises:[
    		{
    			name:'Benchpress',
    			numSets: [0,0,0]
    		},
    		{
    			name:'Squat',
    			numSets: [0,0,0,0]
    		}
    		,
    		{
    			name:'Sumo Deadlift',
    			numSets: [0,0,0,0,0]
    		}
    	]

  	}
}

addSet = () => {
			// var newSet = [0]
			// this.setState({ exercises[0].numSets: exercises[0].concat(newSet)})
			// this.state.exercises[1].numSets.concat(newSet)
			console.log(this.state)
			

	};

	render() {
		return (
		<div>
			<h2 className='title'> Track your Exercises Below! </h2>
			<div className='trackBody'>

				<div className='leftSide'>
					<p>This is the left side!</p>
					{this.state.exercises.map((user, i) => {
						return ( <ExerciseInput
						key={i}
						exKey={i} 
						exercise={this.state.exercises[i]} 
						addSet={this.addSet} /> )
				})}

				</div>
				<div className='rightSide'>
					<p>This is the right side!</p>
					<ExerciseList />

				</div>

			</div>

		</div>
		);
	}





}


export default Track;