module.exports = {
	purge: {
		mode: 'all',
		content: ['./src/**/*.html', './src/**/*.svelte'],
		options: {
			whitelistPatterns: [/svelte-/],
		},
	},
	theme: {
		extend: {
			inset: {
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
			},
		},
	},
	variants: {},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
