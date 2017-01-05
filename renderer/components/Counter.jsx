import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const defaultProps = {
        increment: () => {},
        incrementIfOdd: () => {},
        incrementAsync: () => {},
        decrement: () => {},
        counter: 0
    },
    propTypes = {
        increment: PropTypes.func,
        incrementIfOdd: PropTypes.func,
        incrementAsync: PropTypes.func,
        decrement: PropTypes.func,
        counter: PropTypes.number
    };

class Counter extends Component {

    render() {
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
        return (
            <div>
                <div>
                    <Link to="/">{'back'}</Link>
                </div>
                <div className={`counter ${''}`}>
                    {counter}
                </div>
                <div>
                    <button className="ui icon button" onClick={increment}>
                        <i className="plus icon" />
                    </button>
                    <button className="ui icon button" onClick={decrement}>
                        <i className="minus icon" />
                    </button>
                    <button className="ui icon button" onClick={incrementIfOdd}>{'odd'}</button>
                    <button className="ui icon button" onClick={() => incrementAsync()}>{'async'}</button>
                </div>
            </div>
        );
    }
}

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default Counter;
