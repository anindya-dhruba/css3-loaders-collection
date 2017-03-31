<!--4-->
<template>
    <div class="loader-box">
        <div class="loader-container">
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'circle-scale-fading'
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

    .circle {
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 50%;
        animation: circle-animation-4 1s ease-in infinite;
    }

    @keyframes circle-animation-4 {
        0% {
            opacity: 1;
            transform: scale(0);
        }
        100% {
            opacity: 0;
            transform: scale(1);
        }
    }
</style>
