import React from 'react';
import SeasonsDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

export default class App extends React.Component {
    state = { latitude: null, error: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            error => this.setState({ error: error.message })
        );
    }

    renderContent() {
        if (this.state.error && !this.state.latitude) {
            return <div>Error: {this.state.error}</div>
        }
        if (!this.state.error && this.state.latitude) {
            return <SeasonsDisplay latitude={this.state.latitude} />;
        }
        return <Spinner message="Please accept location request" />;
    }


    render() {
        return <div className='border red'>{this.renderContent()}</div>
    }
}