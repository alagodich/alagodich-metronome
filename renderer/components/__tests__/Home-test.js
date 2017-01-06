import React from 'react';
import Home from '../Home.jsx';
import renderer from 'react-test-renderer';

test('Home can be rendered', () => {
    const component = renderer.create(<Home />),
        tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
