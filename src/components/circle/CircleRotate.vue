<!--1-->
<template>
    <div class="loader-box">
        <div class="loader-container">
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'circle-rotate'
	}
</script>

<style lang="scss" scoped>
    .loader-box {
        position: relative;
        height: 300px;
        background-color: #2c3e50;
    }

    .loader-container {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -40px;
        margin-left: -40px;
    }

    .circle {
        width: 80px;
        height: 80px;
        border: 5px solid #fff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: circle-animation-1 1.5s ease-out infinite;
    }

    @keyframes circle-animation-1 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
