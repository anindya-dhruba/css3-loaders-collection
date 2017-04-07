<!--1-->
<template>
    <loader-thumbnail :html="html" :css="css">
        <div class="loader-box">
            <div class="loader-container">
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
            </div>
        </div>
    </loader-thumbnail>
</template>

<script>
	import LoaderThumbnail from "../shared/LoaderThumbnail.vue";

	export default {
		name: 'column-serially-scale',
		components: {
			LoaderThumbnail
		},
		data() {
			return {
				html: `<div class="loader-box">
    <div class="loader-container">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
</div>`,
				css: `.loader-box {
    position: relative;
    height: 300px;
    background-color: #2c3e50;
}

.loader-container {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
}

.column {
    width: 7px;
    height: 25px;
    background: #fff;
    display: inline-block;
    animation: column-animation-1 1s ease-in-out infinite;
}

.column:nth-child(2) {
    animation-delay: .15s;
}

.column:nth-child(3) {
    animation-delay: .3s;
}

@keyframes column-animation-1 {
    0%, 70%, 100% {
        transform: scaleY(1);
    }
    25% {
        transform: scaleY(2.2);
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
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -15px;
        margin-left: -15px;
    }

    .column {
        width: 7px;
        height: 25px;
        background: #fff;
        display: inline-block;
        animation: column-animation-1 1s ease-in-out infinite;
    }

    .column:nth-child(2) {
        animation-delay: .15s;
    }

    .column:nth-child(3) {
        animation-delay: .3s;
    }

    @keyframes column-animation-1 {
        0%, 70%, 100% {
            transform: scaleY(1);
        }
        25% {
            transform: scaleY(2.2);
        }
    }
</style>
