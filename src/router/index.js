import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/components/pages/Home';
import Circle from '@/components/pages/Circle';
import Rectangular from '@/components/pages/Rectangular';
import Column from '@/components/pages/Column';
import Misc from '@/components/pages/Misc';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/circle',
			name: 'circle',
			component: Circle
		},
		{
			path: '/rectangular',
			name: 'rectangular',
			component: Rectangular
		},
		{
			path: '/column',
			name: 'column',
			component: Column
		},
		{
			path: '/misc',
			name: 'misc',
			component: Misc
		}
	]
})
