import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);

	function decrease() {
		count.value--;
	}

	function increase() {
		count.value++;
	}

	return { count, decrease, increase };
});
