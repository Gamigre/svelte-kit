
//import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
/*const config = {
	kit: {
		adapter: adapter()
	}
};
export default config; */


// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter()
  }
};

