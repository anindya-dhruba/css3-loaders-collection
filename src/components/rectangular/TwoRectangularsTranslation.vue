<!--2-->
<template>
    <loader-thumbnail :html="html" :css="css">
        <div class="loader-box">
            <div class="loader-container">
                <div class="rect-1"></div>
                <div class="rect-2"></div>
            </div>
        </div>
    </loader-thumbnail>
</template>

<script>
	import LoaderThumbnail from "../shared/LoaderThumbnail.vue";

	export default {
		name: 'two-rectangulars-translation',
		components: {
			LoaderThumbnail
        },
        data() {
			return {
				html: `<div class="loader-box">
    <div class="loader-container">
        <div class="rect-1"></div>
        <div class="rect-2"></div>
    </div>
</div>`,
                css: `.loader-box {
    position: relative;
    height: 300px;
    background-color: #2c3e50;
}

.loader-container {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -35px;
    margin-left: -35px;
}

.rect-1, .rect-2 {
    width: 20px;
    height: 20px;
    background-color: #fff;
    animation: rect-animation-2 3s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
}

.rect-2 {
    animation-delay: -1.55s;
}

@keyframes rect-animation-2 {
    0% {
        transform: translate(0px, 0px) rotateZ(-90deg) scale(.5);
    }
    20% {
        transform: translate(50px, 0px) rotateZ(-180deg) scale(1);
    }
    25% {
        transform: translate(50px, 0px) rotateZ(-180deg) scale(1);
    }

    45% {
        transform: translate(50px, 50px) rotateZ(-270deg) scale(.5);
    }
    50% {
        transform: translate(50px, 50px) rotateZ(-270deg) scale(.5);
    }

    70% {
        transform: translate(0px, 50px) rotateZ(-360deg) scale(1);
    }
    75% {
        transform: translate(0px, 50px) rotateZ(-360deg) scale(1);
    }

    95% {
        transform: translate(0px, 0px) rotateZ(-450deg) scale(.5);
    }
    100% {
        transform: translate(0px, 0px) rotateZ(-450deg) scale(.5);
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
        width: 70px;
        height: 70px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -35px;
        margin-left: -35px;
    }

    .rect-1, .rect-2 {
        width: 20px;
        height: 20px;
        background-color: #fff;
        animation: rect-animation-2 3s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
    }

    .rect-2 {
        animation-delay: -1.55s;
    }

    @keyframes rect-animation-2 {
        0% {
            transform: translate(0px, 0px) rotateZ(-90deg) scale(.5);
        }
        20% {
            transform: translate(50px, 0px) rotateZ(-180deg) scale(1);
        }
        25% {
            transform: translate(50px, 0px) rotateZ(-180deg) scale(1);
        }

        45% {
            transform: translate(50px, 50px) rotateZ(-270deg) scale(.5);
        }
        50% {
            transform: translate(50px, 50px) rotateZ(-270deg) scale(.5);
        }

        70% {
            transform: translate(0px, 50px) rotateZ(-360deg) scale(1);
        }
        75% {
            transform: translate(0px, 50px) rotateZ(-360deg) scale(1);
        }

        95% {
            transform: translate(0px, 0px) rotateZ(-450deg) scale(.5);
        }
        100% {
            transform: translate(0px, 0px) rotateZ(-450deg) scale(.5);
        }
    }
</style>
