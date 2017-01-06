export const VOTE = 'VOTE',
    NEXT = 'NEXT',
    SET_ENTRIES = 'SET_ENTRIES';

export function vote(entry) {
    return {
        type: VOTE,
        entry
    };
}

export function next() {
    return {
        type: NEXT
    };
}
