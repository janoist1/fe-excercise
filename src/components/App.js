import React, { Component } from 'react';
import { fetchServiceUpdates } from '../api';
import ServiceUpdates from './ServiceUpdates';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    return fetchServiceUpdates().then(data => {
      this.setState({ data });
    });
  }

  renderLoading() {
    return <div>Loading ...</div>;
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return this.renderLoading();
    }

    const { callingPoints } = data;

    return (
      <div className="App">
        <header className="App__header">
          <h3 className="App__from">
            {callingPoints[0].station}
          </h3>
          <h3 className="App__to">
            <span>to</span> {callingPoints.slice(-1)[0].station}
          </h3>
          <span className="App__operated-by">Operated by Thameslink</span>
        </header>
        <main>
          <ServiceUpdates>
            {callingPoints}
          </ServiceUpdates>
        </main>
        <footer>by janoist1@gmail.com</footer>
      </div>
    );
  }
}

export default App;
