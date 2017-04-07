<template>
    <div id="app">
        <app-top-nav></app-top-nav>
        <router-view></router-view>
        <app-footer></app-footer>
        <modal></modal>
    </div>
</template>

<script>
	import 'jquery/src/jquery'
	import "bootstrap-sass/assets/javascripts/bootstrap";

	import AppTopNav from '@/components/shared/AppTopNav.vue';
	import AppFooter from '@/components/shared/AppFooter.vue';
	import Modal from '@/components/shared/Modal.vue';

	export default {
		name: 'app',
		components: {
			AppTopNav,
			AppFooter,
			Modal
		}
	}
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
