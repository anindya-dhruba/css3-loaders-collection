<template>
  <div id="app">
      <app-top-nav></app-top-nav>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
	import 'jquery/src/jquery'
	import "bootstrap-sass/assets/javascripts/bootstrap";
    import AppTopNav from '@/components/shared/AppTopNav.vue';
    import AppFooter from '@/components/shared/AppFooter.vue';

    export default {
        name: 'app',
        components: {
  	        AppTopNav,
  	        AppFooter
        }
    }
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
