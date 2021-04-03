import { writable } from 'svelte/store';

export const debug = writable('false');

export const user = writable('');
export const password = writable('');

export const symbol = writable('');

export const thorUrl = writable('http://localhost:8085/');
export const lokiUrl = writable('http://localhost:8084/');

export const currentTab = writable('home');