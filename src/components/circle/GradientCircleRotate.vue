<!--2-->
<template>
    <div class="loader-box">
        <div class="loader-container">
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'gradient-circle-rotate'
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

    .circle, .circle:before, .circle:after {
        border-radius: 50%;
    }

    .circle {
        width: 80px;
        height: 80px;
        background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff', GradientType=0); /* IE6-9 */
        animation: circle-animation-2 1.5s linear infinite;
    }

    .circle:before {
        content: '';
        width: 68px;
        height: 68px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -34px;
        margin-left: -34px;
        background: #2c3e50;
    }

    .circle:after {
        content: '';
        width: 82px;
        height: 82px;
        position: absolute;
        top: 0;
        left: 5px;
        border-right: 45px solid #2c3e50;
    }

    @keyframes circle-animation-2 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
