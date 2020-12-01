import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
    // super(props);
    // THIS IS THE ONLY TIME we do direct assignment to this.state
    // this.state = { lat: null, errorMessage: '' };
  // }
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // This is a callback function
    window.navigator.geolocation.getCurrentPosition(
      // we called setState to update state (position) => with parenthesis is also okay
      position => this.setState({ lat: position.coords.latitude }),
      // NEVER DO THIS!! direct assignment!! - this.state.lat = position.coords.latitude;
      err => this.setState({ errorMessage: err.message })
    );
  }

  // helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request..." />;
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
