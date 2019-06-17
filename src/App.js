import React, {Component} from 'react';
import Nav from './Components/Navigation/nav.js';
import Track from './Components/Track/track.js';

import './App.css';

class App extends Component {
	render() {
  return (
    <div>
      <Nav />
      <Track />
    </div>
  );
}
}


export default App;
