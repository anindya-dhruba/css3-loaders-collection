<!--3-->
<template>
    <div class="loader-box">
        <div class="loader-container">
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'circle-lazy-rotate'
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
        background-color: #2c3e50;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 6px #fff;
        transform: rotateZ(180deg);
    }

    .circle:before {
        content: '';
        width: 46px;
        height: 92px;
        background: #2c3e50;
        display: inline-block;
        border-top-left-radius: 10em;
        border-bottom-left-radius: 10em;
        transform-origin: right;
        position: absolute;
        top: -2px;
        left: -6px;
        animation: circle-animation-3 1.5s infinite ease;
    }

    .circle:after {
        content: '';
        width: 46px;
        height: 92px;
        background: #2c3e50;
        display: inline-block;
        transform-origin: left;
        position: absolute;
        top: -2px;
        left: 38px;
        border-top-right-radius: 10em;
        border-bottom-right-radius: 10em;
        animation: circle-animation-3 1.5s infinite ease 1.2s;
    }

    @keyframes circle-animation-3 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
