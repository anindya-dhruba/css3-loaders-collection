<template>
    <footer>
        <hr>
        <div class="container">
            &copy;CSS3 Loaders Collection <span v-once>{{ currentYear }}, developed by <strong>Anindya Dhruba</strong></span>
        </div>
    </footer>
</template>

<script>
	export default {
		name: 'app-footer',
		data() {
			return {
				currentYear: (new Date).getFullYear()
			}
		},
		components: {}
	}
</script>