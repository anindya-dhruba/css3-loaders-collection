<!--1-->
<template>
    <loader-thumbnail :html="html" :css="css">
        <div class="loader-box">
            <div class="loader-container">
                <div class="rect"></div>
            </div>
        </div>
    </loader-thumbnail>
</template>

<script>
	import LoaderThumbnail from "../shared/LoaderThumbnail.vue";

	export default {
        name: 'rectangular-two-sided-rotation',
		components: {
        	LoaderThumbnail
        },
		data() {
			return {
				html: `<div class="loader-box">
    <div class="loader-container">
        <div class="rect"></div>
    </div>
</div>`,
				css: `.loader-box {
    position: relative;
    height: 300px;
    background-color: #2c3e50;
}

.loader-container {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -30px;
    transform-origin: 50% 50%;
    perspective: 220px;
}

.rect {
    width: 60px;
    height: 60px;
    background: #fff;
    animation: rect-animation-1 1.3s ease-out infinite;
}

@keyframes rect-animation-1 {
    0% {
        transform: rotateX(180deg) rotateY(180deg);
    }
    50% {
        transform: rotateX(180deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(0deg) rotateY(0deg);
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
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -30px;
        transform-origin: 50% 50%;
        perspective: 220px;
    }

    .rect {
        width: 60px;
        height: 60px;
        background: #fff;
        animation: rect-animation-1 1.3s ease-out infinite;
    }

    @keyframes rect-animation-1 {
        0% {
            transform: rotateX(180deg) rotateY(180deg);
        }
        50% {
            transform: rotateX(180deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(0deg) rotateY(0deg);
        }
    }
</style>
