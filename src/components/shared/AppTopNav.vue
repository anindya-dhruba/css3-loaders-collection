<template>
    <nav class="navbar navbar-custom navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link :to="{name: 'home'}" class="navbar-brand" exact>
                    CSS3 Loaders Collection
                </router-link>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <router-link :to="{name: 'home'}" tag="li" activeClass="active" exact>
                        <a>Home</a>
                    </router-link>
                    <router-link :to="{name: 'circle'}" tag="li" activeClass="active" exact>
                        <a>Circle</a>
                    </router-link>
                    <router-link :to="{name: 'rectangular'}" tag="li" activeClass="active" exact>
                        <a>Rectangular</a>
                    </router-link>
                    <router-link :to="{name: 'column'}" tag="li" activeClass="active" exact>
                        <a>Column</a>
                    </router-link>
                    <!--<router-link :to="{name: 'misc'}" tag="li" activeClass="active" exact>-->
                        <!--<a>Misc</a>-->
                    <!--</router-link>-->
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>

<script>
	export default {
		name: 'app-top-nav'
    }
</script>

<style lang="scss" scoped>

</style>
