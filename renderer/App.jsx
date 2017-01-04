import MainWindow from './components/MainWindow.jsx';
import React from 'react';
import ReactDom from 'react-dom';

window.onload = () => {
    const container = document.querySelector('.app');
    if (!container) {
        return;
    }
    ReactDom.render(<MainWindow />, container);
};
