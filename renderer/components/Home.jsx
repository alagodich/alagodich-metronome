import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="ui basic segment">
                <div className="ui text container">
                    <h1 className="ui inverted header">{'Home'}</h1>
                    <div className="ui vertical text menu">
                        <Link to="/counter" className="item">{'Counter'}</Link>
                        <Link to="/metronome" className="item">{'Metronome'}</Link>
                        <Link to="/voting" className="item">{'Voting'}</Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
