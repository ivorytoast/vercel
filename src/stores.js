import { writable } from 'svelte/store';

export const debug = writable('false');

export const user = writable('');
export const password = writable('');

export const symbol = writable('');

export const url = writable('http://localhost:8084/');

export const currentTab = writable('home');