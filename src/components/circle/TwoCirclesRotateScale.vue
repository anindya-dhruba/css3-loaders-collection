<!--7-->
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
		name: 'two-circles-rotate-scale'
	}
</script>

<style lang="scss" scoped>
    .loader-box {
        position: relative;
        height: 300px;
        background-color: #2c3e50;
    }

    .loader-container {
        width: 84px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -25px;
        margin-left: -45px;
        animation: circle-animation-7-1 2s ease-in-out infinite;
    }

    .circle-1, .circle-2 {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        display: inline-block;
        animation: circle-animation-7-2 2s ease-in-out infinite;
    }

    @keyframes circle-animation-7-1 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(720deg);
        }
    }

    @keyframes circle-animation-7-2 {
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(.2);
            opacity: .2;
        }
    }

</style>
