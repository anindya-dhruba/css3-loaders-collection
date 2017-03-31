<!--5-->
<template>
    <div class="loader-box">
        <div class="loader-container">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'two-circles-scale'
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
    }

    .circle-1, .circle-2 {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -30px;
        margin-left: -30px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        animation: circle-animation-5 1s ease-in-out infinite;
    }

    .circle-2 {
        animation-direction: reverse;
    }

    @keyframes circle-animation-5 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
