<!--3-->
<template>
    <loader-thumbnail :html="html" :css="css">
        <div class="loader-box">
            <div class="loader-container">
                <div class="rect rect-1"></div>
                <div class="rect rect-2"></div>
                <div class="rect rect-3"></div>
                <div class="rect rect-4"></div>
            </div>
        </div>
    </loader-thumbnail>
</template>

<script>
	import LoaderThumbnail from "../shared/LoaderThumbnail.vue";

	export default {
        name: 'rectangular-four-sided-rotation',
		components: {
        	LoaderThumbnail
        },
		data() {
			return {
				html: `<div class="loader-box">
    <div class="loader-container">
        <div class="rect rect-1"></div>
        <div class="rect rect-2"></div>
        <div class="rect rect-3"></div>
        <div class="rect rect-4"></div>
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
    transform: rotateZ(45deg);
}

.rect {
    float: left;
    width: 30px;
    height: 30px;
    position: relative;
}

.rect:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    transform-origin: 100% 100%;
    animation: rect-animation-3 2.4s infinite linear both;
}

.rect-2 {
    transform: rotateZ(90deg);
}

.rect-4 {
    transform: rotateZ(180deg);
}

.rect-3 {
    transform: rotateZ(270deg);
}

.rect-2:before {
    animation-delay: 0.3s;
}

.rect-4:before {
    animation-delay: 0.6s;
}

.rect-3:before {
    animation-delay: 0.9s;
}

@keyframes rect-animation-3 {
    0%, 10% {
        transform: perspective(200px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(200px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(200px) rotateY(180deg);
        opacity: 0;
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
        transform: rotateZ(45deg);
    }

    .rect {
        float: left;
        width: 30px;
        height: 30px;
        position: relative;
    }

    .rect:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        transform-origin: 100% 100%;
        animation: rect-animation-3 2.4s infinite linear both;
    }

    .rect-2 {
        transform: rotateZ(90deg);
    }

    .rect-4 {
        transform: rotateZ(180deg);
    }

    .rect-3 {
        transform: rotateZ(270deg);
    }

    .rect-2:before {
        animation-delay: 0.3s;
    }

    .rect-4:before {
        animation-delay: 0.6s;
    }

    .rect-3:before {
        animation-delay: 0.9s;
    }

    @keyframes rect-animation-3 {
        0%, 10% {
            transform: perspective(200px) rotateX(-180deg);
            opacity: 0;
        }
        25%, 75% {
            transform: perspective(200px) rotateX(0deg);
            opacity: 1;
        }
        90%, 100% {
            transform: perspective(200px) rotateY(180deg);
            opacity: 0;
        }
    }
</style>
