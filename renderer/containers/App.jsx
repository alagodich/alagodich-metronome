import React, {Component, PropTypes} from 'react';

const propTypes = {
    children: PropTypes.object
};

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.props = {
    children: HTMLElement
};
App.propTypes = propTypes;

export default App;
