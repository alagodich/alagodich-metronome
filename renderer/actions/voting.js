export const VOTE = 'VOTE';
export const NEXT = 'NEXT';
export const SET_ENTRIES = 'SET_ENTRIES';

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
