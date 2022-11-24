export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [3],
	"/projets/bocalwaves": [4],
	"/projets/confinement": [5],
	"/projets/culturebox": [6],
	"/projets/fonte_obscur": [7],
	"/projets/ia_nation": [8],
	"/projets/make": [9],
	"/projets/memoire": [10],
	"/projets/musee_dali": [11],
	"/projets/naissance_des_pieuvres": [12],
	"/projets/obscure_process": [13],
	"/projets/peer_captation": [14],
	"/projets/pif_gadget": [15],
	"/projets/projet2 copy 14": [16],
	"/projets/projet2 copy 15": [17],
	"/projets/remanences": [18],
	"/projets/rosae": [19],
	"/projets/volkswagen": [20]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};