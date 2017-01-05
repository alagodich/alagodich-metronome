import React, {Component} from 'react';
import MainWindow from '../components/MainWindow.jsx';

class HomePage extends Component {
    render() {
        console.log('HomePage::render()');
        return <MainWindow />;
    }
}

export default HomePage;
