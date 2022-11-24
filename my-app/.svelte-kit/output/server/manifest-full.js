export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/accent_thumb.jpg","img/blague.jpg","img/bocalwaves_thumb.jpg","img/boeuf_thumb.jpg","img/carreau_01.jpg","img/carreau_02.jpg","img/carreau_03.jpg","img/carreau_04.jpg","img/carreau_05.jpg","img/carreau_thumb.jpg","img/confinement_thumb.jpg","img/crop_decor_1.png","img/crop_decor_2.png","img/culturebox_1.jpg","img/culturebox_2.jpg","img/culturebox_3.jpg","img/culturebox_4.jpg","img/culturebox_5.jpg","img/culturebox_6.jpg","img/culturebox_8.jpg","img/culturebox_9.jpg","img/culturebox_thumb.jpg","img/dali_thumb.jpg","img/decorfini2.png","img/favicon.png","img/favicon_old2.png","img/fb.jpg","img/germaine.jpg","img/germaine_thumb.jpg","img/kezakomake_thumb.jpg","img/logogermaine.jpg","img/lomo.jpg","img/lomo_slide1.jpg","img/lomo_slide2.jpg","img/lomo_thumb.jpg","img/memoire_cover.jpg","img/memoire_random.jpg","img/memoire_random_thumb.jpg","img/memoire_sommaire.jpg","img/memoire_texte.jpg","img/nation_thumb.jpg","img/obscur.jpg","img/obscureprocess.jpg","img/obscureprocess_thumb.jpg","img/obscur_thumb.jpg","img/pif_thumb.jpg","img/pins_thumb.jpg","img/popfactory_thumb.jpg","img/rosae_slide_1.jpg","img/rosae_slide_2.jpg","img/rosae_slide_3.jpg","img/rosae_slide_4.jpg","img/rosae_thumb.jpg","img/soulshifterwalkcycle.webm","img/soulshifter_thumb.jpg","img/transe_slide1.jpg","img/transe_slide2.jpg","img/transe_slide3.jpg","img/transe_thumb.jpg","img/vw_thumb.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webm":"video/webm"},
	_: {
		entry: {"file":"_app/immutable/start-791f0ef6.js","imports":["_app/immutable/start-791f0ef6.js","_app/immutable/chunks/index-bc444fb7.js","_app/immutable/chunks/singletons-4bd033b8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projets/bocalwaves",
				pattern: /^\/projets\/bocalwaves\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projets/confinement",
				pattern: /^\/projets\/confinement\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projets/culturebox",
				pattern: /^\/projets\/culturebox\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projets/fonte_obscur",
				pattern: /^\/projets\/fonte_obscur\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projets/ia_nation",
				pattern: /^\/projets\/ia_nation\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projets/make",
				pattern: /^\/projets\/make\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/projets/memoire",
				pattern: /^\/projets\/memoire\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projets/musee_dali",
				pattern: /^\/projets\/musee_dali\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/projets/naissance_des_pieuvres",
				pattern: /^\/projets\/naissance_des_pieuvres\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/projets/obscure_process",
				pattern: /^\/projets\/obscure_process\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/projets/peer_captation",
				pattern: /^\/projets\/peer_captation\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/projets/pif_gadget",
				pattern: /^\/projets\/pif_gadget\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/projets/projet2 copy 14",
				pattern: /^\/projets\/projet2 copy 14\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/projets/projet2 copy 15",
				pattern: /^\/projets\/projet2 copy 15\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/projets/remanences",
				pattern: /^\/projets\/remanences\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/projets/rosae",
				pattern: /^\/projets\/rosae\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/projets/volkswagen",
				pattern: /^\/projets\/volkswagen\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
