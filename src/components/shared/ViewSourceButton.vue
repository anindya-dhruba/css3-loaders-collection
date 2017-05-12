<template>
    <button type="button" class="btn btn-outline btn-block" @click="showModal">
        View Source
    </button>
</template>

<script>
	import bus from '../../bus'

	export default {
		name: 'view-source-button',
		props: [
			'html',
			'css'
		],
		methods: {
			showModal() {
				bus.$emit('showModal', {
					html: this.html,
					css: this.css
				});
			}
		}
	}
</script>
