const immutable = require('immutable'),
    map = immutable.Map,
    fromJS = immutable.fromJS,
    makeStore = require('../store.js');

describe('store', () => {

    it('хранилище сконфигурировано с помощью правильного преобразователя', () => {
        const store = makeStore();
        expect(store.getState()).toEqual(map());

        store.dispatch({
            type: 'SET_ENTRIES',
            entries: ['Trainspotting', '28 Days Later']
        });

        expect(store.getState()).toEqual(fromJS({
            entries: ['Trainspotting', '28 Days Later']
        }));
    });

});
