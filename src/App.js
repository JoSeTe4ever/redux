import React, {Component} from 'react';
import './App.css';
import ProfileContainer from './components/profile-container'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProfileContainer/>
            </div>
        );
    }
}

export default App;
