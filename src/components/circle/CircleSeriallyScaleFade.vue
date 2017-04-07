<!--6-->
<template>
    <loader-thumbnail :html="html" :css="css">
        <div class="loader-box">
            <div class="loader-container">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
    </loader-thumbnail>
</template>

<script>
	import LoaderThumbnail from "../shared/LoaderThumbnail.vue";

	export default {
		name: 'circle-serially-scale-fade',
		components: {
			LoaderThumbnail
		},
		data() {
			return {
				html: `<div class="loader-box">
    <div class="loader-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</div>`,
				css: `.loader-box {
    position: relative;
    height: 300px;
    background-color: #2c3e50;
}

.loader-container {
    width: 88px;
    height: 26px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -13px;
    margin-left: -44px;
}

.circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    animation: circle-animation-6 1.5s ease-in-out infinite;
}

.circle:nth-child(2) {
    animation-delay: -1.3s;
}

.circle:nth-child(3) {
    animation-delay: -1.1s;
}

@keyframes circle-animation-6 {
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}`
			}
		}
	}
</script>

<style lang="scss" scoped>
    .loader-box {
        position: relative;
        height: 300px;
        background-color: #2c3e50;
    }

    .loader-container {
        width: 88px;
        height: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -13px;
        margin-left: -44px;
    }

    .circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        display: inline-block;
        animation: circle-animation-6 1.5s ease-in-out infinite;
    }

    .circle:nth-child(2) {
        animation-delay: -1.3s;
    }

    .circle:nth-child(3) {
        animation-delay: -1.1s;
    }

    @keyframes circle-animation-6 {
        0%, 80%, 100% {
            transform: scale(0);
            opacity: 0;
        }
        40% {
            transform: scale(1);
            opacity: 1;
        }
    }
</style>
