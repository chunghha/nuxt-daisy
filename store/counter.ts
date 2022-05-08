import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	actions: {
		decrease() {
			this.count--;
		},
		increase() {
			this.count++;
		}
	}
});
