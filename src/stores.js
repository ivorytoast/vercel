import { writable } from 'svelte/store';

export const debug = writable('false');

export const user = writable('');
export const password = writable('');

export const symbol = writable('');