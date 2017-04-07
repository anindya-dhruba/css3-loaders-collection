<template>
    <div class="thumbnail">

        <slot></slot>

        <div class="caption">
            <view-source-button
                :html="html"
                :css="css"
            >
            </view-source-button>
        </div>
    </div>
</template>

<script>
	import ViewSourceButton from "@/components/shared/ViewSourceButton";

	export default {
		name: 'loader-thumbnail',
		components: {
			ViewSourceButton
		},
		props: [
			'html',
            'css'
        ]
	}
</script>
