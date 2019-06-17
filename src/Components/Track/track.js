import React, { Component } from 'react';
import './track.css'

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
					<p>This is the left side lets hope it works</p>
					<exerciseData />

				</div>
				<div className='rightSide'>
					<p>This is the right side lets hope it works</p>

				</div>

			</div>

		</div>
		);
	}





}


export default Track;