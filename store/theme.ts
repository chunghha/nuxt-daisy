import { defineStore } from 'pinia';

export const THEMES = {
	DARK: 'rosepine',
	LIGHT: 'dawn'
};

export const useThemeStore = defineStore('theme', () => {
	const theme = reactive({ dark: false });

	function toggle() {
		theme.dark = theme.dark ? false : true;
	}

	return { theme, toggle };
});
