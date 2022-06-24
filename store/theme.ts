import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
	const theme = reactive({ dark: false });

	function toggle() {
		theme.dark = theme.dark ? false : true;
	}

	return { theme, toggle };
});
