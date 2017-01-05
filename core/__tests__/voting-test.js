const Main = require('../main.js'),
    setEntries = Main.setEntries,
    nextAction = Main.nextAction,
    vote = Main.vote,
    immutable = require('immutable'),
    list = immutable.List,
    map = immutable.Map;

describe('application logic', () => {

    describe('setEntries', () => {

        it('добавляет записи к состоянию', () => {
            const state = map(),
                entries = list.of('Trainspotting', '28 Days Later'),
                nextState = setEntries(state, entries);

            expect(nextState).toEqual(map({
                entries: list.of('Trainspotting', '28 Days Later')
            }));
        });

        it('преобразует в immutable', () => {
            const state = map(),
                entries = ['Trainspotting', '28 Days Later'],
                nextState = setEntries(state, entries);

            expect(nextState).toEqual(map({
                entries: list.of('Trainspotting', '28 Days Later')
            }));
        });

    });

    describe('nextAction', () => {

        it('берёт для голосования следующие две записи', () => {
            const state = map({
                    entries: list.of(
                        'Trainspotting',
                        '28 Days Later',
                        'Sunshine'
                    )
                }),
                nextState = nextAction(state);

            expect(nextState.toObject()).toEqual({
                vote: map({
                    pair: list.of('Trainspotting', '28 Days Later')
                }),
                entries: list.of('Sunshine')
            });
        });

        it('помещает победителя текущего голосования в конец списка записей', () => {
            const state = map({
                    vote: map({
                        pair: list.of('Trainspotting', '28 Days Later'),
                        tally: map({
                            Trainspotting: 4,
                            '28 Days Later': 2
                        })
                    }),
                    entries: list.of('Sunshine', 'Millions', '127 Hours')
                }),
                nextState = nextAction(state);

            expect(nextState).toEqual(map({
                vote: map({
                    pair: list.of('Sunshine', 'Millions')
                }),
                entries: list.of('127 Hours', 'Trainspotting')
            }));
        });

        it('в случае ничьей помещает обе записи в конец списка', () => {
            const state = map({
                    vote: map({
                        pair: list.of('Trainspotting', '28 Days Later'),
                        tally: map({
                            Trainspotting: 3,
                            '28 Days Later': 3
                        })
                    }),
                    entries: list.of('Sunshine', 'Millions', '127 Hours')
                }),
                nextState = nextAction(state);

            expect(nextState).toEqual(map({
                vote: map({
                    pair: list.of('Sunshine', 'Millions')
                }),
                entries: list.of('127 Hours', 'Trainspotting', '28 Days Later')
            }));
        });

        it('когда остаётся лишь одна запись, помечает её как победителя', () => {
            const state = map({
                    vote: map({
                        pair: list.of('Trainspotting', '28 Days Later'),
                        tally: map({
                            Trainspotting: 4,
                            '28 Days Later': 2
                        })
                    }),
                    entries: list()
                }),
                nextState = nextAction(state);

            expect(nextState).toEqual(map({
                winner: 'Trainspotting'
            }));
        });

    });

    describe('vote', () => {

        it('создаёт результат голосования для выбранной записи', () => {
            const state = map({
                    pair: list.of('Trainspotting', '28 Days Later')
                }),
                nextState = vote(state, 'Trainspotting');

            expect(nextState).toEqual(map({
                pair: list.of('Trainspotting', '28 Days Later'),
                tally: map({
                    Trainspotting: 1
                })
            }));
        });

        it('добавляет в уже имеющийся результат для выбранной записи', () => {
            const state = map({
                    pair: list.of('Trainspotting', '28 Days Later'),
                    tally: map({
                        Trainspotting: 3,
                        '28 Days Later': 2
                    })
                }),
                nextState = vote(state, 'Trainspotting');

            expect(nextState).toEqual(map({
                pair: list.of('Trainspotting', '28 Days Later'),
                tally: map({
                    Trainspotting: 4,
                    '28 Days Later': 2
                })
            }));
        });
    });

});
